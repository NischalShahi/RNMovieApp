export interface Movie {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#RANK': number;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER': string;
  photo_width: number;
  photo_height: number;
}

export interface ApiResponse {
  ok: boolean;
  description: Movie[];
  error_code: number;
}

export interface MovieSearchOptions {
  query: string;
}

export interface MovieSDK {
  getRandomMovies: () => Promise<ApiResponse>;
  searchMovies: (options: MovieSearchOptions) => Promise<ApiResponse>;
  getMovieDetails: (imdbId: string) => Promise<ApiResponse>;
}
