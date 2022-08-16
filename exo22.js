const username=document.getElementById('username')
const  password =document.getElementById('password')
const form = document.getElementById('form')
const  passwordconfirm =document.getElementById('passwordconfirm')

form.addEventListener('Submit', e => {
	e.preventDefault();
	
	checkInputs();form.addEventListener('Register', e => {
	e.preventDefault();
	
	checkInputs();
    function checkInputs() 
       
        const passwordvalue = password.value.trim();
        const passwordcofirmvalue = passwordconfirm.value.trim();

        if(passwordvalue !== passwordconfirmvalue) {
            setErrorFor(passwordconfirm, 'ERREUR!!');
        } else{
            setSuccessFor(ppasswordconfirm);
        }

        
        