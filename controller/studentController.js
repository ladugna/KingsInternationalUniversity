

const datastore = require("../dataStore/studentData") ; //we need data store

const applicant = require("../model/student") ; //we need model


const regiControllor = (function(){


        const getStudenData=function(){
                return datastore.getData() ;
        }


        
//we will come letter

const saveData = function(req,res){
        const stdentId = req.body.stdentId ;        //body.-> the name in the inpit or form-tetx.pug
        const fullName =req.body.fullName ; //give the same name as in the .pug name when declering 
        
        const  courseToRegister= req.body.courseToRegister;
        
        const s = new applicant(stdentId,fullName,courseToRegister);
       datastore.saveData(s) ;
}

return{
                getStudenData,
                saveData:saveData
        }

}

)();

module.exports =regiControllor ;
