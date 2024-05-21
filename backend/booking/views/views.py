from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from booking.models.models import (
    Flight,
    Booking,
    Aeroline
    )
from rest_framework.permissions import IsAuthenticated, AllowAny
from booking.serializers.serializers import (
    ShowAllFlightsSerializer,
    BookingFlightSerializer,
    AerolinesSerializer,
    ShowAllBookingsSerializer
    )


# Mostrar todos los vuelos disonibles
@api_view(["GET"])
@permission_classes([AllowAny])
def show_all_flights(request):
    if request.method == "GET":
        flight = Flight.objects.all()
        flight_serializer = ShowAllFlightsSerializer(
            flight, 
            many=True, 
            context={"request": request})
        
        return Response(data=flight_serializer.data, status=status.HTTP_200_OK)    


# Solcitar una reserva de vuelo
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def booking_flight(request):
    if request.method == "POST":
        booking_serializer = BookingFlightSerializer(data=request.data)
        if booking_serializer.is_valid():
            booking_serializer.save()

            return Response({
                    "message": "Vuelo reservado con exito!",
                    "status": status.HTTP_201_CREATED
                })
        else:
            return Response({
                "message": booking_serializer.errors,
                "status": status.HTTP_400_BAD_REQUEST
            })
        


# Aerolineas disponibles
@api_view(["GET"])
@permission_classes([AllowAny])
def show_aerolines(request):
    if request.method == "GET":
        aeroline = Aeroline.objects.all()
        aeroline_serializer = AerolinesSerializer(
            aeroline,
            many=True,
            context={"request": request}
        )

        return Response(
            data=aeroline_serializer.data, status=status.HTTP_200_OK
        )
    

# Mostrar las reservas
@api_view(["GET"])
@permission_classes([AllowAny])
def show_bookings(request):
    if request.method == "GET":
        booking = Booking.objects.all()
        show_booking_serializer = ShowAllBookingsSerializer(
            booking,
            many=True,
            context={"request": request}
        )

        return Response(
            data=show_booking_serializer.data, status=status.HTTP_200_OK
        )