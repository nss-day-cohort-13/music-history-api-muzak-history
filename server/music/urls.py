from rest_framework import routers
from django.conf.urls import url, include
from music import views

router = routers.DefaultRouter()
router.register(r'artist', views.Artist)
router.register(r'album', views.Album)
router.register(r'song', views.Song)

urlpatterns = [
    url(r'^', include(router.urls)),
]
