from rest_framework import viewsets
from music.models import Artist, Album, Song
from music.serializers import ArtistSerializer, AlbumSerializer, SongSerializer


class ArtistList(viewsets.ModelViewSet):
    model = Artist
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class ArtistDetail(viewsets.ModelViewSet):
    model = Artist
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class AlbumList(viewsets.ModelViewSet):
    model = Album
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class AlbumDetail(viewsets.ModelViewSet):
    model = Album
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class SongList(viewsets.ModelViewSet):
    model = Song
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class SongDetail(viewsets.ModelViewSet):
    model = Song
    queryset = Song.objects.all()
    serializer_class = SongSerializer
