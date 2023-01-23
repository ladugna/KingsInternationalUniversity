

"use strict";

const dataStore = (function(){
    const registrationData = [
        {stdentId: "000-11-0001", fullName: "Anna Lynn Smith", courseToRegister: "FPP"},
        {stdentId: "000-11-0002", fullName: "Bob K. Jones", courseToRegister: "MPP"}
        
    ];

    const getData = function() {
        return registrationData;
    }

    const saveData=function(newData){

        registrationData.push(newData) ;
    }

    return {
        getData: getData,
        saveData:saveData
    }

})();

module.exports = dataStore;