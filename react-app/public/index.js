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
            console.log(`This is the whole element mytext = ${words}`);
        }


    }, {once : true});

    postJSON(words);
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