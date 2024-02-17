from django.contrib import admin
from django.conf.urls import include
from django.urls import path
from django.contrib.sitemaps import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include('cokolwiek.urls'))
]