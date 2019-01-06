export interface Game {
  id: string,
  date: Date;
  time: Date;
  homeTeamId: string;
  awayTeamId: string;
  location: string;
  divisionId?: string;
  refereeId?: string;
}   
