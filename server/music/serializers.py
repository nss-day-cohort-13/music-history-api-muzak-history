from rest_framework import serializers
from music.models import Artist, Album, Song

class ArtistSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Artist
        fields = ('id', 'url', 'name')

class AlbumSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'url', 'name')

class SongSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Song
        fields = ('id', 'url', 'name')


class ArtistEditSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Artist
        fields = ('id', 'url', 'name', 'song_set')

class ArtistDetailSerializer(serializers.HyperlinkedModelSerializer):
    song_set = SongSerializer(many=True)

    class Meta:
        model = Artist
        fields = ('id', 'url', 'name', 'song_set')


class SongDetailSerializer(serializers.HyperlinkedModelSerializer):
    artists = ArtistSerializer(many=True)
    album_set = AlbumSerializer(many=True)

    class Meta:
        model = Song
        fields = ('id', 'url', 'name', 'lengthSeconds', 'artists', 'album_set')

class SongEditSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Song
        fields = ('id', 'url', 'name', 'lengthSeconds', 'artists')


class AlbumDetailSerializer(serializers.HyperlinkedModelSerializer):
    songs = SongSerializer(many=True)

    class Meta:
        model = Album
        fields = ('id', 'url', 'name', 'songs')

class AlbumEditSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Album
        fields = ('id', 'url', 'name', 'songs')
