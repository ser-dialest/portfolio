// description font can get too big on extrememly wide windows. Need to adjust the min-height upon opening.


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

let width; // width in pixels of window
const portraitArray = []; //  array of portrait ids
const portfolioArray = ["SafeHamlet", "SiliconScrapera", "PokemonGIFFinder", "RCRWordGuess", "FFBattleRoyale", "AdvanceWarsRPS", "Demos"];
let portraitSize; // width in pixels of image
let portraitCSS; // text value for style of iamge
let portfolioHeight;
let fontSize;

let notResizing = true;
let delay = 500;

// Check if an element is visible
function inWindow(element) {
    var placement = element.getBoundingClientRect();
    return (
        ((placement.top < window.innerHeight && placement.bottom > 0) ||
        (placement.top < 0 && placement.bottom > window.innerHeight)) &&
        ((placement.left > 0 && placement.right < window.innerWidth) ||
        (placement.left < 0 && placement.right > window.innerWidth)) &&
        notResizing 
    )
};

function updateWindowDimensions() {
    width = Math.floor(window.innerWidth);
    fontSize = Math.floor(width / 40) + "px";

    portraitSize = Math.floor(width / 5);
    portraitCSS = portraitSize + "px";
    portraitArray.forEach((e) => portraitResize(document.getElementById(e)));
    aboutArray.forEach((e) => {
        let element = document.getElementById(e.id);
        if (element !== null) {
            divResize(element, portraitCSS);
        }
    });
    
    portfolioHeight = Math.floor(width / 4) + "px";
    divResize(document.getElementById("portfolio"), portfolioHeight);
    portfolioArray.forEach((e) => divResize(document.getElementById(e), portfolioHeight));
    divResize(document.getElementById("contact"), portfolioHeight);

}

function initialize() {
    document.addEventListener("click", clear);
    
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    const cursor = document.getElementById("cursor");
    let uninitialized = true;
    let t = 0;
    document.body.style.cursor = "pointer";

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

    function clear() {
        document.removeEventListener("click", clear);
        document.getElementById("start").style.display = "none";
        document.body.style.cursor = "initial";
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
    };
}

window.addEventListener("DOMContentLoaded", () => {
        initialize();
    }
);

// Animations for element movement

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

// Add and remove event listeners for trransition animations

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
    let jumpToPort2 = document.getElementById("jumpToPort2");
    if (jumpToPort2 !== null) {
        jumpToPort2.removeEventListener("click", portAnimation());
    }
    let jumpToContacts = document.getElementById("jumpToContacts");
    if (jumpToContacts !== null) {
        jumpToContacts.removeEventListener("click", contactAnimation());
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
    let jumpToPort2 = document.getElementById("jumpToPort2");
    if (jumpToPort2 !== null) {
        jumpToPort2.addEventListener("click", portAnimation());
    }
    let jumpToContacts = document.getElementById("jumpToContacts");
    if (jumpToContacts !== null) {
        jumpToContacts.addEventListener("click", contactAnimation());
    }
    animate();
}

// Text blocks for About section

function Block(id, imgUrl, imgId, imgFloat, text) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.imgId = imgId;
    this.imgFloat = imgFloat;
    this.text = text;
    this.t = 0;
    this.spans = 0;
    this.running = false;
}

const intro = new Block(
    "intro",
    "url('./assets/images/JLHBitSheet.png')",
    "jeff",
    "left",
    [
        ["Hello! My name is Jeffrey Lloyd Heatherly. Thanks so much for stopping by.\n", "intro1"],
        ["I'd like to take a moment to tell you a bit about the kind of developer I am, but if you'd rather jump straight over to the projects I've been working on, you can find them ", "intro2"],
        ["right here.", "jumpToPort" ]
    ]
);

const about1 = new Block(
    "about1",
    "url('./assets/images/LightSheet.png')",
    "jeff1",
    "right",
    [
        ["I'm a full-stack web developer who works primarily in Javascript, jQuery, and React.\n", "about1a"],
        ["I've been using Node.js and Express to execute the back ends of my projects, serving files, accessing APIs, and interacting with databases like MySQL and MongoDB.\n", "about1b"],
        ["I am also familiar with a variety of frameworks like Bootstrap and Handlebars.", "about1c"],
    ]
);

const about2 = new Block(
    "about2",
    "url('./assets/images/ToudouSheet.png')",
    "jeff2",
    "left",
    [
        ["Before learning to program, I worked as a tutor, and though I specialized in mathematics and the structure of English, I've led students to success in a wide range of subjects.\n", "about2a"],
        ["This was not because I already knew everything about the subjects they were trying to learn (I didn't), but because a person can learn anything if they believe they can and are willing to put in the work - and there's nothing I believe I cannot learn.\n", "about2b"],
        ["I also don't consider something learned unless I can explain it, so if you need something done with a tool I'm not an expert with yet (or maybe haven't even heard of), or if you need something explained to a client or colleague so they can make use of that resource, I can do that for you.", "about2c" ]
    ]
);

const about3 = new Block(
    "about3",
    "url('./assets/images/CaoCaoSheet.png')",
    "jeff3",
    "right",
    [
        ["Communicating with clients and colleagues is a skill I've honed over a decade of customer service experience. I've worked on every level from manning a register to leading the customer service department of a multi-million dollar company.\n", "about3a"],
        ["This means I've been charged not just with with assisting those clients who have proven themselves to be the most difficult to help, but training and supervising teams responsible for setting clients' expectations and making sure they are met.", "about3b"],
    ]
);

const about4 = new Block(
    "about4",
    "url('./assets/images/HigginsSheet.png')",
    "jeff4",
    "left",
    [
        ["I'm also a member of the Actors' Equity Association, which is the union for professional stage actors in the United States. Being a professional actor doesn't sound like it has much to do with being a developer, but you'd be surprised.\n", "about4a"],
        ["Actors bring into reality that which was only an idea before. They find creative solutions to challenges presented by an extensive and highly specific set of parameters called a script while following the plans of a director.\n", "about4b"],
        ["Actors are people who create something new while doing what they're told. They change themselves to meet the needs of the assignment - project after project after project.", "about4c" ]
    ]
);

const about5 = new Block(
    "about5",
    "url('./assets/images/ReverseSheet.png')",
    "jeff5",
    "right",
    [
        ["If you've come this far, you've seen a lot of different Jeffreys. That's because I am a lot of different Jeffreys! And if you need something done, one of them can make it happen for you.\n", "about5a"],
        ["If you would like some more evidence of what I can do, please head over to my ", "about5b"],
        ["portfolio", "jumpToPort2" ],
        [" where you can see a handful of the projects I'm working on. I'd especially like it if you spent a couple minutes checking out the game I've been making, ", "about5c"],
        ["Safe Hamlet", "safeHamletLink" ],
        [".\nIf you'd like to contact me, I'd love to be contacted by you! Please check out the ", "about5d"],
        ["contacts", "jumpToContacts"],
        [" section of this page for all the ways you can reach me.\nThanks again for stopping by! Have a great day!\n","about5e"],
        ["\n - Jeffrey Lloyd Heatherly","about5f"],
    ]
);

const aboutArray = [intro, about1, about2, about3, about4, about5];

function portraitResize(element) {
    // add a change to all the protraits
    if (notResizing) {
        setTimeout( () => {
            notResizing = true;
            delay = 250;
            animate();
        }, delay);
    }
    notResizing = false;
    element.style.width = portraitCSS;
    element.style.height = portraitCSS;
    element.style.backgroundPositionX = "0px";
    element.style.backgroundSize = (portraitSize * 2) + "px " + portraitCSS; 
}

function divResize(element, height) {
    element.style.minHeight = height;
    element.style.fontSize = fontSize;
}

function makeBlock(obj) {
    const div = document.createElement("div");
    div.setAttribute("id", obj.id);
    about.style.maxHeight = (about.offsetHeight + window.innerHeight) + "px";
    if (div.id !== "intro") {
        div.style.marginTop = "10vh";
    }
    const portrait = document.createElement("div");
    portraitArray.push(obj.imgId);
    portraitResize(portrait);
    divResize(div, portraitCSS);
    portrait.setAttribute("id", obj.imgId);
    portrait.setAttribute("class", "portraits");
    
    portrait.style.cssFloat = obj.imgFloat;
    if (obj.imgFloat === "right") {
        portrait.style.marginLeft = ".5em";
    } else {
        portrait.style.marginRight = ".5em";
    }
    div.appendChild(portrait);
    about.appendChild(div);
    setTimeout( () => {
        portrait.style.backgroundImage = obj.imgUrl;
        about.style.maxHeight = null;
        // newTalk(obj);
    }, 500);
}

let scrollEvent = false;

function animate() {
    document.removeEventListener("scroll", animate);
    scrollEvent = false;

    for (let i = 0; i < aboutArray.length; i++) {
        let div = document.getElementById(aboutArray[i].id);
        if (div !== null && !aboutArray[i].running) {
            newTalk(aboutArray[i]);
        }
    }
}

function newTalk(obj) {
    // animation variables
    let pause;
    const div = document.getElementById(obj.id);
    const portrait = document.getElementById(obj.imgId);
    let imgPosX = 0;
    // let string;
    let string;
    let span;

    // animation constants
    const punctuation = [".", ",", "!", "?", ";", ":", "-"];
    const framesPerTick = 2;

    function talk(timestamp) {
        // because we only want it to keep going if we can see it
        if (inWindow(div)) {
            obj.running = true;
            if (obj.spans < obj.text.length) {
                string = obj.text[obj.spans][0];
                if (obj.t === 0) {
                    span = document.createElement("span");
                    span.setAttribute("id", obj.text[obj.spans][1]);
                    if (span.id === "jumpToPort" || span.id === "jumpToPort2") {
                        span.addEventListener("click", portAnimation());
                        span.style.textDecoration = "underline";
                    } else if (span.id === "safeHamletLink") {
                        span.addEventListener("click", () => window.open('http://safehamlet.com'));
                        span.style.textDecoration = "underline";
                    } else if (span.id === "jumpToContacts") {
                        span.addEventListener("click", contactAnimation());
                        span.style.textDecoration = "underline";
                    }
                    div.appendChild(span);
                }
                if (obj.t / framesPerTick <= string.length) {
                    obj.t++;
                    pause = 0;
                    // Mouth movement
                    if (obj.t % (framesPerTick * 4) === 0) {
                        imgPosX += portraitSize;
                        portrait.style.backgroundPositionX = imgPosX + "px";                       
                    }
                    // Letter scroll
                    if (obj.t % framesPerTick === 0) {
                        document.getElementById(obj.text[obj.spans][1]).innerText = string.substring(0, obj.t/framesPerTick);
                        if (punctuation.includes(string[(obj.t/framesPerTick) - 1])) { pause  =  250 }
                    }
                } else {
                    obj.spans++;
                    obj.t = 0;
                    portrait.style.backgroundPositionX = "0px";
                }
                setTimeout( () => requestAnimationFrame(talk), pause);
            } else {
                // where the rest of the divisions get made
                if (obj.id === "intro" && obj.spans === obj.text.length) {
                    obj.spans++;
                    for (let i = 1; i < aboutArray.length; i++) {
                        makeBlock(aboutArray[i]);
                    }
                }
            }
        } else {
            obj.running = false;
            if (!scrollEvent) {
                document.addEventListener("scroll", animate);
                scrollEvent = true;
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

function contactAnimation() {
    if (up === "contact") {
        return knockDown;
    } else if (down === "contact") {
        return blastUp;
    } else if (right === "contact") {
        return slamLeft;
    } else if (left === "contact") {
        return runRight;
    }
}

function expand(event) {
    const button = event.target;
    button.removeEventListener("click", expand);
    button.innerHTML = "Hide Description";
    const div = document.getElementById(button.id + "Text");
    div.style.maxHeight = (div.offsetHeight + window.innerHeight) + "px";
    button.addEventListener("click", collapse);
}

function collapse(event) {
    const button = event.target;
    button.removeEventListener("click", collapse);
    button.innerHTML = "View Description";
    document.getElementById(button.id + "Text").style.maxHeight = 0 + "px";
    button.addEventListener("click", expand);
}

const expanders = document.getElementsByClassName("expander");

for (let i = 0; i < expanders.length; i++) {
    expanders[i].addEventListener("click", expand);
}
