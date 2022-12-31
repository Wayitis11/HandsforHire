from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Client, Professionals
from django.contrib.auth.models import User


@receiver(post_save, sender=User)
def create_client_profile(sender, instance, created, **Kwargs):
    if created:
        Client.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_client_profile(sender, instance, created, **Kwargs):
    instance.client.save()


@receiver(post_save, sender=User)
def create_professional_profile(sender, instance, created, **Kwargs):
    if created:
        Professionals.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_professional_profile(sender, instance, created, **Kwargs):
    instance.professional.save()


