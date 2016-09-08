angular.module("app")
    .controller("HomePageCtrl", function($http, RootFactoy) {
      const home = this;
      home.songs = [];
      home.nextPageUrl = "";

      home.more = () => { if(home.nextPageUrl) loadSongs(home.nextPageUrl); }

      function loadSongs(url) {
        $http.get(url)
          .then(songsRes => songsRes.data)
          .then(songsData => { home.nextPageUrl = songsData.next; return songsData.results; })
          .then(songList => songList.forEach(song =>
            $http.get(song.url).then(res => home.songs.push(res.data))));
      }

      RootFactoy.root.then(data => loadSongs(data.song));
    })
