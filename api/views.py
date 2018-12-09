from rest_framework import generics

from .models import Beer, CustomUser
from .serializers import BeerSerializer, BeerCreateSerializer, CustomUserSerializer, UserCreateSerializer


class BeerListView(generics.ListAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer


class BeerDetailView(generics.RetrieveAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer


class BeerCreateView(generics.CreateAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerCreateSerializer


class CustomUserListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class CustomUserDetailView(generics.RetrieveAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class UserCreateView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserCreateSerializer
