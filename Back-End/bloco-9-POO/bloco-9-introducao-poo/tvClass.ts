class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }


  turnOn() {
    console.log(`TV ${this._brand} ligada, ${this._size} polegadas, na resolucao ${this._resolution}, com as conexoes disponiveis ${this._connections}`)
  }

  set SetconnectedTo(vl: string) {
    if(this._connections.includes(vl)) {
      this._connectedTo = vl;
      console.log(`Conectado no ${this._connectedTo}`)
    } else {
      console.log('Sorry, connection unavailable!')
    }
  }

  get connectedTo() {
    return this._connectedTo;
  }
}

const samsung = new Tv('Samsung', 55, '4K', ['hdmi', 'dvi']);

samsung.turnOn();
samsung.SetconnectedTo = 'hdmi';