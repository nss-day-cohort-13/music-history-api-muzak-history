from rest_framework import serializers
from music.models import Artist, Album, Song

class ArtistSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Artist
        fields = ('id', 'name', 'url')

class ArtistDetailSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Artist
        fields = ('id', 'name', 'url')

# class ArtistEditSerializer(serializers.HyperlinkedModelSerializer):
#
#     class Meta:
#         model = Artist
#         fields = ('id', 'name', 'url')


class SongSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Song
        fields = ('id', 'name', 'url')

class SongDetailSerializer(serializers.HyperlinkedModelSerializer):
    artists = ArtistSerializer(many=True)
    class Meta:
        model = Song
        fields = ('id', 'name', 'lengthSeconds', 'url', 'artists')

class SongEditSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Song
        fields = ('id', 'name', 'lengthSeconds', 'url', 'artists')



class AlbumSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'url', 'name')

class AlbumDetailSerializer(serializers.HyperlinkedModelSerializer):
    songs = SongSerializer(many=True)

    class Meta:
        model = Album
        fields = ('id', 'url', 'name', 'songs')

class AlbumEditSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Album
        fields = ('id', 'url', 'name', 'songs')
