from django.urls import path
from authentication.views.views import register_user
from authentication.views.views import login_user
from authentication.views.views import logout_user


urlpatterns = [
    path('api/user/register', view=register_user, name="register"),
    path('api/user/login', view=login_user, name="login"),
    path('api/user/logout', view=logout_user, name="logout"),
]