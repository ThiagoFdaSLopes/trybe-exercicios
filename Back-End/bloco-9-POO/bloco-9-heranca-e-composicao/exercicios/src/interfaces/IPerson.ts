export default interface IPerson {
  // Getters
  get getBirthDate(): Date;
  get getName(): String;

  //Setters
  set setName(n: string);
  set setBirthDate(date: Date);
}