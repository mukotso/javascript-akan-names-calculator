
function validateForm(){
  let dateOfBirth=document.getElementById("d.o.b").value;
  let gender=document.getElementById("gender").value; 
  //check if date of birth or gender field is empty
  if(gender=="" || dateOfBirth=="") alert('Please Fill The Date of Birth and Gender Fields');
  getAkanName(dateOfBirth,gender);
}

function getAkanName(dob,gender){
  
  let akanName=document.getElementById("akanName");
  let dateDay=new Date(dob).getDay();
   let femaleNames = ["Akosua,Esi", "Adwoa", "Abenaa", "Akua", "Yua", "Afua", "Ama,Kamba"];
	 let maleNames = ["Kwasi", "Kwadwo", "Kwabena,Ebo", "Kwaku,Yooku", "Yaw", "Kofi", "Kwame"];
  
    if (gender === "male") {
    
    akanName.innerHTML=maleNames[dateDay];   
    return maleNames[dateDay];
    }
    else if (gender === "female"){
       akanName.innerHTML=femaleNames[dateDay]; 
      //  return femaleNames[dateDay];
    }
    else {
      // return "Incorrect Input";
     akanName.innerHTML="Incorrect Output";
    }
    
}
module.exports=getAkanName;



