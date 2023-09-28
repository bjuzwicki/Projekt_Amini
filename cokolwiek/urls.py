from . import views
from django.urls import path

urlpatterns = [
    path('', views.index),
    path('cennik', views.price_list),
    path('galeria',views.gallery_list),
    path('zespol', views.team_list),
    path('specjalizacje', views.specialization_list),
    path('kontakt', views.contact_list),
]
