import * as Phaser from 'phaser';

import BgImage from './../assets/images/bg.svg';

export class GameScene extends Phaser.Scene {

    private bg: Phaser.GameObjects.TileSprite;

    preload(): void {
        this.load.image('bg', BgImage)
    }

    create(): void {
        console.log('create');
        this.bg = this.add.tileSprite(<number>this.game.config.width / 2,
            <number>this.game.config.height / 2, 1200, 900, 'bg');
    }

    update(): void {
        this.bg.tilePositionY -= 1;
    }
}
