let mc = document.getElementById('minecraft');

let music = document.getElementById('music');

document.addEventListener('DOMContentLoaded', function() {
    music.play();
});

// mc.style.marginLeft = '950px';
mc.style.width = '1762px';
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

// -------------------- GRASS -------------------- \\
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
let g12 = document.getElementById('g12');
let g13 = document.getElementById('g13');
let g14 = document.getElementById('g14');
let g15 = document.getElementById('g15');
let g16 = document.getElementById('g16');
let g17 = document.getElementById('g17');
let g18 = document.getElementById('g18');
let g19 = document.getElementById('g19');
let g20 = document.getElementById('g20');
let g21 = document.getElementById('g21');
let g22 = document.getElementById('g22');

// -------------------- DIRT -------------------- \\
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
let d12 = document.getElementById('d12');
let d13 = document.getElementById('d13');
let d14 = document.getElementById('d14');
let d15 = document.getElementById('d15');
let d16 = document.getElementById('d16');
let d17 = document.getElementById('d17');
let d18 = document.getElementById('d18');
let d19 = document.getElementById('d19');
let d20 = document.getElementById('d20');
let d21 = document.getElementById('d21');
let d22 = document.getElementById('d22');

// -------------------- STONE -------------------- \\
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
let s12 = document.getElementById('s12');
let s13 = document.getElementById('s13');
let s14 = document.getElementById('s14');
let s15 = document.getElementById('s15');
let s16 = document.getElementById('s16');
let s17 = document.getElementById('s17');
let s18 = document.getElementById('s18');
let s19 = document.getElementById('s19');
let s20 = document.getElementById('s20');
let s21 = document.getElementById('s21');
let s22 = document.getElementById('s22');
// ----------------------------------------------- \\

function setLowGraphic() {

    mc.style.background = 'skyblue';
    creeper.src = 'low_creeper.png';

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
    g12.setAttribute('src', 'low_grass_block.png');
    g13.setAttribute('src', 'low_grass_block.png');
    g14.setAttribute('src', 'low_grass_block.png');
    g15.setAttribute('src', 'low_grass_block.png');
    g16.setAttribute('src', 'low_grass_block.png');
    g17.setAttribute('src', 'low_grass_block.png');
    g18.setAttribute('src', 'low_grass_block.png');
    g19.setAttribute('src', 'low_grass_block.png');
    g20.setAttribute('src', 'low_grass_block.png');
    g21.setAttribute('src', 'low_grass_block.png');
    g22.setAttribute('src', 'low_grass_block.png');

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
    d12.setAttribute('src', 'low_dirt.png');
    d13.setAttribute('src', 'low_dirt.png');
    d14.setAttribute('src', 'low_dirt.png');
    d15.setAttribute('src', 'low_dirt.png');
    d16.setAttribute('src', 'low_dirt.png');
    d17.setAttribute('src', 'low_dirt.png');
    d18.setAttribute('src', 'low_dirt.png');
    d19.setAttribute('src', 'low_dirt.png');
    d20.setAttribute('src', 'low_dirt.png');
    d21.setAttribute('src', 'low_dirt.png');
    d22.setAttribute('src', 'low_dirt.png');

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
   s12.setAttribute('src', 'low_stone_block.png');
   s13.setAttribute('src', 'low_stone_block.png');
   s14.setAttribute('src', 'low_stone_block.png');
   s15.setAttribute('src', 'low_stone_block.png');
   s16.setAttribute('src', 'low_stone_block.png');
   s17.setAttribute('src', 'low_stone_block.png');
   s18.setAttribute('src', 'low_stone_block.png');
   s19.setAttribute('src', 'low_stone_block.png');
   s20.setAttribute('src', 'low_stone_block.png');
   s21.setAttribute('src', 'low_stone_block.png');
   s22.setAttribute('src', 'low_stone_block.png');
}

function setNormalGraphic() {

    mc.style.background = 'url(\'sky.png\')';
    creeper.src = 'creeper.png';

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
    g12.setAttribute('src', 'grass_block.png');
    g13.setAttribute('src', 'grass_block.png');
    g14.setAttribute('src', 'grass_block.png');
    g15.setAttribute('src', 'grass_block.png');
    g16.setAttribute('src', 'grass_block.png');
    g17.setAttribute('src', 'grass_block.png');
    g18.setAttribute('src', 'grass_block.png');
    g19.setAttribute('src', 'grass_block.png');
    g20.setAttribute('src', 'grass_block.png');
    g21.setAttribute('src', 'grass_block.png');
    g22.setAttribute('src', 'grass_block.png');

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
    d12.setAttribute('src', 'dirt.png');
    d13.setAttribute('src', 'dirt.png');
    d14.setAttribute('src', 'dirt.png');
    d15.setAttribute('src', 'dirt.png');
    d16.setAttribute('src', 'dirt.png');
    d17.setAttribute('src', 'dirt.png');
    d18.setAttribute('src', 'dirt.png');
    d19.setAttribute('src', 'dirt.png');
    d20.setAttribute('src', 'dirt.png');
    d21.setAttribute('src', 'dirt.png');
    d22.setAttribute('src', 'dirt.png');

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
   s12.setAttribute('src', 'stone_block.png');
   s13.setAttribute('src', 'stone_block.png');
   s14.setAttribute('src', 'stone_block.png');
   s15.setAttribute('src', 'stone_block.png');
   s16.setAttribute('src', 'stone_block.png');
   s17.setAttribute('src', 'stone_block.png');
   s18.setAttribute('src', 'stone_block.png');
   s19.setAttribute('src', 'stone_block.png');
   s20.setAttribute('src', 'stone_block.png');
   s21.setAttribute('src', 'stone_block.png');
   s22.setAttribute('src', 'stone_block.png');
}

function setHighGraphic() {

    mc.style.background = 'url(\'high_sky.png\')';
    creeper.src = 'high_creeper.png';

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
    g12.setAttribute('src', 'high_grass_block.png');
    g13.setAttribute('src', 'high_grass_block.png');
    g14.setAttribute('src', 'high_grass_block.png');
    g15.setAttribute('src', 'high_grass_block.png');
    g16.setAttribute('src', 'high_grass_block.png');
    g17.setAttribute('src', 'high_grass_block.png');
    g18.setAttribute('src', 'high_grass_block.png');
    g19.setAttribute('src', 'high_grass_block.png');
    g20.setAttribute('src', 'high_grass_block.png');
    g21.setAttribute('src', 'high_grass_block.png');
    g22.setAttribute('src', 'high_grass_block.png');

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
    d12.setAttribute('src', 'high_dirt.png');
    d13.setAttribute('src', 'high_dirt.png');
    d14.setAttribute('src', 'high_dirt.png');
    d15.setAttribute('src', 'high_dirt.png');
    d16.setAttribute('src', 'high_dirt.png');
    d17.setAttribute('src', 'high_dirt.png');
    d18.setAttribute('src', 'high_dirt.png');
    d19.setAttribute('src', 'high_dirt.png');
    d20.setAttribute('src', 'high_dirt.png');
    d21.setAttribute('src', 'high_dirt.png');
    d22.setAttribute('src', 'high_dirt.png');

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
   s12.setAttribute('src', 'high_stone_block.png');
   s13.setAttribute('src', 'high_stone_block.png');
   s14.setAttribute('src', 'high_stone_block.png');
   s15.setAttribute('src', 'high_stone_block.png');
   s16.setAttribute('src', 'high_stone_block.png');
   s17.setAttribute('src', 'high_stone_block.png');
   s18.setAttribute('src', 'high_stone_block.png');
   s19.setAttribute('src', 'high_stone_block.png');
   s20.setAttribute('src', 'high_stone_block.png');
   s21.setAttribute('src', 'high_stone_block.png');
   s22.setAttribute('src', 'high_stone_block.png');
}

let playerPosition = 0;
let player = document.querySelector('.player');

let chat = null;
let isInventoryOpen;

let playerCrouching = false;
let walking = false;
let ctrlPressed = false;

document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Control') {
        ctrlPressed = true;
    }
    
    if (e.key == 'Shift') {
        if (!playerCrouching) {
            player.src = 'steve_crouching.png';
            playerCrouching = true;
        } else {
            player.src = 'steve_standing.png';
            playerCrouching = false;
        }
    } else if (e.key == 'ArrowLeft' || e.key == 's' || e.key == 'a') {
        if (playerCrouching) {
            player.src = 'steve_crouching_reversed.png';
            playerPosition -= 4;
            player.style.left = playerPosition + 'px';
        } else {
            player.src = 'steve_standing_revered.png';
            walking = true;
            playerPosition -= (ctrlPressed ? 20 : 10);
            player.style.left = playerPosition + 'px';
        }
    } else if (e.key == 'w' || e.key == 'd') {
        if (playerCrouching) {
            player.src = 'steve_crouching.png';
            playerPosition += 4;
            player.style.left = playerPosition + 'px';
        } else {
            player.src = 'steve_standing.png';
            walking = true;
            playerPosition += (ctrlPressed ? 20 : 10);
            player.style.left = playerPosition + 'px';
        }
    } else if (e.key == 'ArrowUp' || e.key == ' ') {
        walking = false;
        player.classList.add('jump');

        setTimeout(() => {
            player.classList.remove('jump');
        }, 500);
    } else if (e.key == 'ArrowRight') {
        if (playerCrouching) {
            player.src = 'steve_crouching.png';
            playerPosition += 4;
            player.style.left = playerPosition + 'px';
        } else {
            player.src = 'steve_standing.png';
            walking = true;
            playerPosition += (ctrlPressed ? 20 : 10);
            player.style.left = playerPosition + 'px';
        }
    } else if (e.key == '/') {
        player.style.top = '260px';
    }
});
document.body.addEventListener('keyup', (e) => {
    if (e.key === 'Control') {
        ctrlPressed = false;
    } else if (e.key == 'F4') {
        if (!chat) {
            chat = document.createElement('textarea');
            chat.setAttribute('placeholder', `Press \'F2\' to send the message.\n`);
            chat.setAttribute('autofocus', true);
            chat.style.width = '1000px';
            chat.style.height = '500px';
            chat.style.fontSize = '15px';
            chat.style.backgroundColor = '#232533';
            chat.style.color = '#ff69b4';
            chat.style.fontWeight = 'bold';

            document.body.append(chat);
        } else {
            chat.removeAttribute('hidden');
            chat.value = '';
        }
    }
    
    if (e.key === 'F2') {
        if (chat) {
            let message = chat.value;

            if (message == '/kill' || message == '/kill @s' || message == '/kill @p') {
                player.style.display = 'none';
            }
            if (message == '/kill @a') {
                player.style.display = 'none';
                creeper.style.display = 'none';
            }
            if (message == '/kill @e[type=creeper]') {
                creeper.style.display = 'none';
            }

            if (message.startsWith('.r')) {
                chat.setAttribute('hidden', true);
                let redMessage = message.slice(3);
            
                let messageContainer = document.createElement('div');
                messageContainer.classList.add('message');
                messageContainer.style.color = 'red';
            
                messageContainer.innerHTML = redMessage;
                document.body.append(messageContainer);
            
                setTimeout(() => {
                    messageContainer.setAttribute('hidden', true);
                }, 3500);
            } else if (message.startsWith('.o')) {
                chat.setAttribute('hidden', true);
                let orangeMessage = message.slice(3);
            
                let messageContainer = document.createElement('div');
                messageContainer.classList.add('message');
                messageContainer.style.color = 'orange';
            
                messageContainer.innerHTML = orangeMessage;
                document.body.append(messageContainer);
            
                setTimeout(() => {
                    messageContainer.setAttribute('hidden', true);
                }, 3500);
            } else if (message.startsWith('.y')) {
                chat.setAttribute('hidden', true);
                let yellowMessage = message.slice(3);
            
                let messageContainer = document.createElement('div');
                messageContainer.classList.add('message');
                messageContainer.style.color = 'yellow';
            
                messageContainer.innerHTML = yellowMessage;
                document.body.append(messageContainer);
            
                setTimeout(() => {
                    messageContainer.setAttribute('hidden', true);
                }, 3500);
            } else if (message.startsWith('.g')) {
                chat.setAttribute('hidden', true);
                let greenMessage = message.slice(3);
            
                let messageContainer = document.createElement('div');
                messageContainer.classList.add('message');
                messageContainer.style.color = 'lightgreen';
            
                messageContainer.innerHTML = greenMessage;
                document.body.append(messageContainer);
            
                setTimeout(() => {
                    messageContainer.setAttribute('hidden', true);
                }, 3500);
            } else if (message.startsWith('.b')) {
                chat.setAttribute('hidden', true);
                let blueMessage = message.slice(3);
            
                let messageContainer = document.createElement('div');
                messageContainer.classList.add('message');
                messageContainer.style.color = 'blue';
            
                messageContainer.innerHTML = blueMessage;
                document.body.append(messageContainer);
            
                setTimeout(() => {
                    messageContainer.setAttribute('hidden', true);
                }, 3500);
            } else if (message.startsWith('.p')) {
                chat.setAttribute('hidden', true);
                let pinkMessage = message.slice(3);
            
                let messageContainer = document.createElement('div');
                messageContainer.classList.add('message');
                messageContainer.style.color = 'pink';
            
                messageContainer.innerHTML = pinkMessage;
                document.body.append(messageContainer);
            
                setTimeout(() => {
                    messageContainer.setAttribute('hidden', true);
                }, 3500);
            } else if (message.startsWith('.w')) {
                chat.setAttribute('hidden', true);
                let whiteMessage = message.slice(3);
            
                let messageContainer = document.createElement('div');
                messageContainer.classList.add('message');
                messageContainer.style.color = 'white';
            
                messageContainer.innerHTML = whiteMessage;
                document.body.append(messageContainer);
            
                setTimeout(() => {
                    messageContainer.setAttribute('hidden', true);
                }, 3500);
            } else if (message.startsWith('.i')) {
                chat.setAttribute('hidden', true);
                let italicFont = message.slice(3);
            
                let messageContainer = document.createElement('div');
                messageContainer.classList.add('message');
                messageContainer.style.fontStyle = 'italic';
            
                messageContainer.innerHTML = italicFont;
                document.body.append(messageContainer);
            
                setTimeout(() => {
                    messageContainer.setAttribute('hidden', true);
                }, 3500);
            } else if (message.startsWith('.u')) {
                chat.setAttribute('hidden', true);
                let underLine = message.slice(3);
            
                let messageContainer = document.createElement('div');
                messageContainer.classList.add('message');
                messageContainer.style.textDecoration = 'underline';
            
                messageContainer.innerHTML = underLine;
                document.body.append(messageContainer);
            
                setTimeout(() => {
                    messageContainer.setAttribute('hidden', true);
                }, 3500);
            } else if (message.includes('.musicoff')) {
                chat.setAttribute('hidden', true);
                music.pause();
            } else if (message.includes('.math')) {
                chat.setAttribute('hidden', true);
                try {
                    let number1 = Number(prompt('Podaj pierwszą liczbę: '));
                    let operation = prompt('Podaj znak (+ - / * ^): ');
                    let number2 = Number(prompt('Podaj drugą liczbę: '));
                
                    if (isNaN(number1) || isNaN(number2)) {
                        throw new Error('Nie podano prawidłowych liczb!');
                    }
                
                    switch (operation) {
                        case '+':
                            let addition = number1 + number2;
                            alert(`Wynik to: ${addition}`);
                            break;
                        case '-':
                            let subtraction = number1 - number2;
                            alert(`Wynik to: ${subtraction}`);
                            break;
                        case '/':
                            let division = number1 / number2;
                            alert(`Wynik to: ${division}`);
                            break;
                        case '*':
                            let multiplication = number1 * number2;
                            alert(`Wynik to: ${multiplication}`);
                            break;
                        case '^':
                            let toPower = Math.pow(number1, number2);
                            alert(`Wynik to: ${toPower}`);
                            break;
                        default:
                            alert('Błąd! Zły operator.');
                    }
                } catch (error) {
                    alert(error.message);
                }                
            } else {
                chat.setAttribute('hidden', true);
            
                let messageContainer = document.createElement('div');

                messageContainer.classList.add('message');

                messageContainer.innerHTML = message;
                document.body.append(messageContainer);
                setTimeout(() => {
                    messageContainer.setAttribute('hidden', true);
                }, 3500);
            }
        }
    }
});

let grassBreaking = document.getElementById('grassBreaking');

function grassBlockBreak() {
    g1.addEventListener('click', () => {
        g1.style.display = 'none';
        g1.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
        grassBreaking.play();
    });
    g2.addEventListener('click', () => {
        g2.style.display = 'none';
        g2.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g3.addEventListener('click', () => {
        g3.style.display = 'none';
        g3.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g4.addEventListener('click', () => {
        g4.style.display = 'none';
        g4.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g5.addEventListener('click', () => {
        g5.style.display = 'none';
        g5.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g6.addEventListener('click', () => {
        g6.style.display = 'none';
        g6.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g7.addEventListener('click', () => {
        g7.style.display = 'none';
        g7.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g8.addEventListener('click', () => {
        g8.style.display = 'none';
        g8.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g9.addEventListener('click', () => {
        g9.style.display = 'none';
        g9.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g10.addEventListener('click', () => {
        g10.style.display = 'none';
        g10.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g11.addEventListener('click', () => {
        g11.style.display = 'none';
        g11.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g12.addEventListener('click', () => {
        g12.style.display = 'none';
        g12.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g13.addEventListener('click', () => {
        g13.style.display = 'none';
        g13.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g14.addEventListener('click', () => {
        g14.style.display = 'none';
        g14.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g15.addEventListener('click', () => {
        g15.style.display = 'none';
        g15.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g16.addEventListener('click', () => {
        g16.style.display = 'none';
        g16.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g17.addEventListener('click', () => {
        g17.style.display = 'none';
        g17.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g18.addEventListener('click', () => {
        g18.style.display = 'none';
        g18.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g19.addEventListener('click', () => {
        g19.style.display = 'none';
        g19.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g20.addEventListener('click', () => {
        g20.style.display = 'none';
        g20.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g21.addEventListener('click', () => {
        g21.style.display = 'none';
        g21.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
    g22.addEventListener('click', () => {
        g22.style.display = 'none';
        g22.style.border = 'none';
        player.style.top = '350px';
        grassBreaking.play();
    });
}
grassBlockBreak();

let dirtBreaking = document.getElementById('dirtBreaking');

function dirtBreak() {
    d1.addEventListener('click', () => {
        d1.style.display = 'none';
        d1.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d2.addEventListener('click', () => {
        d2.style.display = 'none';
        d2.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d3.addEventListener('click', () => {
        d3.style.display = 'none';
        d3.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d4.addEventListener('click', () => {
        d4.style.display = 'none';
        d4.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d5.addEventListener('click', () => {
        d5.style.display = 'none';
        d5.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d6.addEventListener('click', () => {
        d6.style.display = 'none';
        d6.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d7.addEventListener('click', () => {
        d7.style.display = 'none';
        d7.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d8.addEventListener('click', () => {
        d8.style.display = 'none';
        d8.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d9.addEventListener('click', () => {
        d9.style.display = 'none';
        d9.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d10.addEventListener('click', () => {
        d10.style.display = 'none';
        d10.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d11.addEventListener('click', () => {
        d11.style.display = 'none';
        d11.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d12.addEventListener('click', () => {
        d12.style.display = 'none';
        d12.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d13.addEventListener('click', () => {
        d13.style.display = 'none';
        d13.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d14.addEventListener('click', () => {
        d14.style.display = 'none';
        d14.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d15.addEventListener('click', () => {
        d15.style.display = 'none';
        d15.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d16.addEventListener('click', () => {
        d16.style.display = 'none';
        d16.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d17.addEventListener('click', () => {
        d17.style.display = 'none';
        d17.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d18.addEventListener('click', () => {
        d18.style.display = 'none';
        d18.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d19.addEventListener('click', () => {
        d19.style.display = 'none';
        d19.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d20.addEventListener('click', () => {
        d20.style.display = 'none';
        d20.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d21.addEventListener('click', () => {
        d21.style.display = 'none';
        d21.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
    d22.addEventListener('click', () => {
        d22.style.display = 'none';
        d22.style.border = 'none';
        player.style.top = '420px';
        dirtBreaking.play();
    });
}
dirtBreak();

let stoneBreaking = document.getElementById('stoneBreaking');

function stoneBlockBreak() {
    s1.addEventListener('click', () => {
        s1.style.display = 'none';
        s1.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s2.addEventListener('click', () => {
        s2.style.display = 'none';
        s2.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s3.addEventListener('click', () => {
        s3.style.display = 'none';
        s3.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s4.addEventListener('click', () => {
        s4.style.display = 'none';
        s4.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s5.addEventListener('click', () => {
        s5.style.display = 'none';
        s5.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s6.addEventListener('click', () => {
        s6.style.display = 'none';
        s6.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s7.addEventListener('click', () => {
        s7.style.display = 'none';
        s7.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s8.addEventListener('click', () => {
        s8.style.display = 'none';
        s8.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s9.addEventListener('click', () => {
        s9.style.display = 'none';
        s9.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s10.addEventListener('click', () => {
        s10.style.display = 'none';
        s10.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s11.addEventListener('click', () => {
        s11.style.display = 'none';
        s11.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s12.addEventListener('click', () => {
        s12.style.display = 'none';
        s12.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s13.addEventListener('click', () => {
        s13.style.display = 'none';
        s13.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s14.addEventListener('click', () => {
        s14.style.display = 'none';
        s14.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s15.addEventListener('click', () => {
        s15.style.display = 'none';
        s15.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s16.addEventListener('click', () => {
        s16.style.display = 'none';
        s16.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s17.addEventListener('click', () => {
        s17.style.display = 'none';
        s17.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s18.addEventListener('click', () => {
        s18.style.display = 'none';
        s18.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s19.addEventListener('click', () => {
        s19.style.display = 'none';
        s19.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s20.addEventListener('click', () => {
        s20.style.display = 'none';
        s20.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s21.addEventListener('click', () => {
        s21.style.display = 'none';
        s21.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
    s22.addEventListener('click', () => {
        s22.style.display = 'none';
        s22.style.border = 'none';
        player.style.top = '490px';
        stoneBreaking.play();
    });
}
stoneBlockBreak();

let oakPlanks = false;
let cobbleStone = false;
let sandStone = false;
let oakLeaves = false;
let dirt = false;
let stone = false;
let whiteWool = false;
let diamondBlock = false;
let barrierBlock = false;
let tntBlock = false;

function oakPlanksChosen() {
    oakPlanks = true;
    cobbleStone = false;
    sandStone = false;
    oakLeaves = false;
    dirt = false;
    stone = false;
    whiteWool = false;
    diamondBlock = false;
    barrierBlock = false;
    tntBlock = false;
}
function cobbleStoneChosen() {
    cobbleStone = true;
    oakPlanks = false;
    sandStone = false;
    oakLeaves = false;
    dirt = false;
    stone = false;
    whiteWool = false;
    diamondBlock = false;
    barrierBlock = false;
    tntBlock = false;
}
function sandStoneChosen() {
    sandStone = true;
    cobbleStone = false;
    oakPlanks = false;
    oakLeaves = false;
    dirt = false;
    stone = false;
    whiteWool = false;
    diamondBlock = false;
    barrierBlock = false;
    tntBlock = false;
}
function oakLeavesChosen() {
    oakLeaves = true;
    sandStone = false;
    cobbleStone = false;
    oakPlanks = false;
    dirt = false;
    stone = false;
    whiteWool = false;
    diamondBlock = false;
    barrierBlock = false;
    tntBlock = false;
}
function dirtChosen() {
    dirt = true;
    oakLeaves = false;
    sandStone = false;
    cobbleStone = false;
    oakPlanks = false;
    stone = false;
    whiteWool = false;
    diamondBlock = false;
    barrierBlock = false;
    tntBlock = false;
}
function stoneChosen() {
    stone = true;
    dirt = false;
    oakLeaves = false;
    sandStone = false;
    cobbleStone = false;
    oakPlanks = false;
    whiteWool = false;
    diamondBlock = false;
    barrierBlock = false;
    tntBlock = false;
}
function whiteWoolChosen() {
    whiteWool = true;
    stone = false;
    dirt = false;
    oakLeaves = false;
    sandStone = false;
    cobbleStone = false;
    oakPlanks = false;
    diamondBlock = false;
    barrierBlock = false;
    tntBlock = false;
}
function diamondBlockChosen() {
    diamondBlock = true;
    whiteWool = false;
    stone = false;
    dirt = false;
    oakLeaves = false;
    sandStone = false;
    cobbleStone = false;
    oakPlanks = false;
    barrierBlock = false;
    tntBlock = false;
}
function barrierChosen() {
    barrierBlock = true;
    diamondBlock = false;
    whiteWool = false;
    stone = false;
    dirt = false;
    oakLeaves = false;
    sandStone = false;
    cobbleStone = false;
    oakPlanks = false;
    tntBlock = false;
}
function tntChosen() {
    tntBlock = true;
    barrierBlock = false;
    diamondBlock = false;
    whiteWool = false;
    stone = false;
    dirt = false;
    oakLeaves = false;
    sandStone = false;
    cobbleStone = false;
    oakPlanks = false;
}

let hotbarContainer = document.querySelector('.hotbar-container');
let hotbarHidden = false;

document.body.addEventListener('keydown', (e) => {

    let keyPressed = e.key;

    if (keyPressed == 'F1') {
        e.preventDefault();
        hotbarHidden = !hotbarHidden;
        hotbarContainer.hidden = hotbarHidden;

        if (!hotbarHidden) {
            creeper.style.top = '-450px';
        } else if (hotbarHidden) {
            creeper.style.top = '-396px';
        }
    }

    switch (keyPressed) {
        case '1':
            oakPlanksChosen();
            break;
        case '2':
            cobbleStoneChosen();
            break;
        case '3':
            stoneChosen();
            break;
        case '4':
            tntChosen();
            break;
        case '5':
            barrierChosen();
            break;
        case '6':
            oakLeavesChosen();
            break;
        case '7':
            dirtChosen();
            break;
        case '8':
            sandStoneChosen();
            break;
    }
});

let Inventory = document.createElement('div');

document.body.addEventListener('keydown', (e) => {

    isInventoryOpen = true;

    if (isInventoryOpen && e.key == 'F3') {
        e.preventDefault();
        Inventory.hidden = false;
        let menu = `
        <div class="inventory-container">
        <div class="gui-inventory">
            <div class="top-elements">
            <button onclick="closeInventoryGUI()" class="close">X</button>
            <h1 class="inventory-title">Inventory</h1>
        </div>
        <div class="blocks-display">
            <div class="blockDisplay">
                <div class="b"><img title="Oak Leaves" id="glass" onclick="oakLeavesChosen()" width="50" height="50" src="oak_leaves.png" alt="oak_leaves.png"></div>
                <div class="block-info">
                    <div class="block-nm">Oak Leaves</div>
                    <div class="block-id">ID: 18</div>
                </div>
            </div>
            <div class="blockDisplay">
                <div class="b"><img title="Sandstone" id="sandstone" onclick="sandStoneChosen()" width="50" height="50" src="sandstone.png" alt="sandstone.png"></div>
                <div class="block-info">
                    <div class="block-nm">Sandstone</div>
                    <div class="block-id">ID: 24</div>
                </div>
            </div>
            <div class="blockDisplay">
                <div class="b"><img title="Dirt" id="dirt" onclick="dirtChosen()" width="50" height="50" src="dirt.png" alt="dirt.png"></div>
                <div class="block-info">
                    <div class="block-nm">Dirt</div>
                    <div class="block-id">ID: 3</div>
                </div>
            </div>
            <div class="blockDisplay">
                <div class="b"><img title="Stone" id="stone_block" onclick="stoneChosen()" width="50" height="50" src="stone_block.png" alt="stone_block.png"></div>
                <div class="block-info">
                    <div class="block-nm">Stone</div>
                    <div class="block-id">ID: 1</div>
                </div>
            </div>
        </div>
        <div class="blocks-display2">
            <div class="blockDisplay">
                <div class="b"><img title="White Wool" id="white_wool" onclick="whiteWoolChosen()" width="50" height="50" src="white_wool.png" alt="white_wool.png"></div>
                <div class="block-info">
                    <div class="block-nm">White Wool</div>
                    <div class="block-id">ID: 35</div>
                </div>
            </div>
            <div class="blockDisplay">
                <div class="b"><img title="Diamond Block" id="diamond_block" onclick="diamondBlockChosen()" width="50" height="50" src="diamond_block.png" alt="diamond_block.png"></div>
                <div class="block-info">
                    <div class="block-nm">Diamond Block</div>
                    <div class="block-id">ID: 57</div>
                </div>
            </div>
            <div class="blockDisplay">
                <div class="b"><img title="Barrier" id="barrier" onclick="barrierChosen()" width="50" height="50" src="barrier.png" alt="barrier.png"></div>
                <div class="block-info">
                    <div class="block-nm">Barrier</div>
                    <div class="block-id">ID: 166</div>
                </div>
            </div>
            <div class="blockDisplay">
                <div class="b"><img title="TNT" id="tnt" onclick="tntChosen()" width="50" height="50" src="tnt.png" alt="tnt.png"></div>
                <div class="block-info">
                    <div class="block-nm">TNT</div>
                    <div class="block-id">ID: 46</div>
                </div>
            </div>
        </div>
        </div>
    </div>
        `;
        Inventory.innerHTML = menu;
        document.body.append(Inventory);
    }
});
function closeInventoryGUI() {
    isInventoryOpen = false;
    Inventory.hidden = true;
}

let tntExplosion = document.getElementById('tntExplosion');

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
        if (oakPlanks) {
            clickedPlace.style.background = "url('oak_plank.png')";
        } else if (cobbleStone) {
            clickedPlace.style.background = "url('cobblestone.png')";
        } else if (sandStone) {
            clickedPlace.style.background = "url('sandstone.png')";
        } else if (oakLeaves) {
            clickedPlace.style.background = "url('oak_leaves.png')";
        } else if (dirt) {
            clickedPlace.style.background = "url('dirt.png')";
        } else if (stone) {
            clickedPlace.style.background = "url('stone_block.png')";
        } else if (whiteWool) {
            clickedPlace.style.background = "url('white_wool.png')";
        } else if (diamondBlock) {
            clickedPlace.style.background = "url('diamond_block.png')";
        } else if (barrierBlock) {
            clickedPlace.style.background = "url('barrier.png')";
            setTimeout(() => {
                clickedPlace.style.display = 'none';
            }, 2000);
        }  else if (tntBlock) {
            clickedPlace.style.background = "url('tnt.png')";
            let allBlocks = 
            [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22,
            d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22,
            s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22];

            let numOfBlocks = [1, 2, 3, 4, 5];
            let randomNumberOfBlocks = Math.floor(Math.random() * numOfBlocks.length);
            let numberOfBlocks = numOfBlocks[randomNumberOfBlocks];

            let rand1 = Math.floor(Math.random() * allBlocks.length);
            let rand2 = Math.floor(Math.random() * allBlocks.length);
            let rand3 = Math.floor(Math.random() * allBlocks.length);
            let rand4 = Math.floor(Math.random() * allBlocks.length);
            let rand5 = Math.floor(Math.random() * allBlocks.length);

            let randomBlock1 = allBlocks[rand1];
            let randomBlock2 = allBlocks[rand2];
            let randomBlock3 = allBlocks[rand3];
            let randomBlock4 = allBlocks[rand4];
            let randomBlock5 = allBlocks[rand5];

            setTimeout(() => {
                clickedPlace.style.display = 'none';

                switch (numberOfBlocks) {
                    case 1:
                        randomBlock1.style.display = 'none';
                        tntExplosion.play();
                        break;
                    case 2:
                        randomBlock1.style.display = 'none';
                        randomBlock2.style.display = 'none';
                        tntExplosion.play();
                        break;
                    case 3:
                        randomBlock1.style.display = 'none';
                        randomBlock2.style.display = 'none';
                        randomBlock3.style.display = 'none';
                        tntExplosion.play();
                        break;
                    case 4:
                        randomBlock1.style.display = 'none';
                        randomBlock2.style.display = 'none';
                        randomBlock3.style.display = 'none';
                        randomBlock4.style.display = 'none';
                        tntExplosion.play();
                        break;
                    case 5:
                        randomBlock1.style.display = 'none';
                        randomBlock2.style.display = 'none';
                        randomBlock3.style.display = 'none';
                        randomBlock4.style.display = 'none';
                        randomBlock5.style.display = 'none';
                        tntExplosion.play();
                }
            }, 1000);

        }
        document.body.appendChild(clickedPlace);

        clickedPlace.addEventListener('click', () => {
            if (!tntBlock) {
                clickedPlace.hidden = true;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let creeper = document.createElement('div');
    creeper.innerHTML = `<img id="creeper" draggable="false" src="creeper.png" alt="creeper.png">`;
    mc.appendChild(creeper);
});

function checkCollision(element1, element2) {
    let rect1 = element1.getBoundingClientRect();
    let rect2 = element2.getBoundingClientRect();
    return !(rect1.right < rect2.left ||
             rect1.left > rect2.right ||
             rect1.bottom < rect2.top ||
             rect1.top > rect2.bottom);
}
function checkCollisionsPeriodically() {
    if (checkCollision(player, creeper)) {
        const explosionSound = document.getElementById('explosionSound');
        explosionSound.play();
        setTimeout(() => {
            g19.style.display = 'none';
            g20.style.display = 'none';
            g21.style.display = 'none';
            g22.style.display = 'none';

            g19.style.border = 'none';
            g20.style.border = 'none';
            g21.style.border = 'none';
            g22.style.border = 'none';

            creeper.style.display = 'none';

        }, 100);
    }
}
setInterval(checkCollisionsPeriodically, 1000);