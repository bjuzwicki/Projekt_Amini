from . import views
from django.urls import path

urlpatterns = [
    path('', views.index),
    path('cennik', views.price_list),
    path('formularz_kontaktowy', views.form_contact),
]
