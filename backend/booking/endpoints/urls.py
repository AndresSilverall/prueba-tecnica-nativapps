from django.urls import path
from booking.views.views import (
    show_all_flights,
    booking_flight,
    show_aerolines,
    show_bookings
    )


urlpatterns = [
    path('api/flights', view=show_all_flights, name="flights"),
    path('api/booking', view=booking_flight, name="booking_flight"),
    path('api/aerolines', view=show_aerolines, name="aerolines"),
    path('api/show_bookings', view=show_bookings, name="show_bookings"),

]