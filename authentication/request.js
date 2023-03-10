function sendRequestToAp(id) {
let form = document.createElement("form");
form.style="visibility: hidden;display: none;"
let element1 = document.createElement("input"); 
let element2 = document.createElement("input");  
let element3 = document.createElement("input")
let element4 = document.createElement("input"); 

form.method = "POST";
// form.action = "https://securelogin.arubanetworks.com/swarm.cgi";   
form.action = "https://portal1alogin.teclumobility.com/swarm.cgi";   
form.id= "login-form"
element1.value=id;
element1.type = "text"
element1.name="user";
form.appendChild(element1);  

element2.value="27kkrY3cqF";
element2.type = "password"
element2.required
element2.name="password";
form.appendChild(element2);

element3.value="https://www.facebook.com";
element3.type = "hidden";
element3.name="orig_url";
// element3.size = "16";
// element3.maxLength = "15";
form.appendChild(element3);

element4.value="cp_auth";
element4.type = "hidden";
element4.name="opcode";
form.appendChild(element4);
document.body.appendChild(form);
form.submit();
}