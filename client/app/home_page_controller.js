angular.module("app")
    .controller("HomePageCtrl", function($http, RootFactory) {
      const home = this;
      home.songs = [];
      home.nextPageUrl = "";

      RootFactory.root
        .then(data => $http.get(data.song))
        .then(songsRes => home.songs = songsRes.data)
        .then(() => home.songs.forEach(song =>
          $http.get(song.url).then(res => Object.assign(song, res.data))
          .then(s => console.log("s", s))
        ))

        RootFactory.root
          .then(data => $http.get(data.artist))
          .then(res => home.artist = res.data)
          .then(s => console.log(s))

        RootFactory.root
          .then(data => $http.get(data.album))
          .then(res => home.album = res.data)
          .then(s => console.log(s))

    })
