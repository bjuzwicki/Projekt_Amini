from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'strona_przedszkole/index.html')


def price_list(request):
    return render(request, 'strona_przedszkole/price_list.html')


def gallery_list(request):
    return render(request, 'strona_przedszkole/gallery_list.html')


def specialization_list(request):
    return render(request, 'strona_przedszkole/specialization_list.html')


def team_list(request):
    return render(request, 'strona_przedszkole/team_member_list.html')


def contact_list(request):
    return render(request, 'strona_przedszkole/contact_list.html')