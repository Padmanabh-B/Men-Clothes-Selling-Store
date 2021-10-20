from django.db import models

from api.category.models import Category

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    price = models.CharField(max_length=50)
    stock = models.CharField(max_length=50)
    is_active = models.BooleanField(default = True, blank=True) # is there or Not
    image = models.ImageField(upload_to='images/', blank=True, null = True) #From Media 
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null = True) #looking for table name in category
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
