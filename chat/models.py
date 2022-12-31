from django.core.checks import messages
from django.db import models
from django.contrib.auth.models import User
from django.conf import Settings, settings
from django.utils import timezone

class Contact(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="friends")
    firends = models.ManyToManyField('self', blank=True)


    def __str__(self):
        return self.user.username


class Message(models.Model):
    contact = models.ForeignKey(Contact, related_name="messages", on_delete=models.CASCADE)
    content = models.TextField() 
    createdAt = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.contact.user.username + " " + self.content 


class Chat(models.Model):
    participants = models.ManyToManyField(Contact, related_name="chats", blank=True)
    messages = models.ManyToManyField(Message, blank=True)

    def __str__(self):
        return "{}".format(self.pk)

    # def last_10_message(self):
    #     return self.messages.objects.order_by('-createdAt').all()[:10]
