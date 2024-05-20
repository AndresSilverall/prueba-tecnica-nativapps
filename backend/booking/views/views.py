from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from booking.models.models import Flight
from rest_framework.permissions import IsAuthenticated, AllowAny
from booking.serializers.serializers import ShowAllFlightsSerializer


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
        pass
