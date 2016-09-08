angular.module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        controller: "HomePageCtrl",
        templateUrl: "app/home_page.html"
      })
      .when("/view-music", {
        controller: "HomePageCtrl",
        templateUrl: "app/home_page.html"
      })
      .when("/add-music", {
        controller: "AddMusicCtrl",
        templateUrl: "app/add_music.html"
      })
    });
