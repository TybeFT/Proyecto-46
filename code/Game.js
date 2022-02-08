class Game {
    constructor() {

    }

    display() {
        background("purple");

        // Pantalla para cuestionario
        // backScreen = createSprite(displayWidth / 2, displayHeight / 2 - 50, 1920, 1080);
        // backScreen.shapeColor = "blue";
        // backScreen.visible = true;
        
        // Funcion para asignar si se ven los muros o no con el argumento "state"
        function Walls(state) {
            if (state == "on") {
                // Muros laberinto createWalls(sprite,x,y,width,height);
                createWalls(wall1, 170, 100, 20, 200);

                createWalls(wall2, 170, 600, 20, 600);

                createWalls(wall3, 120, 500, 100, 20);

                createWalls(wall4, 70, 410, 20, 200);

                createWalls(wall5, 60, 620, 120, 120);

                createWalls(wall6, 115, 750, 125, 20);

                createWalls(wall7, 435, 900, 550, 20);

                createWalls(wall8, 1000, 900, 260, 20);

                createWalls(wall9, 700, 990, 20, 180);

                createWalls(wall10, 860, 900, 20, 360);

                createWalls(wall11, 1350, 900, 260, 20);

                createWalls(wall12, 1120, 815, 20, 190);

                createWalls(wall13, 1210, 815, 20, 190);

                createWalls(wall14, 1030, 730, 200, 20);

                createWalls(wall15, 1300, 730, 200, 20);

                createWalls(wall16, 1480, 775, 20, 270);

                createWalls(wall17, 1015, 640, 950, 20);

                createWalls(wall18, 780, 750, 20, 200);

                createWalls(wall19, 550, 600, 20, 80);

                createWalls(wall20, 680, 555, 20, 150);

                createWalls(wall21, 500, 490, 350, 20);

                createWalls(wall22, 405, 610, 160, 100);

                createWalls(wall23, 510, 730, 370, 20);

                createWalls(wall24, 510, 810, 370, 20);

                createWalls(wall25, 505, 310, 370, 20);

                createWalls(wall26, 400, 190, 480, 20);

                createWalls(wall27, 400, 250, 20, 140);

                createWalls(wall28, 500, 355, 20, 110);

                createWalls(wall29, 680, 435, 20, 260);

                createWalls(wall30, 1600, 630, 20, 900);

                createWalls(wall31, 1500, 490, 200, 20);

                createWalls(wall32, 1450, 390, 300, 20);

                createWalls(wall33, 1300, 400, 20, 200);

                createWalls(wall34, 1050, 490, 500, 20);

                createWalls(wall35, 800, 400, 20, 200);

                createWalls(wall36, 1500, 80, 20, 300);

                createWalls(wall37, 1430, 220, 150, 20);

            } else if (state !== "on") {
                state = "off";
            }
        }

        // Camara
        camera.position.x = player.position.x;
        camera.position.y = player.position.y;

        "Colision de paredes (opcion1)"
        // player.collide(wallsGroup);

        "Sistema de vidas:"

        // estado de juego del player para establecer si esta vivo o muerto
        var playerState = "playing"

        if (player.isTouching(wallsGroup)) {
            player.collide(wallsGroup);
            lifes = lifes - 1;
        }

        if (lifes <= 0) {
            playerState = "die";
            lifes = 10;
        }

        if (playerState == "die") {
            player.x = 50;
            player.y = 50;
        }

        if (lifes == 10) {
            playerState = "playing";
        }


        // Muros en ON (prendidos)
        Walls("on");

        // // Controles personaje
        if (keyDown("LEFT")) {
            player.x = player.x - 30;
        } else if (keyDown("RIGHT")) {
            player.x = player.x + 30;
        } else if (keyDown("UP")) {
            player.y = player.y - 30;
        } else if (keyDown("DOWN")) {
            player.y = player.y + 30;
        }

        // Controles secundarios (opcional)
        if (keyDown("A")) {
            player.x = player.x - 3;
        } else if (keyDown("D")) {
            player.x = player.x + 3;
        } else if (keyDown("W")) {
            player.y = player.y - 3;
        } else if (keyDown("S")) {
            player.y = player.y + 3;
        }


        if (player.isTouching(npc1)) {
            gameState = "question1";
        }

        fill("white");
        textSize(40);
        text("Vida // " + lifes + " \\\\", displayWidth / 2 -50, 35);

    }
}