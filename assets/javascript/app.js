const about = document.getElementById("about");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");

function inWindow(element) {
    var placement = element.getBoundingClientRect();
    return (placement.top >= 0 && placement.bottom <= window.innerHeight);
};

function initialize() {
    
    document.addEventListener("click", clear);
    
    function clear() {
        document.removeEventListener("click", clear);
        document.getElementById("start").style.display = "none";
        setTimeout( introduction, 500);
    }

    function introduction() {
        uninitialized = false;

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

        about.innerHTML = "";
        about.style.padding = "36px";

        // for (let i = 0; i < aboutArray.length; i++) {
        //     const portrait = document.createElement("div");
        //     portrait.setAttribute("id", aboutArray[i].imgId);
        //     portrait.setAttribute("class", "portraits");
        //     portrait.style.cssFloat = aboutArray[i].imgFloat;
        //     about.appendChild(portrait);
        //     about.style.maxHeight = "100em";

        //     const punctuation = [".", ",", "!", "?", ";", ":", "-"];
        //     const framesPerTick = 2;
        //     let t = -1;
        //     let j = 0;
        //     let string;
        //     let p;
        //     let pause;
        //     let paragraph = aboutArray[i].text;


        //     function letterRoll(timestamp) {
        //         if (j < paragraph.length) {
        //             t++;
        //             pause = 0;
        //             if (t === 0) {
        //                 string = paragraph[j];
        //                 p = document.createElement('p');
        //                 // p.setAttribute("id", "paragraph" + j);
        //                 about.appendChild(p);
        //             }
        //             if (t <= string.length * framesPerTick) {
        //                 if (t % (framesPerTick * 12) === 0) {
        //                     portrait.style.backgroundPositionX = "256px";                        
        //                 }  else if (t % (framesPerTick * 6) === 0) {
        //                     portrait.style.backgroundPositionX = "0px";                       
        //                 }
        //                 if (t % framesPerTick === 0) {
        //                     p.innerText = string.substring(0, t/framesPerTick);
        //                     if (punctuation.includes(paragraph[j][(t/framesPerTick) - 1])) { pause  =  250 }
        //                 }
        //             } else {
        //                 j++;
        //                 t = -1;
        //                 portrait.style.backgroundPositionX = "0px";
        //             }
        //         }
        //         setTimeout( () => requestAnimationFrame(letterRoll), pause);
        //     }
    
        //     setTimeout( () => {
        //         portrait.style.backgroundImage = aboutArray[i].imgUrl;
        //         requestAnimationFrame(letterRoll);
        //     }, 500);
        // } 

        // Counters
        let i = 0;
        let j = 0;
        let t = -2;

        // animation variables
        let string;
        let p;
        let pause;
        let paragraph;
        let portrait;
        let imgPosX = 0;
        let aboutHeight = 0;
        let paragraphEnd = false;

        // animation constants
        const punctuation = [".", ",", "!", "?", ";", ":", "-"];
        const framesPerTick = 2;

        function talking(timestamp) {
            if (i < aboutArray.length) {
                if (t === -2) {
                    t++;
                    paragraphEnd = false;
                    aboutHeight = about.offsetHeight;
                    portrait = document.createElement("div");
                    portrait.setAttribute("id", aboutArray[i].imgId);
                    portrait.setAttribute("class", "portraits");
                    portrait.style.cssFloat = aboutArray[i].imgFloat;
                    about.appendChild(portrait);
                    setTimeout( () => {
                        portrait.style.backgroundImage = aboutArray[i].imgUrl;
                        requestAnimationFrame(talking);
                        about.style.maxHeight = "100000px";
                    }, 500);
                    console.log(aboutHeight);
                    about.style.maxHeight = (aboutHeight +1000) + "px";
                    paragraph = aboutArray[i].text;
                } else if (j < paragraph.length) {
                    t++;
                    pause = 0;
                    if (t === 0) {
                        string = paragraph[j];
                        p = document.createElement('p');
                        about.appendChild(p);
                    }
                    if (t <= string.length * framesPerTick) {
                        // Mouth movement
                        if (t % (framesPerTick * 4) === 0) {
                            imgPosX += 256;
                            portrait.style.backgroundPositionX = imgPosX + "px";                       
                        }
                        // Letter scroll
                        if (t % framesPerTick === 0) {
                            p.innerText = string.substring(0, t/framesPerTick);
                            if (punctuation.includes(paragraph[j][(t/framesPerTick) - 1])) { pause  =  250 }
                        }
                    } else {
                        j++;
                        t = -1;
                        portrait.style.backgroundPositionX = "0px";
                    }
                    setTimeout( () => requestAnimationFrame(talking), pause);
                } else if (!paragraphEnd) {
                    paragraphEnd = true;
                    aboutHeight = about.offsetHeight;
                    about.style.maxHeight = aboutHeight + "px";

                    console.log("end of block", i);
                    setTimeout( () => {
                        i++;
                        j = 0;
                        t = -2;
                        console.log(about.style.maxHeight);
                        requestAnimationFrame(talking)
                    }, 1500);
                }
            } else {
                about.style.maxHeight = "100000px";
            }
        }
        // debugger
        requestAnimationFrame(talking);
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

function Block(imgUrl, imgId, imgFloat, text) {
    this.imgUrl = imgUrl;
    this.imgId = imgId;
    this.imgFloat = imgFloat;
    this.text = text;
}

const intro = new Block(
    "url('./assets/images/JLHBitPortrait.png')",
    "jeff",
    "left",
    [
        "Hello, this is Jeffrey. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi provident, officia vitae saepe placeat perspiciatis repellat aliquid iusto tenetur omnis.",
        "A button for the portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi, assumenda iure maiores, modi atque corrupti odio suscipit?"
    ]
);

const about1 = new Block(
    "url('./assets/images/JLHBitPortrait.png')",
    "jeff",
    "right",
    [
        "Jeffrey again! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi provident, officia vitae saepe placeat perspiciatis repellat aliquid iusto tenetur omnis.",
        "A button for the portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi, assumenda iure maiores, modi atque corrupti odio suscipit?"
    ]
);

const about2 = new Block(
    "url('./assets/images/JLHBitPortrait.png')",
    "jeff",
    "left",
    [
        "Jeffrey again! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi provident, officia vitae saepe placeat perspiciatis repellat aliquid iusto tenetur omnis.",
        "A button for the portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi, assumenda iure maiores, modi atque corrupti odio suscipit?"
    ]
);

const about3 = new Block(
    "url('./assets/images/JLHBitPortrait.png')",
    "jeff",
    "right",
    [
        "Jeffrey again! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi provident, officia vitae saepe placeat perspiciatis repellat aliquid iusto tenetur omnis.",
        "A button for the portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi, assumenda iure maiores, modi atque corrupti odio suscipit?"
    ]
);

const aboutArray = [intro, about1, about2, about3];



