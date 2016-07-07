'use strict';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('FrontEnd')
        .factory('HomeService', function ($http) {
            var url = 'http://localhost:8000/siswa';
            return {
                simpan: function (obj, ori) {
                    if (ori === null || ori === undefined) {
                        return $http.post(url, obj);
                    } else {
                        return $http.put(url + '/' + obj.id, obj);
//console.log(obj);
                    }
                },
                ambil: function (objSearch, pgNumber) {
                    if(objSearch === undefined || objSearch === null){
                        return $http.get(url+'?page='+pgNumber);
                    }else{
                        return $http.get(url+'?search='+objSearch+'&page='+pgNumber);
                    }
                },
                hapus: function (obj) {
                    return $http.delete(url + '/' + obj);
                },
                ambilSatu: function (obj) {
                    return $http.get(url + '/' + obj + '/edit');
                }
            };
        });