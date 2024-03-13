function tester(){
    let my_text = document.getElementById("text_form");
    let words = document.getElementById("mytext");

    my_text.addEventListener("submit", (e) => {
        e.preventDefault();

        if (words.value == "") {
            alert("Nothing was typed!");
        } else {
            // perform operation with form input
            alert("This form has been successfully submitted!");
            console.log(
            `This form has a string of ${words.value}`
            );
        }


    }, {once : true});

    let list_proofread = postProofread(words.value);
    
    let printResponse= async () => {
      let a = await list_proofread;
      if (a.length > 0){
        for(let i = 0; i<a.length; i++){
          console.log(`Text section = ${a[i]["errorText"]}, Error message = ${a[i]["message"]}`);
          alert(`Text section = ${a[i]["errorText"]}\nError message = ${a[i]["message"]}`);
        }
      }
    };
    printResponse();
}

async function postJSON(data) {
    try {
      const response = await fetch("https://eo118v7yj6phun1.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

async function postProofread(text){
  try{
      const body = {
          "text": text,
          "language": "en-US"
      }

      let bodyURLencoded = [];
      for(let p in body){
          var key = encodeURIComponent(p)
          var value = encodeURIComponent(body[p])
          bodyURLencoded.push(key + "=" + value)
      }
      bodyURLencoded = bodyURLencoded.join("&")

      const response = await fetch("https://sfu24spcmpt474a2eca103-4ora5oxrra-uc.a.run.app/v2/check", {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: bodyURLencoded
      });
      let errors = await response.json()
      let errors_filtered = []
      for(let err of errors["matches"]){
          let context = err["context"]
          errors_filtered.push({
              "errorContext": context["text"],
              "errorText": context["text"].substring(context["offset"], context["offset"] + context["length"]),
              "message": err["message"],
              "messageShort": err["shortMessage"]
          })
      }
      return errors_filtered;
  }
  catch(e){
      console.log(e)
  }
}