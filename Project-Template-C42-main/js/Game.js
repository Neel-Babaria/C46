class Game {
    constructor() {
        this.wave = 0
        this.positionY = 100
        this.positionX = 100
        this.life = 100
        this.score = 0
        this.place = []
        this.numberOfAliens = 0
        this.aliens = new Group()
    }

    start() {
        ship = createSprite(this.positionX,this.positionY,100,100)
        ship.addImage('ship1', player1Image)
        ship.scale = 0.5

        this.wave = 1
    }

    play() {
        this.playerControls()
        if (this.life > 0) {
            if (this.numberOfAliens === 0) {
                this.spawnAliens()
            }
        }
        drawSprites()
    }

    playerControls() {
        if (keyIsDown(LEFT_ARROW)) {
            this.positionX -= 7.5
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.positionX += 7.5
        }

        if (keyIsDown(UP_ARROW)) {
            this.positionY -= 7.5
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.positionY += 7.5
        }
    }

    spawnAliens() {
        this.place = [0,0]
        for (var i = 0;i < this.wave*2;i++) {
            this.place = [this.place[0]+50,this.place[1]+50]
            this.numberOfAliens += 1
            var enemy = createSprite(width,height,this.place[0],this.place[1])
            this.aliens.add(enemy)
            enemy.scale = 0.25
        }
    }
}