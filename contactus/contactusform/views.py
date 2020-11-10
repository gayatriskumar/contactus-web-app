from django.shortcuts import render
from .models import Contactusform
from django.views.generic import View
from django.http import HttpResponse
from .forms import Contactform
from django.http import JsonResponse

# Create your views here.

def contactusform_view(request):

    if request.method=="POST":
        contactusform=Contactusform()
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone_no = request.POST.get('phone_no')
        description=request.POST.get('description')

        contactusform.name =  name
        contactusform.email = email
        contactusform.phone_no = phone_no
        contactusform.description = description
        contactusform.save()

        return HttpResponse("<h1>Thanks For Contacting</h1>")

    return render(request,'contactusform/form.html')
