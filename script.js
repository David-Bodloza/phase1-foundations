
// STATE (Many source of truths)
let sessions = [];
let clients = [];


// LOAD STATE FROM LOCAL STORAGE
const savedSessions = localStorage.getItem("sessions");
if(savedSessions){
    sessions = JSON.parse(savedSessions);
}

const savedClients = localStorage.getItem("clients");
if(savedClients){
    clients = JSON.parse(savedClients);
}

// SELECT ELEMENTS(Bridgs between JS and HTML)

// Session System
const startBtn = document.getElementById("startBtn");
const finishBtn = document.getElementById("finishBtn");
const sessionList = document.getElementById("sessionList")

// Freelance Client System
const clientForm = document.getElementById("clientForm");
const clientName = document.getElementById("clientName");
const clientEmail = document.getElementById("clientEmail")
const clientPrice = document.getElementById("clientPrice");
const clientList = document.getElementById("clientList");



// INITIAL RENDER

// Render or Display sessions
renderSession();

// Render or Display freelance clients
renderClient();

// EVENTS
// session system
startBtn.addEventListener("click",startSession);
finishBtn.addEventListener("click", finishSession);

// Freelance client system
clientForm.addEventListener("submit",submitClient);

// FUNCTIONS/LOGIC
// Session System 
function startSession(){
    const newSession = {
        startTime: new Date().toLocaleString()
    };

    sessions.push(newSession);
    localStorage.setItem("sessions", JSON.stringify(sessions));
    renderSession();
}

function finishSession(){
    if(sessions.length === 0){
        alert("No session to finish");
        return;// Exit App
    }

    sessions[sessions.length - 1].endTime = new Date().toLocaleString();
    localStorage.setItem("sessions", JSON.stringify(sessions));
    renderSession();
}

// Freelance Client Sysytem
function submitClient(event){
    event.preventDefault();

    const name = clientName.value.trim();
    const email = clientEmail.value.trim();
    const price = clientPrice.value.trim();

    if(!name || !email || !price){
        alert("All fields are required.");
        return;// exit App
    }

    const newClient = {
        name,
        email,
        price
    };

    clients.push(newClient);
    localStorage.setItem("clients", JSON.stringify(clients));

    clientForm.reset();
    renderClient();
}

// RENDER/DISPLAY TO UI(HTML)
// Render/Dislay Sessions
function renderSession(){
    
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

// Render/Dislay Clients
function renderClient(){
    clientList.innerHTML = "";

    clients.forEach((client, index)=>{
        const li = document.createElement("li");

        li.textContent = `Name: ${client.name}, Email: ${client.email}, Price: ${client.price}`
        clientList.appendChild(li);
    });
}