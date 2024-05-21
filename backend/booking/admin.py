from django.contrib import admin
from booking.models.models import Aeroline, Booking, Flight


# Registrar modelos en el panel de administrador
admin.site.register(Aeroline)
admin.site.register(Booking)
admin.site.register(Flight)
