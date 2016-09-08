angular.module("app")
    .controller("HomePageCtrl", function($http, $uibModal, RootFactoy) {
      const home = this;

      home.showSongInfo = song => $uibModal.open({
        templateUrl: "app/_song-modal.html",
        controller: "SongInfoModalCtrl",
        controllerAs: "songInfo",
        resolve: { song }
      })

      RootFactoy.root
        .then(data => $http.get(data.song))
        .then(songsRes => home.songs = songsRes.data)
        .then(() => home.songs.forEach(song =>
          $http.get(song.url).then(res => Object.assign(song, res.data))))
    })
