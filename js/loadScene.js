export default class LoadScene extends Phaser.Scene {
  constructor() {
    super("LoadScene");
  }

  init() {
    let { width, height } = this.sys.game.canvas;

    this.largura = width;
    this.altura = height;
  }

  preload() {
    let barraDeCarregamento = this.add.image(
      this.largura / 2,
      this.altura / 2,
      "barraDeCarregamento"
    );

    let txtPorcentagem = this.add.text(barraDeCarregamento.x , barraDeCarregamento.y, "0%").setOrigin(0.5);
    let txtArquivo = this.add.text(barraDeCarregamento.x - barraDeCarregamento.displayWidth/2 , barraDeCarregamento.y + 28, "0%").setOrigin(0, 0.5);

    this.load.on("progress", (value) => {
      let fixedValue = 0;
      if(Number.isInteger(value)){
        fixedValue = value*100;
      }else{
        fixedValue = (value*100).toFixed(2);
      }
      txtPorcentagem.setText(`${fixedValue}%`)
    });

    this.load.on("fileprogress", ({key}) => {
      txtArquivo.setText(`Carregando: ${key}`)
    });

    this.load.on("complete", () => {
      console.log("Carregamento Finalizado !");
      txtArquivo.setText(` Jogo Carregado ! \n Pressione Enter`)
    });

    // CARREGAMENTO DAS IMAGENS
    this.load.image("Fundo", "./imagens/background.png");
    this.load.image("Tiro", "./imagens/tiro.png");

    // CARREGAMENTO DOS SPRITE SHEETS
    this.load.spritesheet("Inimigo", "./imagens/inimigo.png", {
      frameWidth: 92,
      frameHeight: 100,
    });

    this.load.spritesheet("Jogador", "./imagens/player.png", {
      frameWidth: 39,
      frameHeight: 43,
    });

    this.load.spritesheet("Explosion", "./imagens/explosion.png", {
      frameWidth: 16,
      frameHeight: 16,
    });

    // CARREGAMENTO DOS AUDIOS
    this.load.audio("motorSFX", "./audio/engine_sound.mp3");
    this.load.audio("explosaoSFX", "./audio/explosion_sound.mp3");
    this.load.audio("tiroSFX", "./audio/shoot_sound.mp3");
    this.load.audio("startUpSFX", "./audio/start-up_sound.mp3");
  }
}
