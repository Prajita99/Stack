const fs = require("fs");

let file_name = "files/user.json";

let user = [{
    name: "Prajita Adhikari",
    email: "prajita@test.com",
    role: "Student"
},{
    name: "Prajita one Adhikari",
    email: "prajitaone@test.com",
    role: "Teacher"
}]

fs.open(file_name, "w", (err, fp)=>{
    if(err){
        console.log("Error opening file,"+ err)
    }else{
        let user_string = JSON.stringify(user);
        fs.writeFile(fp, user_string, (error) =>{
            if(error){
                console.log("File write error");
            }else{
                console.log("File written successfully");
            }
        })
    }
})