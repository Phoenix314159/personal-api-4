angular.module('myApp').component('homeComp',{
    templateUrl: './views/home.html',
    controller: function (mainService) {
        var that = this;
        mainService.getUser().then(function (response) {
            console.log(response.data);
            that.user = response.data;
        })

    }

})
