from django.shortcuts import render
from django.contrib.auth import login, logout, authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from authentication.serializers.serializers import UserRegistrationSerializer


# Vista para el registro de usuario.
@api_view(["POST"])
@permission_classes([AllowAny])
def register_user(request):
    """
    Registrar un usuario.

    Args: Username, Email and password.

    Returns: Mensaje de exito.

    """
    if request.method == "POST":
        user_serializer = UserRegistrationSerializer(data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response({
                "message": "Usuario registrado con exito!",
                "status": status.HTTP_200_OK
            })
        return Response({
            "message":user_serializer.errors,
            "status": status.HTTP_400_BAD_REQUEST 
    })


# Vista para el login de usuario.
@api_view(["POST"])
@permission_classes([AllowAny])
def login_user(request):
    """
    Funcion que permite el login de usuario basada en las credenciales
    de nombre de usuario y contraseña.

    """
    if request.method == "POST":
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user=user)
            return Response({
                "message": "User logged",
                "status": status.HTTP_200_OK
            })
        return Response({
            "message": "Usuario o contraseña incorrecta!",
            "status": status.HTTP_401_UNAUTHORIZED
        })
    

# Vista para cerrar la sesion.
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout_user(request):
    if request.method == "POST":
        logout(request)
        return Response({
        "message": "Sesion cerrrada!",
        "status": status.HTTP_200_OK
    })