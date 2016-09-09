angular.module("app")
  .controller("SongInfoModalCtrl", function($uibModalInstance, song) {
    const songInfo = this;
    songInfo.song = song;
  })
