class Questions {

    constructor(){

        this.access1 = createInput("")
        this.access1.position(900,370);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(960,400);
        this.button1.style('background', 'lightgrey');
    }

    hide() {
        this.access1.hide();
        this.button1.hide();
    }

    show() {
        this.access1.show();
        this.button1.show();
    }

    display(){
        QuestionsReact();

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                gameState = "play";
                questions.hide();
                player.x = 1110;
                npc1.destroy();
            } else {
                this.button1.style('background','red');
            }
        });
    }
}