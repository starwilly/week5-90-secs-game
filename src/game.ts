import * as Phaser from 'phaser';
import { GameScene } from './scenes/game.scene';

type GameConfig = Phaser.Types.Core.GameConfig;

export const config: GameConfig = {
    title: "90 Sec Game",
    width: 1200,
    height: 900,
    backgroundColor: '#ccc',
    scene: [GameScene],
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true
        }
    }
};

export class MyGame extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config)
    }
}
