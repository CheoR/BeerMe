from django.test import TestCase

from .models import Beer, CustomUser


class BeerTest(TestCase):
    """Test module for Beer model """
    first_beer = "Beer1"
    second_beer = "BeerTwo"

    def setUp(self):
        Beer.objects.create(name=self.first_beer)
        Beer.objects.create(name=self.second_beer)

    def test_beer_name(self):
        beer1 = Beer.objects.get(name=self.first_beer)
        beer2 = Beer.objects.get(name=self.second_beer)

        self.assertEqual(beer1.name, self.first_beer)
        self.assertEqual(str(beer2), self.second_beer)


class UserTest(TestCase):
    """Test module for Beer model """
    first_user = "User1"
    second_user = "UserTwo"

    def setUp(self):
        CustomUser.objects.create(username=self.first_user)
        CustomUser.objects.create(username=self.second_user)

    def test_username(self):
        user1 = CustomUser.objects.get(username=self.first_user)
        user2 = CustomUser.objects.get(username=self.second_user)

        self.assertEqual(user1.username, self.first_user)
        self.assertEqual(str(user2), self.second_user)
