class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }


  turnOn() {
    console.log(`TV ${this.brand} ligada, ${this.size} polegadas, na resolucao ${this.resolution}, com as conexoes disponiveis ${this.connections}`)
  }
}

const samsung = new Tv('Samsung', 55, '4K', ['hdmi, dvi']);

samsung.turnOn();