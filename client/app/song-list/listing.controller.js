angular.module("app")
    .controller("ListingCtrl", function($http, $uibModal, RootFactory) {
      const listing = this;
      listing.songs = [];
      listing.artists = [];
      listing.albums = [];
      listing.nextPageUrl = "";


      listing.showSongInfo = song => $uibModal.open({
        templateUrl: "app/song-info/song-info-modal.html",
        controller: "SongInfoModalCtrl",
        controllerAs: "songInfo",
        resolve: { song }
      });

      listing.more = () => {
        if(listing.nextPageUrl) { loadSongs(listing.nextPageUrl); }
      };

      function loadSongs(url) {
        $http.get(url)
          .then(songsRes => songsRes.data)
          .then(songsData => {
            listing.nextPageUrl = songsData.next;
            return songsData.results;
          })
          .then(songList => songList.forEach(song => {
            listing.songs.push(song);
            $http.get(song.url)
              .then(res => Object.assign(song, res.data))
              .then(songData => {
                listing.artists = listing.artists.concat(songData.artists);
                listing.albums = listing.albums.concat(songData.album_set);
              })
              .then(() => {
                const uniqueArtists = [];
                listing.artists.forEach(a => {
                  if(!uniqueArtists.find(u => a.name === u.name)) { uniqueArtists.push(a); }
                });
                listing.artists = uniqueArtists;
              })
              .then(() => {
                const uniqueAlbums = [];
                listing.albums.forEach(a => {
                  if(!uniqueAlbums.find(u => a.name === u.name)) { uniqueAlbums.push(a); }
                });
                listing.albums = uniqueAlbums;
              })
            }
          ));
      }

      RootFactory.root.then(data => loadSongs(data.song));
    });
