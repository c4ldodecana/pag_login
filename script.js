const init = () =>{

    const validateEmail = (event) => {
        const input = event.currentTarget; 
        const regex = /\S+@\S+\.\S+/;
        const emailTest = regex.test(input.value);

        if (!emailTest){
            submit.setAttribute('disabled', 'disabled')
            input.nextElementSibling.classList.add('error')
        } else{
            submit.removeAttribute('disabled')
            input.nextElementSibling.classList.remove('error')    
        }
          

    }



    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('senha')
    const submit = document.getElementById('acao')

    inputEmail.addEventListener( 'input', validateEmail);


    if (submit) {
        submit.addEventListener('click', (event)=>{
         event.preventDefault();
        
            fetch ('https://reqres.in/api/login', {
               
                 method: 'POST', headers: {
                     'Content-Type' : 'application/json'

                 },
            
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value, 
                    


                })
                    
                
                
            }).then((response)=>{
                return response.json(); 
            }).then((data)=>{
                console.log(data)
            })

            

         })
    }


}



window.onload= init;