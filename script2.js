let dateElement = document.querySelector('.date');
let timeElement = document.querySelector('.time');

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
                <option value="1">v100.0.1</option>
                <option value="2">v100.0.2 (beta)</option>
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
}
let form = document.querySelector('.login-form form');
form.addEventListener('submit', renderLauncherOnSubmit);

updateTime();
updateDate();
setInterval(updateTime, 1000);

function launchMinecraft() {
    let mc_version = document.getElementById('versions').value;

    if (mc_version == 0) {
        alert('You need to choose a version before you start playing!');
    } else if (mc_version == 1) {
        window.open('minecraft.html', '_self');
    } else if (mc_version == 2) {
        alert('Beta testing is ongoing! Choose a different version.');
    }
}