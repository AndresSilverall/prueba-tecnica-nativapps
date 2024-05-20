from rest_framework import serializers
from booking.models.models import Flight


# Serializar los datos del modelo "Flight" a un formato JSON
class ShowAllFlightsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = "__all__"