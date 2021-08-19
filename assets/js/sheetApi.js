document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        
        let url = "https://script.google.com/macros/s/AKfycbwFL86kOpizUHhuoOOu_eMUr1JHPjf5Ll0FFa_l6SQh_TMMPlXjrU8rmJY5epRT-b6BGA/exec"

        const data = {
            id: "1zxx4PguOidPR5CfSKtAD6zLWSPtgq4YIhJQksC4vBN4",
            periodo: 2021.1
        }

        fetch(url)
        .then(data => { return data.json() })
        .then(res => { console.log(res) })
        .catch(error => { console.log(error) })
    }
});
