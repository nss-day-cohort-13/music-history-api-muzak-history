angular.module("app")
  .factory("RootFactory", ($http) => {
    const apiGet = $http.get("http://localhost:8000")

    return { root: apiGet.then(res => res.data, console.error)}
  })
