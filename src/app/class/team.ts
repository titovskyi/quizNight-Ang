export class Team {
  public id: number;
  public name: string;
  public captain: string;
  public email: string;
  public phone: string;
  public league_id: number;
  public league_name: number;

  constructor (id, name, captain, email, phone, league_id, league_name) {
    this.id = id;
    this.name = name;
    this.captain = captain;
    this.email = email;
    this.phone = phone;
    this.league_id = league_id;
    this.league_name = league_name;
  }
}
