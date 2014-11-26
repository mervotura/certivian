'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $window) {
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'Paperless Exam',
    			'description': 'Saatnya melakukan ujian dimana saja dan kapan saja.',
    			'faClass': 'fa-file-excel-o',
                'link': '#/certivian'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Choose Your Own Exam',
    			'description': 'Dapat memilih ujian apa yang akan diikuti.',
    			'faClass': 'fa-folder-o',
                'link': '#/qdelivery'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Daftar dan ikuti tesnya',
    			'description': 'Anda dapat melakukan tes sekarang juga dengan klik Daftar.',
    			'faClass': 'fa-pencil-square-o',
                'link': '#/qstore'
    		}
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%'
    	};
    };
  });
