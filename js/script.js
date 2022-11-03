//uppgift 1
for (let i=1; i <= 5; i++) {
    const h1 = document.createElement("h1");
    h1.innerText= "rad " + i; 
    document.body.appendChild(h1);
   h1.style.backgroundColor = `hsl(${i * 10},90%,85%)`;
    h1.style.textAlign = "center";
    h1.style.fontSize = i + "rem";
}


//uppgift 2 

let box = document.createElement("div");
document.body.appendChild(box);
box.style.border = "1px black solid";
box.style.display = "flex";
box.style.justifyContent = "space-around";
box.style.padding = "5rem";


for (let i=0; i < 3; i++) {
    let innerbox = document.createElement("div");
    box.appendChild(innerbox);
    innerbox.style.backgroundColor = "#b2b3f2";
    innerbox.style.width = "5rem";
    innerbox.style.padding = "1rem";
    if (i===0) {
        for (let i=0; i < 10; i++) {
            let number = document.createElement("h1");
            innerbox.appendChild(number);
            number.innerText = i;
            number.style.margin = "0px";
            if (i%2===0) {
                number.style.backgroundColor = "black";
                number.style.color = "white";
            } else {
                number.style.backgroundColor = "white";
            } 
            if (i===4) {
                number.style.background = null;
            }
        }
    }
    else if (i===1) {
        for (let i=9; i >= 0; i--) {
            let number = document.createElement("h1");
            innerbox.appendChild(number);
            number.innerText = i;
            number.style.margin = "0px";
            number.style.textAlign ="center";
            if (i%2===0) {
                number.style.backgroundColor = "black";
                number.style.color = "white";
            } else {
                number.style.backgroundColor = "white";
            } if (i===8) {
                number.style.background = null;
            }
        }
    } else {
        let narray = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"]
        for (let i=0; i < 10; i++) {
            let number = document.createElement("h1");
            innerbox.appendChild(number);
            number.innerText = narray[i];
            number.style.margin = "0px";
            number.style.textAlign = "right";
            if (i%2===0) {
                number.style.backgroundColor = "black";
                number.style.color = "white";
            } else {
                number.style.backgroundColor = "white";
            } if (i===5) {
                number.style.background = null;
            }
        }
    }
    
}


