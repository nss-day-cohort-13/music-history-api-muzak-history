from rest_framework import viewsets
from music.models import Artist, Album, Song
from music.serializers import *


class Artist(viewsets.ModelViewSet):
    model = Artist
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

    def get_serializer_class(self):
        if self.action =="list":
            return ArtistSerializer
        else:
            return ArtistDetailSerializer


class Album(viewsets.ModelViewSet):
    model = Album
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

    def get_serializer_class(self):
        if self.action =="list":
            return AlbumSerializer
        elif self.action == "create" or self.action == "update":
            return AlbumEditSerializer
        else:
            return AlbumDetailSerializer


class Song(viewsets.ModelViewSet):
    model = Song
    queryset = Song.objects.all()
    serializer_class = SongSerializer

    def get_serializer_class(self):
        if self.action == "list":
            return SongSerializer
        elif self.action == "create" or self.action == "update":
            return SongEditSerializer
        else:
            return SongDetailSerializer
