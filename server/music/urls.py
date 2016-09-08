from rest_framework import routers
from django.conf.urls import url, include
from music import views

router = routers.DefaultRouter()
router.register(r'artist', views.ArtistList)
router.register(r'album', views.AlbumList)
router.register(r'song', views.SongList)

urlpatterns = [
    url(r'^', include(router.urls)),
]
