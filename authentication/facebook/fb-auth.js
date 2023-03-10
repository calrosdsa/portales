let access_token;
function getParams(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params
}

async function getUserData(){
    const code = getParams().code
    const url = window.location.origin + window.location.pathname
    const facebookUrl = `https://graph.facebook.com/v15.0/oauth/access_token?client_id=681826853306904&redirect_uri=${url}&client_secret=5b5b797cfde6c03bcfe94f1772513982&code=${code}`;
    try {
        await fetch(facebookUrl).then(response => {
            return response.json();
        }).then(data => {
            access_token = data.access_token;
        });
        await fetch(`https://graph.facebook.com/v15.0/me?fields=id%2Cname%2Cemail%2Cpicture&access_token=${access_token}`).then(response => {
            if (response.ok) {
            return response.json();
            }
            throw new Error("Fallo al traer datos de facebook. Si el error persiste porfavor intente acceder desde otro navegador.");
        }).then(data => {
        user = data.name;
        id = data.id
        console.log(data)
    })
    }catch(err){
        console.log(err)
    }
}

