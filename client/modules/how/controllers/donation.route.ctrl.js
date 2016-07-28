(function() {
  angular.module('app.how').controller('donationRouteCtrl',
      function($log, $scope, donationService) {
        $log.debug('Initializing donationRouteCtrl');

        var self = this;

        // Array to store all the donors
        $scope.allDonors = [];

        // Function to add the new donor
        $scope.addDonor = function() {
          console.log("in addDonor");

          // Store the new donor's information
          var currDonor = {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            email: $scope.email,
            phone: $scope.phone,
            donation: $scope.donation,
            address: $scope.address,
            city: $scope.city,
            zip: $scope.zip,
            state: $scope.state,
            country: $scope.country,
            comment: $scope.comment
          };

          // Add the new donor to the array
          $scope.allDonors.push(currDonor);
          donationService.addDonor(currDonor);
        };
      });
})();
