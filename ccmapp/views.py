from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def sell_item(request):
    return render(request, sell.html)
# Create your views here.
def index(request):
    return render(request, 'index.html')

def register(request):
    return render(request, 'register.html')

def items(request):
    return render(request, 'items.html')

def sell(request):
    return render(request, 'sell.html')

def user(request):
    return render(request, 'User.html')

def categories(request):
    return render(request, 'categories.html')

def contact(request):
    return render(request, 'contact us.html')

def login(request):
    return render(request, 'login.html')
