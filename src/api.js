const url = "https://NumiAttahKb.pythonanywhere.com/contact/"

export function subscribe(email){
    
    return new Promise((res,rej)=>{
        const form = new FormData()
        if(email !== ""){
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (email.match(validRegex)) {
    
                form.append("email",email)
    
                fetch(url, {
                method: "POST",
                body: form,
                })
                .then(response => {
                    if(response.status === 201){res(true)}else{rej("Something went wrong, please try again")}
                    
                })
            
            } else {
                rej("Enter a valid email")
            }
        }else{
            rej("Enter a valid email address")
        }
    })
    
  }