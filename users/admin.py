from django.contrib import admin
from .models import User, Client, Professionals, Skill, Rating, Report, Favourite

# Register your models here.

admin.site.register(User)
admin.site.register(Skill)
admin.site.register(Client)
admin.site.register(Professionals)
admin.site.register(Rating)
admin.site.register(Report)
admin.site.register(Favourite)
