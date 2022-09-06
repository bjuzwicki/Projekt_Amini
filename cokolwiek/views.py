from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'strona_przedszkole/index.html')


def price_list(request):
    return render(request, 'strona_przedszkole/price_list.html')


def gallery_list(request):
    return render(request, 'strona_przedszkole/gallery_list.html')


def specialization(request):
    return render(request, 'strona_przedszkole/specialization_list.html')


def team(request):
    return render(request, 'strona_przedszkole/team_member_list.html')