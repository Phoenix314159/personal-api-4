angular.module('myApp').component('meComp', {
    templateUrl: './views/me.html',
    controller: function (mainService) {
        let that = this;
        mainService.getUser().then(function (response) {
            that.name = response.data.name;
            that.family = response.data.family;
            console.log(that.family);
        })
       that.addMember = function () {
           mainService.addFamilyMember(that.name2, that.relation, that.gender).then(function (response) {

               mainService.getUser().then(function (response2) {
                   that.family = response2.data.family;

               });
           })
       }
        that.deleteMember = function(){
            mainService.deleteFamilyMember(that.name3).then(function (response3) {

                mainService.getUser().then(function (response2) {
                    that.family = response2.data.family;

                });
            })
        }
        that.changeName = function () {
            mainService.changeName(that.name4).then(function (response) {

                mainService.getUser().then(function (response2) {
                    that.name = response2.data.name;
                    console.log(response2);
                });

            })
        }
    }
})
