angular.module("app")
    .controller("HomePageCtrl", function($http, $uibModal, RootFactory) {
      const home = this;
      home.songs = [];
      home.artists = [];
      home.albums = [];
      home.nextPageUrl = "";


      home.showSongInfo = song => $uibModal.open({
        templateUrl: "app/_song-modal.html",
        controller: "SongInfoModalCtrl",
        controllerAs: "songInfo",
        resolve: { song }
      });

      home.more = () => {
        if(home.nextPageUrl) { loadSongs(home.nextPageUrl); }
      };

      function loadSongs(url) {
        $http.get(url)
          .then(songsRes => songsRes.data)
          .then(songsData => {
            home.nextPageUrl = songsData.next;
            return songsData.results;
          })
          .then(songList => songList.forEach(song => {
            home.songs.push(song);
            $http.get(song.url)
              .then(res => Object.assign(song, res.data))
              .then(songData => {
                home.artists = home.artists.concat(songData.artists);
                home.albums = home.albums.concat(songData.album_set);
              })
              .then(() => {
                const uniqueArtists = [];
                home.artists.forEach(a => {
                  if(!uniqueArtists.find(u => a.name === u.name)) { uniqueArtists.push(a); }
                });
                home.artists = uniqueArtists;
              })
              .then(() => {
                const uniqueAlbums = [];
                home.albums.forEach(a => {
                  if(!uniqueAlbums.find(u => a.name === u.name)) { uniqueAlbums.push(a); }
                });
                home.albums = uniqueAlbums;
              })
            }
          ));
      }

      RootFactory.root.then(data => loadSongs(data.song));
    });
