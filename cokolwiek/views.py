from django.shortcuts import render
from .forms import ContactForms
from django.core.mail import send_mail, BadHeaderError


# Create your views here.
def index(request):
    return render(request, 'strona_przedszkole/index.html')

def price_list(request):
    return render(request, 'strona_przedszkole/price_list.html')

def arm_therapy(request):
    return render(request, 'strona_przedszkole/arm_therapy.html')

def leg_therapy(request):
    return render(request, 'strona_przedszkole/leg_therapy.html')

def form_contact(request):
    if request.method == "POST":
        form = ContactForms(request.POST)
        if form.is_valid():
            admin_address = "mat.janczura@gmail.com"
            responder_address = "mati09091993@gmail.com"
            client_address = form.email
            message_for_admin = """
                    imie : %s;
                    nazwisko : %s;
                    email: %s;
                    kom.: %s;
                    """ % (form.name,form.secound_name,form.email,form.number)
            message_for_client = """"
                    Dzień dobry,
                        dzięki za wiadomość, została wygenerowana z automatu 
            """
            try:
                send_mail("Formularz", message_for_admin, responder_address,[admin_address])
                send_mail("Formularz",message_for_client,responder_address,[client_address])
            except BadHeaderError:
                print("nieprawidłowy nagłówek")
    else:
        form = ContactForms()
        
    return render(request, 'strona_przedszkole/form_contact.html')