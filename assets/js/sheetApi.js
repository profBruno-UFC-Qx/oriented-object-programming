document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
       
        const appUrl = "https://script.google.com/macros/s/AKfycby8Cc77YPc4NfxcGTUz7Ba6n0gdBA_s7JkvdeJ8LPU_646M-LGcaVia1LozCFcUTqAhrQ/exec"

        const urls = [
        "1zxx4PguOidPR5CfSKtAD6zLWSPtgq4YIhJQksC4vBN4", //carro
        "1Wl3_wkGmmjfD_RQ7ee2mccUKU35GphS58KjW1aKjhII", //conta
        "1MUncug2mHgSTcL5vVbaOrbX4tmqwB9CQmZ4sBvibuck", //cofre
        "1mA8Zu5Wd3obu0_dFF64g19_YTFh4HdgMgsIIY52L3Cs", //lapiseira
        "153pHRefRCsB4dvsSvXQ7qXs1dHXRwkCUjnI4uzwROJI", //motoca
        "16kTwnBA09oAuiVUATATbhiaWKgLVnLgBMtdTDCswsfk", //tamagochi
        "", //mestre dos vetores
        "14hFNjOfNB6HMeSMJUjg4jeKIwDDsxBMIELWnWYdq1C8", //pula pula
        "1SmbRlMllZ4C1S2kEyUUCTw6a66iyJZhaW7keHdtbeNs", // topic de luxo
        "1T3VaDQiNUou_-ReGjkftRiz6rKKF3lpD2P2f5mTtkr0", // gestao
        "", //sala de cinema
        "1Q59objYAf5cXD-c2upPsLKPod22tv7cZxRzUk03sN1I", //agenda
        "1O5m8nXbsXLXzIK4QCAL4qBbfSmY90OonmXMCEW1V75U", //circulos
        "1P08ul_LqjIm1NCUWccAYx2rlEj_oDULKnT6mIMATlCE" //junk food
        ]
        
        urls.forEach(function(sheetUrl, index) {
            const url = appUrl + "?id=" + sheetUrl 

            if(sheetUrl != ""){
                console.log(sheetUrl + " " + index)
                fetch(url)
                .then(data => { return data.json()})
                .then(res => { document.getElementById("pp" + (index + 1)).innerHTML = res })
                .catch(error => { console.log(error) })
            }

        })
    }
});
