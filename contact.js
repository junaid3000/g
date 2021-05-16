const frm= document.getElementById("f");
const formvalid=frm.checkValidity();
console.log("FORM VALIDITY",formvalid);

const btn= document.getElementById("formsubmit");
console.log("its btn",btn);
btn.addEventListener("click",()=>{
  if(formvalid){
      alert("Form is submited successfully")
  }
  else{
    alert("error in form")      
}
})

const run_this_function= (e)=>{
    e.preventDefault();
 console.log("src is called",e); 
 return false;   
}