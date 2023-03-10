let base_url = "https://teclu.com";

function setCookie(cName, cValue, expHours) {
    let date = new Date();
    date.setTime(date.getTime() + expHours * 1 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }
function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
  }


  
function deleteAllCookies() {
    const cookies = document.cookie.split(";");
  
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    window.location.replace(window.location.origin + window.location.pathname)
  }

function getParams(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params
}



async function saveUser(nombre,id) {
  // console.log(nombre)
  // const name = nombre.replace(/ /g, "_").replace(".", "");
        await fetch(`${base_url}/ApiFb_userexists.php?name=` + nombre + `&id=${id}`).then(response => {
            return response.text();
        }).then(data => {
            console.log("Exite usuario", data);
        });
}
let idF;
function sendRequestToAp () {
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
element1.value=idF;
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

async function saveUserWifi(mac){
  try{

      const formData = new FormData();
      formData.append("idFb",mac)
  formData.append("fullName", `user-${mac}`);
  // formData.append("mail", email);
  // formData.append("image", picture);
  await fetch(`${base_url}/apiFB/public/userwifi/add`, {
      method: 'POST',
      body: formData
      // }).then(res=>res.json()).then(res=>console.log(res))
  }).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err));
  }catch(err){
      console.log(err)
  }
}