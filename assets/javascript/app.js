const about = document.getElementById("about");
about.style.top = "20vh";
about.style.left = "10vw";
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
    return (placement.top >= 0 && placement.bottom <= window.innerHeight);
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
                    if (i > 0) {
                        const br = document.createElement("br");
                        about.appendChild(br);
                    }
                    portrait = document.createElement("div");
                    portrait.setAttribute("id", aboutArray[i].imgId);
                    portrait.setAttribute("class", "portraits");
                    portrait.style.cssFloat = aboutArray[i].imgFloat;
                    about.appendChild(portrait);
                    setTimeout( () => {
                        portrait.style.backgroundImage = aboutArray[i].imgUrl;
                        about.style.maxHeight = "100000px";
                        if (inWindow(portrait)) {
                            requestAnimationFrame(talking);
                        } else {
                            document.addEventListener("scroll", animate);

                            function animate() {
                                if (inWindow(portrait)) {
                                    document.removeEventListener("scroll", animate);
                                    requestAnimationFrame(talking);
                                }
                            }
                        }
                    }, 500);
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

                    setTimeout( () => {
                        i++;
                        j = 0;
                        t = -2;
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

function slamLeft() {
    document.getElementById(right + "Link").removeEventListener("click", slamLeft);
    const divIn = document.getElementById(right);
    const divOut = document.getElementById(center);
    divIn.style.display = "inline";
    
    let t = 0;
    //get number of vw in starting location
    let inX = parseInt(divIn.style.left.substring(0, divIn.style.left.length - 2));
    let outX = parseInt(divOut.style.left.substring(0, divOut.style.left.length - 2));

    function slamAnimation(timestamp) {
        if (t < 150) {
            console.log(divIn.style.left);
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
        }
    }

    // debugger
    requestAnimationFrame(slamAnimation);
    left = center;
    center = right;
    right = "none";
    document.getElementById(left + "Link").addEventListener("click", pushRight);
}

function pushRight() {
    document.getElementById(left + "Link").removeEventListener("click", pushRight);
    const divIn = document.getElementById(left);
    const divOut = document.getElementById(center);
    divIn.style.display = "inline";
    divIn.style.left = "10vw";
    divOut.style.left = "120vw";
    divOut.style.display = "none";
    right = center;
    center = left;
    left = "none";
    document.getElementById(right + "Link").addEventListener("click", slamLeft);
}

function jumpUp() {
    console.log(down,center, up);
    document.getElementById(down + "Link").removeEventListener("click", jumpUp);
    const divIn = document.getElementById(down);
    const divOut = document.getElementById(center);
    divIn.style.display = "inline";
    divIn.style.top = "20vh";
    divIn.style.bottom = null;
    divOut.style.bottom = "-20vw";
    divOut.style.display = "none";
    up = center;
    center = down;
    down = "none";
    document.getElementById(up + "Link").addEventListener("click", knockDown);
}

function knockDown() {
    document.getElementById(up + "Link").removeEventListener("click", knockDown);
    const divIn = document.getElementById(up);
    const divOut = document.getElementById(center);
    divIn.style.display = "inline";
    divIn.style.bottom = null;
    divIn.style.top = "20vh";
    divOut.style.top = "120vw";
    divOut.style.display = "none";
    down = center;
    center = up;
    up = "none";
    document.getElementById(down + "Link").addEventListener("click", jumpUp);
}