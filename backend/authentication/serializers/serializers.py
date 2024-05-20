from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import serializers


# Clase para pasar el modelo User a un serializador (formato JSON)
class UserRegistrationSerializer(serializers.ModelSerializer):
    """
    El modelo User permite la creacion y login de usuarios,
    Los campos que usaremos es el de username, email y  password
    para el registro de usuario.

    """
    class Meta:
        model = User
        fields = ["username", "email", "password"]


    def create(self, validate_data):
        """
        Args: validate_data: nos permite obtener los datos enviados desde
        un request y validarlos.

        Returns: Retorna la creacion de un nuevo usuario.

        """
        user = User.objects.create(
            username=validate_data["username"],
            email=validate_data["email"],
            password= make_password(validate_data["password"])
        )

        return user