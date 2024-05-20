from rest_framework import serializers
from booking.models.models import Flight


# Serializar los datos del modelo "Flight" a un formato JSON
class ShowAllFlightsSerializer(serializers.ModelSerializer):
    aeroline = serializers.CharField(source='aeroline.name')
    class Meta:
        model = Flight
        fields = "__all__"


class BookingFlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = None
        fields = "__all__"