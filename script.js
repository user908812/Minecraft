let running = true;

if (running) {
    let mc = document.getElementById('minecraft');
    let warn = console.warn.bind(document);

    let music = document.getElementById('music');

    document.addEventListener('DOMContentLoaded', function() {
        music.play();
    });

    mc.style.width = '1762px';
    mc.style.height = '908px';

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
            <div class="chooseSkin">
                <h2>Choose your skin:</h2>
                <div class="skinsGUI">
                    <div class="steve-div">
                        <label id="steveLabel" for="steveSkin">Steve: </label>
                        <img id="steveSkin" onclick="steveChosen()" src="steve_standing.png" alt="steve_standing.png">
                    </div>
                    <div class="alex-div">
                        <label id="alexLabel" for="alexSkin">Alex: </label>
                        <img id="alexSkin" onclick="alexChosen()" src="alex_standing.png" alt="alex_standing.png">
                    </div>
                    <div class="skin1-div">
                        <label id="skin1Label" for="skin1Skin">Skin1: </label>
                        <img id="skin1Skin" onclick="skin1Chosen()" src="skin1_standing.png" alt="skin1_standing.png">
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
            g1.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g2.addEventListener('click', () => {
            g2.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g3.addEventListener('click', () => {
            g3.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g4.addEventListener('click', () => {
            g4.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g5.addEventListener('click', () => {
            g5.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g6.addEventListener('click', () => {
            g6.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g7.addEventListener('click', () => {
            g7.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g8.addEventListener('click', () => {
            g8.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g9.addEventListener('click', () => {
            g9.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g10.addEventListener('click', () => {
            g10.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g11.addEventListener('click', () => {
            g11.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g12.addEventListener('click', () => {
            g12.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g13.addEventListener('click', () => {
            g13.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g14.addEventListener('click', () => {
            g14.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g15.addEventListener('click', () => {
            g15.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g16.addEventListener('click', () => {
            g16.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g17.addEventListener('click', () => {
            g17.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g18.addEventListener('click', () => {
            g18.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g19.addEventListener('click', () => {
            g19.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g20.addEventListener('click', () => {
            g20.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g21.addEventListener('click', () => {
            g21.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
        g22.addEventListener('click', () => {
            g22.hidden = true;
            player.style.top = '350px';
            grassBreaking.play();
        });
    }
    grassBlockBreak();

    let dirtBreaking = document.getElementById('dirtBreaking');

    function dirtBreak() {
        d1.addEventListener('click', () => {
            d1.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d2.addEventListener('click', () => {
            d2.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d3.addEventListener('click', () => {
            d3.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d4.addEventListener('click', () => {
            d4.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d5.addEventListener('click', () => {
            d5.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d6.addEventListener('click', () => {
            d6.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d7.addEventListener('click', () => {
            d7.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d8.addEventListener('click', () => {
            d8.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d9.addEventListener('click', () => {
            d9.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d10.addEventListener('click', () => {
            d10.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d11.addEventListener('click', () => {
            d11.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d12.addEventListener('click', () => {
            d12.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d13.addEventListener('click', () => {
            d13.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d14.addEventListener('click', () => {
            d14.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d15.addEventListener('click', () => {
            d15.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d16.addEventListener('click', () => {
            d16.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d17.addEventListener('click', () => {
            d17.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d18.addEventListener('click', () => {
            d18.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d19.addEventListener('click', () => {
            d19.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d20.addEventListener('click', () => {
            d20.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d21.addEventListener('click', () => {
            d21.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
        d22.addEventListener('click', () => {
            d22.hidden = true;
            player.style.top = '420px';
            dirtBreaking.play();
        });
    }
    dirtBreak();

    let stoneBreaking = document.getElementById('stoneBreaking');

    function stoneBlockBreak() {
        s1.addEventListener('click', () => {
            s1.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s2.addEventListener('click', () => {
            s2.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s3.addEventListener('click', () => {
            s3.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s4.addEventListener('click', () => {
            s4.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s5.addEventListener('click', () => {
            s5.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s6.addEventListener('click', () => {
            s6.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s7.addEventListener('click', () => {
            s7.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s8.addEventListener('click', () => {
            s8.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s9.addEventListener('click', () => {
            s9.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s10.addEventListener('click', () => {
            s10.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s11.addEventListener('click', () => {
            s11.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s12.addEventListener('click', () => {
            s12.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s13.addEventListener('click', () => {
            s13.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s14.addEventListener('click', () => {
            s14.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s15.addEventListener('click', () => {
            s15.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s16.addEventListener('click', () => {
            s16.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s17.addEventListener('click', () => {
            s17.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s18.addEventListener('click', () => {
            s18.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s19.addEventListener('click', () => {
            s19.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s20.addEventListener('click', () => {
            s20.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s21.addEventListener('click', () => {
            s21.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s22.addEventListener('click', () => {
            s22.hidden = true;
            player.style.top = '490px';
            stoneBreaking.play();
        });
        s23.addEventListener('click', () => {
            s23.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s24.addEventListener('click', () => {
            s24.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s25.addEventListener('click', () => {
            s25.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s26.addEventListener('click', () => {
            s26.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s27.addEventListener('click', () => {
            s27.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s28.addEventListener('click', () => {
            s28.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s29.addEventListener('click', () => {
            s29.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s30.addEventListener('click', () => {
            s30.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s31.addEventListener('click', () => {
            s31.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s32.addEventListener('click', () => {
            s32.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s33.addEventListener('click', () => {
            s33.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s34.addEventListener('click', () => {
            s34.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s35.addEventListener('click', () => {
            s35.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s36.addEventListener('click', () => {
            s36.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s37.addEventListener('click', () => {
            s37.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s38.addEventListener('click', () => {
            s38.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s39.addEventListener('click', () => {
            s39.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s40.addEventListener('click', () => {
            s40.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s41.addEventListener('click', () => {
            s41.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s42.addEventListener('click', () => {
            s42.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s43.addEventListener('click', () => {
            s43.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });
        s44.addEventListener('click', () => {
            s44.hidden = true;
            player.style.top = '570px';
            stoneBreaking.play();
        });

        s45.addEventListener('click', () => {
            s45.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s46.addEventListener('click', () => {
            s46.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s47.addEventListener('click', () => {
            s47.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s48.addEventListener('click', () => {
            s48.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s49.addEventListener('click', () => {
            s49.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s50.addEventListener('click', () => {
            s50.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s51.addEventListener('click', () => {
            s51.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s52.addEventListener('click', () => {
            s52.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s53.addEventListener('click', () => {
            s53.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s54.addEventListener('click', () => {
            s54.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s55.addEventListener('click', () => {
            s55.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s56.addEventListener('click', () => {
            s56.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s57.addEventListener('click', () => {
            s57.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s58.addEventListener('click', () => {
            s58.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s59.addEventListener('click', () => {
            s59.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s60.addEventListener('click', () => {
            s60.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s61.addEventListener('click', () => {
            s61.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s62.addEventListener('click', () => {
            s62.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s63.addEventListener('click', () => {
            s63.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s64.addEventListener('click', () => {
            s64.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s65.addEventListener('click', () => {
            s65.hidden = true;
            player.style.top = '650px';
            stoneBreaking.play();
        });
        s66.addEventListener('click', () => {
            s66.hidden = true;
            player.style.top = '650px';
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
                creeper.style.top = '-680px';
            } else if (hotbarHidden) {
                creeper.style.top = '-626px';
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
        isInNether = false;
        stoneBreaking.play();
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
        row1 = stoneBlocks;
        row7 = stoneBlocks;
        row8 = stoneBlocks;
        row9 = stoneBlocks;
        row10 = stoneBlocks;
        row11 = stoneBlocks;
        row12 = stoneBlocks;
        row14 = stoneBlocks;

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

        let stoneContainer4 = document.querySelector('.stone-container4');
        stoneContainer4.innerHTML = randomRow;
    }

    let numOfDiamonds = 0;
    let numOfGold = 0;
    let numofEmeralds = 0;
    let numOfCoal = 0;
    let numOfIron = 0;
    let numOfObsidians = 0;

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
    let hotbarObsidian = document.getElementById('hotbarObsidian');

    let isInNether = false;

    function checkPortalCollision() {
    let playerRect = player.getBoundingClientRect();
    let portalRect = portalPosition.getBoundingClientRect();

    if (
        playerRect.top < portalRect.bottom &&
        playerRect.bottom > portalRect.top &&
        playerRect.left < portalRect.right &&
        playerRect.right > portalRect.left
    ) {

        isInNether = true;

        mc.style.background = "url('nether_sky.png')";
        mc.style.backgroundAttachment = "fixed";
        mc.style.backgroundRepeat = "no-repeat";

        creeper.hidden = true;
        player.style.top = '260px';

            g1.src = 'netherrack.png';
            g2.src = 'netherrack.png';
            g3.src = 'netherrack.png';
            g4.src = 'netherrack.png';
            g5.src = 'netherrack.png';
            g6.src = 'netherrack.png';
            g7.src = 'netherrack.png';
            g8.src = 'netherrack.png';
            g9.src = 'netherrack.png';
            g10.src = 'netherrack.png';
            g11.src = 'netherrack.png';
            g12.src = 'netherrack.png';
            g13.src = 'netherrack.png';
            g14.src = 'netherrack.png';
            g15.src = 'netherrack.png';
            g16.src = 'netherrack.png';
            g17.src = 'netherrack.png';
            g18.src = 'netherrack.png';
            g19.src = 'netherrack.png';
            g20.src = 'netherrack.png';
            g21.src = 'netherrack.png';
            g22.src = 'netherrack.png';

            d1.src = 'netherrack.png';
            d2.src = 'netherrack.png';
            d3.src = 'netherrack.png';
            d4.src = 'netherrack.png';
            d5.src = 'netherrack.png';
            d6.src = 'netherrack.png';
            d7.src = 'netherrack.png';
            d8.src = 'netherrack.png';
            d9.src = 'netherrack.png';
            d10.src = 'netherrack.png';
            d11.src = 'netherrack.png';
            d12.src = 'netherrack.png';
            d13.src = 'netherrack.png';
            d14.src = 'netherrack.png';
            d15.src = 'netherrack.png';
            d16.src = 'netherrack.png';
            d17.src = 'netherrack.png';
            d18.src = 'netherrack.png';
            d19.src = 'netherrack.png';
            d20.src = 'netherrack.png';
            d21.src = 'netherrack.png';
            d22.src = 'netherrack.png';

            s1.src = 'netherrack.png';
            s2.src = 'netherrack.png';
            s3.src = 'netherrack.png';
            s4.src = 'netherrack.png';
            s5.src = 'netherrack.png';
            s6.src = 'netherrack.png';
            s7.src = 'netherrack.png';
            s8.src = 'netherrack.png';
            s9.src = 'netherrack.png';
            s10.src = 'netherrack.png';
            s11.src = 'netherrack.png';
            s12.src = 'netherrack.png';
            s13.src = 'netherrack.png';
            s14.src = 'netherrack.png';
            s15.src = 'netherrack.png';
            s16.src = 'netherrack.png';
            s17.src = 'netherrack.png';
            s18.src = 'netherrack.png';
            s19.src = 'netherrack.png';
            s20.src = 'netherrack.png';
            s21.src = 'netherrack.png';
            s22.src = 'netherrack.png';
            s23.src = 'netherrack.png';
            s24.src = 'netherrack.png';
            s25.src = 'netherrack.png';
            s26.src = 'netherrack.png';
            s27.src = 'netherrack.png';
            s28.src = 'netherrack.png';
            s29.src = 'netherrack.png';
            s30.src = 'netherrack.png';
            s31.src = 'netherrack.png';
            s32.src = 'netherrack.png';
            s33.src = 'netherrack.png';
            s34.src = 'netherrack.png';
            s35.src = 'netherrack.png';
            s36.src = 'netherrack.png';
            s37.src = 'netherrack.png';
            s38.src = 'netherrack.png';
            s39.src = 'netherrack.png';
            s40.src = 'netherrack.png';
            s41.src = 'netherrack.png';
            s42.src = 'netherrack.png';
            s43.src = 'netherrack.png';
            s44.src = 'netherrack.png';
            s45.src = 'netherrack.png';
            s46.src = 'netherrack.png';
            s47.src = 'netherrack.png';
            s48.src = 'netherrack.png';
            s49.src = 'netherrack.png';
            s50.src = 'netherrack.png';
            s51.src = 'netherrack.png';
            s52.src = 'netherrack.png';
            s53.src = 'netherrack.png';
            s54.src = 'netherrack.png';
            s55.src = 'netherrack.png';
            s56.src = 'netherrack.png';
            s57.src = 'netherrack.png';
            s58.src = 'netherrack.png';
            s59.src = 'netherrack.png';
            s60.src = 'netherrack.png';
            s61.src = 'netherrack.png';
            s62.src = 'netherrack.png';
            s63.src = 'netherrack.png';
            s64.src = 'netherrack.png';
            s65.src = 'netherrack.png';
            s66.src = 'netherrack.png';
            s67.src = 'netherrack.png';
            s68.src = 'netherrack.png';
            s69.src = 'netherrack.png';
            s70.src = 'netherrack.png';
            s71.src = 'netherrack.png';
            s72.src = 'netherrack.png';
            s73.src = 'netherrack.png';
            s74.src = 'netherrack.png';
            s75.src = 'netherrack.png';
            s76.src = 'netherrack.png';
            s77.src = 'netherrack.png';
            s78.src = 'netherrack.png';
            s79.src = 'netherrack.png';
            s80.src = 'netherrack.png';
            s81.src = 'netherrack.png';
            s82.src = 'netherrack.png';
            s83.src = 'netherrack.png';
            s84.src = 'netherrack.png';
            s85.src = 'netherrack.png';
            s86.src = 'netherrack.png';
            s87.src = 'netherrack.png';
            s88.src = 'netherrack.png';
        }
    }
    if (isInNether) {
        let netherrackBs = `
            <div class="stone-container4">
                <div id="netherrack67" onclick="netherrackBlocks()"><img id="s67" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack68" onclick="netherrackBlocks()"><img id="s68" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack69" onclick="netherrackBlocks()"><img id="s69" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack70" onclick="netherrackBlocks()"><img id="s70" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack71" onclick="netherrackBlocks()"><img id="s71" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack72" onclick="netherrackBlocks()"><img id="s72" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack73" onclick="netherrackBlocks()"><img id="s73" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack74" onclick="netherrackBlocks()"><img id="s74" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack75" onclick="netherrackBlocks()"><img id="s75" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack76" onclick="netherrackBlocks()"><img id="s76" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack77" onclick="netherrackBlocks()"><img id="s77" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack78" onclick="netherrackBlocks()"><img id="s78" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack79" onclick="netherrackBlocks()"><img id="s79" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack80" onclick="netherrackBlocks()"><img id="s80" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack81" onclick="netherrackBlocks()"><img id="s81" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack82" onclick="netherrackBlocks()"><img id="s82" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack83" onclick="netherrackBlocks()"><img id="s83" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack84" onclick="netherrackBlocks()"><img id="s84" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack85" onclick="netherrackBlocks()"><img id="s85" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack86" onclick="netherrackBlocks()"><img id="s86" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack87" onclick="netherrackBlocks()"><img id="s87" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
                <div id="netherrack88" onclick="netherrackBlocks()"><img id="s88" draggable="false" class="stone_block" src="netherrack.png" alt="netherrack.png"></div>
            </div>
            `;
        stoneContainer4.innerHTML = netherrackBs;
    }

function numberOfObsidians() {
    numOfObsidians++;
    hotbarObsidian.textContent = Number(numOfObsidians);

    if (numOfObsidians == 10) {
        let createPortal = prompt('Congratulations! You have 10 obsidians. Do you want to make a nether portal? (yes/no): ');
        do {
            createPortal = prompt('Congratulations! You have 10 obsidians. Do you want to make a nether portal? (yes/no): ');
        } while (createPortal != 'yes' && createPortal != 'no');

        if (createPortal == 'yes') {
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
        } else if (createPortal == 'no') {

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

    document.body.addEventListener('keydown', (e) => {
        if ((e.ctrlKey && e.key == 'a') ||
            (e.ctrlKey && e.key == 's') ||
            (e.ctrlKey && e.key == 'd')
            ) {
            e.preventDefault();
        }
    });   

} else {
    alert('Error! Game is not running.');
    let gameStart = prompt('Do you want to start new game? (y/n): ');

    if (gameStart == 'y') {
        alert('Error! Try to refresh the page.');
    } else if (gameStart == 'n') {
        window.close();
    } else {
        alert('Unknown command. Try again!');
        window.close();
    }
    document.body.display = 'none';
}