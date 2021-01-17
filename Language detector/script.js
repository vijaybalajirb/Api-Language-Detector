
keyval="aa0107327364feffcc1a688a0fb048e9"
async function detect(datas){
    let joined=datas.split(" ").join("");
    let x = await fetch(`https://ws.detectlanguage.com/0.2/detect?q=${joined}&key=${keyval}`);
    let data=await x.json()
    console.log(data)
    displayData(data);
    }

   // detect("the value")

    function displayData(data){
        document.getElementById("language").innerText=data.data.detections[0].language;

        document.getElementById("isReliable").innerText=data.data.detections[0].isReliable;

        document.getElementById("confidence").innerText=data.data.detections[0].confidence;

        
    }