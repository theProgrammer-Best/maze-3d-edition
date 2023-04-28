controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile`)) {
        if (levelList.length > 1) {
            tiles.setCurrentTilemap(levelList.removeAt(0))
            tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 2))
            Render.setAttribute(Render.attribute.fov, Render.getAttribute(Render.attribute.fov) + 1)
            info.changeScoreBy(1)
            color.setColor(5, color.__hsv(randint(0, 255), randint(150, 255), randint(200, 255)))
            color.setColor(6, color.__hsv(randint(0, 255), randint(150, 255), randint(200, 255)))
            color.setColor(7, color.__hsv(randint(0, 255), randint(150, 255), randint(200, 255)))
            color.setColor(11, color.__hsv(randint(0, 255), randint(150, 255), randint(200, 255)))
            color.setColor(12, color.__hsv(randint(0, 255), randint(150, 255), randint(200, 255)))
        } else {
            color.setPalette(
            color.originalPalette
            )
            game.gameOver(true)
        }
    }
    pause(5)
})
let levelList: tiles.TileMapData[] = []
let mySprite: Sprite = null
mySprite = Render.getRenderSpriteVariable()
Render.moveWithController(2, 3, 1)
levelList = [tilemap`level1`, tilemap`level0`, tilemap`level3`]
tiles.setCurrentTilemap(levelList[randint(0, levelList.length - 1)])
Render.setAttribute(Render.attribute.fov, 1)
music.setVolume(20)
