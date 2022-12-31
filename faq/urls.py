from django.urls import path
from . import views 


urlpatterns = [
    path('faqs/', views.Faqs.as_view(), name="faqs"),
    path('faq/<int:id>/', views.Faq.as_view(), name="faq"),
] 
