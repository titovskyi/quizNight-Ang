export class NewTeam {
  public team_id: number;
  public game_id: number;

  constructor (team_id, game_id) {
    this.team_id = team_id;
    this.game_id = game_id;
  }
}
