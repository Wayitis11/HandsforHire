from django.urls import path
from . import views 


urlpatterns = [
    path('contact/', views.Contact.as_view(), name="contact"),
] 
