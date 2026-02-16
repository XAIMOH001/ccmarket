from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from .models import Item

# Your existing ItemForm
class ItemForm(forms.ModelForm):
    class Meta:
        model = Item
        fields = ['title', 'description', 'price', 'category', 'condition', 'image']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'What are you selling?'}),
            'description': forms.Textarea(attrs={'class': 'form-input', 'rows': 4}),
            'price': forms.NumberInput(attrs={'class': 'form-input'}),
            'category': forms.Select(attrs={'class': 'form-input'}),
            'condition': forms.Select(attrs={'class': 'form-input'}),
        }

# --- ADD THIS NEW CLASS BELOW ---
class ExtendedUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True, help_text="Must be a university email.")

    class Meta(UserCreationForm.Meta):
        model = User
        fields = UserCreationForm.Meta.fields + ('email',)

    def clean_email(self):
        email = self.cleaned_data.get('email')
        # Logic to enforce university email
        if not (email.endswith('.ac.ke') or email.endswith('.edu')):
            raise ValidationError("Please use a valid university email address (ending in .ac.ke or .edu).")
        
        # Check if email is already taken
        if User.objects.filter(email=email).exists():
            raise ValidationError("A user with this email already exists.")
        return email