'use strict';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('FrontEnd')
        .controller('HomeController', function ($scope, $http, HomeService) {
            $scope.title = 'Tambah Siswa';
            $scope.dataSiswa = [];
            $scope.lastPage = 1;

            $scope.init = function () {
                $scope.lastpage = 1;
                $http({
                    url: 'http://localhost:8000/siswa',
                    method: "GET",
                    params: {page: $scope.lastpage}
                }).success(function (data, status, headers, config) {
                    $scope.dataSiswa = data.data;
                    $scope.currentpage = data.current_page;
                });
            };
            
            $scope.loadMore = function() {
                $scope.lastpage +=1;
                $http({
                    url: 'http://localhost:8000/siswa',
                    method: "GET",
                    params: {page:  $scope.lastpage}
                }).success(function (data, status, headers, config) {
 $scope.dataSiswa = data.data;
                });
            };

            $scope.init();

            $scope.reload = function () {
                HomeService.ambil().success(function (data) {
                    $scope.init();
                    console.log('siswa Work');
                });
            };
            $scope.reload();
            $scope.clear = function () {
                $('#modal1').modal('hide');
                $scope.Siswa = [];
                $scope.reload();
            };

            $scope.save = function () {
                if ($scope.Siswa === undefined) {
                    swal("Oops...", "Data Belum Terisi", "error");
                } else {
                    if ($scope.Siswa.id === null || $scope.Siswa.id === undefined) {
                        HomeService.simpan($scope.Siswa, null).success(function (data) {
                            console.log('success');
                            $scope.clear();
                        });
                    } else {
                        HomeService.simpan($scope.Siswa, $scope.Siswa).success(function (data) {
                            console.log('success');
                            $scope.clear();
                        });
//console.log($scope.Siswa.id + '' + $scope.Siswa);
                    }
                }
            };

            $scope.edit = function (obj) {
                HomeService.ambilSatu(obj).success(function (data) {
                    $scope.Siswa = data;
                    $('#modal1').modal('show');
                });
            };

            $scope.hapus = function (obj) {
                swal({
                    title: "Are you sure?",
                    text: "Apakah Anda Yakin Akan Menghapus Data ini ???",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                        function () {
                            HomeService.hapus(obj).success(function (data) {
                                swal("Deleted!", "WORK!!!", "success");
                                $scope.clear();
                            });
                        });
            };
        });