from django.contrib.auth.models import AbstractUser
from django.db import models


class Beer(models.Model):
    # django provides implict default id
    name = models.CharField(max_length=40, unique=True, blank=False, on_delete=models.CASCADE)

    class Meta:
        db_table = 'beer_list'

    def __str__(self):
        return self.name


class CustomUser(AbstractUser):
    """
    # Default provided User fields
    # Also include hidden fields.
    >>> User._meta.get_fields(include_hidden=True)
    (<ManyToOneRel: auth.user_groups>,
     <ManyToOneRel: auth.user_user_permissions>,
     <ManyToOneRel: admin.logentry>,
     <django.db.models.fields.AutoField: id>,
     <django.db.models.fields.CharField: password>,
     <django.db.models.fields.DateTimeField: last_login>,
     <django.db.models.fields.BooleanField: is_superuser>,
     <django.db.models.fields.CharField: username>,
     <django.db.models.fields.CharField: first_name>,
     <django.db.models.fields.CharField: last_name>,
     <django.db.models.fields.EmailField: email>,
     <django.db.models.fields.BooleanField: is_staff>,
     <django.db.models.fields.BooleanField: is_active>,
     <django.db.models.fields.DateTimeField: date_joined>,
     <django.db.models.fields.related.ManyToManyField: groups>,
     <django.db.models.fields.related.ManyToManyField: user_permissions>)
    """
    #  create foreign keys to the CustomUser model importing the settings
    # from django.conf import settings and referring to the
    # settings.AUTH_USER_MODEL instead of referring directly to the
    # custom User model.
    username = models.CharField(max_length=40, unique=True, blank=False, on_delete=models.CASCADE)
    avatar = models.CharField(max_length=255, blank=True, null=True, default=None)
    age = models.IntegerField(blank=True, null=True, default=None)

    def __str__(self):
        return self.username
