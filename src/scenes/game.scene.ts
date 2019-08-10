import * as Phaser from 'phaser';
import { config } from '../game';

import BgPng from '../assets/images/bg.png';
import DuckSprite from '../assets/images/duck-sprite.svg';
import FrameTop from '../assets/images/frame-top.svg';
import FrameBottom from '../assets/images/frame-bottom.svg';

export class GameScene extends Phaser.Scene {

    private bg: Phaser.GameObjects.TileSprite;
    private duck: Phaser.GameObjects.Sprite;
    private map = {
        width: 1200,
        height: 600000
    };

    preload(): void {
        this.load.image('bg', BgPng);
        this.load.spritesheet('duck', DuckSprite, {frameWidth: 130, frameHeight: 230});
        this.load.image('frameTop', FrameTop);
        this.load.image('frameBottom', FrameBottom);
    }

    setUpFrame(): void {
        this.bg = this.add.tileSprite(0, 0, 0, 0, 'bg').setOrigin(0, 0).setScrollFactor(0, 0);
        const frameHeight = 121;
        const graphics = this.add.graphics({fillStyle: {color: 0xcccccc}});
        // draw a react to overlay tile
        const rect = new Phaser.Geom.Rectangle(0, this.map.height - frameHeight, <number>config.width, frameHeight);
        graphics.fillRectShape(rect);
        this.add.image(0, this.map.height - frameHeight, 'frameBottom').setOrigin(0, 0).setScrollFactor(0, 1);
    }

    create(): void {
        // Bound
        this.cameras.main.setBounds(0, 0, this.map.width, this.map.height);
        this.physics.world.setBounds(0, 0, this.map.width, this.map.height);

        const stageWidth: number = this.game.config.width as number;
        const stageHeight: number = this.game.config.height as number;
        this.setUpFrame();

        this.duck = this.physics.add.sprite(stageWidth / 2, this.map.height - 200, 'duck');
        this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNumbers('duck', {start: 0, end: 3}),
            frameRate: 5,
            repeat: -1
        });
        this.duck.anims.play('move');
        this.cameras.main.startFollow(this.duck, true, 1, 1, 0, 320);
    }

    update(): void {
        const speed = 2;
        this.bg.tilePositionY -= speed;
        this.duck.y -= speed;
        console.log(this.duck.y);
    }
}
