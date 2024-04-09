export interface MovieDetails {
  short: {
    name: string;
    url: string;
    description: string;
    genre: string[];
    datePublished: string;
    actor: {
      url: string;
      name: string;
    }[];
    director: {
      url: string;
      name: string;
    }[];
    creator: {
      url?: string;
      name?: string;
    }[];
    duration: string;
  };
  imdbId: string;
  top: {
    id: string;
    canHaveEpisodes: boolean;
    series: null;
    titleText: {
      text: string;
    };
    certificate: null;
    releaseYear: {
      year: number;
      endYear: null;
    };
    releaseDate: {
      day: number;
      month: number;
      year: number;
    };
    ratingsSummary: {
      aggregateRating: null;
      voteCount: number;
    };
    meterRanking: null;
    primaryImage: null;
    images: {
      total: number;
      edges: any[];
    };
    videos: {
      total: number;
      __typename: string;
    };
    primaryVideos: {
      edges: any[];
    };
    externalLinks: {
      total: number;
    };
    metacritic: null;
    keywords: {
      total: number;
      edges: any[];
    };
    genres: {
      genres: {
        text: string;
        id: string;
      }[];
    };
    credits: {
      total: number;
    };
    principalCredits: {
      totalCredits: number;
      category: {
        text: string;
        id: string;
      };
      credits: {
        name: {
          nameText: {
            text: string;
          };
          id: string;
        };
        attributes: null;
      }[];
    }[];
    reviews: {
      total: number;
    };
    criticReviewsTotal: {
      total: number;
    };
    triviaTotal: {
      total: number;
    };
    engagementStatistics: null;
    titleGenres: {
      genres: {
        genre: {
          text: string;
          id: string;
        };
      }[];
    };
    meta: {
      canonicalId: string;
      publicationStatus: string;
    };
    castPageTitle: {
      edges: {
        node: {
          name: {
            id: string;
            nameText: {
              text: string;
            };
          };
        };
      }[];
    };
    directorsPageTitle: {
      credits: {
        name: {
          id: string;
          nameText: {
            text: string;
          };
        };
      }[];
    }[];
    featuredReviews: {
      edges: any[];
    };
  };
  main: {
    cast: {
      edges: {
        node: {
          name: {
            id: string;
            nameText: {
              text: string;
            };
            primaryImage: {
              url: string;
              width: number;
              height: number;
            };
          };
        };
      }[];
    };
  };
}

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
  getMovieDetails: (imdbId: string) => Promise<MovieDetails>;
}
