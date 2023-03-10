let access_token;
function getParams(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params
}

function getAccessToken(){
    const params = getParams()
    console.log(params)
   const data = new FormData()
   data.append('code',params.code)
    fetch("http://localhost:1323/v1/get-access/",{
        method:'POST',
        body:data,
    }).then(res=>res.json()).then(res=>{
        access_token = res.access_token
        console.log(res)
        getEmailAddress()
    })
}

function getEmailAddress(){
    fetch('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))',{
        headers:{
            'Authorization':`Bearer ${access_token}`
        }
    }).then(res=>res.json())
    .then(res=>{
        console.log(res)
    })
}
getAccessToken()