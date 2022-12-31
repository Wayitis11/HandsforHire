
from django.db import models
from django.contrib.auth.models import AbstractUser




'''
learn models in django: https://docs.djangoproject.com/en/3.2/topics/db/models/
'''



# our models


PROFESION_CHOICES = (
    ('Plumber', 'Plumber'),
    ('Electrician', 'Electrician')
)

'''
follow this link for learning Customization authentication in Django
https://docs.djangoproject.com/en/3.2/topics/auth/customizing/
'''
class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    username = models.TextField(max_length=255, unique=True)
    is_client = models.BooleanField(default=False)
    is_professional = models.BooleanField(default=False)
    is_accepted = models.BooleanField(default=False, help_text='is user agreed with our terms and condition?')


    






    def __str__(self):
        return self.username
        



class Skill(models.Model):
    name = models.CharField(max_length=50)


    def __str__(self):
        return self.name


'''
all types of relationships in django: https://www.webforefront.com/django/setuprelationshipsdjangomodels.html
'''

class Client(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key = True, related_name='client')
    profilePicture = models.ImageField(upload_to='client/profiles', default='default_img.png')
    phone_number = models.CharField(max_length=15)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)



    def __str__(self):
        return self.user.username

class Professionals(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key = True, related_name='professional')
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profilePicture = models.ImageField(upload_to='professional/profiles', default='default_img.png')
    profession = models.CharField(max_length=80, choices=PROFESION_CHOICES, default='Plumber', verbose_name='Your Profession')
    phone_number = models.CharField(max_length=15)
    experience = models.IntegerField(null=True)
    skill = models.ManyToManyField(Skill)
    charge_fee = models.IntegerField(default=0, help_text='per hour in RS: ')
    about_me = models.TextField()
    


    def __str__(self):
        return self.user.username




class Rating(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='rated_by')
    professional = models.ForeignKey(Professionals, on_delete=models.CASCADE, related_name='rated_for')
    stars = models.IntegerField(default=0)
    comment = models.TextField()

    def __str__(self) -> str:
        return f'{self.professional.user.username} reviewed by: {self.client.user.username}'


class Report(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='reported_by')
    professional = models.ForeignKey(Professionals, on_delete=models.CASCADE, related_name='reported_to')
    content = models.CharField(max_length=500)

    def __str__(self) -> str:
        return f'{self.professional.user.username} reported, for reason: {self.content}' 



class Favourite(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='favourite_by')
    professional = models.ForeignKey(Professionals, on_delete=models.CASCADE, related_name='favourite_to')
   
    def __str__(self) -> str:
        return f'{self.professional.user.username} favourited, by: {self.client.user.username}' 



