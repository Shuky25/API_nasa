/*async function api() {
    let kljuc = "Wdn8UkRVF7Kf9qnuiXflzONoWeHbaf3CR57MJrzd";
    let input = document.querySelector('input');    
    let slika = document.querySelector('#slika');
    let tekst = document.querySelector('#tekst');
    let link = `https://api.nasa.gov/planetary/apod?api_key=${kljuc}&&thumbs=true&date=${input.value}`;
    let response = await fetch(link);
    response = await response.json();

    if (response.hdurl) {
        slika.src = response.hdurl;
        tekst.innerHTML = response.explanation;
    }
}

*/
let key = "Wdn8UkRVF7Kf9qnuiXflzONoWeHbaf3CR57MJrzd";
let id = document.querySelector('#datum');
let date = `${new Date().getFullYear}-${new Date().getMonth+1}-${new Date().getDate}`;
async function API() {
    let link = `https://api.nasa.gov/planetary/apod?api_key=${key}&&thumbs=true&date=${date}`;
    //console.log(link);
    let response = await fetch(link);
    response = await response.json();
    console.log(response);

    if (response.hdurl)
        document.querySelector('#slika').src = `${response.hdurl}`;
    else document.querySelector('#slika').src = `${response.thumbnail_url}`;
    document.querySelector('#tekst').innerHTML = `${response.explanation}`;
}
id.addEventListener("change", () => {
    date = id.value;
    API();
})

API();