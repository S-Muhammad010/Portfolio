const subBtn = document.querySelector("#submitBtn")
subBtn.addEventListener("click",sentMail)

function sentMail(e){
    e.preventDefault()
    var params = {
        name: document.getElementById("name").value, 
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    const serviceID = "service_xlbvocs"
    const tempelatedId = "template_t242dkw"
    
    emailjs.send(serviceID,tempelatedId,params)
    .then (
        res => {
         
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent")
        }
    )
    .catch((err) => console.log(err));
}