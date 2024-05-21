from django.db import models


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
    price = models.FloatField("Precio del viaje")


    class Meta:
        ordering = ["aeroline"]


    def __str__(self):
        return self.aeroline.name


# Modelo para la reserva de vuelos.
class Booking(models.Model):
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE)
    citizenship_card = models.CharField(
        "Cedula", 
        max_length=10, 
        null=False, 
        blank=False,
        )
    nationality = models.CharField("Nacionalidad", max_length=12, null=True, blank=True)
    phone = models.CharField("Telefono", max_length=12, null=True, blank=True)
    passenger = models.IntegerField("# de pasajeros", null=False, blank=False)
    preference = models.CharField(
        "Asiento de prefrencia", 
        max_length=18, 
        blank=False, null=False)
    status = models.CharField("Estado", max_length=10, default="Activo")
    created_at = models.DateTimeField(auto_now_add=True)


    class Meta:
        ordering = ["flight"]


    def __str__(self):
        return self.flight.destination