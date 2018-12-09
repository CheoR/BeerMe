from django.urls import path

from . import views

urlpatterns = [
    path('beers/', views.BeerListView.as_view(), name="beers-all"),
    path('beers/create/', views.BeerCreateView.as_view(), name="beer-create"),
    path('beers/<int:pk>/', views.BeerDetailView.as_view(), name="beer-single"),
    path('users/', views.CustomUserListView.as_view(), name="users-all"),
    path('users/create/', views.UserCreateView.as_view(), name="user-create"),
    path('users/<int:pk>/', views.CustomUserDetailView.as_view(), name="user-single"),
]
