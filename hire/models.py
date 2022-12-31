from django.db import models
from django.db.models.fields import related
from users.models import User, Professionals, Client
from django.utils import timezone
# Create your models here.



class HireProfessional(models.Model):
    client = models.ForeignKey(Client, related_name='hire_by', on_delete=models.CASCADE)
    professional = models.ForeignKey(Professionals, on_delete=models.CASCADE, related_name="hire_to")
    hire_start_date_time = models.DateTimeField(default=timezone.now)
    hire_end_date_time = models.DateTimeField()


    def __str__(self):
        return f'{self.professional.user.username} hired by: {self.client.user.username}'
    


