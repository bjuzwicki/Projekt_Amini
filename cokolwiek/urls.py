from . import views
from django.urls import path

urlpatterns = [
    path('', views.index),
    path('cennik', views.price_list),
    path('galeria',views.gallery_list),
    path('zespol', views.team),
    path('specjalizacje', views.specialization),
    path('formularz_kontaktowy', views.form_contact),
    path('terapia_reki', views.arm_therapy),
    path('terapia_nogi', views.leg_therapy),
]
