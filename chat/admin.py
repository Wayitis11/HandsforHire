from django.contrib import admin
from .models import Message, Contact, Chat

# Register your models here.
admin.site.register(Contact)
admin.site.register(Message)
admin.site.register(Chat)