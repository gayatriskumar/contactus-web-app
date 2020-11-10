from django import forms
#from phonenumber_field.modelfields import PhoneNumberField
from .models import Contactusform


class Contactform(forms.ModelForm):

    class Meta:
        model = Contactusform
        fields = ('id','name','email','phone_no','description')
