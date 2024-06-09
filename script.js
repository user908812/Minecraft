const log = console.log.bind(document)
const warn = console.warn.bind(document);

const timeout = 100;
const running = true;

var mc = document.getElementById('minecraft');

var FPS = 60;

var storedUsername, profilePicture;

function loadUserProfile() {
    document.addEventListener('DOMContentLoaded', () => {
        storedUsername = localStorage.getItem('rememberedUsername');
        profilePicture = localStorage.getItem('pfp');
    
        if (storedUsername && profilePicture) {
            log(`Server: Downloaded from localStorage (username: ${storedUsername}, src: ${profilePicture}).`);
        } else if (!storedUsername || !profilePicture ) {
            log('Server: Error with downloading an account info!');
            log('Server: The \'Remember me\' option may not have been checked.');
            alert('You need to login first!');
            window.close();
        }
    });
}
loadUserProfile();

const grassBlockElementsArray = [];
const dirtBlockElementsArray = [];
const stoneBlockElementsArray = [];

const stoneBlocksInFirstLevel = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22];
const stoneBlocksInSecondLevel = [s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, s36, s37, s38, s39, s40, s41, s42, s43, s44];
const stoneBlocksInThirdLevel = [s23, s46, s47, s48, s49, s50, s51, s52, s53, s54, s55, s56, s57, s58, s59, s60, s61, s62, s63, s64, s65, s66];
const stoneBlocksInLastLevel = [s45, s46, s47, s48, s49, s50, s51, s52, s53, s54, s55, s56, s57, s58, s59, s60, s61, s62, s63, s64, s65, s66,
                                s67, s68, s69, s70, s71, s72, s73, s74, s75, s76, s77, s78, s79, s80, s81, s82, s83, s84, s85, s86, s87, s88];

const allBlocks = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22, d1, d2, d3, d4, d5, d6,
                   d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11,
                   s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, s36,
                   s37, s38, s39, s40, s41, s42, s43, s44, s45, s46, s47, s48, s49, s50, s51, s52, s53, s54, s55, s56, s57, s58, s59, s60, s61, 
                   s62, s63, s64, s65, s66, s67, s68, s69, s70, s71, s72, s73, s74, s75, s76, s77, s78, s79, s80, s81, s82, s83, s84, s85, s86, s87, s88];

var speech = new SpeechSynthesisUtterance;

var player = document.querySelector('.player');
var stoneContainer4 = document.querySelector('.stone-container4');
var hotbarContainer = document.querySelector('.hotbar-container');
var randomRowContainer = document.querySelector('.randomRowContainer');

var music = document.getElementById('music');
var playerHPDisplay = document.getElementById('hp');
var hotbarObsidian = document.getElementById('hotbarObsidian');
var grassBreaking = document.getElementById('grassBreaking');
var sandBreaking = document.getElementById('sandBreaking');
var sandstoneBreaking = document.getElementById('sandstoneBreaking');
var waterSound = document.getElementById('waterSound');
var iceBreaking = document.getElementById('iceBreaking');
var netherrackBreaking = document.getElementById('netherrackBreaking');
var dirtBreaking = document.getElementById('dirtBreaking');
var stoneBreaking = document.getElementById('stoneBreaking');
var tntExplosion = document.getElementById('tntExplosion');
var explosionSound = document.getElementById('explosionSound');
var enteringPortalSound = document.getElementById('enteringNetherSound');
var blazeSounds = document.getElementById('blazeSounds');
var gamemodeDisplay = document.getElementById('gamemodeDisplay');
var toggleHPDisplay = document.getElementById('toggleHPDisplay');
var cloudsTitle = document.getElementById('clouds');

var mobileControls1 = document.getElementById('mobileControls1');
var mobileControls2 = document.getElementById('mobileControls2');

/*  CONFIG  */

var F3config = document.getElementById('config');

function renderCoordinatesOnScoreboard() {
    var playerLeftPos = parseInt(player.style.left);
    var playerTopPos = parseInt(player.style.top);
    var playerRightPos = playerLeftPos / playerTopPos + 10;
    var XYZDisplay = document.getElementById('xyz').innerHTML = `${playerLeftPos.toFixed(1)} / ${playerTopPos.toFixed(1)} / ${playerRightPos.toFixed(1)}`;

    if (playerLeftPos < -50 || playerLeftPos >= 1740) {
        window.location.reload();
    }
}
setInterval(renderCoordinatesOnScoreboard, timeout);

function renderHoveredBlockIDOnScoreboard() {
    allBlocks.forEach(function(blockElement) {
        blockElement.addEventListener('mouseover', function() {
            var BlockElementID = blockElement.id;
            var blockHoverID = document.getElementById('blockHoverID').innerHTML = BlockElementID;
        });
    });
}
setInterval(renderHoveredBlockIDOnScoreboard, timeout);

function renderPlayerLocationOnScoreboard() {
    if (isInOverworld && !isInNether && !isInTheEnd) {
        document.getElementById('playerLocation').innerHTML = 'overworld';
        F3config.style.color = '#000';
    } else if (isInNether && !isInOverworld && !isInTheEnd) {
        document.getElementById('playerLocation').innerHTML = 'the_nether';
        F3config.style.color = '#fff';
    } else if (isInTheEnd && !isInNether && !isInOverworld) {
        document.getElementById('playerLocation').innerHTML = 'the_end';
        F3config.style.color = '#fff';
    }
}
setInterval(renderPlayerLocationOnScoreboard, timeout);

if (window.performance && window.performance.memory) {
    var memoryInfo = window.performance.memory;
    var usedMemoryMB = (memoryInfo.usedJSHeapSize / (1024 * 1024));
    var totalMemoryMB = (memoryInfo.totalJSHeapSize / (1024 * 1024));
    var memoryPercentage = (usedMemoryMB / totalMemoryMB) * 100;
  }
  var currentMemory = document.getElementById('currentMemory').innerHTML = `${memoryPercentage.toFixed(0)}% ${usedMemoryMB.toFixed(0)}/${totalMemoryMB.toFixed(0)}MB`;

  var windowResolutionDisplay = document.getElementById('windowConfig').innerHTML = `1762x908`;
  var FPSDisplay = document.getElementById('FPS').innerHTML = FPS;
  var IPDisplay = document.getElementById('ipNum').innerHTML = window.location.hostname;
  var seedNum = Math.floor(Math.random() * 100000);
  var SeedDisplay = document.getElementById('seed').innerHTML = seedNum;
/*   ------   */

var playerTop = player.style.top = '260px';

const playerSpeed = 10;
const playerCrouchingSpeed = 4;
const playerSpeedWithControlKey = 20;

const playerCrouchingSpeedMobile = 30;
const playerSpeedMobile = 50;

const endermanReactionTime = 200;
const enderDragonReactionTime = 600;
const creeperReactionTime = 1000;
const blazeReactionTime = 200;

var frameCount = 0;
var lastTime = performance.now();
var lastSecond = lastTime;
var playerXPosition = 0;
var isGuiOpen = false;
var isInOverworld = true;
var isInNether = false;
var isInTheEnd = false;
var allowedPlacingBlocks = true;
var allowedDestroyingBlocks = true;
var creativeBlocksReach = false;
var gamemode = 0;
var chat = null;
var menu;
var isInventoryOpen = false;
var playerCrouching = false;
var ctrlPressed = false;
var isSteveChosen = false;
var isAlexChosen = false;
var isSkin1Chosen = false;

var playerHP = 10;
var blazeHP = 15;
var creeperHP = 8;
var endermanHP = 12;
var enderDragonHP = 180;

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
var diamondOreBlock = false;
var waterBlock = false;
var iceBlock = false;
var cobbleStoneBlock = false;
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
var numOfEnderPearls = 0;

var shouldCreatePortal;

if (running) {

    document.addEventListener('DOMContentLoaded', () => {

        log('Server: Successfully loaded the world.');
        music.play();

        var biomes = {
            nether: {
                ID: 0,
                name: 'Nether',
                isNetherBiome: false,
            },
            normal: {
                ID: 1,
                name: 'Normal',
                isNormalBiome: false,
            },
            desert: { 
                ID: 2,
                name: 'Desert',
                isDesertBiome: false,
            },
            icy: {
                ID: 3,
                name: 'Icy',
                isIcyBiome: false,
            },
            snowy: {
                ID: 4,
                name: 'Snowy',
                isSnowyBiome: false,
            },
            mushroom: {
                ID: 5,
                name: 'Mushroom',
                isMushroomBiome: false,
            },
            theEnd: {
                ID: 6,
                name: 'The end',
                isTheEndBiome: false,
            }
        }
        var biomesArray = [biomes.normal.ID, biomes.desert.ID, biomes.normal.ID, biomes.icy.ID, biomes.snowy.ID, biomes.mushroom.ID];
        var b = Math.floor(Math.random() * biomesArray.length);
        var biome = biomesArray[b];

    function setBiome() {
        if (biome == 1) {
            biomes.normal.isNormalBiome = true;
            setInterval(() => {
                if (isInOverworld && !isInNether && !isInTheEnd) {
                    document.getElementById('selectedBiome').innerHTML = biomes.normal.name;
                } else if (isInNether && !isInOverworld && !isInTheEnd) {
                    document.getElementById('selectedBiome').innerHTML = biomes.nether.name;
                } else if (isInTheEnd && !isInNether && !isInOverworld) {
                    document.getElementById('selectedBiome').innerHTML = biomes.theEnd.name;
                }
            }, 200);
            log(`Server: The biome is ${biomes.normal.name}.`);
        } else if (biome == 2) {
            biomes.desert.isDesertBiome = true;
            setInterval(() => {
                if (isInOverworld && !isInNether && !isInTheEnd) {
                    document.getElementById('selectedBiome').innerHTML = biomes.desert.name;
                } else if (isInNether && !isInOverworld && !isInTheEnd) {
                    document.getElementById('selectedBiome').innerHTML = biomes.nether.name;
                } else if (isInTheEnd && !isInNether && !isInOverworld) {
                    document.getElementById('selectedBiome').innerHTML = biomes.theEnd.name;
                }
            }, 200);

            grassBlockElementsArray.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.src = 'sand_block.png';
            });
            dirtBlockElementsArray.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.src = 'sandstone.png';
            });
            stoneBlockElementsArray.forEach(stoneBlockInStoneBlocks => {
                stoneBlockInStoneBlocks.src = 'sandstone.png';
            });
            stoneBlocksInLastLevel.forEach(stoneBlockThirdLevel => {
                stoneBlockThirdLevel.src = 'stone_block.png';
            });
            log(`Server: The biome is ${biomes.desert.name}.`);
        } else if (biome == 3) {
            biomes.icy.isIcyBiome = true;
            setInterval(() => {
                if (isInOverworld && !isInNether && !isInTheEnd) {
                    document.getElementById('selectedBiome').innerHTML = biomes.icy.name;
                } else if (isInNether && !isInOverworld && !isInTheEnd) {
                    document.getElementById('selectedBiome').innerHTML = biomes.nether.name;
                } else if (isInTheEnd && !isInNether && !isInOverworld) {
                    document.getElementById('selectedBiome').innerHTML = biomes.theEnd.name;
                }
            }, 200);

            grassBlockElementsArray.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.src = 'ice_block.png';
            });
            dirtBlockElementsArray.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.src = 'water.png';
            });
            stoneBlockElementsArray.forEach(stoneBlockInStoneBlocks => {
                stoneBlockInStoneBlocks.src = 'water.png';
            });
            stoneBlocksInLastLevel.forEach(stoneBlockThirdLevel => {
                stoneBlockThirdLevel.src = 'stone_block.png';
            });
            log(`Server: The biome is ${biomes.icy.name}.`);
        } else if (biome == 4) {
            biomes.snowy.isSnowyBiome = true;
            setInterval(() => {
                if (isInOverworld && !isInNether && !isInTheEnd) {
                    document.getElementById('selectedBiome').innerHTML = biomes.snowy.name;
                } else if (isInNether && !isInOverworld && !isInTheEnd) {
                    document.getElementById('selectedBiome').innerHTML = biomes.nether.name;
                } else if (isInTheEnd && !isInNether && !isInOverworld) {
                    document.getElementById('selectedBiome').innerHTML = biomes.theEnd.name;
                }
            }, 200);

            grassBlockElementsArray.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.src = 'snowy_grass.png';
            });
            dirtBlockElementsArray.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.src = 'dirt.png';
            });
            stoneBlockElementsArray.forEach(stoneBlockInStoneBlocks => {
                stoneBlockInStoneBlocks.src = 'stone_block.png';
            });
            stoneBlocksInLastLevel.forEach(stoneBlockThirdLevel => {
                stoneBlockThirdLevel.src = 'stone_block.png';
            });
            log(`Server: The biome is ${biomes.snowy.name}.`);
        } else if (biome == 5) {
            biomes.mushroom.isMushroomBiome = true;
            setInterval(() => {
                if (isInOverworld && !isInNether && !isInTheEnd) {
                    document.getElementById('selectedBiome').innerHTML = biomes.mushroom.name;
                } else if (isInNether && !isInOverworld && !isInTheEnd) {
                    document.getElementById('selectedBiome').innerHTML = biomes.nether.name;
                } else if (isInTheEnd && !isInNether && !isInOverworld) {
                    document.getElementById('selectedBiome').innerHTML = biomes.theEnd.name;
                }
            }, 200);

            grassBlockElementsArray.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.src = 'mycelium_block.png';
            });
            dirtBlockElementsArray.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.src = 'dirt.png';
            });
            stoneBlocksInFirstLevel.forEach(stoneBlockInFirstLevel => {
                stoneBlockInFirstLevel.src = 'dirt.png';
            });
            stoneBlocksInSecondLevel.forEach(stoneBlockInSecondLevel => {
                stoneBlockInSecondLevel.src = 'stone_block.png';
            });
            stoneBlocksInThirdLevel.forEach(stoneBlockInThirdLevel => {
                stoneBlockInThirdLevel.src = 'stone_block.png';
            });
            stoneBlocksInLastLevel.forEach(stoneBlockThirdLevel => {
                stoneBlockThirdLevel.src = 'stone_block.png';
            });
            log(`Server: The biome is ${biomes.mushroom.name}.`);
        }
    }
    setBiome();

    function renderCreeper() {
        let creeper = document.createElement('div');
        creeper.innerHTML = `<img id="creeper" draggable="false" src="creeper.png" alt="creeper.png">`;
        mc.appendChild(creeper);

        creeper.addEventListener('click', (e) => {
            creeperHP--;

            if (creeperHP == 0) {
                creeper.querySelector('img').src = 'damaged_creeper.png';
                setTimeout(() => {
                    creeper.querySelector('img').src = 'creeper.png';
                    creeper.hidden = true;
                    speech.text = 'OUCCHHHHHHHH!';
                    window.speechSynthesis.speak(speech);
                }, 300);
            }
        });
        log(`Server: Creeper has been spawned.`);
    }
    renderCreeper();
        
    function isPlayerInNether() {
        if (isInNether && !isInOverworld && !isInTheEnd) {

            grassBlockElementsArray.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.addEventListener('click', () => {
                    netherrackBreaking.play();
                });
            });
            dirtBlockElementsArray.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.addEventListener('click', () => {
                    netherrackBreaking.play();
                });
            });
            stoneBlockElementsArray.forEach(stoneBlockInStoneBlocks => {
                stoneBlockInStoneBlocks.addEventListener('click', () => {
                    netherrackBreaking.play();
                });
            });
        } 
    }
    setInterval(isPlayerInNether, timeout);

    function isPlayerInTheEnd() {
        if (isInTheEnd && !isInOverworld && !isInNether) {

            grassBlockElementsArray.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.addEventListener('click', () => {
                    stoneBreaking.play();
                });
            });
            dirtBlockElementsArray.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.addEventListener('click', () => {
                    stoneBreaking.play();
                });
            });
            stoneBlockElementsArray.forEach(stoneBlockInStoneBlocks => {
                stoneBlockInStoneBlocks.addEventListener('click', () => {
                    stoneBreaking.play();
                });
            });
        } 
    }
    setInterval(isPlayerInTheEnd, timeout);
    
    function setBlockSoundsForBiome() {
        if (biomes.normal.isNormalBiome) {
            grassBlockElementsArray.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.addEventListener('click', () => {
                    grassBreaking.play();
                });
            });
            dirtBlockElementsArray.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.addEventListener('click', () => {
                    dirtBreaking.play();
                });
            });
            stoneBlockElementsArray.forEach(stoneBlockInStoneBlocks => {
                stoneBlockInStoneBlocks.addEventListener('click', () => {
                    stoneBreaking.play();
                });
            });
        } 
        else if (biomes.desert.isDesertBiome) {
            grassBlockElementsArray.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.addEventListener('click', () => {
                    sandBreaking.play();
                });
            });
            dirtBlockElementsArray.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.addEventListener('click', () => {
                    sandstoneBreaking.play();
                });
            });
            stoneBlocksInFirstLevel.forEach(stoneBlockInFirstLevel => {
                stoneBlockInFirstLevel.addEventListener('click', () => {
                    sandstoneBreaking.play();
                });
            });
            stoneBlocksInSecondLevel.forEach(stoneBlockInSecondLevel => {
                stoneBlockInSecondLevel.addEventListener('click', () => {
                    sandstoneBreaking.play();
                });
            });
            stoneBlocksInThirdLevel.forEach(stoneBlockInThirdLevel => {
                stoneBlockInThirdLevel.addEventListener('click', () => {
                    stoneBreaking.play();
                });
            });
        } 
        else if (biomes.icy.isIcyBiome) {
            grassBlockElementsArray.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.addEventListener('click', () => {
                    iceBreaking.play();
                });
            });
            dirtBlockElementsArray.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.addEventListener('click', () => {
                    waterSound.play();
                });
            });
            stoneBlocksInFirstLevel.forEach(stoneBlockInFirstLevel => {
                stoneBlockInFirstLevel.addEventListener('click', () => {
                    waterSound.play();
                });
            });
            stoneBlocksInSecondLevel.forEach(stoneBlockInSecondLevel => {
                stoneBlockInSecondLevel.addEventListener('click', () => {
                    waterSound.play();
                });
            });
            stoneBlocksInThirdLevel.forEach(stoneBlockInThirdLevel => {
                stoneBlockInThirdLevel.addEventListener('click', () => {
                    stoneBreaking.play();
                });
            });
        }
        else if (biomes.snowy.isSnowyBiome) {
            grassBlockElementsArray.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.addEventListener('click', () => {
                    grassBreaking.play();
                });
            });
            dirtBlockElementsArray.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.addEventListener('click', () => {
                    dirtBreaking.play();
                });
            });
            stoneBlockElementsArray.forEach(stoneBlockInStoneBlocks => {
                stoneBlockInStoneBlocks.addEventListener('click', () => {
                    stoneBreaking.play();
                });
            });
        }
        else if (biomes.mushroom.isMushroomBiome) {
            grassBlockElementsArray.forEach(grassBlockInGrassBlocks => {
                grassBlockInGrassBlocks.addEventListener('click', () => {
                    grassBreaking.play();
                });
            });
            dirtBlockElementsArray.forEach(dirtBlockInDirtBlocks => {
                dirtBlockInDirtBlocks.addEventListener('click', () => {
                    dirtBreaking.play();
                });
            });
            stoneBlocksInFirstLevel.forEach(stoneBlockInFirstLevel => {
                stoneBlockInFirstLevel.addEventListener('click', () => {
                    dirtBreaking.play();
                });
            });
            stoneBlocksInSecondLevel.forEach(stoneBlockInSecondLevel => {
                stoneBlockInSecondLevel.addEventListener('click', () => {
                    stoneBreaking.play();
                });
            });
            stoneBlocksInThirdLevel.forEach(stoneBlockInThirdLevel => {
                stoneBlockInThirdLevel.addEventListener('click', () => {
                    stoneBreaking.play();
                });
            });
        }
    }
    setBlockSoundsForBiome();

    // Place blocks
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        let clickedPlace = document.createElement('div');
        clickedPlace.classList.add('clickedPlace');
        clickedPlace.style.position = 'absolute';
        clickedPlace.style.left = event.clientX + 'px';
        clickedPlace.style.top = event.clientY + 'px';
        if (allowedPlacingBlocks && oakPlanks) {
            clickedPlace.style.background = "url('oak_plank.png')";
            log(`Client: Oak planks placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && cobbleStone) {
            clickedPlace.style.background = "url('cobblestone.png')";
            log(`Client: Cobblestone placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && sandStone) {
            clickedPlace.style.background = "url('sandstone.png')";
            log(`Client: Sandstone block placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && oakLeaves) {
            clickedPlace.style.background = "url('oak_leaves.png')";
            log(`Client: Oak leaves placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && dirt) {
            clickedPlace.style.background = "url('dirt.png')";
            log(`Client: Dirt block placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && stone) {
            clickedPlace.style.background = "url('stone_block.png')";
            log(`Client: Stone block placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && whiteWool) {
            clickedPlace.style.background = "url('white_wool.png')";
            log(`Client: White wool placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && diamondBlock) {
            clickedPlace.style.background = "url('diamond_block.png')";
            log(`Client: Diamond block placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && obsidianBlock) {
            clickedPlace.style.background = "url('obsidian.png')";
            log(`Client: Obsidian block placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && barrierBlock) {
            clickedPlace.style.background = "url('barrier.png')";
            log(`Client: Barrier block placed at x: ${event.clientX - 84}.`);
            setTimeout(() => {
                clickedPlace.style.display = 'none';
            }, 2000);
        } else if (allowedPlacingBlocks && diamondOreBlock) {
            clickedPlace.style.background = "url('diamond_ore.png')";
            log(`Client: Diamond ore placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && waterBlock) {
            clickedPlace.style.background = "url('water.png')";
            log(`Client: Water block placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && iceBlock) {
            clickedPlace.style.background = "url('ice_block.png')";
            log(`Client: Ice block placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && cobbleStoneBlock) {
            clickedPlace.style.background = "url('cobblestone.png')";
            log(`Client: Cobblestone block placed at x: ${event.clientX - 84}.`);
        } else if (allowedPlacingBlocks && tntBlock) {
            clickedPlace.style.background = "url('tnt.png')";
            log(`Client: TNT placed at x: ${event.clientX - 84}.`);

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
            if (!tntBlock && allowedDestroyingBlocks) {
                clickedPlace.hidden = true;
                log(`Client: Some block was removed at x: ${event.clientX - 84}.`);
            }
        });
    });
});

    function openGuiInGameMenu() {
        document.body.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                if (!isGuiOpen) {
                    isGuiOpen = true;
                    log(`Client: user has opened the escape menu.`);
                    let GuiInGameMenu = document.createElement('div');
                    GuiInGameMenu.innerHTML = `
                    <div id="menu">
                    <button class="close" onclick="closeGUIInGameMenu()">X</button>
            <div id="account-info">
                <div><img id="player-pfp" alt="player-pfp" src="${profilePicture}" draggable="false"></div>
                <div><h1>Welcome </h1><span id="menuUsernameDisplay">${storedUsername}</span>!</div>
            </div>
        <div class="top-elements">
    
            <div id="music-label">
                <span>Music: </span>
                <input type="range" name="music" id="vol" min="0" max="1" step="0.1" value="0.2" onchange="changeVolume()">
            </div>
    
            <div class="graphic">
                <label class="graphic-title" for="graphic">Graphic: <span style="color: red;">(broken)</span></label>
                <button onclick="setLowGraphic()" class="graphicBtn">Low</button>
                <button onclick="setNormalGraphic()" class="graphicBtn">Normal</button>
                <button onclick="setHighGraphic()" class="graphicBtn">High</button>
            </div>
        </div>
    
        <div class="chooseSkin">
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
        <div>
            <label for="btnToggleControls">Mobile controls: </label>
            <button id="btnToggleControls" onclick="toggleMobileControls()">ON/OFF</button>
        </div>
        </div>
                    `;
                    GuiInGameMenu.classList.add('gui-container');
                    document.body.appendChild(GuiInGameMenu);
                } else {
                    isGuiOpen = false;
                    let GuiInGameMenu = document.querySelector('.gui-container');
                    GuiInGameMenu.remove();
                    log(`Client: user has closed the escape menu.`);
                }
            }
        });
    }
    openGuiInGameMenu();

    function openMobileGuiInGameMenu() {
        if (!isGuiOpen) {
            isGuiOpen = true;
            log(`Client: user has opened the escape menu.`);
            let GuiInGameMenu = document.createElement('div');
            GuiInGameMenu.innerHTML = `
            <div id="menu">
                    <button class="close" onclick="closeGUIInGameMenu()">X</button>
            <div id="account-info">
                <div><img id="player-pfp" alt="player-pfp" src="${profilePicture}" draggable="false"></div>
                <div><h1>Welcome </h1><span id="menuUsernameDisplay">${storedUsername}</span>!</div>
            </div>
        <div class="top-elements">
    
            <div id="music-label">
                <span>Music: </span>
                <input type="range" name="music" id="vol" min="0" max="1" step="0.1" value="0.2" onchange="changeVolume()">
            </div>
    
            <div class="graphic">
                <label class="graphic-title" for="graphic">Graphic: <span style="color: red;">(broken)</span></label>
                <button onclick="setLowGraphic()" class="graphicBtn">Low</button>
                <button onclick="setNormalGraphic()" class="graphicBtn">Normal</button>
                <button onclick="setHighGraphic()" class="graphicBtn">High</button>
            </div>
        </div>
    
        <div class="chooseSkin">
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
        <div>
            <label for="btnToggleControls">Mobile controls: </label>
            <button id="btnToggleControls" onclick="toggleMobileControls()">ON/OFF</button>
        </div>
        </div>
            `;
            GuiInGameMenu.classList.add('gui-container');
            document.body.appendChild(GuiInGameMenu);
        } else {
            isGuiOpen = false;
            let GuiInGameMenu = document.querySelector('.gui-container');
            GuiInGameMenu.remove();
            log(`Client: user has closed the escape menu.`);
        }
    }

    function closeGUIInGameMenu() {
        isGuiOpen = false;
        let GuiInGameMenu = document.querySelector('.gui-container');
        GuiInGameMenu.remove();
        log(`Client: user has closed the gui in game menu.`);
    }

    function toggleMobileControls() {
        if (!mobileControls1.classList.contains('hiddenControls1') && !mobileControls2.classList.contains('hiddenControls2')) {
            mobileControls1.classList.add('hiddenControls1');
            mobileControls2.classList.add('hiddenControls2');
            cloudsTitle.classList.remove('cloudsFix');
            log(`Client: user has turned on mobile controls.`);
        } else {
            mobileControls1.classList.remove('hiddenControls1');
            mobileControls2.classList.remove('hiddenControls2');
            cloudsTitle.classList.add('cloudsFix');
            log(`Client: user has turned off mobile controls.`);
        }
    }

    function changeMusicVolume() {
        var musicVolume = document.getElementById('vol').value;
        music.volume = musicVolume;
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

    for (let i = 1; i <= 22; i++) {
        grassBlockElementsArray.push(document.getElementById('g' + i));
    }
    
    for (let i = 1; i <= 22; i++) {
        dirtBlockElementsArray.push(document.getElementById('d' + i));
    }
    
    for (let i = 1; i <= 88; i++) {
        stoneBlockElementsArray.push(document.getElementById('s' + i));
    }

    function setNetherrack() {
        allBlocks.forEach(blockElement => blockElement.src = 'netherrack.png');
        log(`Server: All blocks have been set to netherrack.`);
    }
    function setEndStone() {
        allBlocks.forEach(blockElement => blockElement.src = 'endstone.png');
        log(`Server: All blocks have been set to endstone.`);
    }

    function setLowGraphic() {
        if (isInOverworld && !isInNether && !isInTheEnd) {
            mc.style.background = 'skyblue';
            creeper.src = 'low_creeper.png';

        grassBlockElementsArray.forEach(grassBlockElement => grassBlockElement.src = 'low_grass_block.png');

        dirtBlockElementsArray.forEach(dirtBlockElement => dirtBlockElement.src = 'low_dirt.png');
        
        stoneBlockElementsArray.forEach(stoneBlockElement => stoneBlockElement.src = 'low_stone_block.png');

        } 
        else if (isInNether || !isInOverworld || !isInTheEnd) {

            mc.style.background = "url('low_nether_sky.png')";

            allBlocks.forEach(blockElement => blockElement.src = 'low_netherrack.png');
        }
    }

    function setNormalGraphic() {
        if (isInOverworld && !isInNether && !isInTheEnd) {
            mc.style.background = 'url(\'sky.png\')';
            creeper.src = 'creeper.png';

        grassBlockElementsArray.forEach(grassBlockElement => grassBlockElement.src = 'grass_block.png');

        dirtBlockElementsArray.forEach(dirtBlockElement => dirtBlockElement.src = 'dirt.png');
        
        stoneBlockElementsArray.forEach(stoneBlockElement => stoneBlockElement.src = 'stone_block.png');

        } 
        else if (isInNether || !isInOverworld || !isInTheEnd) {

            mc.style.background = "url('nether_sky.png')";

            allBlocks.forEach(blockElement => blockElement.src = 'netherrack.png');
        }
    }

    function setHighGraphic() {
        if (isInOverworld && !isInNether && !isInTheEnd) {
            mc.style.background = 'url(\'high_sky.png\')';
            creeper.src = 'high_creeper.png';

        grassBlockElementsArray.forEach(grassBlockElement => grassBlockElement.src = 'high_grass_block.png');

        dirtBlockElementsArray.forEach(dirtBlockElement => dirtBlockElement.src = 'high_dirt.png');
        
        stoneBlockElementsArray.forEach(stoneBlockElement => stoneBlockElement.src = 'high_stone_block.png');

        } 
        else if (isInNether || !isInOverworld || !isInTheEnd) {

            mc.style.background = "url('high_nether_sky.png')";
            mc.style.backgroundPosition = 'center';

            allBlocks.forEach(blockElement => blockElement.src = 'high_netherrack.png');
        }
    }

    function handlePlayerMove() {
        window.addEventListener('keydown', (e) => { 
            if (e.key === 'Control') {
                ctrlPressed = true;
            }      
            if (e.key == 'Shift') {
                if (!playerCrouching) {
                    if (isSteveChosen) {
                        player.src = 'steve_crouching.png';
                    }
                    else if (isAlexChosen) {
                        player.src = 'alex_crouching.png';
                    }
                    else if (isSkin1Chosen) {
                        player.src = 'skin1_crouching.png';
                    } else {
                        player.src = 'steve_crouching.png';
                    }
                    playerCrouching = true;
                } else {
                    if (isSteveChosen) {
                        player.src = 'steve_standing.png';
                    }
                    else if (isAlexChosen) {
                        player.src = 'alex_standing.png';
                    }
                    else if (isSkin1Chosen) {
                        player.src = 'skin1_standing.png';
                    } else {
                        player.src = 'steve_standing.png';
                    }
                    playerCrouching = false;
                }
            } else if (e.key == 'ArrowLeft' || e.key == 's' || e.key == 'a') {
                if (playerCrouching) {
                    if (isSteveChosen) {
                        player.src = 'steve_crouching_reversed.png';
                    }
                    else if (isAlexChosen) {
                        player.src = 'alex_crouching_reversed.png';
                    }
                    else if (isSkin1Chosen) {
                        player.src = 'skin1_crouching_reversed.png';
                    } else {
                        player.src = 'steve_crouching_reversed.png';
                    }
                    playerXPosition -= playerCrouchingSpeed;
                    player.style.left = playerXPosition + 'px';
                } else {
                    if (isSteveChosen) {
                        player.src = 'steve_standing_reversed.png';
                    }
                    else if (isAlexChosen) {
                        player.src = 'alex_standing_reversed.png';
                    }
                    else if (isSkin1Chosen) {
                        player.src = 'skin1_standing_reversed.png';
                    } else {
                        player.src = 'steve_standing_reversed.png';
                    }
                    playerXPosition -= (ctrlPressed ? playerSpeedWithControlKey : playerSpeed);
                    player.style.left = playerXPosition + 'px';
                }
            } else if (e.key == 'w' || e.key == 'd') {
                if (playerCrouching) {
                    if (isSteveChosen) {
                        player.src = 'steve_crouching.png';
                    }
                    else if (isAlexChosen) {
                        player.src = 'alex_crouching.png';
                    }
                    else if (isSkin1Chosen) {
                        player.src = 'skin1_crouching.png';
                    } else {
                        player.src = 'steve_crouching.png';
                    }
                    playerXPosition += playerCrouchingSpeed;
                    player.style.left = playerXPosition + 'px';
                } else {
                    if (isSteveChosen) {
                        player.src = 'steve_standing.png';
                    }
                    else if (isAlexChosen) {
                        player.src = 'alex_standing.png';
                    }
                    else if (isSkin1Chosen) {
                        player.src = 'skin1_standing.png';
                    } else {
                        player.src = 'steve_standing.png';
                    }
                    playerXPosition += (ctrlPressed ? playerSpeedWithControlKey : playerSpeed);
                    player.style.left = playerXPosition + 'px';
                }
            } else if (e.key == 'ArrowUp' || e.key == ' ') {
                player.classList.add('jump');
        
                setTimeout(() => {
                    player.classList.remove('jump');
                }, 500);
            } else if (e.key == 'ArrowRight') {
                e.preventDefault();
                if (playerCrouching) {
                    if (isSteveChosen) {
                        player.src = 'steve_crouching.png';
                    }
                    else if (isAlexChosen) {
                        player.src = 'alex_crouching.png';
                    }
                    else if (isSkin1Chosen) {
                        player.src = 'skin1_crouching.png';
                    } else {
                        player.src = 'steve_crouching.png';
                    }
                    playerXPosition += playerCrouchingSpeed;
                    player.style.left = playerXPosition + 'px';
                } else {
                    if (isSteveChosen) {
                        player.src = 'steve_standing.png';
                    }
                    else if (isAlexChosen) {
                        player.src = 'alex_standing.png';
                    }
                    else if (isSkin1Chosen) {
                        player.src = 'skin1_standing.png';
                    } else {
                        player.src = 'steve_standing.png';
                    }
                    playerXPosition += (ctrlPressed ? playerSpeedWithControlKey : playerSpeed);
                    player.style.left = playerXPosition + 'px';
                }
            }
        });
    }
    handlePlayerMove();

    function mobileControlsMethod(method) {
        if (method == 'left') {
            if (playerCrouching) {
                if (isSteveChosen) {
                    player.src = 'steve_crouching_reversed.png';
                }
                else if (isAlexChosen) {
                    player.src = 'alex_crouching_reversed.png';
                }
                else if (isSkin1Chosen) {
                    player.src = 'skin1_crouching_reversed.png';
                } else {
                    player.src = 'steve_crouching_reversed.png';
                }
                playerXPosition -= playerCrouchingSpeedMobile;
                player.style.left = playerXPosition + 'px';
            } else {
                if (isSteveChosen) {
                    player.src = 'steve_standing_reversed.png';
                }
                else if (isAlexChosen) {
                    player.src = 'alex_standing_reversed.png';
                }
                else if (isSkin1Chosen) {
                    player.src = 'skin1_standing_reversed.png';
                } else {
                    player.src = 'steve_standing_reversed.png';
                }
                playerXPosition -= playerSpeedMobile;
                player.style.left = playerXPosition + 'px';
            }
        } else if (method == 'crouch') {
            if (!playerCrouching) {
                if (isSteveChosen) {
                    player.src = 'steve_crouching.png';
                }
                else if (isAlexChosen) {
                    player.src = 'alex_crouching.png';
                }
                else if (isSkin1Chosen) {
                    player.src = 'skin1_crouching.png';
                } else {
                    player.src = 'steve_crouching.png';
                }
                playerCrouching = true;
            } else {
                if (isSteveChosen) {
                        player.src = 'steve_standing.png';
                    }
                    else if (isAlexChosen) {
                        player.src = 'alex_standing.png';
                    }
                    else if (isSkin1Chosen) {
                        player.src = 'skin1_standing.png';
                    } else {
                        player.src = 'steve_standing.png';
                    }
                playerCrouching = false;
            }
        } else if (method == 'right') {
            if (playerCrouching) {
                if (isSteveChosen) {
                    player.src = 'steve_crouching.png';
                }
                else if (isAlexChosen) {
                    player.src = 'alex_crouching.png';
                }
                else if (isSkin1Chosen) {
                    player.src = 'skin1_crouching.png';
                } else {
                    player.src = 'steve_crouching.png';
                }
                playerXPosition += playerCrouchingSpeedMobile;
                player.style.left = playerXPosition + 'px';
            } else {
                if (isSteveChosen) {
                        player.src = 'steve_standing.png';
                    }
                    else if (isAlexChosen) {
                        player.src = 'alex_standing.png';
                    }
                    else if (isSkin1Chosen) {
                        player.src = 'skin1_standing.png';
                    } else {
                        player.src = 'steve_standing.png';
                    }
                playerXPosition += playerSpeedMobile;
                player.style.left = playerXPosition + 'px';
            }
        } else if (method == 'jump') {
            player.classList.add('jump');
        
            setTimeout(() => {
                player.classList.remove('jump');
            }, 500);
        } else if (method == 'goUp') {
            if (player.style.top != '260px') {
                log(`Server: Teleported ${storedUsername} to the normal position.`);
                player.style.top = '260px';
            }
        } else if (method == 'openInv') {
            openInventoryGUI();
        } else if (method == 'spawnBlaze') {
            renderBlaze();
        } else if (method == 'spawnEnderman') {
            renderEnderman();
        }
    }

    window.addEventListener('keydown', (e) => e.key == '0' ? renderEnderman() : false);
    window.addEventListener('keydown', (e) => e.key == 'b' ? renderBlaze() : false);

    function checkOverworldPortalCollision() {
        let playerRect = player.getBoundingClientRect();
        let portalRect = overworldPortalPosition.getBoundingClientRect();
        
        if (
            playerRect.top < portalRect.bottom &&
            playerRect.bottom > portalRect.top &&
            playerRect.left < portalRect.right &&
            playerRect.right > portalRect.left
        ) {
            enteringPortalSound.play();
            isInOverworld = false;
            isInTheEnd = false;
            isInNether = false;
        
            endGameTitles();
            log('Server: Congratulations! You beat the game.');
        }
    }

    function goToOverworld() {
    overworldPortalPosition = s45;

    overworldPortalPosition.src = 'end_portal.png';

    setTimeout(() => {
        overworldPortalPosition.hidden = true;
    }, 10000);

    setInterval(checkOverworldPortalCollision, 100);
    }

    function renderEnderman() {
        let enderman = document.createElement('div');
        enderman.innerHTML = `<img id="enderman" draggable="false" src="enderman.png" alt="enderman.png">`;
        mc.appendChild(enderman);

        enderman.addEventListener('click', () => {
            endermanHP--;
            if (endermanHP <= 0) {
                enderman.querySelector('img').src = 'damaged_enderman.png';
                setTimeout(() => {
                    enderman.parentNode.removeChild(enderman);
                    numOfEnderPearls++;
                    log(`Number of ender pearls: ${numOfEnderPearls}`);
                }, 3000);
            }
        });
        mc.appendChild(enderman);
        log('Server: Enderman has been spawned.');
    }

    function renderEnderDragon() {
        let enderDragon = document.createElement('div');
        enderDragon.innerHTML = `<img id="enderDragon" draggable="false" src="enderDragon.png" alt="enderDragon.png">`;
        mc.appendChild(enderDragon);

        log('Server: Enderdragon has been spawned.');

        enderDragon.addEventListener('click', (e) => {
        enderDragonHP--;

        if (enderDragonHP == 0) {
            enderDragon.querySelector('img').src = 'damaged_enderDragon.png';
            setTimeout(() => {
                enderDragon.querySelector('img').src = 'enderDragon.png';
                enderDragon.hidden = true;
            }, 300);
            setTimeout(() => {
                alert('Congratulations! You won!');
                goToOverworld();
            }, 800);
            }
        });
    }

    function renderBlaze() {
        if (isInNether && !isInOverworld && !isInTheEnd) {
            blazeSounds.play();
            let blaze = document.createElement('div');
            blaze.innerHTML = `<img id="blazeElement" draggable="false" src="blaze.png" alt="blaze.png">`;
            blaze.classList.add('blazeAnimation');

            log('Server: Blaze has been spawned.');

            blaze.addEventListener('click', () => {
                blazeHP--;
                if (blazeHP <= 0) {
                    blaze.querySelector('img').src = 'damaged_blaze.png';
                    setTimeout(() => {
                        blaze.parentNode.removeChild(blaze);
                        numOfBlazeRods++;
                        log(`Number of blaze rods: ${numOfBlazeRods}`);
                    }, 3000);
                }
            });
            mc.appendChild(blaze);
        }
    }

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
                    player.src = 'steve_standing_reversed.png';
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
        log('Client: Skin changed to Steve.');
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
        log('Client: Skin changed to Alex.');
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
        log('Client: Skin changed to Skin1.');
    }

    function setDefaultPlayerPosition() {
        document.body.addEventListener('keydown', (e) => {
            if (e.key == '/') {
                if (player.style.top != '260px') {
                    log(`Server: Teleported ${storedUsername} to the normal position.`);
                    player.style.top = '260px';
                }
            }
        });
    }
    setDefaultPlayerPosition();

    // Chat
    window.addEventListener('keyup', (e) => {
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
                log('Server: The chat has been opened.');
            } else {
                chat.removeAttribute('hidden');
                chat.value = '';
                log('Server: The chat has been opened.');
            }
        }
        if (e.key === 'F2') {
            if (chat) {
                let message = chat.value;
                speech.text = chat.value;
                window.speechSynthesis.speak(speech);

                if (message == '/kill' || message == '/kill @s' || message == '/kill @p') {
                    player.style.display = 'none';
                    log(`Server: ${storedUsername} died.`);
                }
                if (message == '/kill @a') {
                    creeper.style.display = 'none';
                    player.style.display = 'none';
                    log(`Server: ${storedUsername} and creeper died.`);
                }
                if (message == '/kill @e[type=creeper]') {
                    creeper.style.display = 'none';
                    log(`Server: Creeper died.`);
                }

                if (message == '/gamemode s' || message == '/gamemode survival' || message == '/gamemode 0') {
                    gamemode = 0;
                    gamemodeDisplay.innerHTML = 'Survival';
                    playerHP = 10;
                    setInterval(() => {
                        toggleHPDisplay.innerHTML = `<div id="hp-display">Health: <span id="hp">${playerHP}</span>❤️</div>`;
                    }, 10);
                    allowedPlacingBlocks = true;
                    allowedDestroyingBlocks = true;
                    creativeBlocksReach = false;
                    log('Client: Gamemode has been set to survival.');
                }
                if (message == '/gamemode c' || message == '/gamemode creative' || message == '/gamemode 1') {
                    gamemode = 1;
                    gamemodeDisplay.innerHTML = 'Creative';
                    playerHP = Infinity;
                    allowedPlacingBlocks = true;
                    allowedDestroyingBlocks = true;
                    creativeBlocksReach = true;
                    log('Client: Gamemode has been set to creative.');
                }
                if (message == '/gamemode a' || message == '/gamemode adventure' || message == '/gamemode 2') {
                    gamemode = 2;
                    gamemodeDisplay.innerHTML = 'Adventure';
                    playerHP = 10;
                    setInterval(() => {
                        toggleHPDisplay.innerHTML = `<div id="hp-display">Health: <span id="hp">${playerHP}</span>❤️</div>`;
                    }, 10);
                    allowedPlacingBlocks = false;
                    allowedDestroyingBlocks = false;
                    creativeBlocksReach = false;
                    log('Client: Gamemode has been set to adventure.');
                }

                log(`Client: "${String(message)}".`);
                log('Server: The chat has been closed.');

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
                    }, 2000);
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
                    }, 2000);
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
                    }, 2000);
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
                    }, 2000);
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
                    }, 2000);
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
                    }, 2000);
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
                    }, 2000);
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
                    }, 2000);
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
                    }, 2000);
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
                    }, 2000);
                }
            }
        }
    });
    let chatOpen = false;
    let chat;
    function openChatButton() {
        if (!chatOpen) {
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

            log('Server: The chat has been opened.');
    
            chatOpen = true;
        } else {
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
            if (message == '/gamemode s' || message == '/gamemode survival' || message == '/gamemode 0') {
                    gamemode = 0;
                    gamemodeDisplay.innerHTML = 'Survival';
                    playerHP = 10;
                    setInterval(() => {
                        toggleHPDisplay.innerHTML = `<div id="hp-display">Health: <span id="hp">${playerHP}</span>❤️</div>`;
                    }, 10);
                    allowedPlacingBlocks = true;
                    allowedDestroyingBlocks = true;
                    creativeBlocksReach = false;
                    log('Client: Gamemode has been set to survival.');
                }
                if (message == '/gamemode c' || message == '/gamemode creative' || message == '/gamemode 1') {
                    gamemode = 1;
                    gamemodeDisplay.innerHTML = 'Creative';
                    playerHP = Infinity;
                    allowedPlacingBlocks = true;
                    allowedDestroyingBlocks = true;
                    creativeBlocksReach = true;
                    log('Client: Gamemode has been set to creative.');
                }
                if (message == '/gamemode a' || message == '/gamemode adventure' || message == '/gamemode 2') {
                    gamemode = 2;
                    gamemodeDisplay.innerHTML = 'Adventure';
                    playerHP = 10;
                    setInterval(() => {
                        toggleHPDisplay.innerHTML = `<div id="hp-display">Health: <span id="hp">${playerHP}</span>❤️</div>`;
                    }, 10);
                    allowedPlacingBlocks = false;
                    allowedDestroyingBlocks = false;
                    creativeBlocksReach = false;
                    log('Client: Gamemode has been set to adventure.');
                }
             else {
                chat.setAttribute('hidden', true);
    
                let messageContainer = document.createElement('div');
    
                messageContainer.classList.add('message');
    
                messageContainer.innerHTML = message;
                document.body.append(messageContainer);
                setTimeout(() => {
                    messageContainer.setAttribute('hidden', true);
                }, 2000);
            }
            chatOpen = false;
        }
    }
    function supriseButton() {
        allowedPlacingBlocks = false;
        log('Server: Suprise button has been activated.');
        mc.hidden = true;
        setTimeout(() => {
            let supriseVID = document.createElement('video');
            supriseVID.width = 1280;
            supriseVID.height = 720;
            supriseVID.src = 'suprise.mp4';
            supriseVID.autoplay = true;
            supriseVID.loop = true;
            document.body.append(supriseVID);
        }, 500);
    }

    function endGameTitles() {
        allowedPlacingBlocks = false;
        mc.hidden = true;
        setTimeout(() => {
            let endGameIMG = document.createElement('img');
            endGameIMG.width = 1280;
            endGameIMG.height = 720;
            endGameIMG.src = 'thanks_for_playing.png';
            document.body.append(endGameIMG);
        }, 500);
    }
    function grassBlockBreak() {
        g1.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g1.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 1 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g1.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 1 has been destroyed.`);
        }
        });
        g2.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g2.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 2 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g2.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 2 has been destroyed.`);
        }
        });
        g3.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g3.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 3 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g3.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 3 has been destroyed.`);
        }
        });
        g4.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g4.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 4 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g4.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 4 has been destroyed.`);
        }
        });
        g5.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g5.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 5 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g5.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 5 has been destroyed.`);
        }
        });
        g6.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g6.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 6 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g6.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 6 has been destroyed.`);
        }
        });
        g7.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g7.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 7 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g7.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 7 has been destroyed.`);
        }
        });
        g8.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g8.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 8 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g8.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 8 has been destroyed.`);
        }
        });
        g9.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g9.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 9 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g9.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 9 has been destroyed.`);
        }
        });
        g10.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g10.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 10 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g10.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 10 has been destroyed.`);
        }
        });
        g11.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g11.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 11 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g11.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 11 has been destroyed.`);
        }
        });
        g12.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g12.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 12 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g12.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 12 has been destroyed.`);
        }
        });
        g13.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g13.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 13 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g13.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 13 has been destroyed.`);
        }
        });
        g14.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g14.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 14 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g14.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 14 has been destroyed.`);
        }
        });
        g15.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g15.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 15 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g15.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 15 has been destroyed.`);
        }
        });
        g16.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g16.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 16 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g16.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 16 has been destroyed.`);
        }
        });
        g17.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g17.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 17 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g17.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 17 has been destroyed.`);
        }
        });
        g18.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g18.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 18 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g18.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 18 has been destroyed.`);
        }
        });
        g19.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g19.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 19 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g19.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 19 has been destroyed.`);
        }
        });
        g20.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g20.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 20 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g20.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 20 has been destroyed.`);
        }
        });
        g21.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g21.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 21 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g21.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 21 has been destroyed.`);
        }
        });
        g22.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '260px' || player.style.top == '350px' || player.style.top == '420px') {
                g22.hidden = true;
                player.style.top = '350px';
                log(`Server: The grass block with ID: 22 has been destroyed.`);
        } else if (creativeBlocksReach) {
            g22.hidden = true;
            player.style.top = '350px';
            log(`Server: The grass block with ID: 22 has been destroyed.`);
        }
        });
    }
    grassBlockBreak();

    function dirtBlockBreak() {
        d1.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d1.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 1 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d1.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 1 has been destroyed.`);
        }
        });
        d2.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d2.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 2 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d2.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 2 has been destroyed.`);
        }
        });
        d3.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d3.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 3 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d3.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 3 has been destroyed.`);
        }
        });
        d4.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d4.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 4 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d4.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 4 has been destroyed.`);
        }
        });
        d5.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d5.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 5 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d5.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 5 has been destroyed.`);
        }
        });
        d6.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d6.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 6 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d6.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 6 has been destroyed.`);
        }
        });
        d7.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d7.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 7 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d7.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 7 has been destroyed.`);
        }
        });
        d8.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d8.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 8 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d8.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 8 has been destroyed.`);
        }
        });
        d9.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d9.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 9 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d9.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 9 has been destroyed.`);
        }
        });
        d10.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d10.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 10 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d10.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 10 has been destroyed.`);
        }
        });
        d11.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d11.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 11 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d11.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 11 has been destroyed.`);
        }
        });
        d12.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d12.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 12 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d12.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 12 has been destroyed.`);
        }
        });
        d13.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d13.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 13 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d13.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 13 has been destroyed.`);
        }
        });
        d14.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d14.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 14 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d14.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 14 has been destroyed.`);
        }
        });
        d15.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d15.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 15 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d15.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 15 has been destroyed.`);
        }
        });
        d16.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d16.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 16 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d16.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 16 has been destroyed.`);
        }
        });
        d17.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d17.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 17 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d17.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 17 has been destroyed.`);
        }
        });
        d18.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d18.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 18 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d18.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 18 has been destroyed.`);
        }
        });
        d19.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d19.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 19 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d19.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 19 has been destroyed.`);
        }
        });
        d20.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d20.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 20 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d20.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 20 has been destroyed.`);
        }
        });
        d21.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d21.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 21 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d21.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 21 has been destroyed.`);
        }
        });
        d22.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '350px' || player.style.top == '420px' || player.style.top == '490px') {
                d22.hidden = true;
                player.style.top = '420px';
                log(`Server: The dirt block with ID: 22 has been destroyed.`);
        } else if (creativeBlocksReach) {
            d22.hidden = true;
            player.style.top = '420px';
            log(`Server: The dirt block with ID: 22 has been destroyed.`);
        }
        });
    }
    dirtBlockBreak();

    function stoneBlockBreak() {
        s1.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s1.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 1 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s1.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 1 has been destroyed.`);
        }
        });
        s2.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s2.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 2 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s2.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 2 has been destroyed.`);
        }
        });
        s3.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s3.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 3 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s3.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 3 has been destroyed.`);
        }
        });
        s4.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s4.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 4 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s4.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 4 has been destroyed.`);
        }
        });
        s5.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s5.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 5 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s5.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 5 has been destroyed.`);
        }
        });
        s6.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s6.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 6 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s6.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 6 has been destroyed.`);
        }
        });
        s7.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s7.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 7 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s7.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 7 has been destroyed.`);
        }
        });
        s8.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s8.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 8 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s8.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 8 has been destroyed.`);
        }
        });
        s9.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s9.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 9 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s9.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 9 has been destroyed.`);
        }
        });
        s10.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s10.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 10 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s10.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 10 has been destroyed.`);
        }
        });
        s11.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s11.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 11 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s11.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 11 has been destroyed.`);
        }
        });
        s12.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s12.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 12 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s12.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 12 has been destroyed.`);
        }
        });
        s13.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s13.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 13 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s13.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 13 has been destroyed.`);
        }
        });
        s14.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s14.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 14 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s14.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 14 has been destroyed.`);
        }
        });
        s15.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s15.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 15 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s15.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 15 has been destroyed.`);
        }
        });
        s16.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s16.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 16 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s16.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 16 has been destroyed.`);
        }
        });
        s17.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s17.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 17 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s17.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 17 has been destroyed.`);
        }
        });
        s18.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s18.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 18 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s18.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 18 has been destroyed.`);
        }
        });
        s19.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s19.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 19 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s19.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 19 has been destroyed.`);
        }
        });
        s20.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s20.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 20 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s20.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 20 has been destroyed.`);
        }
        });
        s21.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s21.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 21 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s21.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 21 has been destroyed.`);
        }
        });
        s22.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '420px' || player.style.top == '490px' || player.style.top == '570px') {
                s22.hidden = true;
                player.style.top = '490px';
                log(`Server: The stone block with ID: 22 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s22.hidden = true;
            player.style.top = '490px';
            log(`Server: The stone block with ID: 22 has been destroyed.`);
        }
        });
        s23.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s23.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 23 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s23.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 23 has been destroyed.`);
        }
        });
        s24.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s24.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 24 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s24.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 24 has been destroyed.`);
        }
        });
        s25.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s25.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 25 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s25.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 25 has been destroyed.`);
        }
        });
        s26.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s26.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 26 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s26.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 26 has been destroyed.`);
        }
        });
        s27.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s27.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 27 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s27.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 27 has been destroyed.`);
        }
        });
        s28.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s28.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 28 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s28.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 28 has been destroyed.`);
        }
        });
        s29.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s29.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 29 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s29.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 29 has been destroyed.`);
        }
        });
        s30.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s30.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 30 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s30.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 30 has been destroyed.`);
        }
        });
        s31.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s31.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 31 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s31.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 31 has been destroyed.`);
        }
        });
        s32.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s32.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 32 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s32.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 32 has been destroyed.`);
        }
        });
        s33.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s33.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 33 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s33.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 33 has been destroyed.`);
        }
        });
        s34.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s34.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 34 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s34.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 34 has been destroyed.`);
        }
        });
        s35.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s35.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 35 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s35.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 35 has been destroyed.`);
        }
        });
        s36.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s36.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 36 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s36.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 36 has been destroyed.`);
        }
        });
        s37.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s37.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 37 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s37.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 37 has been destroyed.`);
        }
        });
        s38.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s38.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 38 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s38.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 38 has been destroyed.`);
        }
        });
        s39.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s39.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 39 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s39.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 39 has been destroyed.`);
        }
        });
        s40.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s40.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 40 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s40.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 40 has been destroyed.`);
        }
        });
        s41.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s41.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 41 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s41.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 41 has been destroyed.`);
        }
        });
        s42.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s42.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 42 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s42.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 42 has been destroyed.`);
        }
        });
        s43.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s43.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 43 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s43.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 43 has been destroyed.`);
        }
        });
        s44.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '490px' || player.style.top == '570px' || player.style.top == '650px') {
                s44.hidden = true;
                player.style.top = '570px';
                log(`Server: The stone block with ID: 44 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s44.hidden = true;
            player.style.top = '570px';
            log(`Server: The stone block with ID: 44 has been destroyed.`);
        }
        });
        s45.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s45.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 45 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s45.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 45 has been destroyed.`);
        }
        });
        s46.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s46.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 46 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s46.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 46 has been destroyed.`);
        }
        });
        s47.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s47.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 47 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s47.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 47 has been destroyed.`);
        }
        });
        s48.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s48.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 48 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s48.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 48 has been destroyed.`);
        }
        });
        s49.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s49.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 49 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s49.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 49 has been destroyed.`);
        }
        });
        s50.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s50.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 50 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s50.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 50 has been destroyed.`);
        }
        });
        s51.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s51.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 51 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s51.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 51 has been destroyed.`);
        }
        });
        s52.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s52.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 52 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s52.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 52 has been destroyed.`);
        }
        });
        s53.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s53.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 53 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s53.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 53 has been destroyed.`);
        }
        });
        s54.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s54.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 54 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s54.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 54 has been destroyed.`);
        }
        });
        s55.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s55.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 55 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s55.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 55 has been destroyed.`);
        }
        });
        s56.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s56.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 56 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s56.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 56 has been destroyed.`);
        }
        });
        s57.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s57.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 57 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s57.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 57 has been destroyed.`);
        }
        });
        s58.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s58.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 58 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s58.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 58 has been destroyed.`);
        }
        });
        s59.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s59.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 59 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s59.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 59 has been destroyed.`);
        }
        });
        s60.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s60.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 60 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s60.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 60 has been destroyed.`);
        }
        });
        s61.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s61.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 61 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s61.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 61 has been destroyed.`);
        }
        });
        s62.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s62.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 62 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s62.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 62 has been destroyed.`);
        }
        });
        s63.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s63.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 63 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s63.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 63 has been destroyed.`);
        }
        });
        s64.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s64.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 64 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s64.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 64 has been destroyed.`);
        }
        });
        s65.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s65.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 65 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s65.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 65 has been destroyed.`);
        }
        });
        s66.addEventListener('click', () => {
            if (!creativeBlocksReach && allowedDestroyingBlocks && player.style.top == '570px' || player.style.top == '650px') {
                s66.hidden = true;
                player.style.top = '650px';
                log(`Server: The stone block with ID: 66 has been destroyed.`);
        } else if (creativeBlocksReach) {
            s66.hidden = true;
            player.style.top = '650px';
            log(`Server: The stone block with ID: 66 has been destroyed.`);
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
        diamondOreBlock = false;
        waterBlock = false;
        iceBlock = false;
        cobbleStoneBlock = false;
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
        diamondOreBlock = false;
        waterBlock = false;
        iceBlock = false;
        cobbleStoneBlock = false;
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
        diamondOreBlock = false;
        waterBlock = false;
        iceBlock = false;
        cobbleStoneBlock = false;
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
        diamondOreBlock = false;
        waterBlock = false;
        iceBlock = false;
        cobbleStoneBlock = false;
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
        diamondOreBlock = false;
        waterBlock = false;
        iceBlock = false;
        cobbleStoneBlock = false;
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
        diamondOreBlock = false;
        waterBlock = false;
        iceBlock = false;
        cobbleStoneBlock = false;
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
        diamondOreBlock = false;
        waterBlock = false;
        iceBlock = false;
        cobbleStoneBlock = false;
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
        diamondOreBlock = false;
        waterBlock = false;
        iceBlock = false;
        cobbleStoneBlock = false;
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
        diamondOreBlock = false;
        waterBlock = false;
        iceBlock = false;
        cobbleStoneBlock = false;
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
        diamondOreBlock = false;
        waterBlock = false;
        iceBlock = false;
        cobbleStoneBlock = false;
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
        diamondOreBlock = false;
        waterBlock = false;
        iceBlock = false;
        cobbleStoneBlock = false;
    }
    function diamondOreChosen() {
        diamondOreBlock = true;
        obsidianBlock = false;
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
        waterBlock = false;
        iceBlock = false;
        cobbleStoneBlock = false;
    }
    function waterBlockChosen() {
        waterBlock = true;
        diamondOreBlock = false;
        obsidianBlock = false;
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
        iceBlock = false;
        cobbleStoneBlock = false;
    }
    function iceBlockChosen() {
        iceBlock = true;
        waterBlock = false;
        diamondOreBlock = false;
        obsidianBlock = false;
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
        cobbleStoneBlock = false;
    }
    function cobbleStoneBlockChosen() {
        cobbleStoneBlock = true;
        iceBlock = false;
        waterBlock = false;
        diamondOreBlock = false;
        obsidianBlock = false;
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
    if (e.key === 'F3') {
        e.preventDefault();

        if (isInventoryOpen) {
            closeInventoryGUI();
        } else {
            openInventoryGUI();
        }
    }
});

function openInventoryGUI() {
    isInventoryOpen = true;
    Inventory.hidden = false;
    let menu = `
    <div class="inventory-container">
        <div class="gui-inventory">
            <div class="top-elements">
                <button onclick="closeInventoryGUI()" class="close">X</button>
                <h1 class="inventory-title">Inventory</h1>
            </div>
            <hr>
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
                <div class="blockDisplay">
                    <div class="b"><img title="Diamond ore" id="diamond_ore" draggable="false" onclick="diamondOreChosen()" width="50" height="50" src="diamond_ore.png" alt="diamond_ore.png"></div>
                    <div class="block-info">
                        <div class="block-nm">Diamond Ore</div>
                        <div class="block-id">ID: 56</div>
                    </div>
                </div>
                <div class="blockDisplay">
                    <div class="b" id="water-block-moving-down"><img title="Water block" id="water_block" draggable="false" onclick="waterBlockChosen()" width="50" height="50" src="water.png" alt="water.png"></div>
                    <div class="block-info">
                        <div class="block-nm">Still Water</div>
                        <div class="block-id">ID: 9</div>
                    </div>
                </div>
                <div class="blockDisplay">
                    <div class="b"><img title="Ice block" id="ice_block" draggable="false" onclick="iceBlockChosen()" width="50" height="50" src="ice_block.png" alt="ice_block.png"></div>
                    <div class="block-info">
                        <div class="block-nm">Ice</div>
                        <div class="block-id">ID: 79</div>
                    </div>
                </div>
                <div class="blockDisplay">
                    <div class="b"><img title="Cobblestone Block" id="cobblestone_block" draggable="false" onclick="cobbleStoneBlockChosen()" width="50" height="50" src="cobblestone.png" alt="cobblestone.png"></div>
                    <div class="block-info">
                        <div class="block-nm">Cobblestone</div>
                        <div class="block-id">ID: 4</div>
                    </div>
                </div>
            </div>

            <div id="inv-skin-display">
                <div id="my-nick-display">${storedUsername}</div>
                <img id="my-skin-display" src=${isSteveChosen ? 'steve_standing.png' :
                    isAlexChosen ? 'alex_standing.png' :
                    isSkin1Chosen ? 'skin1_standing.png' : 'steve_standing.png'} alt="skin1_standing.png">
            </div>
        </div>
    </div>
    `;
    Inventory.innerHTML = menu;
    document.body.append(Inventory);
    log('Client: user has opened the inventory.');
}

function closeInventoryGUI() {
    isInventoryOpen = false;
    Inventory.hidden = true;
    log('Client: user has closed the inventory.');
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

        if ((!creativeBlocksReach && allowedDestroyingBlocks && 
            (isInOverworld && !isInNether)) && 
            (player.style.top == '570px') ||
            (player.style.top == '650px')) {
            stoneContainer4.innerHTML = randomRow;
        } else if (isInNether || !isInOverworld) {
            randomRowContainer.hidden = true;
        } else if (creativeBlocksReach) {
            stoneContainer4.innerHTML = randomRow;
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
            enteringPortalSound.play();
            isInNether = true;
            isInOverworld = false;
            isInTheEnd = false;

            log('Server: Succesfully joined the nether.');
        
            mc.style.background = "url('nether_sky.png')";
            mc.style.backgroundAttachment = "fixed";
            mc.style.backgroundRepeat = "no-repeat";
        
            creeper.hidden = true;
            player.style.top = '260px';
        
            setNetherrack();
        }
    }    
    
    function checkEndPortalCollision() {
        let playerRect = player.getBoundingClientRect();
        let portalRect = endPortalPosition.getBoundingClientRect();
        
        if (
            playerRect.top < portalRect.bottom &&
            playerRect.bottom > portalRect.top &&
            playerRect.left < portalRect.right &&
            playerRect.right > portalRect.left
        ) {
            enteringPortalSound.play();
            isInTheEnd = true;
            isInOverworld = false;
            isInNether = false;

            log('Server: Succesfully joined the end.');
        
            mc.style.background = "url('end_sky.png')";
            mc.style.backgroundAttachment = "fixed";
        
            creeper.hidden = true;
            player.style.top = '260px';
            
            setEndStone();
            renderEnderDragon();
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
                log(`Server: ${storedUsername} died.`);
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
            if (gamemode != 1) {
                let playerImg = isSteveChosen ? 'steve_standing.png' :
                            isAlexChosen ? 'alex_standing.png' :
                            isSkin1Chosen ? 'skin1_standing.png' : 'steve_standing.png';
    
            player.src = `damaged_${playerImg}`;
            setTimeout(() => {
                player.src = playerImg;
            }, 350);
            }
        }
    }
    setInterval(checkBlazeCollisionsPeriodically, blazeReactionTime);

function numberOfObsidians() {
    numOfObsidians++;
    hotbarObsidian.textContent = Number(numOfObsidians);

    if (numOfObsidians == 10) {
        do {
            shouldCreatePortal = prompt('Do you want to make a nether portal? (y/n):').toLowerCase();
        } while (shouldCreatePortal != 'y' && shouldCreatePortal != 'n');

        if (shouldCreatePortal == 'y') {
            let portalBlockPositions = allBlocks.filter(block => block !== s66 && block !== s45);
            let randomPortalPosition = Math.floor(Math.random() * portalBlockPositions.length);
            portalPosition = portalBlockPositions[randomPortalPosition];

            portalPosition.src = 'portal.png';

            setTimeout(() => {
                portalPosition.hidden = true;
            }, 10000);

            setInterval(checkPortalCollision, 100);
            numOfObsidians = 0;
            hotbarObsidian.textContent = numOfObsidians;
        } else if (shouldCreatePortal == 'n') {
            alert('Nether portal won\'t be created.');
        } else {
            alert('Extremely rare error! Something went wrong.');
        }
    }
}
numberOfObsidians();

    function checkMaterialsToTheEnd() {
        if (numOfEnderPearls >= 5 && numOfBlazeRods >= 5) {
            do {
                shouldCreatePortal = prompt('Do you want to make an end portal? (y/n):').toLowerCase();
            } while (shouldCreatePortal != 'y' && shouldCreatePortal != 'n');
    
            if (shouldCreatePortal == 'y') {
                endPortalPosition = s66;
    
                endPortalPosition.src = 'end_portal.png';

                setTimeout(() => {
                    endPortalPosition.hidden = true;
                }, 10000);
    
                setInterval(checkEndPortalCollision, 100);
                numOfBlazeRods = 0;
                numOfEnderPearls = 0;
            } else if (shouldCreatePortal == 'n') {
                alert('Nether portal won\'t be created.');
            } else {
                alert('Extremely rare error! Something went wrong.');
            }
        }
    }
    setInterval(checkMaterialsToTheEnd, timeout);

    function removeDiamondOre1() {
        let diamond_o = document.getElementById('diamond_o');
        diamond_o.hidden = true;
        log('Server: diamond ore removed.');
    }
    function removeIronOre1() {
        let iron_ore1 = document.getElementById('iron_ore1');
        iron_ore1.hidden = true;
        log('Server: iron ore removed.');
    }
    function removeIronOre2() {
        let iron_ore2 = document.getElementById('iron_ore2');
        iron_ore2.hidden = true;
        log('Server: iron ore removed.');
    }
    function removeGoldOre1() {
        let gold_ore1 = document.getElementById('gold_ore1');
        gold_ore1.hidden = true;
        log('Server: gold ore removed.');
    }
    function removeGoldOre2() {
        let gold_ore2 = document.getElementById('gold_ore2');
        gold_ore2.hidden = true;
        log('Server: gold ore removed.');
    }
    function removeGoldOre3() {
        let gold_ore3 = document.getElementById('gold_ore3');
        gold_ore3.hidden = true;
        log('Server: gold ore removed.');
    }
    function removeEmeraldOre1() {
        let emerald_ore1 = document.getElementById('emerald_ore1');
        emerald_ore1.hidden = true;
        log('Server: emerald ore removed.');
    }
    function removeCoalOre1() {
        let coal_ore1 = document.getElementById('coal_ore1');
        coal_ore1.hidden = true;
        log('Server: coal ore removed.');
    }
    function removeCoalOre2() {
        let coal_ore2 = document.getElementById('coal_ore2');
        coal_ore2.hidden = true;
        log('Server: coal ore removed.');
    }
    function removeCoalOre3() {
        let coal_ore3 = document.getElementById('coal_ore3');
        coal_ore3.hidden = true;
        log('Server: coal ore removed.');
    }
    function removeCoalOre4() {
        let coal_ore4 = document.getElementById('coal_ore4');
        coal_ore4.hidden = true;
        log('Server: coal ore removed.');
    }
    function removeCoalOre5() {
        let coal_ore5 = document.getElementById('coal_ore5');
        coal_ore5.hidden = true;
        log('Server: coal ore removed.');
    }
    function removeCoalOre6() {
        let coal_ore6 = document.getElementById('coal_ore6');
        coal_ore6.hidden = true;
        log('Server: coal ore removed.');
    }
    function removeCoalOre7() {
        let coal_ore7 = document.getElementById('coal_ore7');
        coal_ore7.hidden = true;
        log('Server: coal ore removed.');
    }
    function removeCoalOre8() {
        let coal_ore8 = document.getElementById('coal_ore8');
        coal_ore8.hidden = true;
        log('Server: coal ore removed.');
    }
    function removeCoalOre9() {
        let coal_ore9 = document.getElementById('coal_ore9');
        coal_ore9.hidden = true;
        log('Server: coal ore removed.');
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
                    if (gamemode != 1) {
                        player.src = 'damaged_steve_standing.png';
                        setTimeout(() => {
                        player.src = 'steve_standing.png';
                    }, 350);
                    }
                }
                else if (isAlexChosen) {
                    if (gamemode != 1) {
                        player.src = 'damaged_alex_standing.png';
                        setTimeout(() => {
                        player.src = 'alex_standing.png';
                    }, 350);
                    }
                }
                else if (isSkin1Chosen) {
                    if (gamemode != 1) {
                        player.src = 'damaged_skin1_standing.png';
                        setTimeout(() => {
                        player.src = 'skin1_standing.png';
                    }, 350);
                    }
                } 
                else {
                    if (gamemode != 1) {
                        player.src = 'damaged_steve_standing.png';
                        setTimeout(() => {
                        player.src = 'steve_standing.png';
                    }, 350);
                    }
                }

            }, 100);
        }
    }
    setInterval(checkCollisionsPeriodically, creeperReactionTime);

    function checkEndermanCollision() {
        if (checkCollision(player, enderman)) {

                playerHP -= 3;

                if (playerHP <= 0) {
                    player.hidden = true;
                    log(`Server: ${storedUsername} died.`);
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
                if (gamemode != 1) {
                    let playerImg = isSteveChosen ? 'steve_standing.png' :
                                isAlexChosen ? 'alex_standing.png' :
                                isSkin1Chosen ? 'skin1_standing.png' : 'steve_standing.png';
        
                player.src = `damaged_${playerImg}`;
                setTimeout(() => {
                    player.src = playerImg;
                }, 350);
                }
        }
    }
    setInterval(checkEndermanCollision, endermanReactionTime);

    function checkEnderDragonCollision() {
        if (checkCollision(player, enderDragon)) {

                playerHP -= 3;

                if (playerHP <= 0) {
                    player.hidden = true;
                    log(`Server: ${storedUsername} died.`);
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
                if (gamemode != 1) {
                    let playerImg = isSteveChosen ? 'steve_standing.png' :
                                isAlexChosen ? 'alex_standing.png' :
                                isSkin1Chosen ? 'skin1_standing.png' : 'steve_standing.png';
        
                player.src = `damaged_${playerImg}`;
                setTimeout(() => {
                    player.src = playerImg;
                }, 350);
                }
        }
    }
    setInterval(checkEnderDragonCollision, enderDragonReactionTime);

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
    
    function displayPlayerHP() {
        playerHPDisplay.innerHTML = playerHP;
    }
    setInterval(displayPlayerHP, 10);

    function checkPlayerHP() {
        if (playerHP < 10) {
            playerHP++;
        }
        if (playerHP == 10) {
            playerHP = 10;
        }
    }
    setInterval(checkPlayerHP, 10000);

} else {
    alert('Error! Game is not running.');
    window.close();
}