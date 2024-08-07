export type GamesParams = {
  country?: string;
  discipline?: string;
  gender?: string;
  venue?: string;
  date?: string;
  competitor?: string;
  page?: number;
};

export type GameData = {
  data: Game[];
  links: Links;
  meta: Meta;
};

export type CountryData = {
  data: Country[];
  links: Links;
  meta: Meta;
};

export interface Game {
  id: number;
  day: Date;
  discipline_name: string;
  discipline_pictogram: string;
  name: null;
  venue_name: string;
  event_name: string;
  detailed_event_name: string;
  start_date: Date;
  end_date: Date;
  status: string;
  is_medal_event: number;
  is_live: number;
  competitors: Competitor[];
}

export interface Competitor {
  country_id: string;
  country_flag_url: string;
  competitor_name: string;
  position: number;
  result_position: string;
  result_winnerLoserTie: string;
  result_mark: string;
}

export interface Links {
  first: string;
  last: string;
  prev: string;
  next: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Venues {
  id: string;
  name: string;
  url: string;
}

export type Sports = {
  id: string;
  name: string;
  pictogram_url: string;
};

export type Country = {
  id: string;
  name: string;
  continent: string;
  flag_url: string;
  gold_medals: number;
  silver_medals: number;
  bronze_medals: number;
  total_medals: number;
  rank: number;
  rank_total_medals: number;
};
