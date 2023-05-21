from django.contrib import admin
from .models import Category,Blog
# Register your models here.

class blogAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug':('title',)}

admin.site.register(Category)
admin.site.register(Blog,blogAdmin)