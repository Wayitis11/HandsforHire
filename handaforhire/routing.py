# from django.core.asgi import get_asgi_application

# from channels.routing import ProtocolTypeRouter,URLRouter
# from channels.auth import AuthMiddlewareStack
# import chat.routing


# application = ProtocolTypeRouter({
#     "websocket": AuthMiddlewareStack(
#         URLRouter(
#             chat.routing.websocket_urlpatterns
#         )
#     ),
# })