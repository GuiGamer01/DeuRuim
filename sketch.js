var Ball, database;
var position;

function setup() {

    console.log(database);
    createCanvas(500, 500);
database = firebase.database()
    Ball = createSprite(250, 250, 10, 10);
    Ball.shapeColor = "blue";

    var BallPosition = database.ref("Bola/Posicao");
    BallPosition.on("value", readPosition, showError);
}

function draw() {
    background("red");
    if (keyDown(LEFT_ARROW)) {
        writePosition(-1, 0);
    } else if (keyDown(RIGHT_ARROW)) {
        writePosition(1, 0);
    } else if (keyDown(UP_ARROW)) {
        writePosition(0, -1);
    } else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +1);
    }
    drawSprites();
}

function writePosition(x, y) {
    database.ref("Bola/Posicao").set({
        x: Posicao.x + x,
        y: Posicao.y + y
    });


}

function readPosition(data) {
    Posicao = data.val()
    Ball.x = Posicao.x;
    Ball.y = Posicao.y;
}

function showError() {
console.log("dados não recebidos do banco de dados")

}