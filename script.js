var log = console.log.bind(document), warn = console.warn.bind(document);

var mc = document.getElementById('minecraft');

mc.style.width = '1762px';
mc.style.height = '908px';

var FPS = 60;

var allGrassBlocks = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22];
var allDirtBlocks = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22];
var allStoneBlocks = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, s36, s37, s38, s39, s40, s41, s42, s43, s44, s45, s46, s47, s48, s49, s50, s51, s52, s53, s54, s55, s56, s57, s58, s59, s60, s61, s62, s63, s64, s65, s66, s67, s68, s69, s70, s71, s72, s73, s74, s75, s76, s77, s78, s79, s80, s81, s82, s83, s84, s85, s86, s87, s88];
var allBlocks = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, s36, s37, s38, s39, s40, s41, s42, s43, s44, s45, s46, s47, s48, s49, s50, s51, s52, s53, s54, s55, s56, s57, s58, s59, s60, s61, s62, s63, s64, s65, s66, s67, s68, s69, s70, s71, s72, s73, s74, s75, s76, s77, s78, s79, s80, s81, s82, s83, s84, s85, s86, s87, s88];

var speech = new SpeechSynthesisUtterance;

var music = document.getElementById('music');

var playerHPDisplay = document.getElementById('hp');
var hotbarObsidian = document.getElementById('hotbarObsidian');

var player = document.querySelector('.player');
var stoneContainer4 = document.querySelector('.stone-container4');
var hotbarContainer = document.querySelector('.hotbar-container');
var randomRowContainer = document.querySelector('.randomRowContainer');

var grassBreaking = document.getElementById('grassBreaking');
var dirtBreaking = document.getElementById('dirtBreaking');
var stoneBreaking = document.getElementById('stoneBreaking');
var tntExplosion = document.getElementById('tntExplosion');
var explosionSound = document.getElementById('explosionSound');
var enteringNetherSound = document.getElementById('enteringNetherSound');
var blazeSounds = document.getElementById('blazeSounds');

/*  CONFIG  */

var F3config = document.getElementById('config');

var windowConfig = document.getElementById('windowConfig').innerHTML = `${mc.style.width.slice(0, 4)}x${mc.style.height.slice(0, 3)}`;
var FPSDisplay = document.getElementById('FPS').innerHTML = FPS;

setInterval(() => {
    var playerLeftPos = parseInt(player.style.left);
    var playerTopPos = parseInt(player.style.top);
    var playerRightPos = playerLeftPos / playerTopPos + 10;
    var XYZDisplay = document.getElementById('xyz').innerHTML = `${playerLeftPos.toFixed(1)} / ${playerTopPos.toFixed(1)} / ${playerRightPos.toFixed(1)}`;

    if (playerLeftPos < -50 || playerLeftPos >= 1760) {
        window.location.reload();
    }
}, 200);

setInterval(() => {
    allBlocks.forEach(function(blockElement) {
        blockElement.addEventListener('mouseover', function() {
            var BlockElementID = blockElement.id;
            var blockHoverID = document.getElementById('blockHoverID').innerHTML = BlockElementID;
        });
    });
}, 100);

var IPDisplay = document.getElementById('ipNum').innerHTML = window.location.host;


var seedNum = Math.floor(Math.random() * 100000);
var Seed = document.getElementById('seed').innerHTML = seedNum;

var biomeDisplay;

var playerWorldLocation = document.getElementById('playerLocation');

setInterval(() => {
    if (isInOverworld && !isInNether) {
        playerWorldLocation.innerHTML = 'overworld';
        F3config.style.color = '#000';
    } else if (isInNether && !isInOverworld) {
        playerWorldLocation.innerHTML = 'the_nether';
        F3config.style.color = '#fff';
    }
}, 200);

if (window.performance && window.performance.memory) {
    var memoryInfo = window.performance.memory;
    var usedMemoryMB = (memoryInfo.usedJSHeapSize / (1024 * 1024));
    var totalMemoryMB = (memoryInfo.totalJSHeapSize / (1024 * 1024));
    var memoryPercentage = (usedMemoryMB / totalMemoryMB) * 100;
  }
  var currentMemory = document.getElementById('currentMemory').innerHTML = `${memoryPercentage.toFixed(0)}% ${usedMemoryMB.toFixed(0)}/${totalMemoryMB.toFixed(0)}MB`;
/*   ------   */

var playerTop = player.style.top = '260px';

var frameCount = 0;
var lastTime = performance.now();
var lastSecond = lastTime;
var playerPosition = 0;
var isGuiOpen = false;
var isInNether = false;
var isInOverworld = true;
var chat = null;
var menu;
var isInventoryOpen;
var playerCrouching = false;
var walking = false;
var ctrlPressed = false;
var isSteveChosen = false;
var isAlexChosen = false;
var isSkin1Chosen = false;
var playerHP = 10;
var blazeHP = 15;
var creeperHP = 8;

var oakPlanks = false;
var cobbleStone = false;
var sandStone = false;
var oakLeaves = false;
var dirt = false;
var stone = false;
var whiteWool = false;
var diamondBlock = false;
var barrierBlock = false;
var tntBlock = false;
var obsidianBlock = false;
var hotbarHidden = false;
var miningWrongBlocksAlert;
var wrongBlocks = 1;
var wrongBlocksLimit = 4;

var numOfDiamonds = 0;
var numOfGold = 0;
var numofEmeralds = 0;
var numOfCoal = 0;
var numOfIron = 0;
var numOfObsidians = 0;

var numOfBlazeRods = 0;

var createPortal;

var running = true;

if (running) {

    document.addEventListener('DOMContentLoaded', function() {

        log('Server: Succesfully loaded the world.')

        var biomes = {
            normal: {
                ID: 1,
                name: 'Normal'
            },
            desert: { 
                ID: 2,
                name: 'Desert'
            },
            icy: {
                ID: 3,
                name: 'Icy'
            },
            snowy: {
                ID: 4,
                name: 'Snowy'
            }
        }
        var biomesArray = [biomes.normal.ID, biomes.desert.ID, biomes.normal.ID, biomes.icy.ID, biomes.snowy.ID];
        var b = Math.floor(Math.random() * biomesArray.length);
        var biome = biomesArray[b];

        if (biome == 1) {
            setInterval(() => {
                if (isInOverworld && !isInNether) {
                    biomeDisplay = document.getElementById('selectedBiome').innerHTML = biomes.normal.name;
                } else if (isInNether && !isInOverworld) {
                    biomeDisplay = document.getElementById('selectedBiome').innerHTML = 'Nether';
                }
            }, 200);
        } else if (biome == 2) {
            setInterval(() => {
                if (isInOverworld && !isInNether) {
                    biomeDisplay = document.getElementById('selectedBiome').innerHTML = biomes.desert.name;
                } else if (isInNether && !isInOverworld) {
                    biomeDisplay = document.getElementById('selectedBiome').innerHTML = 'Nether';
                }
            }, 200);

            allGrassBlocks.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.src = 'sand_block.png';
            });
            allDirtBlocks.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.src = 'sandstone.png';
            });
            allStoneBlocks.forEach(stoneBlockInStoneBlocks => {
                stoneBlockInStoneBlocks.src = 'sandstone.png';
            });
        } else if (biome == 3) {
            setInterval(() => {
                if (isInOverworld && !isInNether) {
                    biomeDisplay = document.getElementById('selectedBiome').innerHTML = biomes.icy.name;
                } else if (isInNether && !isInOverworld) {
                    biomeDisplay = document.getElementById('selectedBiome').innerHTML = 'Nether';
                }
            }, 200);

            player.style.zIndex = '0';

            allGrassBlocks.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.src = 'ice_block.png';
            });
            allDirtBlocks.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.src = 'water.png';
            });
            allStoneBlocks.forEach(stoneBlockInStoneBlocks => {
                stoneBlockInStoneBlocks.src = 'water.png';
            });
        } else if (biome == 4) {
            setInterval(() => {
                if (isInOverworld && !isInNether) {
                    biomeDisplay = document.getElementById('selectedBiome').innerHTML = biomes.snowy.name;
                } else if (isInNether && !isInOverworld) {
                    biomeDisplay = document.getElementById('selectedBiome').innerHTML = 'Nether';
                }
            }, 200);

            allGrassBlocks.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.src = 'snowy_grass.png';
            });
            allDirtBlocks.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.src = 'dirt.png';
            });
            allStoneBlocks.forEach(stoneBlockInStoneBlocks => {
                stoneBlockInStoneBlocks.src = 'stone_block.png';
            });
        }

        music.play();

        let creeper = document.createElement('div');
        creeper.innerHTML = `<img id="creeper" draggable="false" src="creeper.png" alt="creeper.png">`;
        mc.appendChild(creeper);

        creeper.addEventListener('click', (e) => {
            creeperHP--;

            if (creeperHP == 0) {
                creeper.querySelector('img').src = 'damaged_creeper.png';
                setTimeout(() => {
                    creeper.querySelector('img').ssrc = 'creeper.png';
                    creeper.hidden = true;
                    speech.text = 'OUCCHHHHHHHH!';
                    window.speechSynthesis.speak(speech);
                }, 300);
            }
        });

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
            } else if (obsidianBlock) {
                clickedPlace.style.background = "url('obsidian.png')";
            } else if (barrierBlock) {
                clickedPlace.style.background = "url('barrier.png')";
                setTimeout(() => {
                    clickedPlace.style.display = 'none';
                }, 2000);
            }  else if (tntBlock) {
                clickedPlace.style.background = "url('tnt.png')";

                let blocksToTNTDestroy = 
                [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12,
                g13, g14, g15, g16, g17, g18, g19, g20, g21, g22,
                d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12,
                d13, d14, d15, d16, d17, d18, d19, d20, d21, d22,
                s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12,
                s13, s14, s15, s16, s17, s18, s19, s20, s21, s22];

                let numOfBlocks = [1, 2, 3, 4, 5];
                let randomNumberOfBlocks = Math.floor(Math.random() * numOfBlocks.length);
                let numberOfBlocks = numOfBlocks[randomNumberOfBlocks];

                let rand1 = Math.floor(Math.random() * blocksToTNTDestroy.length);
                let rand2 = Math.floor(Math.random() * blocksToTNTDestroy.length);
                let rand3 = Math.floor(Math.random() * blocksToTNTDestroy.length);
                let rand4 = Math.floor(Math.random() * blocksToTNTDestroy.length);
                let rand5 = Math.floor(Math.random() * blocksToTNTDestroy.length);

                let randomBlock1 = blocksToTNTDestroy[rand1];
                let randomBlock2 = blocksToTNTDestroy[rand2];
                let randomBlock3 = blocksToTNTDestroy[rand3];
                let randomBlock4 = blocksToTNTDestroy[rand4];
                let randomBlock5 = blocksToTNTDestroy[rand5];

                setTimeout(() => {
                    clickedPlace.style.display = 'none';

                    switch (numberOfBlocks) {
                        case 1:
                            tntExplosion.play();
                            randomBlock1.style.display = 'none';
                            break;
                        case 2:
                            tntExplosion.play();
                            randomBlock1.style.display = 'none';
                            randomBlock2.style.display = 'none';
                            break;
                        case 3:
                            tntExplosion.play();
                            randomBlock1.style.display = 'none';
                            randomBlock2.style.display = 'none';
                            randomBlock3.style.display = 'none';
                            break;
                        case 4:
                            tntExplosion.play();
                            randomBlock1.style.display = 'none';
                            randomBlock2.style.display = 'none';
                            randomBlock3.style.display = 'none';
                            randomBlock4.style.display = 'none';
                            break;
                        case 5:
                            tntExplosion.play();
                            randomBlock1.style.display = 'none';
                            randomBlock2.style.display = 'none';
                            randomBlock3.style.display = 'none';
                            randomBlock4.style.display = 'none';
                            randomBlock5.style.display = 'none';
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
    
    document.body.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            if (!isGuiOpen) {
                isGuiOpen = true;
                let GuiInGameMenu = document.createElement('div');
                GuiInGameMenu.innerHTML = `
                <div class="gui">
                <div class="top-elements">
                    <button onclick="closeGUI()" class="close">X</button>
                    <h1>Settings</h1>

                    <label for="music">Music:</label>
                    <input type="range" name="music" id="vol" min="0" max="1" step="0.1" value="0.2" onchange="changeVolume()">

                    <label class="graphic-title" for="graphic">Graphic: (broken)</label>

                    <div class="graphic">
                        <button onclick="setLowGraphic()" class="graphicBtn">Low</button>
                        <button onclick="setNormalGraphic()" class="graphicBtn">Normal</button>
                        <button onclick="setHighGraphic()" class="graphicBtn">High</button>
                    </div>
                </div>
                <div class="chooseSkin">
                    <h2>Choose your skin:</h2>
                    <div class="skinsGUI">
                        <div class="steve-div">
                            <label id="steveLabel" for="steveSkin">Steve: </label>
                            <img id="steveSkin" onclick="steveChosen()" src="steve_standing.png" alt="steve_standing.png" draggable="false">
                        </div>
                        <div class="alex-div">
                            <label id="alexLabel" for="alexSkin">Alex: </label>
                            <img id="alexSkin" onclick="alexChosen()" src="alex_standing.png" alt="alex_standing.png" draggable="false">
                        </div>
                        <div class="skin1-div">
                            <label id="skin1Label" for="skin1Skin">Skin1: </label>
                            <img id="skin1Skin" onclick="skin1Chosen()" src="skin1_standing.png" alt="skin1_standing.png" draggable="false">
                        </div>
                    </div>
                </div>
                <div id="serachForServersContainer">
                    <input type="text" name="nick" id="nick" placeholder="Player nickname" minlength="4" maxlength="15" required autocomplete="nickname" autofocus>
                    <button id="searchForServers" onclick="searchForServers()">Search for an Online Server</button>
                </div>
            </div>
                `;
                GuiInGameMenu.classList.add('gui-container');
                document.body.appendChild(GuiInGameMenu);
            } else {
                isGuiOpen = false;
                let GuiInGameMenu = document.querySelector('.gui-container');
                GuiInGameMenu.remove();
            }
        }
    });
    function searchForServers() {
        let nickInput = document.getElementById('nick');
        if (nickInput.value == '') {
            window.alert('You need to type a nick!');
        } else {
            window.alert('We\'re working on this feature!');
        }
    }
    function changeMusicVolume() {
        var musicVolume = document.getElementById('vol').value;
        music.volume = musicVolume;
    }
    function closeGUI() {
        isGuiOpen = false;
        let GuiInGameMenu = document.querySelector('.gui-container');
        GuiInGameMenu.remove();
    }
    function updateFPS() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - lastTime;
        lastTime = currentTime;
        frameCount++;
    
        if (currentTime - lastSecond >= 1000) {
            FPS = Math.round((frameCount * 1000) / (currentTime - lastSecond));
            document.getElementById('FPS').innerText = FPS;
    
            frameCount = 0;
            lastSecond = currentTime;
        }
        requestAnimationFrame(updateFPS);
    }
    requestAnimationFrame(updateFPS);

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
    let s23 = document.getElementById('s23');
    let s24 = document.getElementById('s24');
    let s25 = document.getElementById('s25');
    let s26 = document.getElementById('s26');
    let s27 = document.getElementById('s27');
    let s28 = document.getElementById('s28');
    let s29 = document.getElementById('s29');
    let s30 = document.getElementById('s30');
    let s31 = document.getElementById('s31');
    let s32 = document.getElementById('s32');
    let s33 = document.getElementById('s33');
    let s34 = document.getElementById('s34');
    let s35 = document.getElementById('s35');
    let s36 = document.getElementById('s36');
    let s37 = document.getElementById('s37');
    let s38 = document.getElementById('s38');
    let s39 = document.getElementById('s39');
    let s40 = document.getElementById('s40');
    let s41 = document.getElementById('s41');
    let s42 = document.getElementById('s42');
    let s43 = document.getElementById('s43');
    let s44 = document.getElementById('s44');
    let s45 = document.getElementById('s45');
    let s46 = document.getElementById('s46');
    let s47 = document.getElementById('s47');
    let s48 = document.getElementById('s48');
    let s49 = document.getElementById('s49');
    let s50 = document.getElementById('s50');
    let s51 = document.getElementById('s51');
    let s52 = document.getElementById('s52');
    let s53 = document.getElementById('s53');
    let s54 = document.getElementById('s54');
    let s55 = document.getElementById('s55');
    let s56 = document.getElementById('s56');
    let s57 = document.getElementById('s57');
    let s58 = document.getElementById('s58');
    let s59 = document.getElementById('s59');
    let s60 = document.getElementById('s60');
    let s61 = document.getElementById('s61');
    let s62 = document.getElementById('s62');
    let s63 = document.getElementById('s63');
    let s64 = document.getElementById('s64');
    let s65 = document.getElementById('s65');
    let s66 = document.getElementById('s66');
    let s67 = document.getElementById('s67');
    let s68 = document.getElementById('s68');
    let s69 = document.getElementById('s69');
    let s70 = document.getElementById('s70');
    let s71 = document.getElementById('s71');
    let s72 = document.getElementById('s72');
    let s73 = document.getElementById('s73');
    let s74 = document.getElementById('s74');
    let s75 = document.getElementById('s75');
    let s76 = document.getElementById('s76');
    let s77 = document.getElementById('s77');
    let s78 = document.getElementById('s78');
    let s79 = document.getElementById('s79');
    let s80 = document.getElementById('s80');
    let s81 = document.getElementById('s81');
    let s82 = document.getElementById('s82');
    let s83 = document.getElementById('s83');
    let s84 = document.getElementById('s84');
    let s85 = document.getElementById('s85');
    let s86 = document.getElementById('s86');
    let s87 = document.getElementById('s87');
    let s88 = document.getElementById('s88');

    function normalNetherrack() {
        g1.setAttribute('src', 'netherrack.png');
        g2.setAttribute('src', 'netherrack.png');
        g3.setAttribute('src', 'netherrack.png');
        g4.setAttribute('src', 'netherrack.png');
        g5.setAttribute('src', 'netherrack.png');
        g6.setAttribute('src', 'netherrack.png');
        g7.setAttribute('src', 'netherrack.png');
        g8.setAttribute('src', 'netherrack.png');
        g9.setAttribute('src', 'netherrack.png');
        g10.setAttribute('src', 'netherrack.png');
        g11.setAttribute('src', 'netherrack.png');
        g12.setAttribute('src', 'netherrack.png');
        g13.setAttribute('src', 'netherrack.png');
        g14.setAttribute('src', 'netherrack.png');
        g15.setAttribute('src', 'netherrack.png');
        g16.setAttribute('src', 'netherrack.png');
        g17.setAttribute('src', 'netherrack.png');
        g18.setAttribute('src', 'netherrack.png');
        g19.setAttribute('src', 'netherrack.png');
        g20.setAttribute('src', 'netherrack.png');
        g21.setAttribute('src', 'netherrack.png');
        g22.setAttribute('src', 'netherrack.png');
        d1.setAttribute('src', 'netherrack.png');
        d2.setAttribute('src', 'netherrack.png');
        d3.setAttribute('src', 'netherrack.png');
        d4.setAttribute('src', 'netherrack.png');
        d5.setAttribute('src', 'netherrack.png');
        d6.setAttribute('src', 'netherrack.png');
        d7.setAttribute('src', 'netherrack.png');
        d8.setAttribute('src', 'netherrack.png');
        d9.setAttribute('src', 'netherrack.png');
        d10.setAttribute('src', 'netherrack.png');
        d11.setAttribute('src', 'netherrack.png');
        d12.setAttribute('src', 'netherrack.png');
        d13.setAttribute('src', 'netherrack.png');
        d14.setAttribute('src', 'netherrack.png');
        d15.setAttribute('src', 'netherrack.png');
        d16.setAttribute('src', 'netherrack.png');
        d17.setAttribute('src', 'netherrack.png');
        d18.setAttribute('src', 'netherrack.png');
        d19.setAttribute('src', 'netherrack.png');
        d20.setAttribute('src', 'netherrack.png');
        d21.setAttribute('src', 'netherrack.png');
        d22.setAttribute('src', 'netherrack.png');
        s1.setAttribute('src', 'netherrack.png');
        s2.setAttribute('src', 'netherrack.png');
        s3.setAttribute('src', 'netherrack.png');
        s4.setAttribute('src', 'netherrack.png');
        s5.setAttribute('src', 'netherrack.png');
        s6.setAttribute('src', 'netherrack.png');
        s7.setAttribute('src', 'netherrack.png');
        s8.setAttribute('src', 'netherrack.png');
        s9.setAttribute('src', 'netherrack.png');
        s10.setAttribute('src', 'netherrack.png');
        s11.setAttribute('src', 'netherrack.png');
        s12.setAttribute('src', 'netherrack.png');
        s13.setAttribute('src', 'netherrack.png');
        s14.setAttribute('src', 'netherrack.png');
        s15.setAttribute('src', 'netherrack.png');
        s16.setAttribute('src', 'netherrack.png');
        s17.setAttribute('src', 'netherrack.png');
        s18.setAttribute('src', 'netherrack.png');
        s19.setAttribute('src', 'netherrack.png');
        s20.setAttribute('src', 'netherrack.png');
        s21.setAttribute('src', 'netherrack.png');
        s22.setAttribute('src', 'netherrack.png');
        s23.setAttribute('src', 'netherrack.png');
        s24.setAttribute('src', 'netherrack.png');
        s25.setAttribute('src', 'netherrack.png');
        s26.setAttribute('src', 'netherrack.png');
        s27.setAttribute('src', 'netherrack.png');
        s28.setAttribute('src', 'netherrack.png');
        s29.setAttribute('src', 'netherrack.png');
        s30.setAttribute('src', 'netherrack.png');
        s31.setAttribute('src', 'netherrack.png');
        s32.setAttribute('src', 'netherrack.png');
        s33.setAttribute('src', 'netherrack.png');
        s34.setAttribute('src', 'netherrack.png');
        s35.setAttribute('src', 'netherrack.png');
        s36.setAttribute('src', 'netherrack.png');
        s37.setAttribute('src', 'netherrack.png');
        s38.setAttribute('src', 'netherrack.png');
        s39.setAttribute('src', 'netherrack.png');
        s40.setAttribute('src', 'netherrack.png');
        s41.setAttribute('src', 'netherrack.png');
        s42.setAttribute('src', 'netherrack.png');
        s43.setAttribute('src', 'netherrack.png');
        s44.setAttribute('src', 'netherrack.png');
        s45.setAttribute('src', 'netherrack.png');
        s46.setAttribute('src', 'netherrack.png');
        s47.setAttribute('src', 'netherrack.png');
        s48.setAttribute('src', 'netherrack.png');
        s49.setAttribute('src', 'netherrack.png');
        s50.setAttribute('src', 'netherrack.png');
        s51.setAttribute('src', 'netherrack.png');
        s52.setAttribute('src', 'netherrack.png');
        s53.setAttribute('src', 'netherrack.png');
        s54.setAttribute('src', 'netherrack.png');
        s55.setAttribute('src', 'netherrack.png');
        s56.setAttribute('src', 'netherrack.png');
        s57.setAttribute('src', 'netherrack.png');
        s58.setAttribute('src', 'netherrack.png');
        s59.setAttribute('src', 'netherrack.png');
        s60.setAttribute('src', 'netherrack.png');
        s61.setAttribute('src', 'netherrack.png');
        s62.setAttribute('src', 'netherrack.png');
        s63.setAttribute('src', 'netherrack.png');
        s64.setAttribute('src', 'netherrack.png');
        s65.setAttribute('src', 'netherrack.png');
        s66.setAttribute('src', 'netherrack.png');
        s67.setAttribute('src', 'netherrack.png');
        s68.setAttribute('src', 'netherrack.png');
        s69.setAttribute('src', 'netherrack.png');
        s70.setAttribute('src', 'netherrack.png');
        s71.setAttribute('src', 'netherrack.png');
        s72.setAttribute('src', 'netherrack.png');
        s73.setAttribute('src', 'netherrack.png');
        s74.setAttribute('src', 'netherrack.png');
        s75.setAttribute('src', 'netherrack.png');
        s76.setAttribute('src', 'netherrack.png');
        s77.setAttribute('src', 'netherrack.png');
        s78.setAttribute('src', 'netherrack.png');
        s79.setAttribute('src', 'netherrack.png');
        s80.setAttribute('src', 'netherrack.png');
        s81.setAttribute('src', 'netherrack.png');
        s82.setAttribute('src', 'netherrack.png');
        s83.setAttribute('src', 'netherrack.png');
        s84.setAttribute('src', 'netherrack.png');
        s85.setAttribute('src', 'netherrack.png');
        s86.setAttribute('src', 'netherrack.png');
        s87.setAttribute('src', 'netherrack.png');
        s88.setAttribute('src', 'netherrack.png');
    }

    function setLowGraphic() {

        isInOverworld = true;

        if (isInOverworld && !isInNether) {
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
        s23.setAttribute('src', 'low_stone_block.png');
        s24.setAttribute('src', 'low_stone_block.png');
        s25.setAttribute('src', 'low_stone_block.png');
        s26.setAttribute('src', 'low_stone_block.png');
        s27.setAttribute('src', 'low_stone_block.png');
        s28.setAttribute('src', 'low_stone_block.png');
        s29.setAttribute('src', 'low_stone_block.png');
        s30.setAttribute('src', 'low_stone_block.png');
        s31.setAttribute('src', 'low_stone_block.png');
        s32.setAttribute('src', 'low_stone_block.png');
        s33.setAttribute('src', 'low_stone_block.png');
        s34.setAttribute('src', 'low_stone_block.png');
        s35.setAttribute('src', 'low_stone_block.png');
        s36.setAttribute('src', 'low_stone_block.png');
        s37.setAttribute('src', 'low_stone_block.png');
        s38.setAttribute('src', 'low_stone_block.png');
        s39.setAttribute('src', 'low_stone_block.png');
        s40.setAttribute('src', 'low_stone_block.png');
        s41.setAttribute('src', 'low_stone_block.png');
        s42.setAttribute('src', 'low_stone_block.png');
        s43.setAttribute('src', 'low_stone_block.png');
        s44.setAttribute('src', 'low_stone_block.png');
        s45.setAttribute('src', 'low_stone_block.png');
        s46.setAttribute('src', 'low_stone_block.png');
        s47.setAttribute('src', 'low_stone_block.png');
        s48.setAttribute('src', 'low_stone_block.png');
        s49.setAttribute('src', 'low_stone_block.png');
        s50.setAttribute('src', 'low_stone_block.png');
        s51.setAttribute('src', 'low_stone_block.png');
        s52.setAttribute('src', 'low_stone_block.png');
        s53.setAttribute('src', 'low_stone_block.png');
        s54.setAttribute('src', 'low_stone_block.png');
        s55.setAttribute('src', 'low_stone_block.png');
        s56.setAttribute('src', 'low_stone_block.png');
        s57.setAttribute('src', 'low_stone_block.png');
        s58.setAttribute('src', 'low_stone_block.png');
        s59.setAttribute('src', 'low_stone_block.png');
        s60.setAttribute('src', 'low_stone_block.png');
        s61.setAttribute('src', 'low_stone_block.png');
        s62.setAttribute('src', 'low_stone_block.png');
        s63.setAttribute('src', 'low_stone_block.png');
        s64.setAttribute('src', 'low_stone_block.png');
        s65.setAttribute('src', 'low_stone_block.png');
        s66.setAttribute('src', 'low_stone_block.png');
        s67.setAttribute('src', 'low_stone_block.png');
        s68.setAttribute('src', 'low_stone_block.png');
        s69.setAttribute('src', 'low_stone_block.png');
        s70.setAttribute('src', 'low_stone_block.png');
        s71.setAttribute('src', 'low_stone_block.png');
        s72.setAttribute('src', 'low_stone_block.png');
        s73.setAttribute('src', 'low_stone_block.png');
        s74.setAttribute('src', 'low_stone_block.png');
        s75.setAttribute('src', 'low_stone_block.png');
        s76.setAttribute('src', 'low_stone_block.png');
        s77.setAttribute('src', 'low_stone_block.png');
        s78.setAttribute('src', 'low_stone_block.png');
        s79.setAttribute('src', 'low_stone_block.png');
        s80.setAttribute('src', 'low_stone_block.png');
        s81.setAttribute('src', 'low_stone_block.png');
        s82.setAttribute('src', 'low_stone_block.png');
        s83.setAttribute('src', 'low_stone_block.png');
        s84.setAttribute('src', 'low_stone_block.png');
        s85.setAttribute('src', 'low_stone_block.png');
        s86.setAttribute('src', 'low_stone_block.png');
        s87.setAttribute('src', 'low_stone_block.png');
        s88.setAttribute('src', 'low_stone_block.png');
    } else if (isInNether || !isInOverworld) {

        mc.style.background = "url('low_nether_sky.png')";

        g1.setAttribute('src', 'low_netherrack.png');
        g2.setAttribute('src', 'low_netherrack.png');
        g3.setAttribute('src', 'low_netherrack.png');
        g4.setAttribute('src', 'low_netherrack.png');
        g5.setAttribute('src', 'low_netherrack.png');
        g6.setAttribute('src', 'low_netherrack.png');
        g7.setAttribute('src', 'low_netherrack.png');
        g8.setAttribute('src', 'low_netherrack.png');
        g9.setAttribute('src', 'low_netherrack.png');
        g10.setAttribute('src', 'low_netherrack.png');
        g11.setAttribute('src', 'low_netherrack.png');
        g12.setAttribute('src', 'low_netherrack.png');
        g13.setAttribute('src', 'low_netherrack.png');
        g14.setAttribute('src', 'low_netherrack.png');
        g15.setAttribute('src', 'low_netherrack.png');
        g16.setAttribute('src', 'low_netherrack.png');
        g17.setAttribute('src', 'low_netherrack.png');
        g18.setAttribute('src', 'low_netherrack.png');
        g19.setAttribute('src', 'low_netherrack.png');
        g20.setAttribute('src', 'low_netherrack.png');
        g21.setAttribute('src', 'low_netherrack.png');
        g22.setAttribute('src', 'low_netherrack.png');

        d1.setAttribute('src', 'low_netherrack.png');
        d2.setAttribute('src', 'low_netherrack.png');
        d3.setAttribute('src', 'low_netherrack.png');
        d4.setAttribute('src', 'low_netherrack.png');
        d5.setAttribute('src', 'low_netherrack.png');
        d6.setAttribute('src', 'low_netherrack.png');
        d7.setAttribute('src', 'low_netherrack.png');
        d8.setAttribute('src', 'low_netherrack.png');
        d9.setAttribute('src', 'low_netherrack.png');
        d10.setAttribute('src', 'low_netherrack.png');
        d11.setAttribute('src', 'low_netherrack.png');
        d12.setAttribute('src', 'low_netherrack.png');
        d13.setAttribute('src', 'low_netherrack.png');
        d14.setAttribute('src', 'low_netherrack.png');
        d15.setAttribute('src', 'low_netherrack.png');
        d16.setAttribute('src', 'low_netherrack.png');
        d17.setAttribute('src', 'low_netherrack.png');
        d18.setAttribute('src', 'low_netherrack.png');
        d19.setAttribute('src', 'low_netherrack.png');
        d20.setAttribute('src', 'low_netherrack.png');
        d21.setAttribute('src', 'low_netherrack.png');
        d22.setAttribute('src', 'low_netherrack.png');

        s1.setAttribute('src', 'low_netherrack.png');
        s2.setAttribute('src', 'low_netherrack.png');
        s3.setAttribute('src', 'low_netherrack.png');
        s4.setAttribute('src', 'low_netherrack.png');
        s5.setAttribute('src', 'low_netherrack.png');
        s6.setAttribute('src', 'low_netherrack.png');
        s7.setAttribute('src', 'low_netherrack.png');
        s8.setAttribute('src', 'low_netherrack.png');
        s9.setAttribute('src', 'low_netherrack.png');
        s10.setAttribute('src', 'low_netherrack.png');
        s11.setAttribute('src', 'low_netherrack.png');
        s12.setAttribute('src', 'low_netherrack.png');
        s13.setAttribute('src', 'low_netherrack.png');
        s14.setAttribute('src', 'low_netherrack.png');
        s15.setAttribute('src', 'low_netherrack.png');
        s16.setAttribute('src', 'low_netherrack.png');
        s17.setAttribute('src', 'low_netherrack.png');
        s18.setAttribute('src', 'low_netherrack.png');
        s19.setAttribute('src', 'low_netherrack.png');
        s20.setAttribute('src', 'low_netherrack.png');
        s21.setAttribute('src', 'low_netherrack.png');
        s22.setAttribute('src', 'low_netherrack.png');
        s23.setAttribute('src', 'low_netherrack.png');
        s24.setAttribute('src', 'low_netherrack.png');
        s25.setAttribute('src', 'low_netherrack.png');
        s26.setAttribute('src', 'low_netherrack.png');
        s27.setAttribute('src', 'low_netherrack.png');
        s28.setAttribute('src', 'low_netherrack.png');
        s29.setAttribute('src', 'low_netherrack.png');
        s30.setAttribute('src', 'low_netherrack.png');
        s31.setAttribute('src', 'low_netherrack.png');
        s32.setAttribute('src', 'low_netherrack.png');
        s33.setAttribute('src', 'low_netherrack.png');
        s34.setAttribute('src', 'low_netherrack.png');
        s35.setAttribute('src', 'low_netherrack.png');
        s36.setAttribute('src', 'low_netherrack.png');
        s37.setAttribute('src', 'low_netherrack.png');
        s38.setAttribute('src', 'low_netherrack.png');
        s39.setAttribute('src', 'low_netherrack.png');
        s40.setAttribute('src', 'low_netherrack.png');
        s41.setAttribute('src', 'low_netherrack.png');
        s42.setAttribute('src', 'low_netherrack.png');
        s43.setAttribute('src', 'low_netherrack.png');
        s44.setAttribute('src', 'low_netherrack.png');
        s45.setAttribute('src', 'low_netherrack.png');
        s46.setAttribute('src', 'low_netherrack.png');
        s47.setAttribute('src', 'low_netherrack.png');
        s48.setAttribute('src', 'low_netherrack.png');
        s49.setAttribute('src', 'low_netherrack.png');
        s50.setAttribute('src', 'low_netherrack.png');
        s51.setAttribute('src', 'low_netherrack.png');
        s52.setAttribute('src', 'low_netherrack.png');
        s53.setAttribute('src', 'low_netherrack.png');
        s54.setAttribute('src', 'low_netherrack.png');
        s55.setAttribute('src', 'low_netherrack.png');
        s56.setAttribute('src', 'low_netherrack.png');
        s57.setAttribute('src', 'low_netherrack.png');
        s58.setAttribute('src', 'low_netherrack.png');
        s59.setAttribute('src', 'low_netherrack.png');
        s60.setAttribute('src', 'low_netherrack.png');
        s61.setAttribute('src', 'low_netherrack.png');
        s62.setAttribute('src', 'low_netherrack.png');
        s63.setAttribute('src', 'low_netherrack.png');
        s64.setAttribute('src', 'low_netherrack.png');
        s65.setAttribute('src', 'low_netherrack.png');
        s66.setAttribute('src', 'low_netherrack.png');
        s67.setAttribute('src', 'low_netherrack.png');
        s68.setAttribute('src', 'low_netherrack.png');
        s69.setAttribute('src', 'low_netherrack.png');
        s70.setAttribute('src', 'low_netherrack.png');
        s71.setAttribute('src', 'low_netherrack.png');
        s72.setAttribute('src', 'low_netherrack.png');
        s73.setAttribute('src', 'low_netherrack.png');
        s74.setAttribute('src', 'low_netherrack.png');
        s75.setAttribute('src', 'low_netherrack.png');
        s76.setAttribute('src', 'low_netherrack.png');
        s77.setAttribute('src', 'low_netherrack.png');
        s78.setAttribute('src', 'low_netherrack.png');
        s79.setAttribute('src', 'low_netherrack.png');
        s80.setAttribute('src', 'low_netherrack.png');
        s81.setAttribute('src', 'low_netherrack.png');
        s82.setAttribute('src', 'low_netherrack.png');
        s83.setAttribute('src', 'low_netherrack.png');
        s84.setAttribute('src', 'low_netherrack.png');
        s85.setAttribute('src', 'low_netherrack.png');
        s86.setAttribute('src', 'low_netherrack.png');
        s87.setAttribute('src', 'low_netherrack.png');
        s88.setAttribute('src', 'low_netherrack.png');
    }
}
    function setNormalGraphic() {

        isInOverworld = true;

        if (isInOverworld && !isInNether) {
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
        s23.setAttribute('src', 'stone_block.png');
        s24.setAttribute('src', 'stone_block.png');
        s25.setAttribute('src', 'stone_block.png');
        s26.setAttribute('src', 'stone_block.png');
        s27.setAttribute('src', 'stone_block.png');
        s28.setAttribute('src', 'stone_block.png');
        s29.setAttribute('src', 'stone_block.png');
        s30.setAttribute('src', 'stone_block.png');
        s31.setAttribute('src', 'stone_block.png');
        s32.setAttribute('src', 'stone_block.png');
        s33.setAttribute('src', 'stone_block.png');
        s34.setAttribute('src', 'stone_block.png');
        s35.setAttribute('src', 'stone_block.png');
        s36.setAttribute('src', 'stone_block.png');
        s37.setAttribute('src', 'stone_block.png');
        s38.setAttribute('src', 'stone_block.png');
        s39.setAttribute('src', 'stone_block.png');
        s40.setAttribute('src', 'stone_block.png');
        s41.setAttribute('src', 'stone_block.png');
        s42.setAttribute('src', 'stone_block.png');
        s43.setAttribute('src', 'stone_block.png');
        s44.setAttribute('src', 'stone_block.png');
        s45.setAttribute('src', 'stone_block.png');
        s46.setAttribute('src', 'stone_block.png');
        s47.setAttribute('src', 'stone_block.png');
        s48.setAttribute('src', 'stone_block.png');
        s49.setAttribute('src', 'stone_block.png');
        s50.setAttribute('src', 'stone_block.png');
        s51.setAttribute('src', 'stone_block.png');
        s52.setAttribute('src', 'stone_block.png');
        s53.setAttribute('src', 'stone_block.png');
        s54.setAttribute('src', 'stone_block.png');
        s55.setAttribute('src', 'stone_block.png');
        s56.setAttribute('src', 'stone_block.png');
        s57.setAttribute('src', 'stone_block.png');
        s58.setAttribute('src', 'stone_block.png');
        s59.setAttribute('src', 'stone_block.png');
        s60.setAttribute('src', 'stone_block.png');
        s61.setAttribute('src', 'stone_block.png');
        s62.setAttribute('src', 'stone_block.png');
        s63.setAttribute('src', 'stone_block.png');
        s64.setAttribute('src', 'stone_block.png');
        s65.setAttribute('src', 'stone_block.png');
        s66.setAttribute('src', 'stone_block.png');
        s67.setAttribute('src', 'stone_block.png');
        s68.setAttribute('src', 'stone_block.png');
        s69.setAttribute('src', 'stone_block.png');
        s70.setAttribute('src', 'stone_block.png');
        s71.setAttribute('src', 'stone_block.png');
        s72.setAttribute('src', 'stone_block.png');
        s73.setAttribute('src', 'stone_block.png');
        s74.setAttribute('src', 'stone_block.png');
        s75.setAttribute('src', 'stone_block.png');
        s76.setAttribute('src', 'stone_block.png');
        s77.setAttribute('src', 'stone_block.png');
        s78.setAttribute('src', 'stone_block.png');
        s79.setAttribute('src', 'stone_block.png');
        s80.setAttribute('src', 'stone_block.png');
        s81.setAttribute('src', 'stone_block.png');
        s82.setAttribute('src', 'stone_block.png');
        s83.setAttribute('src', 'stone_block.png');
        s84.setAttribute('src', 'stone_block.png');
        s85.setAttribute('src', 'stone_block.png');
        s86.setAttribute('src', 'stone_block.png');
        s87.setAttribute('src', 'stone_block.png');
        s88.setAttribute('src', 'stone_block.png');
        } else if (isInNether || !isInOverworld) {

        mc.style.background = "url('nether_sky.png')";

        g1.setAttribute('src', 'netherrack.png');
        g2.setAttribute('src', 'netherrack.png');
        g3.setAttribute('src', 'netherrack.png');
        g4.setAttribute('src', 'netherrack.png');
        g5.setAttribute('src', 'netherrack.png');
        g6.setAttribute('src', 'netherrack.png');
        g7.setAttribute('src', 'netherrack.png');
        g8.setAttribute('src', 'netherrack.png');
        g9.setAttribute('src', 'netherrack.png');
        g10.setAttribute('src', 'netherrack.png');
        g11.setAttribute('src', 'netherrack.png');
        g12.setAttribute('src', 'netherrack.png');
        g13.setAttribute('src', 'netherrack.png');
        g14.setAttribute('src', 'netherrack.png');
        g15.setAttribute('src', 'netherrack.png');
        g16.setAttribute('src', 'netherrack.png');
        g17.setAttribute('src', 'netherrack.png');
        g18.setAttribute('src', 'netherrack.png');
        g19.setAttribute('src', 'netherrack.png');
        g20.setAttribute('src', 'netherrack.png');
        g21.setAttribute('src', 'netherrack.png');
        g22.setAttribute('src', 'netherrack.png');
        d1.setAttribute('src', 'netherrack.png');
        d2.setAttribute('src', 'netherrack.png');
        d3.setAttribute('src', 'netherrack.png');
        d4.setAttribute('src', 'netherrack.png');
        d5.setAttribute('src', 'netherrack.png');
        d6.setAttribute('src', 'netherrack.png');
        d7.setAttribute('src', 'netherrack.png');
        d8.setAttribute('src', 'netherrack.png');
        d9.setAttribute('src', 'netherrack.png');
        d10.setAttribute('src', 'netherrack.png');
        d11.setAttribute('src', 'netherrack.png');
        d12.setAttribute('src', 'netherrack.png');
        d13.setAttribute('src', 'netherrack.png');
        d14.setAttribute('src', 'netherrack.png');
        d15.setAttribute('src', 'netherrack.png');
        d16.setAttribute('src', 'netherrack.png');
        d17.setAttribute('src', 'netherrack.png');
        d18.setAttribute('src', 'netherrack.png');
        d19.setAttribute('src', 'netherrack.png');
        d20.setAttribute('src', 'netherrack.png');
        d21.setAttribute('src', 'netherrack.png');
        d22.setAttribute('src', 'netherrack.png');
        s1.setAttribute('src', 'netherrack.png');
        s2.setAttribute('src', 'netherrack.png');
        s3.setAttribute('src', 'netherrack.png');
        s4.setAttribute('src', 'netherrack.png');
        s5.setAttribute('src', 'netherrack.png');
        s6.setAttribute('src', 'netherrack.png');
        s7.setAttribute('src', 'netherrack.png');
        s8.setAttribute('src', 'netherrack.png');
        s9.setAttribute('src', 'netherrack.png');
        s10.setAttribute('src', 'netherrack.png');
        s11.setAttribute('src', 'netherrack.png');
        s12.setAttribute('src', 'netherrack.png');
        s13.setAttribute('src', 'netherrack.png');
        s14.setAttribute('src', 'netherrack.png');
        s15.setAttribute('src', 'netherrack.png');
        s16.setAttribute('src', 'netherrack.png');
        s17.setAttribute('src', 'netherrack.png');
        s18.setAttribute('src', 'netherrack.png');
        s19.setAttribute('src', 'netherrack.png');
        s20.setAttribute('src', 'netherrack.png');
        s21.setAttribute('src', 'netherrack.png');
        s22.setAttribute('src', 'netherrack.png');
        s23.setAttribute('src', 'netherrack.png');
        s24.setAttribute('src', 'netherrack.png');
        s25.setAttribute('src', 'netherrack.png');
        s26.setAttribute('src', 'netherrack.png');
        s27.setAttribute('src', 'netherrack.png');
        s28.setAttribute('src', 'netherrack.png');
        s29.setAttribute('src', 'netherrack.png');
        s30.setAttribute('src', 'netherrack.png');
        s31.setAttribute('src', 'netherrack.png');
        s32.setAttribute('src', 'netherrack.png');
        s33.setAttribute('src', 'netherrack.png');
        s34.setAttribute('src', 'netherrack.png');
        s35.setAttribute('src', 'netherrack.png');
        s36.setAttribute('src', 'netherrack.png');
        s37.setAttribute('src', 'netherrack.png');
        s38.setAttribute('src', 'netherrack.png');
        s39.setAttribute('src', 'netherrack.png');
        s40.setAttribute('src', 'netherrack.png');
        s41.setAttribute('src', 'netherrack.png');
        s42.setAttribute('src', 'netherrack.png');
        s43.setAttribute('src', 'netherrack.png');
        s44.setAttribute('src', 'netherrack.png');
        s45.setAttribute('src', 'netherrack.png');
        s46.setAttribute('src', 'netherrack.png');
        s47.setAttribute('src', 'netherrack.png');
        s48.setAttribute('src', 'netherrack.png');
        s49.setAttribute('src', 'netherrack.png');
        s50.setAttribute('src', 'netherrack.png');
        s51.setAttribute('src', 'netherrack.png');
        s52.setAttribute('src', 'netherrack.png');
        s53.setAttribute('src', 'netherrack.png');
        s54.setAttribute('src', 'netherrack.png');
        s55.setAttribute('src', 'netherrack.png');
        s56.setAttribute('src', 'netherrack.png');
        s57.setAttribute('src', 'netherrack.png');
        s58.setAttribute('src', 'netherrack.png');
        s59.setAttribute('src', 'netherrack.png');
        s60.setAttribute('src', 'netherrack.png');
        s61.setAttribute('src', 'netherrack.png');
        s62.setAttribute('src', 'netherrack.png');
        s63.setAttribute('src', 'netherrack.png');
        s64.setAttribute('src', 'netherrack.png');
        s65.setAttribute('src', 'netherrack.png');
        s66.setAttribute('src', 'netherrack.png');
        s67.setAttribute('src', 'netherrack.png');
        s68.setAttribute('src', 'netherrack.png');
        s69.setAttribute('src', 'netherrack.png');
        s70.setAttribute('src', 'netherrack.png');
        s71.setAttribute('src', 'netherrack.png');
        s72.setAttribute('src', 'netherrack.png');
        s73.setAttribute('src', 'netherrack.png');
        s74.setAttribute('src', 'netherrack.png');
        s75.setAttribute('src', 'netherrack.png');
        s76.setAttribute('src', 'netherrack.png');
        s77.setAttribute('src', 'netherrack.png');
        s78.setAttribute('src', 'netherrack.png');
        s79.setAttribute('src', 'netherrack.png');
        s80.setAttribute('src', 'netherrack.png');
        s81.setAttribute('src', 'netherrack.png');
        s82.setAttribute('src', 'netherrack.png');
        s83.setAttribute('src', 'netherrack.png');
        s84.setAttribute('src', 'netherrack.png');
        s85.setAttribute('src', 'netherrack.png');
        s86.setAttribute('src', 'netherrack.png');
        s87.setAttribute('src', 'netherrack.png');
        s88.setAttribute('src', 'netherrack.png');
        }
    }

    function setHighGraphic() {

        isInOverworld = true;

        if (isInOverworld && !isInNether) {
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
        s23.setAttribute('src', 'high_stone_block.png');
        s24.setAttribute('src', 'high_stone_block.png');
        s25.setAttribute('src', 'high_stone_block.png');
        s26.setAttribute('src', 'high_stone_block.png');
        s27.setAttribute('src', 'high_stone_block.png');
        s28.setAttribute('src', 'high_stone_block.png');
        s29.setAttribute('src', 'high_stone_block.png');
        s30.setAttribute('src', 'high_stone_block.png');
        s31.setAttribute('src', 'high_stone_block.png');
        s32.setAttribute('src', 'high_stone_block.png');
        s33.setAttribute('src', 'high_stone_block.png');
        s34.setAttribute('src', 'high_stone_block.png');
        s35.setAttribute('src', 'high_stone_block.png');
        s36.setAttribute('src', 'high_stone_block.png');
        s37.setAttribute('src', 'high_stone_block.png');
        s38.setAttribute('src', 'high_stone_block.png');
        s39.setAttribute('src', 'high_stone_block.png');
        s40.setAttribute('src', 'high_stone_block.png');
        s41.setAttribute('src', 'high_stone_block.png');
        s42.setAttribute('src', 'high_stone_block.png');
        s43.setAttribute('src', 'high_stone_block.png');
        s44.setAttribute('src', 'high_stone_block.png');
        s45.setAttribute('src', 'high_stone_block.png');
        s46.setAttribute('src', 'high_stone_block.png');
        s47.setAttribute('src', 'high_stone_block.png');
        s48.setAttribute('src', 'high_stone_block.png');
        s49.setAttribute('src', 'high_stone_block.png');
        s50.setAttribute('src', 'high_stone_block.png');
        s51.setAttribute('src', 'high_stone_block.png');
        s52.setAttribute('src', 'high_stone_block.png');
        s53.setAttribute('src', 'high_stone_block.png');
        s54.setAttribute('src', 'high_stone_block.png');
        s55.setAttribute('src', 'high_stone_block.png');
        s56.setAttribute('src', 'high_stone_block.png');
        s57.setAttribute('src', 'high_stone_block.png');
        s58.setAttribute('src', 'high_stone_block.png');
        s59.setAttribute('src', 'high_stone_block.png');
        s60.setAttribute('src', 'high_stone_block.png');
        s61.setAttribute('src', 'high_stone_block.png');
        s62.setAttribute('src', 'high_stone_block.png');
        s63.setAttribute('src', 'high_stone_block.png');
        s64.setAttribute('src', 'high_stone_block.png');
        s65.setAttribute('src', 'high_stone_block.png');
        s66.setAttribute('src', 'high_stone_block.png');
        s67.setAttribute('src', 'high_stone_block.png');
        s68.setAttribute('src', 'high_stone_block.png');
        s69.setAttribute('src', 'high_stone_block.png');
        s70.setAttribute('src', 'high_stone_block.png');
        s71.setAttribute('src', 'high_stone_block.png');
        s72.setAttribute('src', 'high_stone_block.png');
        s73.setAttribute('src', 'high_stone_block.png');
        s74.setAttribute('src', 'high_stone_block.png');
        s75.setAttribute('src', 'high_stone_block.png');
        s76.setAttribute('src', 'high_stone_block.png');
        s77.setAttribute('src', 'high_stone_block.png');
        s78.setAttribute('src', 'high_stone_block.png');
        s79.setAttribute('src', 'high_stone_block.png');
        s80.setAttribute('src', 'high_stone_block.png');
        s81.setAttribute('src', 'high_stone_block.png');
        s82.setAttribute('src', 'high_stone_block.png');
        s83.setAttribute('src', 'high_stone_block.png');
        s84.setAttribute('src', 'high_stone_block.png');
        s85.setAttribute('src', 'high_stone_block.png');
        s86.setAttribute('src', 'high_stone_block.png');
        s87.setAttribute('src', 'high_stone_block.png');
        s88.setAttribute('src', 'high_stone_block.png');
        } else if (isInNether || !isInOverworld) {

            mc.style.background = "url('high_nether_sky.png')";
            mc.style.backgroundPosition = 'center';

            g1.setAttribute('src', 'high_netherrack.png');
            g2.setAttribute('src', 'high_netherrack.png');
            g3.setAttribute('src', 'high_netherrack.png');
            g4.setAttribute('src', 'high_netherrack.png');
            g5.setAttribute('src', 'high_netherrack.png');
            g6.setAttribute('src', 'high_netherrack.png');
            g7.setAttribute('src', 'high_netherrack.png');
            g8.setAttribute('src', 'high_netherrack.png');
            g9.setAttribute('src', 'high_netherrack.png');
            g10.setAttribute('src', 'high_netherrack.png');
            g11.setAttribute('src', 'high_netherrack.png');
            g12.setAttribute('src', 'high_netherrack.png');
            g13.setAttribute('src', 'high_netherrack.png');
            g14.setAttribute('src', 'high_netherrack.png');
            g15.setAttribute('src', 'high_netherrack.png');
            g16.setAttribute('src', 'high_netherrack.png');
            g17.setAttribute('src', 'high_netherrack.png');
            g18.setAttribute('src', 'high_netherrack.png');
            g19.setAttribute('src', 'high_netherrack.png');
            g20.setAttribute('src', 'high_netherrack.png');
            g21.setAttribute('src', 'high_netherrack.png');
            g22.setAttribute('src', 'high_netherrack.png');
    
            d1.setAttribute('src', 'high_netherrack.png');
            d2.setAttribute('src', 'high_netherrack.png');
            d3.setAttribute('src', 'high_netherrack.png');
            d4.setAttribute('src', 'high_netherrack.png');
            d5.setAttribute('src', 'high_netherrack.png');
            d6.setAttribute('src', 'high_netherrack.png');
            d7.setAttribute('src', 'high_netherrack.png');
            d8.setAttribute('src', 'high_netherrack.png');
            d9.setAttribute('src', 'high_netherrack.png');
            d10.setAttribute('src', 'high_netherrack.png');
            d11.setAttribute('src', 'high_netherrack.png');
            d12.setAttribute('src', 'high_netherrack.png');
            d13.setAttribute('src', 'high_netherrack.png');
            d14.setAttribute('src', 'high_netherrack.png');
            d15.setAttribute('src', 'high_netherrack.png');
            d16.setAttribute('src', 'high_netherrack.png');
            d17.setAttribute('src', 'high_netherrack.png');
            d18.setAttribute('src', 'high_netherrack.png');
            d19.setAttribute('src', 'high_netherrack.png');
            d20.setAttribute('src', 'high_netherrack.png');
            d21.setAttribute('src', 'high_netherrack.png');
            d22.setAttribute('src', 'high_netherrack.png');
    
            s1.setAttribute('src', 'high_netherrack.png');
            s2.setAttribute('src', 'high_netherrack.png');
            s3.setAttribute('src', 'high_netherrack.png');
            s4.setAttribute('src', 'high_netherrack.png');
            s5.setAttribute('src', 'high_netherrack.png');
            s6.setAttribute('src', 'high_netherrack.png');
            s7.setAttribute('src', 'high_netherrack.png');
            s8.setAttribute('src', 'high_netherrack.png');
            s9.setAttribute('src', 'high_netherrack.png');
            s10.setAttribute('src', 'high_netherrack.png');
            s11.setAttribute('src', 'high_netherrack.png');
            s12.setAttribute('src', 'high_netherrack.png');
            s13.setAttribute('src', 'high_netherrack.png');
            s14.setAttribute('src', 'high_netherrack.png');
            s15.setAttribute('src', 'high_netherrack.png');
            s16.setAttribute('src', 'high_netherrack.png');
            s17.setAttribute('src', 'high_netherrack.png');
            s18.setAttribute('src', 'high_netherrack.png');
            s19.setAttribute('src', 'high_netherrack.png');
            s20.setAttribute('src', 'high_netherrack.png');
            s21.setAttribute('src', 'high_netherrack.png');
            s22.setAttribute('src', 'high_netherrack.png');
            s23.setAttribute('src', 'high_netherrack.png');
            s24.setAttribute('src', 'high_netherrack.png');
            s25.setAttribute('src', 'high_netherrack.png');
            s26.setAttribute('src', 'high_netherrack.png');
            s27.setAttribute('src', 'high_netherrack.png');
            s28.setAttribute('src', 'high_netherrack.png');
            s29.setAttribute('src', 'high_netherrack.png');
            s30.setAttribute('src', 'high_netherrack.png');
            s31.setAttribute('src', 'high_netherrack.png');
            s32.setAttribute('src', 'high_netherrack.png');
            s33.setAttribute('src', 'high_netherrack.png');
            s34.setAttribute('src', 'high_netherrack.png');
            s35.setAttribute('src', 'high_netherrack.png');
            s36.setAttribute('src', 'high_netherrack.png');
            s37.setAttribute('src', 'high_netherrack.png');
            s38.setAttribute('src', 'high_netherrack.png');
            s39.setAttribute('src', 'high_netherrack.png');
            s40.setAttribute('src', 'high_netherrack.png');
            s41.setAttribute('src', 'high_netherrack.png');
            s42.setAttribute('src', 'high_netherrack.png');
            s43.setAttribute('src', 'high_netherrack.png');
            s44.setAttribute('src', 'high_netherrack.png');
            s45.setAttribute('src', 'high_netherrack.png');
            s46.setAttribute('src', 'high_netherrack.png');
            s47.setAttribute('src', 'high_netherrack.png');
            s48.setAttribute('src', 'high_netherrack.png');
            s49.setAttribute('src', 'high_netherrack.png');
            s50.setAttribute('src', 'high_netherrack.png');
            s51.setAttribute('src', 'high_netherrack.png');
            s52.setAttribute('src', 'high_netherrack.png');
            s53.setAttribute('src', 'high_netherrack.png');
            s54.setAttribute('src', 'high_netherrack.png');
            s55.setAttribute('src', 'high_netherrack.png');
            s56.setAttribute('src', 'high_netherrack.png');
            s57.setAttribute('src', 'high_netherrack.png');
            s58.setAttribute('src', 'high_netherrack.png');
            s59.setAttribute('src', 'high_netherrack.png');
            s60.setAttribute('src', 'high_netherrack.png');
            s61.setAttribute('src', 'high_netherrack.png');
            s62.setAttribute('src', 'high_netherrack.png');
            s63.setAttribute('src', 'high_netherrack.png');
            s64.setAttribute('src', 'high_netherrack.png');
            s65.setAttribute('src', 'high_netherrack.png');
            s66.setAttribute('src', 'high_netherrack.png');
            s67.setAttribute('src', 'high_netherrack.png');
            s68.setAttribute('src', 'high_netherrack.png');
            s69.setAttribute('src', 'high_netherrack.png');
            s70.setAttribute('src', 'high_netherrack.png');
            s71.setAttribute('src', 'high_netherrack.png');
            s72.setAttribute('src', 'high_netherrack.png');
            s73.setAttribute('src', 'high_netherrack.png');
            s74.setAttribute('src', 'high_netherrack.png');
            s75.setAttribute('src', 'high_netherrack.png');
            s76.setAttribute('src', 'high_netherrack.png');
            s77.setAttribute('src', 'high_netherrack.png');
            s78.setAttribute('src', 'high_netherrack.png');
            s79.setAttribute('src', 'high_netherrack.png');
            s80.setAttribute('src', 'high_netherrack.png');
            s81.setAttribute('src', 'high_netherrack.png');
            s82.setAttribute('src', 'high_netherrack.png');
            s83.setAttribute('src', 'high_netherrack.png');
            s84.setAttribute('src', 'high_netherrack.png');
            s85.setAttribute('src', 'high_netherrack.png');
            s86.setAttribute('src', 'high_netherrack.png');
            s87.setAttribute('src', 'high_netherrack.png');
            s88.setAttribute('src', 'high_netherrack.png');
        }
    }

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
        e.preventDefault();
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
    }
});
    function steveChosen() {
        isSteveChosen = true;
        isAlexChosen = false;
        isSkin1Chosen = false;

        player.src = 'steve_standing.png';
        document.body.addEventListener('keydown', (e) => { 
            if (e.key === 'Control') {
                ctrlPressed = true;
            }      
            if (e.key == 'Shift') {
                if (!playerCrouching) {
                    player.src = 'steve_crouching.png';
                } else {
                    player.src = 'steve_standing.png';
                }
            } else if (e.key == 'ArrowLeft' || e.key == 's' || e.key == 'a') {
                if (playerCrouching) {
                    player.src = 'steve_crouching_reversed.png';
                } else {
                    player.src = 'steve_standing_revered.png';
                }
            } else if (e.key == 'w' || e.key == 'd') {
                if (playerCrouching) {
                    player.src = 'steve_crouching.png';
                } else {
                    player.src = 'steve_standing.png';
                }
            } else if (e.key == 'ArrowRight') {
                if (playerCrouching) {
                    player.src = 'steve_crouching.png';
                } else {
                    player.src = 'steve_standing.png';
                }
            }
        });
    }
    function alexChosen() {
        isSteveChosen = false;
        isAlexChosen = true;
        isSkin1Chosen = false;

        player.src = 'alex_standing.png';
        document.body.addEventListener('keydown', (e) => {     
            if (e.key == 'Shift') {
                if (!playerCrouching) {
                    player.src = 'alex_crouching.png';
                } else {
                    player.src = 'alex_standing.png';
                }
            } else if (e.key == 'ArrowLeft' || e.key == 's' || e.key == 'a') {
                if (playerCrouching) {
                    player.src = 'alex_crouching_reversed.png';
                } else {
                    player.src = 'alex_standing_reversed.png';
                }
            } else if (e.key == 'w' || e.key == 'd') {
                if (playerCrouching) {
                    player.src = 'alex_crouching.png';
                } else {
                    player.src = 'alex_standing.png';
                }
            } else if (e.key == 'ArrowRight') {
                if (playerCrouching) {
                    player.src = 'alex_crouching.png';
                } else {
                    player.src = 'alex_standing.png';
                }
            }
        });
    }
    function skin1Chosen() {
        isSteveChosen = false;
        isAlexChosen = false;
        isSkin1Chosen = true;

        player.src = 'skin1_standing.png';
        document.body.addEventListener('keydown', (e) => {     
            if (e.key == 'Shift') {
                if (!playerCrouching) {
                    player.src = 'skin1_crouching.png';
                } else {
                    player.src = 'skin1_standing.png';
                }
            } else if (e.key == 'ArrowLeft' || e.key == 's' || e.key == 'a') {
                if (playerCrouching) {
                    player.src = 'skin1_crouching_reversed.png';
                } else {
                    player.src = 'skin1_standing_reversed.png';
                }
            } else if (e.key == 'w' || e.key == 'd') {
                if (playerCrouching) {
                    player.src = 'skin1_crouching.png';
                } else {
                    player.src = 'skin1_standing.png';
                }
            } else if (e.key == 'ArrowRight') {
                if (playerCrouching) {
                    player.src = 'skin1_crouching.png';
                } else {
                    player.src = 'skin1_standing.png';
                }
            }
        });
    }
    document.body.addEventListener('keydown', (e) => {
        if (e.key == '/') {
            e.preventDefault();
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
                speech.text = chat.value;
                window.speechSynthesis.speak(speech);

                if (message == '/kill' || message == '/kill @s' || message == '/kill @p') {
                    player.style.display = 'none';
                }
                if (message == '/kill @a') {
                    creeper.style.display = 'none';
                    player.style.display = 'none';
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
                        let number1 = Number(prompt('First number: '));
                        let operation = prompt('Operator (+ - / * ^): ');
                        let number2 = Number(prompt('Second number: '));
                    
                        if (isNaN(number1) || isNaN(number2)) {
                            throw new Error('Invalid numbers!');
                        }
                        switch (operation) {
                            case '+':
                                let addition = number1 + number2;
                                alert(`The score is: ${addition}`);
                                break;
                            case '-':
                                let subtraction = number1 - number2;
                                alert(`The score is: ${subtraction}`);
                                break;
                            case '/':
                                let division = number1 / number2;
                                alert(`The score is: ${division}`);
                                break;
                            case '*':
                                let multiplication = number1 * number2;
                                alert(`The score is: ${multiplication}`);
                                break;
                            case '^':
                                let toPower = Math.pow(number1, number2);
                                alert(`The score is: ${toPower}`);
                                break;
                            default:
                                alert('Error! wrong operator.');
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

    function grassBlockBreak() {
        g1.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g1.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g2.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g2.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g3.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g3.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g4.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g4.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g5.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g5.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g6.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g6.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g7.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g7.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g8.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g8.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g9.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g9.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g10.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g10.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g11.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g11.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g12.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g12.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g13.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g13.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g14.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g14.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g15.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g15.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g16.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g16.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g17.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g17.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g18.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g18.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g19.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g19.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g20.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g20.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g21.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g21.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
        g22.addEventListener('click', () => {
            if (player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g22.hidden = true;
                player.style.top = '350px';
                grassBreaking.play();
            } else {
            }
        });
    }
    grassBlockBreak();

    function dirtBreak() {
        d1.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d1.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d2.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d2.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d3.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d3.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d4.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d4.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d5.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d5.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d6.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d6.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d7.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d7.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d8.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d8.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d9.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d9.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d10.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d10.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d11.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d11.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d12.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d12.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d13.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d13.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d14.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d14.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d15.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d15.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d16.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d16.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d17.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d17.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d18.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d18.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d19.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d19.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d20.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d20.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d21.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d21.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
        d22.addEventListener('click', () => {
            if (player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d21.hidden = true;
                player.style.top = '420px';
                dirtBreaking.play();
            } else {
            }
        });
    }
    dirtBreak();

    function stoneBlockBreak() {
        s1.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s1.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s2.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s2.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s3.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s3.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s4.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s4.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s5.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s5.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s6.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s6.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s7.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s7.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s8.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s8.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s9.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s9.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s10.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s10.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s11.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s11.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s12.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s12.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s13.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s13.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s14.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s14.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s15.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s15.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s16.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s16.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s17.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s17.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s18.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s18.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s19.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s19.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s20.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s20.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s21.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s21.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s22.addEventListener('click', () => {
            if (player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s22.hidden = true;
                player.style.top = '490px';
                stoneBreaking.play();
            } else {
            }
        });
        s23.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s23.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s24.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s24.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s25.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s25.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s26.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s26.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s27.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s27.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s28.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s28.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s29.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s29.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s30.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s30.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s31.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s31.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s32.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s32.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s33.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s33.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s34.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s34.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s35.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s35.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s36.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s36.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s37.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s37.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s38.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s38.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s39.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s39.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s40.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s40.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s41.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s41.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s42.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s42.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s43.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s43.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s44.addEventListener('click', () => {
            if (player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s44.hidden = true;
                player.style.top = '570px';
                stoneBreaking.play();
            } else {
            }
        });
        s45.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s45.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s46.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s46.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s47.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s47.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s48.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s48.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s49.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s49.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s50.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s50.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s51.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s51.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s52.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s52.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s53.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s53.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s54.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s54.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s55.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s55.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s56.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s56.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s57.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s57.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s58.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s58.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s59.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s59.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s60.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s60.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s61.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s61.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s62.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s62.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s63.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s63.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s64.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s64.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s65.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s65.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
        s66.addEventListener('click', () => {
            if (player.style.top == '570px' || player.style.top == '650px') {
                s66.hidden = true;
                player.style.top = '650px';
                stoneBreaking.play();
            } else {
            }
        });
    }
    stoneBlockBreak();

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
        obsidianBlock = false;
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
        obsidianBlock = false;
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
        obsidianBlock = false;
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
        obsidianBlock = false;
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
        obsidianBlock = false;
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
        obsidianBlock = false;
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
        obsidianBlock = false;
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
        obsidianBlock = false;
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
        obsidianBlock = false;
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
        obsidianBlock = false;
    }
    function obsidianBlockChosen() {
        obsidianBlock = true;
        tntBlock = false;
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

    let Inventory = document.createElement('div');

    document.body.addEventListener('keydown', (e) => {

        isInventoryOpen = true;

        if (isInventoryOpen && e.key == 'F3') {
            e.preventDefault();
            Inventory.hidden = false;
            menu = `
            <div class="inventory-container">
            <div class="gui-inventory">
                <div class="top-elements">
                <button onclick="closeInventoryGUI()" class="close">X</button>
                <h1 class="inventory-title">Inventory</h1>
            </div>
            <div class="blocks-display">
                <div class="blockDisplay">
                    <div class="b"><img title="Oak Leaves" id="glass" draggable="false" onclick="oakLeavesChosen()" width="50" height="50" src="oak_leaves.png" alt="oak_leaves.png"></div>
                    <div class="block-info">
                        <div class="block-nm">Oak Leaves</div>
                        <div class="block-id">ID: 18</div>
                    </div>
                </div>
                <div class="blockDisplay">
                    <div class="b"><img title="Sandstone" id="sandstone" draggable="false" onclick="sandStoneChosen()" width="50" height="50" src="sandstone.png" alt="sandstone.png"></div>
                    <div class="block-info">
                        <div class="block-nm">Sandstone</div>
                        <div class="block-id">ID: 24</div>
                    </div>
                </div>
                <div class="blockDisplay">
                    <div class="b"><img title="Dirt" id="dirt" draggable="false" onclick="dirtChosen()" width="50" height="50" src="dirt.png" alt="dirt.png"></div>
                    <div class="block-info">
                        <div class="block-nm">Dirt</div>
                        <div class="block-id">ID: 3</div>
                    </div>
                </div>
                <div class="blockDisplay">
                    <div class="b"><img title="Stone" id="stone_block" draggable="false" onclick="stoneChosen()" width="50" height="50" src="stone_block.png" alt="stone_block.png"></div>
                    <div class="block-info">
                        <div class="block-nm">Stone</div>
                        <div class="block-id">ID: 1</div>
                    </div>
                </div>
            </div>
            <div class="blocks-display2">
                <div class="blockDisplay">
                    <div class="b"><img title="White Wool" id="white_wool" draggable="false" onclick="whiteWoolChosen()" width="50" height="50" src="white_wool.png" alt="white_wool.png"></div>
                    <div class="block-info">
                        <div class="block-nm">White Wool</div>
                        <div class="block-id">ID: 35</div>
                    </div>
                </div>
                <div class="blockDisplay">
                    <div class="b"><img title="Diamond Block" id="diamond_block" draggable="false" onclick="diamondBlockChosen()" width="50" height="50" src="diamond_block.png" alt="diamond_block.png"></div>
                    <div class="block-info">
                        <div class="block-nm">Diamond Block</div>
                        <div class="block-id">ID: 57</div>
                    </div>
                </div>
                <div class="blockDisplay">
                    <div class="b"><img title="Barrier" id="barrier" draggable="false" onclick="barrierChosen()" width="50" height="50" src="barrier.png" alt="barrier.png"></div>
                    <div class="block-info">
                        <div class="block-nm">Barrier</div>
                        <div class="block-id">ID: 166</div>
                    </div>
                </div>
                <div class="blockDisplay">
                    <div class="b"><img title="TNT" id="tnt" draggable="false" onclick="tntChosen()" width="50" height="50" src="tnt.png" alt="tnt.png"></div>
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

    let stoneBlocks = `
    <div class="stone-container4">
        <div id="stone_block67" onclick="createRandomRow()"><img id="s67" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block68" onclick="createRandomRow()"><img id="s68" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block69" onclick="createRandomRow()"><img id="s69" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block70" onclick="createRandomRow()"><img id="s70" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block71" onclick="createRandomRow()"><img id="s71" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block72" onclick="createRandomRow()"><img id="s72" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block73" onclick="createRandomRow()"><img id="s73" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block74" onclick="createRandomRow()"><img id="s74" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block75" onclick="createRandomRow()"><img id="s75" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block76" onclick="createRandomRow()"><img id="s76" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block77" onclick="createRandomRow()"><img id="s77" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block78" onclick="createRandomRow()"><img id="s78" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block79" onclick="createRandomRow()"><img id="s79" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block80" onclick="createRandomRow()"><img id="s80" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block81" onclick="createRandomRow()"><img id="s81" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block82" onclick="createRandomRow()"><img id="s82" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block83" onclick="createRandomRow()"><img id="s83" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block84" onclick="createRandomRow()"><img id="s84" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block85" onclick="createRandomRow()"><img id="s85" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block86" onclick="createRandomRow()"><img id="s86" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block87" onclick="createRandomRow()"><img id="s87" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        <div id="stone_block88" onclick="createRandomRow()"><img id="s88" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
    </div>
    `;

    function createRandomRow(row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13, row14, row15, row16, row17, row18, row19, row20) {
        stoneBreaking.play();
        row1 = stoneBlocks;
        row2 = `
        <div class="stone-container4">
            <div id="diamond_o" onclick="removeDiamondOre1()"><img onclick="numberOfDiamonds()" id="diamond1" draggable="false" class="stone_block" src="diamond_ore.png" alt="diamond_ore.png"></div>
            <div id="stone_block68" onclick="createRandomRow()"><img id="s68" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block69" onclick="createRandomRow()"><img id="s69" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block70" onclick="createRandomRow()"><img id="s70" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block71" onclick="createRandomRow()"><img id="s71" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block72" onclick="createRandomRow()"><img id="s72" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block73" onclick="createRandomRow()"><img id="s73" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block74" onclick="createRandomRow()"><img id="s74" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block75" onclick="createRandomRow()"><img id="s75" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block76" onclick="createRandomRow()"><img id="s76" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block77" onclick="createRandomRow()"><img id="s77" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block78" onclick="createRandomRow()"><img id="s78" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block79" onclick="createRandomRow()"><img id="s79" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block80" onclick="createRandomRow()"><img id="s80" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block81" onclick="createRandomRow()"><img id="s81" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block82" onclick="createRandomRow()"><img id="s82" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block83" onclick="createRandomRow()"><img id="s83" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block84" onclick="createRandomRow()"><img id="s84" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block85" onclick="createRandomRow()"><img id="s85" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block86" onclick="createRandomRow()"><img id="s86" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="iron_ore1" onclick="removeIronOre1()"><img onclick="numberOfIron()" id="i1" draggable="false" class="stone_block" src="iron_ore.png" alt="iron_ore.png"></div>
            <div id="iron_ore2" onclick="removeIronOre2()"><img onclick="numberOfIron()" id="i2" draggable="false" class="stone_block" src="iron_ore.png" alt="iron_ore.png"></div>
        </div>
        `;
        row3 = `
        <div class="stone-container4">
            <div id="stone_block67" onclick="createRandomRow()"><img id="s67" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="gold_ore1" onclick="removeGoldOre1()"><img onclick="numberOfGold()" id="go1" draggable="false" class="stone_block" src="gold_ore.png" alt="gold_ore.png"></div>
            <div id="gold_ore2" onclick="removeGoldOre2()"><img onclick="numberOfGold()" id="go2" draggable="false" class="stone_block" src="gold_ore.png" alt="gold_ore.png"></div>
            <div id="gold_ore3" onclick="removeGoldOre3()"><img onclick="numberOfGold()" id="go3" draggable="false" class="stone_block" src="gold_ore.png" alt="gold_ore.png"></div>
            <div id="stone_block71" onclick="createRandomRow()"><img id="s71" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block72" onclick="createRandomRow()"><img id="s72" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block73" onclick="createRandomRow()"><img id="s73" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block74" onclick="createRandomRow()"><img id="s74" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block75" onclick="createRandomRow()"><img id="s75" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block76" onclick="createRandomRow()"><img id="s76" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block77" onclick="createRandomRow()"><img id="s77" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block78" onclick="createRandomRow()"><img id="s78" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block79" onclick="createRandomRow()"><img id="s79" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block80" onclick="createRandomRow()"><img id="s80" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block81" onclick="createRandomRow()"><img id="s81" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block82" onclick="createRandomRow()"><img id="s82" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block83" onclick="createRandomRow()"><img id="s83" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block84" onclick="createRandomRow()"><img id="s84" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block85" onclick="createRandomRow()"><img id="s85" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block86" onclick="createRandomRow()"><img id="s86" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block87" onclick="createRandomRow()"><img id="s87" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block88" onclick="createRandomRow()"><img id="s88" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        </div>
        `;
        row4 = `
        <div class="stone-container4">
            <div id="stone_block67" onclick="createRandomRow()"><img id="s67" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block68" onclick="createRandomRow()"><img id="s68" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block69" onclick="createRandomRow()"><img id="s69" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block70" onclick="createRandomRow()"><img id="s70" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block71" onclick="createRandomRow()"><img id="s71" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block72" onclick="createRandomRow()"><img id="s72" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block73" onclick="createRandomRow()"><img id="s73" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block74" onclick="createRandomRow()"><img id="s74" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block75" onclick="createRandomRow()"><img id="s75" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block76" onclick="createRandomRow()"><img id="s76" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block77" onclick="createRandomRow()"><img id="s77" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block78" onclick="createRandomRow()"><img id="s78" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block79" onclick="createRandomRow()"><img id="s79" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block80" onclick="createRandomRow()"><img id="s80" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block81" onclick="createRandomRow()"><img id="s81" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block82" onclick="createRandomRow()"><img id="s82" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block83" onclick="createRandomRow()"><img id="s83" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="emerald_ore1" onclick="removeEmeraldOre1()"><img onclick="numberOfEmeralds()" id="s84" draggable="false" class="stone_block" src="emerald_ore.png" alt="emerald_ore.png"></div>
            <div id="stone_block85" onclick="createRandomRow()"><img id="s85" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block86" onclick="createRandomRow()"><img id="s86" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block87" onclick="createRandomRow()"><img id="s87" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block88" onclick="createRandomRow()"><img id="s88" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        </div>
        `;
        row5 = `
        <div class="stone-container4">
            <div id="stone_block67" onclick="createRandomRow()"><img id="s67" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="coal_ore1" onclick="removeCoalOre1()"><img onclick="numberOfCoal()" id="co1" draggable="false" class="stone_block" src="coal_ore.png" alt="coal_ore.png"></div>
            <div id="coal_ore2" onclick="removeCoalOre2()"><img onclick="numberOfCoal()" id="co2" draggable="false" class="stone_block" src="coal_ore.png" alt="coal_ore.png"></div>
            <div id="coal_ore3" onclick="removeCoalOre3()"><img onclick="numberOfCoal()" id="co3" draggable="false" class="stone_block" src="coal_ore.png" alt="coal_ore.png"></div>
            <div id="coal_ore4" onclick="removeCoalOre4()"><img onclick="numberOfCoal()" id="co4" draggable="false" class="stone_block" src="coal_ore.png" alt="coal_ore.png"></div>
            <div id="coal_ore5" onclick="removeCoalOre5()"><img onclick="numberOfCoal()" id="co5" draggable="false" class="stone_block" src="coal_ore.png" alt="coal_ore.png"></div>
            <div id="coal_ore6" onclick="removeCoalOre6()"><img onclick="numberOfCoal()" id="co6" draggable="false" class="stone_block" src="coal_ore.png" alt="coal_ore.png"></div>
            <div id="coal_ore7" onclick="removeCoalOre7()"><img onclick="numberOfCoal()" id="co7" draggable="false" class="stone_block" src="coal_ore.png" alt="coal_ore.png"></div>
            <div id="coal_ore8" onclick="removeCoalOre8()"><img onclick="numberOfCoal()" id="co8" draggable="false" class="stone_block" src="coal_ore.png" alt="coal_ore.png"></div>
            <div id="coal_ore9" onclick="removeCoalOre9()"><img onclick="numberOfCoal()" id="co9" draggable="false" class="stone_block" src="coal_ore.png" alt="coal_ore.png"></div>
            <div id="stone_block77" onclick="createRandomRow()"><img id="s77" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block78" onclick="createRandomRow()"><img id="s78" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block79" onclick="createRandomRow()"><img id="s79" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block80" onclick="createRandomRow()"><img id="s80" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block81" onclick="createRandomRow()"><img id="s81" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block82" onclick="createRandomRow()"><img id="s82" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block83" onclick="createRandomRow()"><img id="s83" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block84" onclick="createRandomRow()"><img id="s84" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block85" onclick="createRandomRow()"><img id="s85" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block86" onclick="createRandomRow()"><img id="s86" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block87" onclick="createRandomRow()"><img id="s87" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block88" onclick="createRandomRow()"><img id="s88" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        </div>
        `;
        row6 = `
        <div class="stone-container4">
            <div id="stone_block68" onclick="createRandomRow()"><img id="s68" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block69" onclick="createRandomRow()"><img id="s69" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block70" onclick="createRandomRow()"><img id="s70" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block71" onclick="createRandomRow()"><img id="s71" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block72" onclick="createRandomRow()"><img id="s72" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block73" onclick="createRandomRow()"><img id="s73" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block74" onclick="createRandomRow()"><img id="s74" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block75" onclick="createRandomRow()"><img id="s75" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block76" onclick="createRandomRow()"><img id="s76" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block77" onclick="createRandomRow()"><img id="s77" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block78" onclick="createRandomRow()"><img id="s78" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block79" onclick="createRandomRow()"><img id="s79" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block80" onclick="createRandomRow()"><img id="s80" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block81" onclick="createRandomRow()"><img id="s81" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block82" onclick="createRandomRow()"><img id="s82" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="diamond_ore1" onclick="createRandomRow()"><img onclick="numberOfDiamonds()" id="diamond1" draggable="false" class="stone_block" src="diamond_ore.png" alt="diamond_ore.png"></div>
            <div id="stone_block83" onclick="createRandomRow()"><img id="s83" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block84" onclick="createRandomRow()"><img id="s84" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block85" onclick="createRandomRow()"><img id="s85" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block86" onclick="createRandomRow()"><img id="s86" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block86" onclick="createRandomRow()"><img id="s86" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block86" onclick="createRandomRow()"><img id="s86" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        </div>
        `;
        row7 = stoneBlocks;
        row8 = stoneBlocks;
        row9 = stoneBlocks;
        row10 = stoneBlocks;
        row11 = stoneBlocks;
        row12 = stoneBlocks;
        row13 = `
        <div class="stone-container4">
            <div id="stone_block67" onclick="createRandomRow()"><img id="s67" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block68" onclick="createRandomRow()"><img id="s68" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block69" onclick="createRandomRow()"><img id="s69" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block70" onclick="createRandomRow()"><img id="s70" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block71" onclick="createRandomRow()"><img id="s71" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block72" onclick="createRandomRow()"><img id="s72" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="obsidian1" onclick="createRandomRow()"><img onclick="numberOfObsidians()" id="obs1" draggable="false" class="stone_block" src="obsidian.png" alt="obsidian.png"></div>
            <div id="stone_block73" onclick="createRandomRow()"><img id="s73" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block74" onclick="createRandomRow()"><img id="s74" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block75" onclick="createRandomRow()"><img id="s75" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block76" onclick="createRandomRow()"><img id="s76" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block77" onclick="createRandomRow()"><img id="s77" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block78" onclick="createRandomRow()"><img id="s78" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block79" onclick="createRandomRow()"><img id="s79" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block80" onclick="createRandomRow()"><img id="s80" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block82" onclick="createRandomRow()"><img id="s82" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block83" onclick="createRandomRow()"><img id="s83" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block84" onclick="createRandomRow()"><img id="s84" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block85" onclick="createRandomRow()"><img id="s85" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block86" onclick="createRandomRow()"><img id="s86" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block87" onclick="createRandomRow()"><img id="s87" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block88" onclick="createRandomRow()"><img id="s88" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        </div>
        `;
        row14 = stoneBlocks;
        row15 = stoneBlocks;
        row16 = stoneBlocks;
        row17 = stoneBlocks;
        row18 = stoneBlocks;
        row19 = `
        <div class="stone-container4">
            <div id="stone_block67" onclick="createRandomRow()"><img id="s67" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block68" onclick="createRandomRow()"><img id="s68" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block69" onclick="createRandomRow()"><img id="s69" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block70" onclick="createRandomRow()"><img id="s70" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block71" onclick="createRandomRow()"><img id="s71" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block72" onclick="createRandomRow()"><img id="s72" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block73" onclick="createRandomRow()"><img id="s73" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block74" onclick="createRandomRow()"><img id="s74" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block75" onclick="createRandomRow()"><img id="s75" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block76" onclick="createRandomRow()"><img id="s76" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block77" onclick="createRandomRow()"><img id="s77" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block78" onclick="createRandomRow()"><img id="s78" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block79" onclick="createRandomRow()"><img id="s79" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block80" onclick="createRandomRow()"><img id="s80" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="obsidian1" onclick="createRandomRow()"><img onclick="numberOfObsidians()" id="obs1" draggable="false" class="stone_block" src="obsidian.png" alt="obsidian.png"></div>
            <div id="stone_block82" onclick="createRandomRow()"><img id="s82" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block83" onclick="createRandomRow()"><img id="s83" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block84" onclick="createRandomRow()"><img id="s84" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block85" onclick="createRandomRow()"><img id="s85" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block86" onclick="createRandomRow()"><img id="s86" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block87" onclick="createRandomRow()"><img id="s87" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
            <div id="stone_block88" onclick="createRandomRow()"><img id="s88" draggable="false" class="stone_block" src="stone_block.png" alt="stone_block.png"></div>
        </div>
        `;
        row20 = stoneBlocks;

        let rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13, row14, row15, row16, row17, row18, row19, row20];
        let rand = Math.floor(Math.random() * rows.length);
        let randomRow = rows[rand];

        if ((isInOverworld && !isInNether) && 
            (player.style.top == '570px') ||
            (player.style.top == '650px')) {
            stoneContainer4.innerHTML = randomRow;
        } else if (isInNether || !isInOverworld) {
            randomRowContainer.hidden = true;
        } else {
            miningWrongBlocksAlert = alert(`Stop cheating or you will be kicked! Warning ${wrongBlocks}/${wrongBlocksLimit - 1}`);
            wrongBlocks++;
            if (wrongBlocks == wrongBlocksLimit) {
                alert('I warned you...');
                window.close();
            }
        }
    }
    function numberOfDiamonds() {
        numOfDiamonds++;
        warn(`Congratulations! you have ${numOfDiamonds} diamonds!`);
    }
    function numberOfGold() {
        numOfGold++;
        warn(`Congratulations! you have ${numOfGold} gold!`);
    }
    function numberOfEmeralds() {
        numofEmeralds++;
        warn(`Congratulations! you have ${numofEmeralds} emeralds!`);
    }
    function numberOfCoal() {
        numOfCoal++;
        warn(`Congratulations! you have ${numOfCoal} coals!`);
    }
    function numberOfIron() {
        numOfIron++;
        warn(`Congratulations! you have ${numOfIron} irons!`);
    }
    function checkPortalCollision() {
        let playerRect = player.getBoundingClientRect();
        let portalRect = portalPosition.getBoundingClientRect();
        
        if (
            playerRect.top < portalRect.bottom &&
            playerRect.bottom > portalRect.top &&
            playerRect.left < portalRect.right &&
            playerRect.right > portalRect.left
        ) {
            enteringNetherSound.play();
            isInOverworld = false;
            isInNether = true;
        
            mc.style.background = "url('nether_sky.png')";
            mc.style.backgroundAttachment = "fixed";
            mc.style.backgroundRepeat = "no-repeat";
        
            creeper.hidden = true;
            player.style.top = '260px';
        
            normalNetherrack();
        
            document.addEventListener('keydown', (e) => {
                if (e.key == 'b') {
                    blazeSounds.play();
                    let blaze = document.createElement('div');
                    blaze.innerHTML = `<img id="blazeElement" draggable="false" src="blaze.png" alt="blaze.png">`;
                    blaze.classList.add('blazeAnimation');
        
                    blaze.addEventListener('click', () => {
                        blazeHP--;
                        if (blazeHP <= 0) {
                            blaze.querySelector('img').src = 'damaged_blaze.png';
                            setTimeout(() => {
                                blaze.parentNode.removeChild(blaze);
                                numOfBlazeRods++;
                                log(`Liczba blaze rod'ów: ${numOfBlazeRods}`);
                            }, 3000);
                        }
                    });
                    mc.appendChild(blaze);
                }
            });
        }
    }
    
    function checkBlazeCollision(element1, element2) {
        let rect1 = element1.getBoundingClientRect();
        let rect2 = element2.getBoundingClientRect();
        return !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);
    }
    
    function checkBlazeCollisionsPeriodically() {
        let blaze = document.getElementById('blazeElement');
        if (blaze && checkBlazeCollision(player, blaze)) {
            playerHP--;
    
            if (playerHP <= 0) {
                player.hidden = true;
                let actionAfterDeath = prompt('YOU DIED!\n\nWhat you want to do?\nRespawn (r)\nSpectate (s)').toLowerCase();
    
                if (actionAfterDeath == 'r') {
                    window.location.reload();
                } else if (actionAfterDeath == 's') {
                    let toggleHPDisplay = document.getElementById('toggleHPDisplay');
                    toggleHPDisplay.hidden = true;
                } else {
                    alert('Invalid action! Error code: 400.');
                    window.close();
                }
            }
            let playerImg = isSteveChosen ? 'steve_standing.png' :
                            isAlexChosen ? 'alex_standing.png' :
                            isSkin1Chosen ? 'skin1_standing.png' : 'steve_standing.png';
    
            player.src = `damaged_${playerImg}`;
            setTimeout(() => {
                player.src = playerImg;
            }, 350);
        }
    }
    setInterval(checkBlazeCollisionsPeriodically, 200);

function numberOfObsidians() {
    numOfObsidians++;
    hotbarObsidian.textContent = Number(numOfObsidians);

    if (numOfObsidians == 10) {
        do {
            createPortal = prompt('Congratulations! You have 10 obsidians. Do you want to make a nether portal? (y/n):').toLowerCase();
        } while (createPortal != 'y' && createPortal != 'n');

        if (createPortal == 'y') {
            let portalBlockPositions = 
                    [d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22,
                    s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22,
                    s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, s36, s37, s38, s39, s40, s41, s42,
                    s43, s44];
            let randomPortalPosition = Math.floor(Math.random() * portalBlockPositions.length);
            portalPosition = portalBlockPositions[randomPortalPosition];

            portalPosition.src = 'portal.png';

            setInterval(checkPortalCollision, 100);
            numOfObsidians = 0;
            hotbarObsidian.textContent = numOfObsidians;
        } else if (createPortal == 'n') {
            
        } else {
            alert('Extremely rare error! Something went wrong.');
        }
    }
}
numberOfObsidians();

    function removeDiamondOre1() {
        let diamond_o = document.getElementById('diamond_o');
        diamond_o.hidden = true;
    }
    function removeIronOre1() {
        let iron_ore1 = document.getElementById('iron_ore1');
        iron_ore1.hidden = true;
    }
    function removeIronOre2() {
        let iron_ore2 = document.getElementById('iron_ore2');
        iron_ore2.hidden = true;
    }
    function removeGoldOre1() {
        let gold_ore1 = document.getElementById('gold_ore1');
        gold_ore1.hidden = true;
    }
    function removeGoldOre2() {
        let gold_ore2 = document.getElementById('gold_ore2');
        gold_ore2.hidden = true;
    }
    function removeGoldOre3() {
        let gold_ore3 = document.getElementById('gold_ore3');
        gold_ore3.hidden = true;
    }
    function removeEmeraldOre1() {
        let emerald_ore1 = document.getElementById('emerald_ore1');
        emerald_ore1.hidden = true;
    }
    function removeCoalOre1() {
        let coal_ore1 = document.getElementById('coal_ore1');
        coal_ore1.hidden = true;
    }
    function removeCoalOre2() {
        let coal_ore2 = document.getElementById('coal_ore2');
        coal_ore2.hidden = true;
    }
    function removeCoalOre3() {
        let coal_ore3 = document.getElementById('coal_ore3');
        coal_ore3.hidden = true;
    }
    function removeCoalOre4() {
        let coal_ore4 = document.getElementById('coal_ore4');
        coal_ore4.hidden = true;
    }
    function removeCoalOre5() {
        let coal_ore5 = document.getElementById('coal_ore5');
        coal_ore5.hidden = true;
    }
    function removeCoalOre6() {
        let coal_ore6 = document.getElementById('coal_ore6');
        coal_ore6.hidden = true;
    }
    function removeCoalOre7() {
        let coal_ore7 = document.getElementById('coal_ore7');
        coal_ore7.hidden = true;
    }
    function removeCoalOre8() {
        let coal_ore8 = document.getElementById('coal_ore8');
        coal_ore8.hidden = true;
    }
    function removeCoalOre9() {
        let coal_ore9 = document.getElementById('coal_ore9');
        coal_ore9.hidden = true;
    }

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
            explosionSound.play();
            setTimeout(() => {

                playerHP -= 5;

                g19.style.display = 'none';
                g20.style.display = 'none';
                g21.style.display = 'none';
                g22.style.display = 'none';

                creeper.style.display = 'none';

                if (isSteveChosen) {
                    player.src = 'damaged_steve_standing.png';
                    setTimeout(() => {
                        player.src = 'steve_standing.png';
                    }, 350);
                }
                else if (isAlexChosen) {
                    player.src = 'damaged_alex_standing.png';
                    setTimeout(() => {
                        player.src = 'alex_standing.png';
                    }, 350);
                }
                else if (isSkin1Chosen) {
                    player.src = 'damaged_skin1_standing.png';
                    setTimeout(() => {
                        player.src = 'skin1_standing.png';
                    }, 350);
                } 
                else {
                    player.src = 'damaged_steve_standing.png';
                    setTimeout(() => {
                        player.src = 'steve_standing.png';
                    }, 350);
                }

            }, 100);
        }
    }
    setInterval(checkCollisionsPeriodically, 1000);

    document.body.addEventListener('keydown', (e) => {
        if ((e.ctrlKey && e.key == 'a') ||
            (e.ctrlKey && e.key == 's') ||
            (e.ctrlKey && e.key == 'd')
            ) {
            e.preventDefault();
        }

        if (e.key == 'F1') {
            e.preventDefault();
            hotbarHidden = !hotbarHidden;
            hotbarContainer.hidden = hotbarHidden;

            if (!hotbarHidden) {
                creeper.style.top = '-680px';
                blaze.style.top = '-750px';
            } else if (hotbarHidden) {
                creeper.style.top = '-626px';
                blaze.style.top = '-680px';
            }
        }
        switch (e.key) {
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
            case '9':
                obsidianBlockChosen();
                break;
        }
    });
    
    setInterval(() => {
        playerHPDisplay.innerHTML = playerHP;
    }, 10);

    setInterval(() => {
        if (playerHP < 10) {
            playerHP++;
        }
        if (playerHP == 10) {
            playerHP = 10;
        }
    }, 10000);

} else {
    alert('Error! Game is not running.');
    let gameStart = prompt('Do you want to start new game? (y/n):').toLowerCase();

    if (gameStart == 'y') {
        alert('Error! Try to refresh the page.');
    } else if (gameStart == 'n') {
        window.close();
    } else {
        alert('Unknown command!');
        window.close();
    }
    document.body.display = 'none';
}