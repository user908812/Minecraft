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

    let username = document.getElementById('username').value.toLowerCase();

    if (username == 'pako' || username == 'kamil') {
        profilePicture = 'clown_pfp.png';
    }

    let launcherContainer = document.createElement('div');
    let launcher = `
<div class="launcher">
    <div class="left-bar">
        <div class="accout-display">
            <div class="user-image"><img id="profile-picture" draggable="false" src="${profilePicture}" alt="steve_pfp.png"></div>
            <div class="username">${username}</div>
        </div>
        <div class="date"></div>
        <div class="time"></div>
        <div class="news">
            <p class="news-title">News:</p>
            <ul>
                <li>Fixed animations</li>
                <li>Fixed blocks</li>
                <li>New blocks</li>
                <li>Fixed player positions</li>
                <li>Removed air borders</li>
                <li class="added">Fixed date and time</li>
                <li class="added">F1 button</li>
                <li class="added">Blocks in hotbar</li>
                <li class="added">Remove placed blocks</li>
                <li class="added">Removed copying on double click</li>
                <li class="important">v100.0.2 IS OUT!</li>
            </ul>
        </div>
        <div class="keybinds"> 
        <h2>Keybinds: </h2>
        <ul>
        <li>w / d / → <span class="key-info">(Move right)</span></li>
        <li>a / s / ← <span class="key-info">(Move left)</span></li>
        <li>SPACE / ↑ <span class="key-info">(Jump)</span></li>
        <li>ctrl + walk <span class="key-info">(sprint)</span></li>
        <li>/ <span class="key-info">(Normal position)</span></li>
        <li>ESC <span class="key-info">(menu)</span></li>
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
            <select style="cursor: pointer;" name="versions" id="versions">
                    <option value="0"></option>
                    <optgroup label="versions">
                    <option value="1">v100.0.1</option>
                    <option value="2">v100.0.2 (beta)</option>
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
    let mc_version = document.getElementById('versions').value;

    if (mc_version == 0) {
        alert('You need to choose a version before you start playing!');
    } else if (mc_version == 1) {
        window.open('minecraft1.html', '_blank');
    } else if (mc_version == 2) {
        window.open('minecraft2.html', '_blank');
    }
}
function showMoreKeybinds() {
    alert('F11 (Fullscreen) \nF4 (Open chat) \nF2 (Send chat message) \nF3 (Inventory) \nF1 (No hotbar) \nRMB / LMB (Place / Destroy block)');
}