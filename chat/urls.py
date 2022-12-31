from django.urls import path
from .views import (
    ChatListView,
    ChatDetailView,
    ChatCreateView,
    ChatUpdateView,
    ChatDeleteView
)


urlpatterns = [
    # path('chat/', views.index, name='index'),
    # path('chat/<str:room_name>/', views.room, name='room'),
    path('', ChatListView.as_view()),
    path('create/', ChatCreateView.as_view()),
    path('<pk>', ChatDetailView.as_view()),
    path('<pk>/update/', ChatUpdateView.as_view()),
    path('<pk>/delete/', ChatDeleteView.as_view())
] 
