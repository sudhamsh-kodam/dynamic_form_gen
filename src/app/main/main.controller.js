(function() {
  'use strict';

  angular
    .module('samplePro')
    .controller('MainController',['$rootScope','$scope','store','mySchema', function($rootScope,$scope,store, mySchema) {
      $scope.datePicker = null || {};
      $scope.schemaList = null || [];
      $scope.datePicker.date = {startDate: null, endDate: null};
      $scope.myForm = {
        schema: mySchema
      };
      /*myformdataService.setFormData($scope.myForm);
      myformdataService.getFormData();*/
      /*store.set('formObj', $scope.myForm);
      var myNewObject = store.get('formObj');
      var q=angular.equals(myNewObject, $scope.myForm);
      console.log(q,'gggggggggg');

*/
      /*$scope.user = {
       name: 'iris satyam',
       address : 'narayanguda'
       }*/
    /*  console.log("hi schema",mySchema);*/
      $scope.save =function (formName) {
        //var myNewObject = store.get('formObj');

        $scope.schemaList.push(formName);
        console.log($scope.schemaList);
        store.set(formName, $scope.myForm);
        $scope.myForm = {};
        //var myNewObject = store.get('formObj');
        //console.log('ppppppppp',myNewObject);
      };
      $scope.changeForm = function(selectedForm){

        var myNewObject = store.get(selectedForm);
        console.log('ppppppppp',myNewObject);
        $scope.getForm = myNewObject;

        console.log($scope.getForm)


      }

    }]);

   /* .factory('myformdataService',function (store) {

      return{
        setFormData : function(setData){
          console.log(setData);
          store.set('formObj', setData);
        },
        getFormData : function(){
          var myNewObject = store.get('formObj');
          console.log('ppppppppp',myNewObject);
        }

      }


    });*/

  angular
    .module('samplePro').value('mySchema', {
   /* "fields": [
      {
        "type": "text",
        "name": "firstName",
        "displayName": "First name",
        "validation": {
          "messages": {},
          "required": true
        },
        "placeholder": "Enter your first name here",
        "tooltip": "Enter your first name here"
      },
      {
        "type": "text",
        "name": "lastName",
        "displayName": "Last name",
        "validation": {
          "messages": {},
          "required": true
        },
        "placeholder": "Enter your last name here",
        "tooltip": "Enter your last name here"
      },
      {
        "type": "radiobuttonlist",
        "name": "sex",
        "displayName": "Sex",
        "options": [
          {
            "value": "male",
            "text": "Male"
          },
          {
            "value": "female",
            "text": "Female"
          }
        ],
        "value": "male"
      },
      {
        "type": "email",
        "name": "email",
        "displayName": "Email",
        "validation": {
          "messages": {}
        },
        "placeholder": "Enter your email address here",
        "tooltip": "Enter your email address here"
      },
      {
        "type": "checkboxlist",
        "name": "color",
        "displayName": "Colors",
        "options": [
          {
            "value": "red",
            "text": "Red"
          },
          {
            "value": "blue",
            "text": "Blue"
          },
          {
            "value": "green",
            "text": "Green"
          }
        ],
        "value": {}
      }
    ]*/
  });
  /** @ngInject */
  /*function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1464086273592;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }*/
})();
