// STATE
let sessionStarted = false;

// SELECT ELEMENTS(Bridgs between JS and HTML)
const statusText = document.getElementById("status");
const startBtn = document.getElementById("startBtn");
const finishBtn = document.getElementById("finishBtn");

// EVENTS
startBtn.addEventListener("click",startSession);
finishBtn.addEventListener("click", finishSession);

//Logic/Functions
function startSession(){
    sessionStarted = true;
    statusText.textContent = "Status: Coding in progress";
}

function finishSession(){
    if(!sessionStarted){
        alert("You must start first.")
        return;
    }

    statusText.textContent = "Status: Session Completed 🎯"
}

