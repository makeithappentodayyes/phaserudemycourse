class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //this is were we load images our sounds
        this.load.image("road","images/road.jpg");
        this.load.spritesheet("cars","images/cars.png",{frameWidth:60,frameHeight:126})
    }
    create() {
        //define our objects
        var road=new Road({scene:this});
    }
    update() 
    {
        
    }

 }





///comment