export interface IVotes {
  positive: number;
  negative: number;
}

export interface IPoll {
  id: string;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: IVotes
}