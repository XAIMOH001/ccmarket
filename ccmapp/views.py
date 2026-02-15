from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages

from django.contrib.auth.decorators import login_required

@login_required
# Create your views here.
def index(request):
    return render(request, 'index.html')

def register(request):
   def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        email = request.POST.get('email')

        # email end with your university domain?
        if not email.endswith('.ac.ke') and not email.endswith('.edu'):
            messages.error(request, "Please use a valid university email address.")
            return render(request, 'register.html', {'form': form})
        if form.is_valid():
            form.save() # Saves the user to the database
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}! You can now log in.')
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})

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
