angular.module("app")
    .controller("FilterCtrl",
      function($http, $timeout, RootFactory) {
        const filter = this;
        filter.title = "Artists";
        

        RootFactory.root
          .then(data => $http.get(data.artist))
          .then(res => filter.artist = res.data)
          .then(s => console.log(s))

        RootFactory.root
          .then(data => $http.get(data.album))
          .then(res => filter.album = res.data)
          .then(s => console.log(s))

    });
