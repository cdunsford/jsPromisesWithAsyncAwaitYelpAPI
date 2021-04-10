const fetch = require("node-fetch");

let apiKey = 'IVIoLvyA240Stodpl4umdU8HfikM_ODn082-yYTEhcxb7HTptr9P-TWXDMuerHsw6xvfkl18JudXTnAd207sP9H32CNNIbiN72Jb8NEjhmZEYNJ7i3eif02erwBxYHYx';

let search = (term, location) => {
    return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, 
    {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    }).then(response => {
        return response.json();
    }).then(jsonResponse =>{
        if(jsonResponse.businesses){
            console.log(jsonResponse.businesses);
        }
        
    });
}

async function search2(term, location){

    try {
        
    
    let response = await fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
    {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    });

    let jsn = await response.json();

    if(jsn.businesses){
        console.log(jsn.businesses);
    }

} catch (error) {
    console.log(error);
        
}

}

search2('greek', 'nyc');