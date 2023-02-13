import Quadra from "./Quadra";
import normas from "./normas/normasDeUso";
import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";

export default class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol;
  reservar<IFutebol>(date: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      date,
      regras: this.futebolData as unknown as IFutebol,
    };
  }
}