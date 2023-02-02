class Car {

  brand: string;
  color: string;
  doors: string;
  engine: boolean;

  constructor(brand: string, color: string, doors: string) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
    this.engine = false;
  };


  honk(): string {
    return 'FON'
  };

  turnOn(): void {
    console.log('Motor ligado com sucesso');
  };

  turnOf(): void {
    console.log('Motor desligado com sucesso');
  };

  speedUp(): void {
    console.log('Veiculo acelerado');
  };

  speedDown(): void {
    console.log('Veiculo desacelerado');
  };

  stop(): void {
    console.log('Veiculo parado com sucesso');
  };

  turn(direcao: string): void {
    console.log(`Veiculo foi para ${direcao}`);
  };

}