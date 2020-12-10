from django import forms

class ContactForms(forms.Form):
    name = forms.CharField(max_length = 30)
    secound_name = forms.CharField(max_length = 30)
    email = forms.EmailField(label="example@domain.com")
    number = forms.IntegerField(max_value=999999999)