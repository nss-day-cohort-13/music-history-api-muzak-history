angular.module("app", ["ngRoute", "ui.bootstrap"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        controller: "HomePageCtrl",
        controllerAs: "home",
        templateUrl: "app/home_page.html"
      })
      .when("/add-music", {
        controller: "AddMusicCtrl",
        controllerAs: "add",
        templateUrl: "app/add_music.html"
      })
      .otherwise("/")
    })

  .filter("title", () => string => string.replace(/(\b\w)+/g, c => c.toUpperCase()))
