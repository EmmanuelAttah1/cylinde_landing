const url = "https://numiattah.pythonanywhere.com/subscribe/"

export function subscribe(data){
    
    return new Promise((res,rej)=>{
        const form = new FormData()
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!data.email.match(validRegex) || data.email === "") {rej("Enter a valid email")}
        if(data.first_name === ""){rej("Enter a valid First name")}
        if(data.last_name === ""){rej("Enter a valid Last name")}
        if(data.city === ""){rej("Enter a valid City")}
        if(data.state === ""){rej("Enter a valid State")}

        const sub_data = `${data.first_name}:${data.last_name}:${data.email}:${data.city}:${data.state}`

        form.append("email",sub_data)

        fetch(url, {
            method: "POST",
            body: form,
        })
        .then(response => {
            if(response.status === 201){res(true)}else{rej("Something went wrong, please try again")}
            
        })
    })
    
  }