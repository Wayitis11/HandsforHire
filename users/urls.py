from django.urls import path , include
from django.urls.conf import re_path
from . import views


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)



urlpatterns = [
    
    path('register-client/',views.registerClientView.as_view(),name="clientRegister"),

    path('activate/<str:uidb64>/<str:token>', views.activate, name='activate'),
    path('email-sent/', views.email_sent, name='email_sent'),

    path('account/login/', views.LoginView.as_view(), name="accountLogin"),
    path('account/token/refresh/', TokenRefreshView.as_view(), name="tokenRefresh"),
    path('account/token/verify/', TokenVerifyView.as_view(), name="tokenVerify"),
    path('change_password/<str:username>/', views.ChangePasswordView.as_view(), name='auth_change_password'),


    path('register-professionals/',views.registerProfessionalsView.as_view(),name="plumberRegister"),
    path('list-all-professionals/', views.GetAllProfessionals.as_view(), name="getAllProfessionals"),
    path('account/<str:username>/', views.getSignalUser, name='single_user'),

    path('update-client/', views.ClientProfileUpdateView.as_view(), name='update_client'),

    path('update-professional/', views.ProfessionalProfileUpdateView.as_view(), name='update_professional'),


    path('all-reviews/', views.GetAllRatings.as_view(), name='all_rates'),
    path('review-for-professional/<str:username>/', views.ReviewForProfessional.as_view(), name='review-professional'),
    path('review/<int:pk>/update/', views.UpdateReview.as_view(), name='update-review'),
    path('reviews/<str:username>/', views.GetReviewedBySpecificProfessional.as_view(), name='reviews-by-specific-professional'),
    path('average-ratings/<str:username>/', views.AverageRatings.as_view(), name='average-ratings'),

    path('otherReviews/<str:username>/<str:client>/', views.GetReviewsOfOtherClients.as_view(), name='reviews-by-other-Clients'),
    path('myReviews/<str:username>/<str:client>/', views.GetMyReviews.as_view(), name='reviews-by-other-Clients'),
    path('allReviews/<str:username>/', views.GetallReviews.as_view(), name='all-reviews'),


    path('add-to-favorite/<str:username>/', views.AddFavoriteForProfessional.as_view(), name='favorite-professional'),
    path('delete-favoriate/<int:id>/', views.DeleteFavoriate.as_view(), name='delete-favorite'),
    path('get-one-favorite/<int:client>/<int:professional>/', views.GetFavorite.as_view(), name='get-One-Favorite'),
    path('get-all-favoriated-professionals/', views.GetAllFavoriatedProfessionals.as_view(), name='get-all-favoriated-professionals'),



    path('account-delete/<str:username>/', views.DeleteUserView.as_view(), name='delete-user'),
    path('updByName/<str:username>/', views.getSignalUser, name='searchByName'),


    path('all-repateMyProfile/<str:id>/', views.updateMyProfile, name='updateMyProfile'),
    path('searchorts/', views.GetAllReports.as_view(), name='all_reports'),
    path('my-reports/', views.GetMyReport.as_view(), name='my_report'),
    path('report-for-professional/<str:username>/', views.ReportForProfessional.as_view(), name='report'),
    path('review/<int:id>', views.GetReviewByID.as_view(), name='reviewByID'),
    path('review/<int:id>/update/', views.UpdateReview.as_view(), name='updateReview'),
    path('searchByName/<str:username>/', views.searchByName, name='searchByName')
    
   
] 


