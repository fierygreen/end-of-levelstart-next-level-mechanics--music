function music1 () {
    music.stopAllSounds()
    music.playMelody("G G E - A E F F ", 180)
    music.playMelody("D G G D E E C F ", 180)
    music.playMelody("A F D - C - C - ", 180)
}
function music2 () {
    music.stopAllSounds()
    music.playMelody("E B C5 A B G A F ", 180)
    music.playMelody("E - E E - F - D ", 180)
}
let mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 4 4 4 4 4 4 4 2 2 2 2 2 2 2 f 
    f 4 4 4 4 2 2 2 2 2 2 2 2 2 2 f 
    f 4 4 4 4 2 2 2 2 2 2 2 2 2 2 f 
    f 4 4 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 4 4 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 4 4 2 1 f 2 2 2 2 2 1 f 2 2 f 
    f 4 2 2 2 2 2 f 2 f 2 2 2 2 2 f 
    f 4 2 2 2 2 2 f f f 2 2 2 2 2 f 
    f 4 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 4 2 2 2 2 2 2 2 2 2 2 2 2 5 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 5 5 f 
    f 2 2 2 2 2 2 2 2 2 2 2 5 5 5 f 
    f 2 2 2 2 2 2 2 2 2 2 2 5 5 5 f 
    f 2 2 2 2 2 2 2 2 5 5 5 5 5 5 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
while (0 == 0) {
	
}
