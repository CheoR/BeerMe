from rest_framework import serializers

from .models import Beer, CustomUser


class BeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer
        fields = ('id', 'name')


class BeerCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer
        fields = ('id', 'name',)


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'age', 'avatar')


class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'age', 'avatar')
