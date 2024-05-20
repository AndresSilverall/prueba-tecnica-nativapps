from django.urls import path
from booking.views.views import show_all_flights


urlpatterns = [
    path('api/flights', view=show_all_flights, name="flights"),

]