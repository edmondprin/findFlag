const yourName = prompt("Hello there, what is your name? ");
        const divs = document.querySelectorAll("div");
        divs.forEach((el) =>{
            el.addEventListener("click",()=>{
                el.style.backgroundColor = el.id;
                // document.body.style.backgroundColor = el.textContent;
            });
        })
        let but = document.querySelector("button");
        let text = "";
        const yourResponse = document.getElementById("country");
        but.addEventListener("click",()=>{
            let yourResponse2 = yourResponse.value;
            if (yourResponse2.toUpperCase() === "FRANCE") {
                //console.log("GREAT")
                text = `Congrats ${yourName}, you nailed it! You'll get a nice ice-pop as a prize!`
            } else {
                //console.log("NOT GREAT");
                text = `Not quite, ${yourName}, you need to keep working hard!`;
            }
            let para = document.createElement("p");
            para.innerHTML = text;
            document.body.appendChild(para);

        })