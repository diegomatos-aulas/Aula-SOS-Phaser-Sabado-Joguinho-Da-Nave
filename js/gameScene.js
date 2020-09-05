export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  init() {
    let { width, height } = this.sys.game.canvas; // {width , height}
    this.largura = width;
    this.altura = height;
  }

  create() {
    // Fundo
    this.fundo = this.add
      .tileSprite(0, 0, this.largura, this.altura, "Fundo")
      .setOrigin(0, 0);

    // Jogador
    this.jogador = this.physics.add.sprite(
      this.largura / 2,
      this.altura / 2,
      "Jogador"
    );
    this.jogador.stance = "Parado";
    this.jogador.velocidade = {
      x: 250,
      y: 250,
    };
    this.jogador.setCollideWorldBounds(true);

    // Cursor
    this.cursor = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.fundo.tilePositionY -= 1;
    this.movimentacaoDoJogador();
    this.animacaoDoJogador();
  }

  movimentacaoDoJogador() {
    this.jogador.setVelocity(0);
    if (this.cursor.up.isDown) {
      this.jogador.setVelocityY(-250);
    } else if (this.cursor.down.isDown) {
      this.jogador.setVelocityY(250);
    }

    if (this.cursor.left.isDown) {
      this.jogador.setVelocityX(-250);
      this.jogador.body.setSize();
      this.jogador.stance = "Esquerda";
    } else if (this.cursor.right.isDown) {
      this.jogador.setVelocityX(250);
      this.jogador.body.setSize(26, 43);
      this.jogador.stance = "Direita";
    } else {
      this.jogador.body.setSize();
      this.jogador.stance = "Parado";
    }
  }

  animacaoDoJogador() {
    this.jogador.anims.play(this.jogador.stance, true);
  }
}
