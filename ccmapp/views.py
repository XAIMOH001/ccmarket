from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from .models import Item, Category
from .forms import ItemForm, ExtendedUserCreationForm # Use the custom form

# Use login_required only where necessary. Landing page (index) is usually public.
def index(request):
    all_categories = Category.objects.all()
    return render(request, 'index.html', {'categories': all_categories})

def register(request):
    if request.method == 'POST':
        form = ExtendedUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            # Automatic Login (The "Newbie" Flow)
            login(request, user)
            messages.success(request, f'Welcome to CampusConnect, {user.username}!')
            return redirect('items') # Take them straight to the marketplace
    else:
        form = ExtendedUserCreationForm()
    return render(request, 'register.html', {'form': form})

def items(request):
    # ... keep your existing items logic ...
    items_list = Item.objects.filter(is_sold=False) 
    all_categories = Category.objects.all()
    query = request.GET.get('query', '')
    category_id = request.GET.get('category', '')
    condition = request.GET.get('condition', '')

    if category_id:
        items_list = items_list.filter(category_id=category_id)
    if query:
        items_list = items_list.filter(Q(title__icontains=query) | Q(description__icontains=query))
    if condition:
        items_list = items_list.filter(condition=condition)

    items_list = items_list.order_by('-created_at')
    return render(request, 'items.html', {'items': items_list, 'categories': all_categories, 'query': query})

@login_required # This triggers the redirect back to login if not authenticated
def sell(request):
    if request.method == 'POST':
        form = ItemForm(request.POST, request.FILES) 
        if form.is_valid():
            item = form.save(commit=False)
            item.seller = request.user 
            item.save()
            messages.success(request, "Listing created successfully!")
            return redirect('items')
    else:
        form = ItemForm()
    return render(request, 'sell.html', {'form': form})

# Note: For Login, it's actually easier to use Django's built-in auth views 
# but if you use your own, make sure it handles the 'next' parameter.
def login_view(request):
    # If using a custom view, you'd handle authentication here.
    return render(request, 'login.html')

def item_detail(request, pk):
    item = get_object_or_404(Item, pk=pk)
    related_items = Item.objects.filter(category=item.category).exclude(pk=pk)[:4] if item.category else []
    return render(request, 'item_detail.html', {'item': item, 'related_items': related_items})