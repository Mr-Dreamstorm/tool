const sections = ["home","tools","games"];

const nav = document.getElementById("nav");

nav.innerHTML = sections.map(s =>
`<button onclick="show('${s}')">${s}</button>`
).join("");

window.show = function(id){
document.querySelectorAll(".section")
.forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
};

// HOME
document.getElementById("home").innerHTML = `
<div class="card">
<h2>Ramazon Production System</h2>
<p>Deploy-ready version</p>
</div>
`;

// TOOLS
document.getElementById("tools").innerHTML = `
<div class="card">
<textarea id="txt"></textarea>
<button onclick="upper()">UPPER</button>
<button onclick="lower()">lower</button>
<div id="out"></div>
</div>
`;

window.upper = ()=> out.innerText = txt.value.toUpperCase();
window.lower = ()=> out.innerText = txt.value.toLowerCase();

// GAME
document.getElementById("games").innerHTML = `
<div class="card">
<canvas id="cv" width="300" height="300"></canvas>
<div id="score">0</div>
<button onclick="start()">Start</button>
</div>
`;

let ctx = document.getElementById("cv").getContext("2d");
let target, score = 0;

window.start = ()=>{
score = 0;
spawn();
};

function spawn(){
ctx.clearRect(0,0,300,300);
let x=Math.random()*260;
let y=Math.random()*260;
ctx.fillRect(x,y,40,40);
target={x,y};
}

document.getElementById("cv").onclick = e=>{
let x=e.offsetX,y=e.offsetY;
if(x>target.x && x<target.x+40 && y>target.y && y<target.y+40){
score++;
document.getElementById("score").innerText = score;
spawn();
}
};
