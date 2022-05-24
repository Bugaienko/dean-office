from django.db import models


class Student(models.Model):

    image = models.FileField(upload_to='uploads/images', verbose_name='Фото', null=True, blank=True)
    name = models.CharField(max_length=100, verbose_name='Имя', null=False, blank=False)
    email = models.EmailField(verbose_name='Email', max_length=100, null=False, blank=False, unique=True)
    address = models.TextField(null=False, blank=False, verbose_name='Адрес', max_length=400)
    phone = models.CharField(max_length=25, blank=True, null=True, verbose_name='Телефон')

    def __str__(self):
        return str(self.name)






















