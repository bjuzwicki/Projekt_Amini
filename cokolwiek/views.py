from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'strona_przedszkole/index.html')


def price_list(request):
    return render(request, 'strona_przedszkole/price_list.html')

def form_contact(request):
    return render(request, 'strona_przedszkole/form_contact.html')