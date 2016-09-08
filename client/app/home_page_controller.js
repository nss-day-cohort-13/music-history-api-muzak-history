angular.module("app")
    .controller("HomePageCtrl", function($http, RootFactoy) {
      const home = this;

      RootFactoy.root
        .then(data => $http.get(data.song))
        .then(songsRes => home.songs = songsRes.data)
        .then(() => home.songs.forEach(song =>
          $http.get(song.url).then(res => Object.assign(song, res.data))
          .then(s => console.log("s", s))
        ))
    })
