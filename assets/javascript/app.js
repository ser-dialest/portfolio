const about = document.getElementById("about");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");

function initialize() {
    
    document.addEventListener("click", introduction);
    
    function introduction() {
        document.removeEventListener("click", introduction);
        uninitialized = false;
        document.getElementById("start").style.display = "none";

        // Drop header into place
        const header = document.getElementById("header");
        let headerOffset = -20;

        function showHeader(timestamp) {
            if (headerOffset < 0) {
                headerOffset += 1;
                header.style.top = headerOffset + "vh";
                requestAnimationFrame(showHeader);        
            }
        }

        requestAnimationFrame(showHeader);

        const intro = [
            "Hello, this is Jeffrey. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi provident, officia vitae saepe placeat perspiciatis repellat aliquid iusto tenetur omnis.",
            "A button for the portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi, assumenda iure maiores, modi atque corrupti odio suscipit?"
        ]

        about.innerHTML = "";
        about.style.padding = "36px";
        const portrait = document.createElement("div");
        portrait.setAttribute("id", "portrait");
        portrait.setAttribute("class", "leftImg");
        about.appendChild(portrait);
        // "<div class='leftImg' src='./assets/images/JLHBitPortrait.png' alt='8-bit Jeffrey Portrait'>";
        // about.style.display = "inline";
        about.style.maxHeight = "24em";
        const framesPerTick = 2;

        let t = -1;
        let i = 0;
        let string;
        let p;
        const punctuation = [".", ",", "!", "?", ";", ":", "-"];
        let pause;

        function letterRoll(timestamp) {
            if (i < intro.length) {
                t++;
                pause = 0;
                if (t === 0) {
                    string = intro[i];
                    p = document.createElement('p');
                    p.setAttribute("id", "intro" + i);
                    about.appendChild(p);
                }
                if (t <= string.length * framesPerTick) {
                    if (t % (framesPerTick * 12) === 0) {
                        portrait.style.backgroundPositionX = "256px";                        
                    }  else if (t % (framesPerTick * 6) === 0) {
                        portrait.style.backgroundPositionX = "0px";                       
                    }
                    if (t % framesPerTick === 0) {
                        p.innerText = string.substring(0, t/framesPerTick);
                        if (punctuation.includes(intro[i][(t/framesPerTick) - 1])) { pause  =  250 }
                    }
                } else {
                    i++;
                    t = -1;
                    portrait.style.backgroundPositionX = "0px";
                }
            }
            setTimeout( () => requestAnimationFrame(letterRoll), pause);
        }

        setTimeout( () => {
            portrait.style.backgroundImage = "url('./assets/images/JLHBitPortrait.png')";
            requestAnimationFrame(letterRoll);
        }, 500);
    };
    
    const cursor = document.getElementById("cursor");
    let uninitialized = true;
    let t = 0;

    function blink(timestamp) {
        if (uninitialized) {
            t++;
            if (t % 60 === 0) {
                cursor.innerHTML = " "
            } else if (t % 30 === 0) {
                cursor.innerHTML = "_"
            }
            requestAnimationFrame(blink);
        }
    }

    requestAnimationFrame(blink);
}

initialize();
