// I use factory I think its the same as service though
myApp.factory('catalogservice', ['$http',
    function($http) {
        delete $http.defaults.headers.common['X-Requested-With'];
        return $http({
            method: 'GET',
            url: 'https://predix-analytics-catalog-release.run.aws-usw02-pr.ice.predix.io/api/v1/catalog/analytics',
            headers: {'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJiZTE1ZjYwYi05YmMzLTQwOTctOWZjYS1jODhmNzBjOGJiNWUiLCJzdWIiOiJhZG1pbiIsInNjb3BlIjpbImNsaWVudHMucmVhZCIsImFuYWx5dGljcy56b25lcy44MTAwNjI1OC0xOGI2LTQ1YWEtOTc1Yi05NTZhOTFlYWRiMmIudXNlciIsImFuYWx5dGljcy56b25lcy5iNTE3OGI3ZC1lODg1LTQ0ODAtYmRkOS03M2QxYTY2ZjdmOTQudXNlciIsImNsaWVudHMuc2VjcmV0IiwiaWRwcy53cml0ZSIsInVhYS5yZXNvdXJjZSIsImFuYWx5dGljcy56b25lcy4xMmY2MDQ0OS1lOWM5LTQ2MTEtODk2ZS05ZjdlN2Y0ZTM2MGYudXNlciIsImNsaWVudHMuYWRtaW4iLCJhbmFseXRpY3Muem9uZXMuYjQ4ZWVmYzEtZDE4Yi00YTM1LWJjNmEtYTFlZTc4ODczZWI3LnVzZXIiLCJzY2ltLnJlYWQiLCJhbmFseXRpY3Muem9uZXMuOTUxZmRjMjItOGI5OC00NzRhLThhYWEtMjQ0Y2ExM2QwODY3LnVzZXIiLCJjbGllbnRzLndyaXRlIiwiem9uZXMuYmMwMjY1NTEtNzZhZC00OWM5LWEyYjUtNjY0ZTVjYzZlMWMwLmFkbWluIiwiaWRwcy5yZWFkIiwic2NpbS53cml0ZSJdLCJjbGllbnRfaWQiOiJhZG1pbiIsImNpZCI6ImFkbWluIiwiYXpwIjoiYWRtaW4iLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjhjNmM0M2RiIiwiaWF0IjoxNDU4NDEyNzY5LCJleHAiOjE0NTg0NTU5NjksImlzcyI6Imh0dHBzOi8vYmMwMjY1NTEtNzZhZC00OWM5LWEyYjUtNjY0ZTVjYzZlMWMwLnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiYmMwMjY1NTEtNzZhZC00OWM5LWEyYjUtNjY0ZTVjYzZlMWMwIiwiYXVkIjpbImFkbWluIiwiY2xpZW50cyIsImFuYWx5dGljcy56b25lcy44MTAwNjI1OC0xOGI2LTQ1YWEtOTc1Yi05NTZhOTFlYWRiMmIiLCJhbmFseXRpY3Muem9uZXMuYjUxNzhiN2QtZTg4NS00NDgwLWJkZDktNzNkMWE2NmY3Zjk0IiwiaWRwcyIsInVhYSIsImFuYWx5dGljcy56b25lcy4xMmY2MDQ0OS1lOWM5LTQ2MTEtODk2ZS05ZjdlN2Y0ZTM2MGYiLCJhbmFseXRpY3Muem9uZXMuYjQ4ZWVmYzEtZDE4Yi00YTM1LWJjNmEtYTFlZTc4ODczZWI3Iiwic2NpbSIsImFuYWx5dGljcy56b25lcy45NTFmZGMyMi04Yjk4LTQ3NGEtOGFhYS0yNDRjYTEzZDA4NjciLCJ6b25lcy5iYzAyNjU1MS03NmFkLTQ5YzktYTJiNS02NjRlNWNjNmUxYzAiXX0.aiRLkSX6sdGX-blJrMiP7woUyHupNdHz2Cm4MMmDSbOgQih5HF95WTUBFYHnnIxvWTlw-kmAeZZKtVpUsLyTi9jpAC1pScvPcM7ZOYiOEmRyW-WAARXMjxVjONtUhVJ4xRPUSpsDD07T7omz1fiFlxZDUsrYSOkMxrWfr0aa0ArkTO2pwBuCmq8lswas-LxT68ReV9vYDcFKtw35OomOe546ykQ6usrj6Hod2Dmrvmrt5sEtquTmYIc6M_30R3PD6I6DkW90tZcfLXTMHFtT3hkM02SDxyJ6xMmQTECmLWfKlWigGXEj5QZITdk-7MJViYGc97URZd-hQqlfocjwQA',
                  'Content-Type': 'application/json',
                  'Predix-Zone-Id': 'b5178b7d-e885-4480-bdd9-73d1a66f7f94'
            }
        }).success(function(data) {
             return data;
                 })
        .error(function(err) {
           return err;
               });
        
    }
]
);
