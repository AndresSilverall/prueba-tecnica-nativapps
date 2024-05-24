from rest_framework import serializers
from booking.models.models import Flight, Booking, Aeroline


# Serializar los datos del modelo "Flight" a un formato JSON
class ShowAllFlightsSerializer(serializers.ModelSerializer):
    aeroline = serializers.CharField(source='aeroline.name')
    class Meta:
        model = Flight
        fields = "__all__"


# Serializador de la reserva de vuelos 
class BookingFlightSerializer(serializers.ModelSerializer):
    #flight = serializers.CharField(source='flight')
    class Meta:
        model = Booking
        fields = (
            "flight",
            "customer",
            "citizenship_card",
            "nationality",
            "phone",
            "passenger",
            "preference",
            "status"

        )


# Serializador para los vuelos disponibles
class AerolinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aeroline
        fields = ("name",)



# Serializador para las reservas realizadas
class ShowAllBookingsSerializer(serializers.ModelSerializer):
    flight = serializers.CharField()
    class Meta:
        model = Booking
        fields = "__all__"


