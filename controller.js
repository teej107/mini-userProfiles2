angular.module('userProfiles').controller('MainController', function ($scope, mainService)
{

    $scope.users = {};
    $scope.getUsers = function ()
    {
        mainService.getUsers().then(function (success)
        {
                            //The data.the array
           $scope.users = success.data.data;
        });
    }


    $scope.getUsers();

});