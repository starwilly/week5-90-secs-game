import * as Phaser from 'phaser';
import { GameScene } from './scenes/game.scene';

type GameConfig = Phaser.Types.Core.GameConfig;

export const config: GameConfig = {
    title: "90 Sec Game",
    width: 800,
    height: 600,
    backgroundColor: '#ccc',
    scene: [GameScene]
};

export class MyGame extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config)
    }
}
