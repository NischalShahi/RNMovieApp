import {ApiResponse, MovieSDK, MovieSearchOptions} from './types';

const IMDBOT_URL = 'https://search.imdbot.workers.dev';

const getRandomAlphabet = (): string => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const randomIndex = Math.floor(Math.random() * alphabets.length);
  return alphabets.charAt(randomIndex);
};

const movieSDK: MovieSDK = {
  async getRandomMovies(): Promise<ApiResponse> {
    try {
      const response = await fetch(`${IMDBOT_URL}?q=${getRandomAlphabet()}`);
      if (!response.ok) {
        throw new Error('Failed to fetch random movies');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching random movies:', error);
      throw error;
    }
  },

  async searchMovies(options: MovieSearchOptions): Promise<ApiResponse> {
    try {
      const response = await fetch(`${IMDBOT_URL}?q=${options.query}`);
      if (!response.ok) {
        throw new Error('Failed to search movies');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching movies:', error);
      throw error;
    }
  },
  async getMovieDetails(imdbId: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${IMDBOT_URL}?tt=${imdbId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  },
};

export default movieSDK;
