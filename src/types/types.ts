export interface PersonajesResponse {
  info: Info;
  results: Personaje[];
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Personaje {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}
