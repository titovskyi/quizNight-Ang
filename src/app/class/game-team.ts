export class GameTeam {
  public id: number;
  public approved: boolean;
  public name: string;
  public game_id: number;

  constructor (id, approved, name, game_id) {
    this.id = id;
    this.approved = approved;
    this.name = name;
    this.game_id = game_id;
  }
}
