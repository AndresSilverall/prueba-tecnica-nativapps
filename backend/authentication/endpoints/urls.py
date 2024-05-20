from django.urls import path
from authentication.views.views import register_user


urlpatterns = [
    path('api/register', view=register_user, name="register"),
]