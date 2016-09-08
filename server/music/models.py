from django.db import models


class Artist(models.Model):
    name = models.CharField(max_length=75)

    def __str__(self):
        return "{}: {}".format(self.id, self.name)

    def __unicode__(self):
        return "{}: {}".format(self.id, self.name)


class Song(models.Model):
    name = models.CharField(max_length=75)
    artists = models.ManyToManyField(Artist)

    def __str__(self):
        return "{}: {}".format(self.id, self.name)

    def __unicode__(self):
            return "{}: {}".format(self.id, self.name)


class Album(models.Model):
    name = models.CharField(max_length=75)
    songs = models.ManyToManyField(Song)

    def __str__(self):
        return "{}: {}".format(self.id, self.name)

    def __unicode__(self):
        return "{}: {}".format(self.id, self.name)
