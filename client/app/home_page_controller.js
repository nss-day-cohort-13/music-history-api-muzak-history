angular.module("app")
    .controller("HomePageCtrl", function($http, $uibModal, RootFactory) {
      const home = this;
      home.songs = [];
      home.nextPageUrl = "";
      home.artists = [];
      home.albums = [];


      RootFactory.root
      .then(data => $http.get(data.artist))
      .then(res => home.artists = res.data.results)
      .then(s => console.log(s))

      RootFactory.root
      .then(data => $http.get(data.album))
      .then(res => home.albums = res.data.results)
      .then(s => console.log(s))

      home.showSongInfo = song => $uibModal.open({
        templateUrl: "app/_song-modal.html",
        controller: "SongInfoModalCtrl",
        controllerAs: "songInfo",
        resolve: { song }
      })
      home.more = () => { if(home.nextPageUrl) loadSongs(home.nextPageUrl); }

      function loadSongs(url) {
        $http.get(url)
          .then(songsRes => songsRes.data)
          .then(songsData => { home.nextPageUrl = songsData.next; return songsData.results; })
          .then(songList => songList.forEach(song =>
            $http.get(song.url)
              .then(res => {home.songs.push(res.data); return res.data})
          ));
      }

      RootFactory.root.then(data => loadSongs(data.song));

    })
