

window.onload =function(){

          const regi = document.getElementById("regi") ;

          regi.onsubmit = function(event){


                    event.preventDefault() ;


                    
                    const fname = document.getElementById("first");

                    const mNamae = document.getElementById("middle") ;

                    const lname = document.getElementById("last") ;

                    const idnum = document.getElementById("appId") ;

                    const course = document.getElementById("courseRegi") ;
                    const txtAddress = document.getElementById("add") ;

                    const txtPerson = document.getElementById("person") ;


                    

                   

                    const levelOfStudy = document.querySelector("input[name='rdoSeniorCitizen']:checked") ;
                    


                    const strfname = fname.value ;

                    const strlastName = lname.value ;
                    const strlMiddle = mNamae.value ;

                    const stridnum = idnum.value ;

                    const strcourse = course.value ;

                    const strlevel = levelOfStudy.value ;

                    const strAddress = txtAddress.value ;

                    const strPerson = txtPerson.value ;



                   



                    alert(
                  ` level of studey : ${strlevel}
                    applicationa full name :  ${strfname}  ${strlMiddle}  ${strlastName}
                    address:${strAddress}
                    application id number :  ${stridnum}
                    course : ${strcourse}`)



                    fname.value = "";

                    lname.value  ='';
                   mNamae.value='' ;

                    idnum.value='' ;

                course.value='' ;

                  levelOfStudy.value='' ;

                  txtPerson.value ='' ;

                  txtAddress.value = '' ;



                    






                   
                    





          }
}