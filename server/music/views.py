from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from music.models import Artist, Album, Song
from music.serializers import ArtistSerializer, AlbumSerializer, SongSerializer

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        "artist": reverse("artist-list", request=request, format=format),
        "album": reverse("album-list", request=request, format=format),
        "song": reverse("song-list", request=request, format=format)
    })

class ArtistList(viewsets.ModelViewSet):
    model = Artist
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class ArtistDetail(viewsets.ModelViewSet):
    model = Artist
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    lookup_field = 'name'

class AlbumList(viewsets.ModelViewSet):
    model = Album
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class AlbumDetail(viewsets.ModelViewSet):
    model = Album
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    lookup_field = 'name'

class SongList(viewsets.ModelViewSet):
    model = Song
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class SongDetail(viewsets.ModelViewSet):
    model = Song
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    lookup_field = 'name'
