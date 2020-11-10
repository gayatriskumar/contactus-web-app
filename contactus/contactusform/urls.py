from django.urls import path
from .import views

urlpatterns = [

    path('',views.contactusform_view,name="form"),
    #path('<int:course_id>',views.detail,name="detail"),
]
