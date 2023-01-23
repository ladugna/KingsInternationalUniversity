

const express = require("express") ;
const path = require("path") ;

const registrationController = require("../../controller/studentController") ;

const regiRouter = express.Router();

regiRouter.get("/registration",(req,res)=>{
       
    const students = registrationController.getStudenData() ;  //this array will be in out .pug file for each loop
    console.log(students) ;
    res.render("form-student",{students:students}) ; //this connect us to .pug files->from-regi is the name of the .pug 
});



//waitt

regiRouter.post("/registration",(req, res) => {
        const result = registrationController.saveData(req,res) ;
       
        res.redirect(303, "/registration");
    });



    //endPOINT

    regiRouter.get("/registration/list", (req, res) => {
        const allAccount = registrationController.getStudenData() ;
        res.json(allAccount);
    });
    
   module.exports =regiRouter ;
