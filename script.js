
// STATE (Many source of truths)
let sessions = [];

const savedSessions = localStorage.getItem("sessions");
const sessionList = document.getElementById("sessionList")

if(savedSessions){
    sessions = JSON.parse(savedSessions);
}

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

// FUNCTIONS/LOGIC
function startSession(){
    const newSession = {
        startTime: new Date().toLocaleString()
    };

    sessions.push(newSession);
    localStorage.setItem("sessions", JSON.stringify(sessions));
    render();
}

function finishSession(){
    if(sessions.length === 0){
        alert("No session to finish");
        return;
    }

    sessions[sessions.length - 1].endTime = new Date().toLocaleString();
    localStorage.setItem("sessions", JSON.stringify(sessions));
    render();
}

function render(){
    
    sessionList.innerHTML = "";

    sessions.forEach((session,index)=>{
        const li = document.createElement("li");

        if(session.endTime){
            li.textContent = `Session ${index + 1}: ${session.startTime} → ${session.endTime}`;

        }else{
            li.textContent = `Session ${index + 1}: ${session.startTime} (in progress)`;
        }

        sessionList.appendChild(li);
    });

}