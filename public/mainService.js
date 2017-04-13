angular.module('myApp').service('mainService', function ($http) {
    let serverUrl = 'http://localhost:3059';

    this.getUser = function () {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/user'
        })
    };
    this.addFamilyMember = function (name, relation, gender) {
        return $http({
            method: 'POST',
            data: {name:name, relation:relation, gemder:gender},
            url: serverUrl + '/api/family'
        })
    };
    this.deleteFamilyMember = function (name) {
        return $http({
            method: 'DELETE',
            url: serverUrl + '/api/delete/' + name
        })
    };
    this.changeName = function (name) {
        return $http({
            method: 'PUT',
            data: {name: name},
            url: serverUrl + '/api/name'
        })

    }

});
