controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
    music.playMelody("E B C5 A B G A F ", 180)
    music.playMelody("E - E E - F - D ", 180)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
    music.playMelody("G G E - A E F F ", 180)
    music.playMelody("D G G D E E C F ", 180)
    music.playMelody("A F D - C - C - ", 180)
})
