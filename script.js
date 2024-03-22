let mc = document.getElementById('minecraft');

mc.style.width = '1642px';
mc.style.height = '900px';

let GuiInGameMenu = document.createElement('div');
let isGuiOpen;

document.body.addEventListener('keydown', (e) => {

    isGuiOpen = true;

    if (e.key == 'Escape') {
        GuiInGameMenu.hidden = false;
        let menu = `
        <div class="gui">
        <div class="top-elements">
            <button onclick="closeGUI()" class="close">X</button>
            <h1>Settings</h1>

            <label for="music">Music:</label>
            <input type="range" name="music" id="music" min="0" max="100" value="35">

            <label class="graphic-title" for="graphic">Graphic:</label>

            <div class="graphic">
                <button onclick="setLowGraphic()" class="graphicBtn">Low</button>
                <button onclick="setNormalGraphic()" class="graphicBtn">Normal</button>
                <button onclick="setHighGraphic()" class="graphicBtn">High</button>
            </div>
        </div>
    </div>
        `;

        GuiInGameMenu.innerHTML = menu;
        document.body.append(GuiInGameMenu);
    }
});
function closeGUI() {
    isGuiOpen = false;
    GuiInGameMenu.hidden = true;
}

let g1 = document.getElementById('g1');
let g2 = document.getElementById('g2');
let g3 = document.getElementById('g3');
let g4 = document.getElementById('g4');
let g5 = document.getElementById('g5');
let g6 = document.getElementById('g6');
let g7 = document.getElementById('g7');
let g8 = document.getElementById('g8');
let g9 = document.getElementById('g9');
let g10 = document.getElementById('g10');
let g11 = document.getElementById('g11');

let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let d3 = document.getElementById('d3');
let d4 = document.getElementById('d4');
let d5 = document.getElementById('d5');
let d6 = document.getElementById('d6');
let d7 = document.getElementById('d7');
let d8 = document.getElementById('d8');
let d9 = document.getElementById('d9');
let d10 = document.getElementById('d10');
let d11 = document.getElementById('d11');

let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s3 = document.getElementById('s3');
let s4 = document.getElementById('s4');
let s5 = document.getElementById('s5');
let s6 = document.getElementById('s6');
let s7 = document.getElementById('s7');
let s8 = document.getElementById('s8');
let s9 = document.getElementById('s9');
let s10 = document.getElementById('s10');
let s11 = document.getElementById('s11');

let playerPosition = 0;
let walking = false;

let player = document.querySelector('.player');

function setLowGraphic() {

    mc.style.background = 'skyblue';

    g1.setAttribute('src', 'low_grass_block.png');
    g2.setAttribute('src', 'low_grass_block.png');
    g3.setAttribute('src', 'low_grass_block.png');
    g4.setAttribute('src', 'low_grass_block.png');
    g5.setAttribute('src', 'low_grass_block.png');
    g6.setAttribute('src', 'low_grass_block.png');
    g7.setAttribute('src', 'low_grass_block.png');
    g8.setAttribute('src', 'low_grass_block.png');
    g9.setAttribute('src', 'low_grass_block.png');
    g10.setAttribute('src', 'low_grass_block.png');
    g11.setAttribute('src', 'low_grass_block.png');

    d1.setAttribute('src', 'low_dirt.png');
    d2.setAttribute('src', 'low_dirt.png');
    d3.setAttribute('src', 'low_dirt.png');
    d4.setAttribute('src', 'low_dirt.png');
    d5.setAttribute('src', 'low_dirt.png');
    d6.setAttribute('src', 'low_dirt.png');
    d7.setAttribute('src', 'low_dirt.png');
    d8.setAttribute('src', 'low_dirt.png');
    d9.setAttribute('src', 'low_dirt.png');
    d10.setAttribute('src', 'low_dirt.png');
    d11.setAttribute('src', 'low_dirt.png');

   s1.setAttribute('src', 'low_stone_block.png');
   s2.setAttribute('src', 'low_stone_block.png');
   s3.setAttribute('src', 'low_stone_block.png');
   s4.setAttribute('src', 'low_stone_block.png');
   s5.setAttribute('src', 'low_stone_block.png');
   s6.setAttribute('src', 'low_stone_block.png');
   s7.setAttribute('src', 'low_stone_block.png');
   s8.setAttribute('src', 'low_stone_block.png');
   s9.setAttribute('src', 'low_stone_block.png');
   s10.setAttribute('src', 'low_stone_block.png');
   s11.setAttribute('src', 'low_stone_block.png');
}

function setNormalGraphic() {

    mc.style.background = 'url(\'sky.png\')';

    g1.setAttribute('src', 'grass_block.png');
    g2.setAttribute('src', 'grass_block.png');
    g3.setAttribute('src', 'grass_block.png');
    g4.setAttribute('src', 'grass_block.png');
    g5.setAttribute('src', 'grass_block.png');
    g6.setAttribute('src', 'grass_block.png');
    g7.setAttribute('src', 'grass_block.png');
    g8.setAttribute('src', 'grass_block.png');
    g9.setAttribute('src', 'grass_block.png');
    g10.setAttribute('src', 'grass_block.png');
    g11.setAttribute('src', 'grass_block.png');

    d1.setAttribute('src', 'dirt.png');
    d2.setAttribute('src', 'dirt.png');
    d3.setAttribute('src', 'dirt.png');
    d4.setAttribute('src', 'dirt.png');
    d5.setAttribute('src', 'dirt.png');
    d6.setAttribute('src', 'dirt.png');
    d7.setAttribute('src', 'dirt.png');
    d8.setAttribute('src', 'dirt.png');
    d9.setAttribute('src', 'dirt.png');
    d10.setAttribute('src', 'dirt.png');
    d11.setAttribute('src', 'dirt.png');

   s1.setAttribute('src', 'stone_block.png');
   s2.setAttribute('src', 'stone_block.png');
   s3.setAttribute('src', 'stone_block.png');
   s4.setAttribute('src', 'stone_block.png');
   s5.setAttribute('src', 'stone_block.png');
   s6.setAttribute('src', 'stone_block.png');
   s7.setAttribute('src', 'stone_block.png');
   s8.setAttribute('src', 'stone_block.png');
   s9.setAttribute('src', 'stone_block.png');
   s10.setAttribute('src', 'stone_block.png');
   s11.setAttribute('src', 'stone_block.png');
}

function setHighGraphic() {

    mc.style.background = 'url(\'high_sky.png\')';

    g1.setAttribute('src', 'high_grass_block.png');
    g2.setAttribute('src', 'high_grass_block.png');
    g3.setAttribute('src', 'high_grass_block.png');
    g4.setAttribute('src', 'high_grass_block.png');
    g5.setAttribute('src', 'high_grass_block.png');
    g6.setAttribute('src', 'high_grass_block.png');
    g7.setAttribute('src', 'high_grass_block.png');
    g8.setAttribute('src', 'high_grass_block.png');
    g9.setAttribute('src', 'high_grass_block.png');
    g10.setAttribute('src', 'high_grass_block.png');
    g11.setAttribute('src', 'high_grass_block.png');

    d1.setAttribute('src', 'high_dirt.png');
    d2.setAttribute('src', 'high_dirt.png');
    d3.setAttribute('src', 'high_dirt.png');
    d4.setAttribute('src', 'high_dirt.png');
    d5.setAttribute('src', 'high_dirt.png');
    d6.setAttribute('src', 'high_dirt.png');
    d7.setAttribute('src', 'high_dirt.png');
    d8.setAttribute('src', 'high_dirt.png');
    d9.setAttribute('src', 'high_dirt.png');
    d10.setAttribute('src', 'high_dirt.png');
    d11.setAttribute('src', 'high_dirt.png');

   s1.setAttribute('src', 'high_stone_block.png');
   s2.setAttribute('src', 'high_stone_block.png');
   s3.setAttribute('src', 'high_stone_block.png');
   s4.setAttribute('src', 'high_stone_block.png');
   s5.setAttribute('src', 'high_stone_block.png');
   s6.setAttribute('src', 'high_stone_block.png');
   s7.setAttribute('src', 'high_stone_block.png');
   s8.setAttribute('src', 'high_stone_block.png');
   s9.setAttribute('src', 'high_stone_block.png');
   s10.setAttribute('src', 'high_stone_block.png');
   s11.setAttribute('src', 'high_stone_block.png');
}

document.body.addEventListener('keydown', (e) => {

    if (e.key == 'ArrowLeft' || e.key == 's' || e.key == 'a') {
        walking = true;
        playerPosition -= 15;
        player.style.left = playerPosition + 'px';
    } else if (e.key == 'w' || e.key == 'd') {
        walking = true;
        playerPosition += 15;
        player.style.left = playerPosition + 'px';
    } else if (e.key == 'ArrowUp' || e.key == ' ') {
        walking = false;
        player.classList.add('jump');

        setTimeout(() => {
            player.classList.remove('jump');
        }, 500);
    } else if (e.key == 'ArrowRight') {
        player.classList.add('jump');
        playerPosition += 20;
        player.style.left = playerPosition + 'px';

        setTimeout(() => {
            player.classList.remove('jump');
        }, 500);
    }
});

/* Grass BREAK */

g1.addEventListener('click', () => {
    g1.style.display = 'none';
    g1.style.border = 'none';
    player.style.top = '470px'
});
g2.addEventListener('click', () => {
    g2.style.display = 'none';
    g2.style.border = 'none';
    player.style.top = '470px'
});
g3.addEventListener('click', () => {
    g3.style.display = 'none';
    g3.style.border = 'none';
    player.style.top = '470px'
});
g4.addEventListener('click', () => {
    g4.style.display = 'none';
    g4.style.border = 'none';
    player.style.top = '470px'
});
g5.addEventListener('click', () => {
    g5.style.display = 'none';
    g5.style.border = 'none';
    player.style.top = '470px'
});
g6.addEventListener('click', () => {
    g6.style.display = 'none';
    g6.style.border = 'none';
    player.style.top = '470px'
});
g7.addEventListener('click', () => {
    g7.style.display = 'none';
    g7.style.border = 'none';
    player.style.top = '470px'
});
g8.addEventListener('click', () => {
    g8.style.display = 'none';
    g8.style.border = 'none';
    player.style.top = '470px'
});
g9.addEventListener('click', () => {
    g9.style.display = 'none';
    g9.style.border = 'none';
    player.style.top = '470px'
});
g10.addEventListener('click', () => {
    g10.style.display = 'none';
    g10.style.border = 'none';
    player.style.top = '470px'
});
g11.addEventListener('click', () => {
    g11.style.display = 'none';
    g11.style.border = 'none';
    player.style.top = '470px'
});

/* Dirt BREAK */

d1.addEventListener('click', () => {
    d1.style.display = 'none';
    d1.style.border = 'none';
    player.style.top = '470px'
});
d2.addEventListener('click', () => {
    d2.style.display = 'none';
    d2.style.border = 'none';
    player.style.top = '470px'
});
d3.addEventListener('click', () => {
    d3.style.display = 'none';
    d3.style.border = 'none';
    player.style.top = '470px'
});
d4.addEventListener('click', () => {
    d4.style.display = 'none';
    d4.style.border = 'none';
    player.style.top = '470px'
});
d5.addEventListener('click', () => {
    d5.style.display = 'none';
    d5.style.border = 'none';
    player.style.top = '470px'
});
d6.addEventListener('click', () => {
    d6.style.display = 'none';
    d6.style.border = 'none';
    player.style.top = '470px'
});
d7.addEventListener('click', () => {
    d7.style.display = 'none';
    d7.style.border = 'none';
    player.style.top = '470px'
});
d8.addEventListener('click', () => {
    d8.style.display = 'none';
    d8.style.border = 'none';
    player.style.top = '470px'
});
d9.addEventListener('click', () => {
    d9.style.display = 'none';
    d9.style.border = 'none';
    player.style.top = '470px'
});
d10.addEventListener('click', () => {
    d10.style.display = 'none';
    d10.style.border = 'none';
    player.style.top = '470px'
});
d11.addEventListener('click', () => {
    d11.style.display = 'none';
    d11.style.border = 'none';
    player.style.top = '470px'
});

/* Stone BREAK */

s1.addEventListener('click', () => {
    s1.style.display = 'none';
    s1.style.border = 'none';
    player.style.top = '470px'
});
s2.addEventListener('click', () => {
    s2.style.display = 'none';
    s2.style.border = 'none';
    player.style.top = '470px'
});
s3.addEventListener('click', () => {
    s3.style.display = 'none';
    s3.style.border = 'none';
    player.style.top = '470px'
});
s4.addEventListener('click', () => {
    s4.style.display = 'none';
    s4.style.border = 'none';
    player.style.top = '470px'
});
s5.addEventListener('click', () => {
    s5.style.display = 'none';
    s5.style.border = 'none';
    player.style.top = '470px'
});
s6.addEventListener('click', () => {
    s6.style.display = 'none';
    s6.style.border = 'none';
    player.style.top = '470px'
});
s7.addEventListener('click', () => {
    s7.style.display = 'none';
    s7.style.border = 'none';
    player.style.top = '470px'
});
s8.addEventListener('click', () => {
    s8.style.display = 'none';
    s8.style.border = 'none';
    player.style.top = '470px'
});
s9.addEventListener('click', () => {
    s9.style.display = 'none';
    s9.style.border = 'none';
    player.style.top = '470px'
});
s10.addEventListener('click', () => {
    s10.style.display = 'none';
    s10.style.border = 'none';
    player.style.top = '470px'
});
s11.addEventListener('click', () => {
    s11.style.display = 'none';
    s11.style.border = 'none';
    player.style.top = '470px'
});

let oakPlank = document.getElementById('oak_plank');
let cobbleStone = document.getElementById('cobblestone');

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        let clickedPlace = document.createElement('div');
        clickedPlace.classList.add('clickedPlace');
        clickedPlace.style.left = event.clientX + 'px';
        clickedPlace.style.top = event.clientY + 'px';
        clickedPlace.style.position = 'absolute';
        clickedPlace.style.width = '50px';
        clickedPlace.style.height = '50px';
        clickedPlace.style.background = 'url(\'oak_plank.png\')';
        document.body.appendChild(clickedPlace);
    });
});