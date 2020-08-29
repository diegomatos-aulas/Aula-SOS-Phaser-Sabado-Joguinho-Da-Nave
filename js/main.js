import BootScene from "./bootScene.js"
import LoadScene from "./loadScene.js"

let config = {
    width : 320,
    height : 480,
    type : Phaser.AUTO, // Da uma preferencia ao OpenGL
    scale : {
        mode : Phaser.Scale.FIT,
        autoCenter : Phaser.Scale.CENTER_BOTH
    },
    physics : {
        default : "arcade"
    },
    scene : [BootScene, LoadScene]
}

new Phaser.Game(config)