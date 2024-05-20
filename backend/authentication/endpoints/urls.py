from django.urls import path
from authentication.views.views import register_user
from authentication.views.views import login_user


urlpatterns = [
    path('api/register', view=register_user, name="register"),
    path('api/login', view=login_user, name="login"),
]