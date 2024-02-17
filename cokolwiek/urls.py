from . import views
from django.urls import path
from django.contrib.sitemaps.views import sitemap
from django.contrib.flatpages.sitemaps import FlatPageSitemap

sitemaps = {
    "static": FlatPageSitemap,
}

urlpatterns = [
    path('', views.index),
    path('cennik', views.price_list),
    path('galeria',views.gallery_list),
    path('zespol', views.team_list),
    path('specjalizacje', views.specialization_list),
    path('kontakt', views.contact_list),
    path(
        "sitemap.xml",
        sitemap,
        {"sitemaps": sitemaps}
    )
]
