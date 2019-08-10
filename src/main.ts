import * as Phaser from 'phaser';

type GameConfig = Phaser.Types.Core.GameConfig;

const config: GameConfig = {
    title: "90 Sec Game",
    width: 800,
    height: 600,
    backgroundColor: '#ccc'
};

class MyGame extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config)
    }
}

window.onload = () => {
    const game = new MyGame(config);
};
