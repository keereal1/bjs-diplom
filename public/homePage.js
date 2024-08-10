'use strict';

const userForm = new UserForm();

userForm.loginFormCallback = function (data) {
    let func = function() {
        if(func) {
            location.reload();
        } else {
            userForm.setLoginErrorMessage(message);
        }
    }
    ApiConnector.login(data, func);
    
}

userForm.registerFormCallback = function (data) {
    let func = function() {
        if(func) {
            location.reload();
        } else {
            userForm.setLoginErrorMessage(message);
        }
    }
    ApiConnector.login(data, func);
    
}
    