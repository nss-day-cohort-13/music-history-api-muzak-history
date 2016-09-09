angular.module("app", ["ngRoute", "ui.bootstrap"])
  .config(($routeProvider) => {
    $routeProvider
      .otherwise("/")
    })

  .filter("title", () => string => string.replace(/(\b\w)+/g, c => c.toUpperCase()))
