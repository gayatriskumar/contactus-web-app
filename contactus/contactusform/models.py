from django.db import models
#from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class Contactusform(models.Model):
    name = models.CharField(max_length=50, blank=False, default='')
    email = models.EmailField(max_length=254)
    phone_no = models.CharField(max_length=10)
    description = models.TextField(max_length=300)

    class Meta:
        ordering = ('id',)

    def __str__(self):
        return self.name
