const about = document.getElementById("about");
about.style.top = "20vh";
about.style.left = "10vw";
about.style.maxHeight = 0;

const portfolio = document.getElementById("portfolio");
portfolio.style.top = "20vh";
portfolio.style.left = "120vw";

const contact = document.getElementById("contact");
contact.style.top = "-110vh";
contact.style.left = "10vw";

let center = "about";
let up = "contact";
let down = "none";
let right = "portfolio";
let left = "none";

function inWindow(element) {
    var placement = element.getBoundingClientRect();
    return ((placement.top >= 0 && placement.top <= window.innerHeight) || placement.bottom <= window.innerHeight);
};

function initialize() {
    
    document.addEventListener("click", clear);
    
    function clear() {
        document.removeEventListener("click", clear);
        document.getElementById("start").style.display = "none";
        setTimeout(introduction, 500);
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
            } else {
                document.getElementById("portfolioLink").addEventListener("click", slamLeft);
                document.getElementById("contactLink").addEventListener("click", knockDown);                
            }
        }

        requestAnimationFrame(showHeader);

        about.innerHTML = "";
        about.style.padding = "36px";

        makeBlock(intro);

    // Trying new talk
    //     // Counters
    //     let i = 0;
    //     let j = 0;
    //     let t = -2;

    //     // animation variables
    //     let string;
    //     let p;
    //     let pause;
    //     let paragraph;
    //     let portrait;
    //     let imgPosX = 0;
    //     let aboutHeight = 0;
    //     let paragraphEnd = false;

    //     // animation constants
    //     const punctuation = [".", ",", "!", "?", ";", ":", "-"];
    //     const framesPerTick = 2;

    //     function talking(timestamp) {
    //         if (i < aboutArray.length) {
    //             if (t === -2) {
    //                 t++;
    //                 paragraphEnd = false;
    //                 aboutHeight = about.offsetHeight;
    //                 if (i > 0) {
    //                     const br = document.createElement("br");
    //                     about.appendChild(br);
    //                 }
    //                 portrait = document.createElement("div");
    //                 portrait.setAttribute("id", aboutArray[i].imgId);
    //                 portrait.setAttribute("class", "portraits");
    //                 portrait.style.cssFloat = aboutArray[i].imgFloat;
    //                 about.appendChild(portrait);
    //                 setTimeout( () => {
    //                     portrait.style.backgroundImage = aboutArray[i].imgUrl;
    //                     about.style.maxHeight = null;
    //                     if (inWindow(portrait)) {
    //                         requestAnimationFrame(talking);
    //                     } else {
    //                         document.addEventListener("scroll", animate);

    //                         function animate() {
    //                             if (inWindow(portrait)) {
    //                                 document.removeEventListener("scroll", animate);
    //                                 requestAnimationFrame(talking);
    //                             }
    //                         }
    //                     }
    //                 }, 500);
    //                 about.style.maxHeight = (aboutHeight +1000) + "px";
    //                 paragraph = aboutArray[i].text;
    //             } else if (j < paragraph.length) {
    //                 t++;
    //                 pause = 0;
    //                 if (t === 0) {
    //                     string = paragraph[j];
    //                     p = document.createElement('p');
    //                     about.appendChild(p);
    //                 }
    //                 if (t <= string.length * framesPerTick) {
    //                     // Mouth movement
    //                     if (t % (framesPerTick * 4) === 0) {
    //                         imgPosX += 256;
    //                         portrait.style.backgroundPositionX = imgPosX + "px";                       
    //                     }
    //                     // Letter scroll
    //                     if (t % framesPerTick === 0) {
    //                         p.innerText = string.substring(0, t/framesPerTick);
    //                         if (punctuation.includes(paragraph[j][(t/framesPerTick) - 1])) { pause  =  250 }
    //                     }
    //                 } else {
    //                     j++;
    //                     t = -1;
    //                     portrait.style.backgroundPositionX = "0px";
    //                 }
    //                 setTimeout( () => requestAnimationFrame(talking), pause);
    //             } else if (!paragraphEnd) {
    //                 paragraphEnd = true;
    //                 aboutHeight = about.offsetHeight;
    //                 about.style.maxHeight = aboutHeight + "px";

    //                 setTimeout( () => {
    //                     i++;
    //                     j = 0;
    //                     t = -2;
    //                     requestAnimationFrame(talking)
    //                 }, 1500);
    //             }
    //         } else {
    //             about.style.maxHeight = "100000px";
    //         }
    //     }
    //     requestAnimationFrame(talking);
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

// Trying this a new way

// function Block(imgUrl, imgId, imgFloat, text) {
//     this.imgUrl = imgUrl;
//     this.imgId = imgId;
//     this.imgFloat = imgFloat;
//     this.text = text;
// }

// const intro = new Block(
//     "url('./assets/images/JLHBitPortrait.png')",
//     "jeff",
//     "left",
//     [
//         ["Hello, this is Jeffrey. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi provident, officia vitae saepe placeat perspiciatis repellat aliquid iusto tenetur omnis.\n", null],
//         ["A button for the portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi, assumenda iure maiores, modi atque corrupti odio suscipit?", null],
//         ["Here's a link.", ]
//     ]
// );

// const about1 = new Block(
//     "url('./assets/images/JLHBitPortrait.png')",
//     "jeff",
//     "right",
//     [
//         "Jeffrey again! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi provident, officia vitae saepe placeat perspiciatis repellat aliquid iusto tenetur omnis.",
//         "A button for the portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi, assumenda iure maiores, modi atque corrupti odio suscipit?"
//     ]
// );

// const about2 = new Block(
//     "url('./assets/images/JLHBitPortrait.png')",
//     "jeff",
//     "left",
//     [
//         "Jeffrey again! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi provident, officia vitae saepe placeat perspiciatis repellat aliquid iusto tenetur omnis.",
//         "A button for the portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi, assumenda iure maiores, modi atque corrupti odio suscipit?"
//     ]
// );

// const about3 = new Block(
//     "url('./assets/images/JLHBitPortrait.png')",
//     "jeff",
//     "right",
//     [
//         "Jeffrey again! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi provident, officia vitae saepe placeat perspiciatis repellat aliquid iusto tenetur omnis.",
//         "A button for the portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi, assumenda iure maiores, modi atque corrupti odio suscipit?"
//     ]
// );

// const aboutArray = [intro, about1, about2, about3];

function slamLeft() {
    removeListeners();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const divIn = document.getElementById(right);
    const divOut = document.getElementById(center);
    divIn.style.display = "inline";
    
    let t = 0;
    //get number of vw in starting location
    let inX = parseInt(divIn.style.left.substring(0, divIn.style.left.length - 2));
    let outX = parseInt(divOut.style.left.substring(0, divOut.style.left.length - 2));

    function slamAnimation(timestamp) {
        if (t < 150) {
            if (t <= 30) {
            } else if (t <= 40) {
                inX -= 3;
                if (t === 40) {
                    outX--;
                }
            } else if (t <= 45) {
                inX--;
                outX--;
            } else if (t <= 55) {
                inX -= .5;
                outX -= .5;
            } else if (t <= 65) {
            } else if (t <= 69) {
                inX += .5;
                outX += .5;
            } else if (t <= 80) {
                inX++;
                outX++;
            } else if (t <= 90) {
            } else if (t <= 100) {
                inX -= 2;
                outX -= 2;
            } else if (t <= 121) {
                inX -= 3;
                outX -= 3;
            } else {
                outX -= 3;
            }
            divIn.style.left = inX + "vw";
            divOut.style.left = outX + "vw"; 
            t++;
            requestAnimationFrame(slamAnimation);
        } else {
            divOut.style.left = "-120vw";
            divOut.style.display = "none";
            left = center;
            center = right;
            right = "none";
            addListeners();
        }
    }

    requestAnimationFrame(slamAnimation);
}

function runRight() {
    removeListeners();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const divIn = document.getElementById(left);
    const divOut = document.getElementById(center);
    divIn.style.display = "inline";

    let t = 0;
    //get number of vw in starting location
    let inX = parseInt(divIn.style.left.substring(0, divIn.style.left.length - 2));
    let outX = parseInt(divOut.style.left.substring(0, divOut.style.left.length - 2));

    function runAnimation(timestamp) {
        if (t < 150) {
            if (t <= 30) {
            } else if (t <= 40) {
                outX -= .25;
            } else if (t <= 55) {
            } else if (t <= 65) {
                outX -= .25;
            } else if (t <= 80) {
            } else if (t <= 90) {
                outX += .25;
            } else if (t <= 110) {
                inX += 2;
                outX += .25;
            } else if (t <= 120) {
                inX += 2;
                outX++;
            } else if (t <= 130) {
                inX += 2;
                outX += 2;
            } else if (t <= 146) {
                inX += 3;
                outX += 3;
            } else if (t <= 147) {
                inX += 1;
                outX += 3;
            } else {
                inX += .5;
                outX += 3;
            }

            divIn.style.left = inX + "vw";
            divOut.style.left = outX + "vw"; 
            t++;
            requestAnimationFrame(runAnimation);
        } else {
            divOut.style.left = "120vw";
            divOut.style.display = "none";
            right = center;
            center = left;
            left = "none";
            addListeners();            
        }
    }
    requestAnimationFrame(runAnimation);
}

function blastUp() {
    removeListeners();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const divIn = document.getElementById(down);
    const divOut = document.getElementById(center);
    let t = 0;
    //get number of vw in starting location
    let outX = parseInt(divOut.style.left.substring(0, divOut.style.left.length - 2));
    let outY = parseInt(divOut.style.top.substring(0, divOut.style.top.length - 2));
    let inY = parseInt(divIn.style.top.substring(0, divIn.style.left.top - 2));

    function blastAnimation(timestamp) {
        if (t <= 150) {
            if (t <= 30) {
            } else if (t <= 60) {
                if (t % 10 === 2) {
                    outX -= 2;
                    outY -= 2;
                } else if (t % 10 === 4) {
                    outY += 2;
                } else if (t % 10 === 6) {
                    outX += 2;
                    outY--;
                } else if (t % 10 === 8) {
                    outX -= 2;
                    outY++;
                } else if (t % 10 === 0) {
                    outX += 2;
                }
            } else if (t <= 70) {
                if (t === 61) {
                    inY = 120;
                }
                outY -= .5;
            } else if ( t<=75 ) {
                outY--;
            } else if (t <= 80) {
                outY -= 2;
            } else if (t <= 105) {
                outY -= 4;
            } else if (t <= 130) {
                let outPlacement = divOut.getBoundingClientRect();
                if (outPlacement.bottom > 0) {
                    outY -= 6;
                    t--;
                } else {
                    if (t === 106) {
                        divIn.style.display = "inline";
                    }
                    inY -= 4;
                }
            } else if (t <= 135) {
                inY --;
            } else if (t <= 145) {
            } else {
                inY ++;
            }
            divIn.style.top = inY + "vh";
            divOut.style.top = outY + "vh";            
            divOut.style.left = outX + "vw"; 
            t++;
            requestAnimationFrame(blastAnimation);
        } else {
            divOut.style.display = "none";
            divOut.style.maxHeight = null;
            up = center;
            center = down;
            down = "none";
            addListeners();    
        }
    }
    requestAnimationFrame(blastAnimation);
}

function knockDown() {
    removeListeners();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const divIn = document.getElementById(up);
    const divOut = document.getElementById(center);

    let t = 0;
    //get number of vw in starting location
    let inButt = 100;
    let inY = parseInt(divIn.style.top.substring(0, divIn.style.top.length - 2));
    let outY = parseInt(divOut.style.top.substring(0, divOut.style.top.length - 2));
    
    divIn.style.display = "inline";
    
    function knockAnimation(timestamp) {
        if (t <= 103) {
            if (t <= 15) {
            } else if (t <= 30) {
                inButt -= 2;
                divIn.style.bottom = inButt + "vh";
                if (t === 30) {
                    outY += 5;
                }
            } else if ( t <= 40) {
            } else if ( t <= 45) {
                inButt += .5;
                divIn.style.bottom = inButt + "vh";
            } else if ( t <= 50) {
                inButt += 2.5;
                divIn.style.bottom = inButt + "vh";
            } else if ( t <= 55) {
            } else if ( t <= 75 ) {
                if (t % 4 === 0) {
                    divOut.style.left = 11 + "vw";
                } else if ( t % 2 ===0) {
                    divOut.style.left = 9 + "vw";
                }
            } else if ( t === 76 ) {
                divOut.style.left = 10 + "vw";
                divIn.style.bottom = null;
            } else if ( t <= 80 ) {
            } else if ( t <= 85) {
                outY += .5;
            } else if ( t <= 90) {
                outY++;
            } else if ( t <= 100) {
                outY += 3;
            } else if ( t <= 101) {
                if (inY < 0) {
                    inY += 3;
                    outY += 5;
                    t--;
                }
                if (outY > 100) {
                    divOut.style.display = "none";
                }
            } else if ( t <= 102) {
                if (inY < 20) {
                    inY++;
                    t--;
                }
            }
            if (t >= 76) {
                divIn.style.top = inY + "vh";
            }
            divOut.style.top = outY + "vh"; 
            t++;
            requestAnimationFrame(knockAnimation);
        } else {
            divOut.style.display = "none";
            divOut.style.top = "120vw";
            down = center;
            center = up;
            up = "none";
            addListeners();
        }
    }
    requestAnimationFrame(knockAnimation);
}

function removeListeners() {
    if ( right !== "none") {
        document.getElementById(right + "Link").removeEventListener("click", slamLeft);
    }
    if ( left !== "none") {
        document.getElementById(left + "Link").removeEventListener("click", runRight);
    }
    if ( down !== "none") {
        document.getElementById(down + "Link").removeEventListener("click", blastUp);
    }
    if ( up !== "none") {
        document.getElementById(up + "Link").removeEventListener("click", knockDown);
    }
    let jumpToPort = document.getElementById("jumpToPort");
    if (jumpToPort !== null) {
        jumpToPort.removeEventListener("click", portAnimation());
    } 
}

function addListeners() {
    if ( right !== "none") {
        document.getElementById(right + "Link").addEventListener("click", slamLeft);
    }
    if ( left !== "none") {
        document.getElementById(left + "Link").addEventListener("click", runRight);
    }
    if ( down !== "none") {
        document.getElementById(down + "Link").addEventListener("click", blastUp);
    }
    if ( up !== "none") {
        document.getElementById(up + "Link").addEventListener("click", knockDown);
    }
    let jumpToPort = document.getElementById("jumpToPort");
    if (jumpToPort !== null) {
        jumpToPort.addEventListener("click", portAnimation());
    } 
}

// obj = { id imgURL imgId imgFloat text = [["text", "id"]] t spans}

function Block(id, imgUrl, imgId, imgFloat, text, t, spans) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.imgId = imgId;
    this.imgFloat = imgFloat;
    this.text = text;
    this.t = t;
    this.spans = spans;
}

const intro = new Block(
    "intro",
    "url('./assets/images/JLHBitPortrait.png')",
    "jeff",
    "left",
    [
        ["Hello, this is Jeffrey. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi provident, officia vitae saepe placeat perspiciatis repellat aliquid iusto tenetur omnis.\n", "intro1"],
        ["A button for the portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi, assumenda iure maiores, modi atque corrupti odio suscipit?", "intro2"],
        ["Here's a link.", "jumpToPort" ]
    ],
    0,
    0
);

function makeBlock(obj) {
    const div = document.createElement("div");
    div.setAttribute("id", obj.id);
    const portrait = document.createElement("div");
    portrait.setAttribute("id", obj.imgId);
    portrait.setAttribute("class", "portraits");
    portrait.style.cssFloat = obj.imgFloat;
    div.appendChild(portrait);
    about.appendChild(div);
    setTimeout( () => {
        portrait.style.backgroundImage = obj.imgUrl;
        about.style.maxHeight = null;
        newTalk(obj);
    }, 500);
}

// there will still be iisues that have to do with when these things are going to fire/writing event liseteners for eachof them / not to mention sound
function newTalk(obj) {
    // animation variables
    let pause;
    const div = document.getElementById(obj.id);
    const portrait = document.getElementById(obj.imgId);
    let imgPosX = 0;
    let string;
    let span;

    // animation constants
    const punctuation = [".", ",", "!", "?", ";", ":", "-"];
    const framesPerTick = 2;

    function talk(timestamp) {
        // because we only want it to keep going if we can see it
        if (inWindow(div)) {
            if (obj.spans < obj.text.length) {
                if (obj.t === 0) {
                    string = obj.text[obj.spans][0];
                    span = document.createElement("span");
                    span.setAttribute("id", obj.text[obj.spans][1]);
                    if (span.id === "jumpToPort") {
                        span.addEventListener("click", portAnimation());
                        span.style.textDecoration = "underline";
                    }
                    div.appendChild(span);
                }
                if (obj.t / framesPerTick <= string.length) {
                    obj.t++;
                    pause = 0;
                    // Mouth movement
                    if (obj.t % (framesPerTick * 4) === 0) {
                        imgPosX += 256;
                        portrait.style.backgroundPositionX = imgPosX + "px";                       
                    }
                    // Letter scroll
                    if (obj.t % framesPerTick === 0) {
                        span.innerText = string.substring(0, obj.t/framesPerTick);
                        if (punctuation.includes(string[(obj.t/framesPerTick) - 1])) { pause  =  250 }
                    }
                } else {
                    obj.spans++;
                    obj.t = 0;
                    portrait.style.backgroundPositionX = "0px";
                }
                setTimeout( () => requestAnimationFrame(talk), pause);
            }
        } else {
            document.addEventListener("scroll", animate);

            function animate() {
                if (inWindow(div)) {
                    document.removeEventListener("scroll", animate);
                    newTalk(obj);
                }
            }
        }
    }
    requestAnimationFrame(talk);
};

function portAnimation() {
    if (up === "portfolio") {
        return knockDown;
    } else if (down === "portfolio") {
        return blastUp;
    } else if (right === "portfolio") {
        return slamLeft;
    } else if (left === "portfolio") {
        return runRight;
    }
}