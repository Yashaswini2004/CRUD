let f_name=document.getElementById("name");
let f_email=document.getElementById("email");
let f_mobile=document.getElementById("mobile");
let userForm=document.getElementById("userForm");
let errName=document.getElementById("nameErr");
let errEmail=document.getElementById("emailErr");
let errMobile=document.getElementById("mobileErr");
const url="https://node-crud-api-0n4d.onrender.com";
// submit event listener
userForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let user={
        name:f_name.value,
        email:f_email.value,
        mobile:f_mobile.value
    }
    if(validate(user))
    {
        console.log(`new user=`,user);
        await fetch(`${url}/api/user/add`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(out=>out.json())
        .then(res=>{
            alert(res?.msg);
            window.location.href="/";
        }).catch(err=>console.log(err?.response?.msg));
    }
    else{
        console.log(`error in the form inputs`);
    }
   
})

// validate 
function validate(user){
    let isValid=true;
    if(!user?.name){
        errName.innerText="name is required";
        errName.style.color="red";
        isValid=false;
       
    }
    else if(!/^[a-zA-Z ]+$/.test(user?.name))
    {
        errName.innerText="Invalid name format";
        errName.style.color="red";
        isValid=false;
    }
    {

    }
     if(!user?.email){
        errEmail.innerText="email is required";
        errEmail.style.color="red";
       
    }
    else if(!/\S+@\S+\.\S+/.test(user?.email))
    {
         errEmail.innerText="Invalid email format";
        errEmail.style.color="red";
        isValid=false;

    }
     if(!user?.mobile){
        errMobile.innerText="mobileno is required";
        errMobile.style.color="red";
         isValid=false;
      
    }
    else if(!/^(0|\+91)?[6-9]\d{9}$/.test(user?.mobile))
    {
        errMobile.innerText="Invalid mobile number format";
        errMobile.style.color="red";
        isValid=false;

    }
    setTimeout(()=>{
      errName.innerText=" ";
      errEmail.innerText=" ";
      errMobile.innerText=" ";
    },3000)
    return isValid;
}


