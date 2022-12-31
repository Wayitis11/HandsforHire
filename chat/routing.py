# chat/routing.py
from django.urls import path, re_path

from . import consumers

websocket_urlpatterns = [
    # path('ws/chat/<str:room_name>/', consumers.ChatConsumer.as_asgi()),
    path('ws/chat/<room_name>/', consumers.ChatConsumer.as_asgi()),

]