from django.contrib import admin

from .models import Beer, CustomUser


class BeerAdmin(admin.ModelAdmin):
    fields = ('name', )
    seearch_fields = ['name']


# optionally can use
# @admin.register(User)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'age', 'avatar']
    search_fields = ['username', 'email']


admin.site.register(Beer, BeerAdmin)
admin.site.register(CustomUser, CustomUserAdmin)
