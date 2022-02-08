class Form {
    constructor(){
        this.title = createElement('h1');
        this.button = createButton("PLAY");
    }

    display(){
        background(menuImg);

        // this.title.html("MiJuego");
        // this.title.position(displayWidth/2-50,0);

        this.button.position(displayWidth/2-100,displayHeight/2);
        this.button.class("customButton");
        this.button.mousePressed(()=>{
            this.title.hide();
            this.button.hide();

            gameState = "play";
        })
    }
}
