from django.urls import path
from . import views



urlpatterns = [
    # for hire by client
    path('hire-professional/<str:username>/', views.HireProfessionalCreateApp.as_view(), name="hire-professional"),
    path('hire-professional/<int:pk>/update/', views.UpdateHireProfessional.as_view(), name='update-hire-professional'),
    path('delete-hire-professional/<int:id>/', views.DeleteHireProfessional.as_view(), name='delete-hire-professional'),
    path('getHire/<int:id>/', views.GetHireDataByID.as_view(), name='getHireByID'),


    # for client dashboard
    path('my-hirings/', views.GetAllHires.as_view(), name="my-hirings"),
    # for professional dashboard
    path('my-clients/<str:username>/', views.GetHiredSpecificProfessional.as_view(), name="my-client"),
] 
