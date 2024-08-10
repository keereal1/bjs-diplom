'use strict';

const userForm = new UserForm();

userForm.loginFormCallback = function (data) {
    ApiConnector.login(data, func => {
        if(ApiConnector.parseResponseBody(response)) {
            location.reload();
        } else {
            ApiConnector.login.catch();
        }
    });   
}

userForm.registerFormCallback = function (data) {
    ApiConnector.register(data, func => {
        if(ApiConnector.parseResponseBody(response)) {
            location.reload();
        } else {
            ApiConnector.register.catch();
        }
    }); 
}
    