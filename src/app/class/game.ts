export class Game {
  public id: number;
  public league_id: number;
  public league_name: number;
  public game: number;
  public season_id: number;
  public data: string;
  public location: string;
  public adress: string;
  public project: string;
  public league_city: string;
  constructor (id, league_id, league_name, league_city, game, season_id, data, location, adress, project) {
    this.id = id;
    this.league_id = league_id;
    this.league_name = league_name;
    this.league_city = league_city;
    this.game = game;
    this.season_id = season_id;
    this.data = data;
    this.location = location;
    this.adress = adress;
    this.project = project;
  }
}
