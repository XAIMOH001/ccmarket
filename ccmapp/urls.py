
from django.contrib import admin
from django.urls import path
from ccmapp import views

urlpatterns = [
    path('', views.index, name='index'),
    path('User/', views.user, name='user'),
    path('categories/', views.categories, name='categories'),
    path('items/', views.items, name='items'),
    path('sell/', views.sell, name='sell'),
    path('register/', views.register, name='register'),
    path('contact/', views.contact, name='contact'),
]
