from django.db import models
import datetime
from accounts.models import UserAccount
# from ..accounts.models import UserAccount

class Event(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()
    joined = models.IntegerField(default=0)
    

