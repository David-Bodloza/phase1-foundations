// STATE (Single source of truth)
let sessionStarted = false;

// LOAD STATE FROM LOCAL STORAGE
if(localStorage.getItem("sessionStarted") === "true"){
    sessionStarted = true;
}

// SELECT ELEMENTS(Bridgs between JS and HTML)
const statusText = document.getElementById("status");
const startBtn = document.getElementById("startBtn");
const finishBtn = document.getElementById("finishBtn");

// INITIAL RENDER
render();

// EVENTS
startBtn.addEventListener("click",startSession);
finishBtn.addEventListener("click", finishSession);

// FUNCTIONS
function startSession(){
    sessionStarted = true;
    localStorage.setItem("sessionStarted","true")
    render();
}

function finishSession(){
    if(sessionStarted === false){
        alert("You must start first.")
        return;
    }

    sessionStarted = false
    localStorage.removeItem("sessionStarted")
    render();

   // statusText.textContent = "Status: Session Completed 🎯"
}

function render(){
    if(sessionStarted){
        statusText.textContent = "Status: Coding in progress";
    }else{
        statusText.textContent = "Status: Not started"
    }
}