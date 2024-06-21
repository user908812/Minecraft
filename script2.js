document.addEventListener('DOMContentLoaded', function() {
    var rememberMeCheckbox = document.getElementById('rememberMe');
    var usernameInput = document.getElementById('username');
    var storedUsername = localStorage.getItem('rememberedUsername');

    if (storedUsername) {
        rememberMeCheckbox.checked = true;
        usernameInput.value = storedUsername;
    }
    rememberMeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            localStorage.setItem('rememberedUsername', usernameInput.value);
        } else {
            localStorage.removeItem('rememberedUsername');
        }
    });
});

/* UPDATE LOGS */
var dateOfUpdate = '21/06/2024';

var thingsAdded = `
    <li>Fixed bugs</li>
    <li>New F3 Inventory scroll bar</li>
    <li class="added">New inventory blocks</li>
    <li class="important">Fixed graphic</li>
    <li class="important">New mobile controls</li>
    <li class="important">The end update</li>
    `;
/* ----------- */

function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours().toString().padStart(2, '0');
    let minutes = currentTime.getMinutes().toString().padStart(2, '0');
    let seconds = currentTime.getSeconds().toString().padStart(2, '0');
    let currentDate = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = currentDate;
}

function updateDate() {
    let currentTime = new Date();
    let day = currentTime.getDate().toString().padStart(2, '0');
    let month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
    let year = currentTime.getFullYear();
    let currentDate = `${day}.${month}.${year}`;
    dateElement.textContent = currentDate;
}

function renderLauncherOnSubmit(event) {
    let profilePictures = ['steve_pfp.png', 'alex_pfp.png', 'creeper_pfp.png', 'villager_pfp.png'];
    let randomIndex = Math.floor(Math.random() * profilePictures.length);
    let profilePicture = profilePictures[randomIndex];

    document.title = 'Orzech Launcher';

    event.preventDefault();

    let loginForm = document.querySelector('.login-form').style.display = 'none';

    let normalUsername = document.getElementById('username').value;
    let username = String(normalUsername.charAt(0).toUpperCase() + normalUsername.slice(1).toLowerCase());

    if (username == 'Pako' || username == 'Kamil') {
        profilePicture = 'clown_pfp.png';
    } else if (username == 'Orzech') {
        profilePicture = 'orzech.png';
    } else if (username == 'Daro' || username == 'Dariusz' || username == 'Darek' || username == 'Adrian' || username == 'Eminem' || username == 'Igor') {
        profilePicture = 'gigachad.png';
    } else if (username == 'Null') {
        profilePicture = 'null.png';
    }
    localStorage.setItem('pfp', profilePicture);

    let launcherContainer = document.createElement('div');
    let launcher = `
<audio id="soundMP4" src="sound.mp4"></audio>
<audio id="badSoundMP4" src="badSound.mp4"></audio>

<div class="launcher">
    <div class="left-bar">
        <div class="accout-display">
            <div class="user-image"><img id="profile-picture" draggable="false" src="${profilePicture}" alt="steve_pfp.png"></div>
            <div class="username">${username}</div>
        </div>
        <div class="date"></div>
        <div class="time"></div>
        <div class="news">
            <div id="newsDisplay"><span class="news-title">News</span> <span class="rainbowText">${dateOfUpdate}:</span></div>
            <ul>
                ${thingsAdded}
            </ul>
        </div>
        <div class="keybinds"> 
        <h2 id="keybinds-title">Keybinds: </h2>
        <ul>
        <li>W / D / → <span class="key-info">(Move right)</span></li>
        <li>A / S / ← <span class="key-info">(Move left)</span></li>
        <li>SPACE / ↑ <span class="key-info">(Jump)</span></li>
        <li>CTRL + walk <span class="key-info">(sprint)</span></li>
        <li>/ <span class="key-info">(Normal position)</span></li>
        <li>ESC <span class="key-info">(Menu)</span></li>
        <li>B <span class="key-info">(Spawn blaze)</span></li>
        <button class="more-key-binds" onclick="showMoreKeybinds()">More</button>
        </ul>
        </div>
    </div>
    <div class="middle">
        <img id="background-minecraft-image" draggable="false" src="mc-bg.png" alt="mc-bg.png">

        <div class="play-gui">
            <h1 class="play-now">PLAY NOW!</h1>
            <br>
            <label for="versions">Select a version: &nbsp;</label>
            <select style="cursor: pointer;" name="versions" id="version-select">
                    <option style="cursor: pointer;" value="0" selected></option>
                    <optgroup label="old">
                    <option value="1">v99.9.3 (alpha)</option>
                    </optgroup>
                    <optgroup label="new">
                    <option value="2">v100.0.1</option>
                    <option value="3">v100.0.2 (beta)</option>
                </optgroup>
            </select>
        </div>
        <div class="play-btn">
            <button onclick="launchMinecraft()" class="play">PLAY</button>
        </div>
    </div>
</div>
`;
    launcherContainer.innerHTML = launcher;
    document.body.appendChild(launcherContainer);

    timeElement = document.querySelector('.time');
    dateElement = document.querySelector('.date');
    updateTime();
    updateDate();
    setInterval(updateTime, 1000);
}

let form = document.querySelector('.login-form form');
form.addEventListener('submit', renderLauncherOnSubmit);

function launchMinecraft() {
    let soundMP4 = document.getElementById('soundMP4');
    let badSoundMP4 = document.getElementById('badSoundMP4');
    let mc_version = document.getElementById('version-select').value;

    if (mc_version == 0) {
        badSoundMP4.play();
        setTimeout(() => {
            alert('You need to select a version before you start playing!');
        }, 300);
    } else if (mc_version == 1) {
        soundMP4.play();
        setTimeout(() => {
            window.open('minecraft0.html', '_blank');
        }, 300);
    } else if (mc_version == 2) {
        soundMP4.play();
        setTimeout(() => {
            window.open('minecraft1.html', '_blank');
        }, 300);
    } else if (mc_version == 3) {
        soundMP4.play();
        setTimeout(() => {
            window.open('minecraft2.html', '_blank');
        }, 300);
    }
}
function showMoreKeybinds() {
    let soundMP4 = document.getElementById('soundMP4');
    soundMP4.play();
    setTimeout(() => {
        alert(`        F11 (Fullscreen)\n
        F4 (Open chat)\n
        F2 (Send chat message)\n
        F3 (Inventory)\n
        F1 (Hide hotbar)\n
        RMB / LMB (Place / Destroy block)\n
        ----Chat Commands:----\n
        .math (calculator)\n
        .musicoff (turns off music)\n
        .r <yourText> (red message)\n
        .i <yourText> (italic font)`);
    }, 300);
}