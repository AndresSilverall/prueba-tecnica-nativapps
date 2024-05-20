from django.db import models
from django.contrib.auth.models import User


# Modelo de las aerolineas
class Aeroline(models.Model):
    name = models.CharField("Nombre", max_length=20, null=False, blank=False)


    class Meta:
        ordering = ["name"]


    def __str__(self):
        return self.name


# Vuelos disponibles
class Flight(models.Model):
    aeroline = models.ForeignKey(Aeroline, on_delete=models.CASCADE)
    origin = models.CharField("Origen", max_length=17, null=False, blank=False)
    destination = models.CharField("Destino", max_length=17, null=False, blank=False)
    description = models.TextField("Descripcion", max_length=400)


    class Meta:
        ordering = ["aeroline"]


    def __str__(self):
        return self.aeroline.name


# Modelo para la reserva de vuelos.
class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE)
    citizenship_card = models.CharField(
        "Cedula", 
        max_length=10, 
        null=False, 
        blank=False,
        default="N/A")
    nationality = models.CharField("Nacionalidad", max_length=12, null=True, blank=True)
    phone = models.CharField("Telefono", max_length=12, null=True, blank=True)
    passenger = models.IntegerField("# de pasajeros", null=False, blank=False)
    price = models.FloatField("Precio", null=False, blank=False)
    preference = models.CharField(
        "Asiento de prefrencia", 
        max_length=18, 
        blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)


    class Meta:
        ordering = ["-price"]


    def __str__(self):
        return self.user.username
    

# Modelo para los detalles de las reservas
class Detail(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE)
    status = models.CharField("Estado", max_length=10, null=False, blank=False)
    date = models.DateTimeField(auto_now_add=True)


    class Meta:
        ordering = ["date"]


    def total_price(self):
        return self.booking.passenger * self.booking.price


    def __str__(self):
        return self.status