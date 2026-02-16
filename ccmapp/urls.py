from django.contrib import admin
from django.urls import path
from ccmapp import views
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('', views.index, name='home'),
    path('items/', views.items, name='items'),
    path('sell/', views.sell, name='sell'),
    path('register/', views.register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name = "login.html"), name='login_view'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('item/<int:pk>/', views.item_detail, name='item_detail'),
]
