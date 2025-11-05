export interface Movie {
  id: string;
  title: string;
  genres: string[];
  rating: number;
  year: number;
  description: string;
  poster: string;
}

export interface Preferences {
  genres: string[];
  minRating: number;
  maxResults: number;
}

// Mock movie database
const MOVIE_DATABASE: Movie[] = [
  {
    id: "1",
    title: "Inception",
    genres: ["Sci-Fi", "Thriller"],
    rating: 8.8,
    year: 2010,
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
  },
  {
    id: "2",
    title: "The Matrix",
    genres: ["Sci-Fi", "Action"],
    rating: 8.7,
    year: 1999,
    description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Interstellar",
    genres: ["Sci-Fi", "Drama"],
    rating: 8.6,
    year: 2014,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Blade Runner 2049",
    genres: ["Sci-Fi", "Thriller"],
    rating: 8.0,
    year: 2017,
    description: "A young blade runner's discovery leads him on a quest to find a former blade runner who's been missing for 30 years.",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
  },
  {
    id: "5",
    title: "Mad Max: Fury Road",
    genres: ["Action", "Sci-Fi"],
    rating: 8.1,
    year: 2015,
    description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Arrival",
    genres: ["Sci-Fi", "Drama"],
    rating: 7.9,
    year: 2016,
    description: "A linguist works with the military to communicate with alien lifeforms after mysterious spacecraft appear around the world.",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
  },
  {
    id: "7",
    title: "The Dark Knight",
    genres: ["Action", "Thriller"],
    rating: 9.0,
    year: 2008,
    description: "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
  },
  {
    id: "8",
    title: "Dune",
    genres: ["Sci-Fi", "Fantasy"],
    rating: 8.1,
    year: 2021,
    description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions.",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
  },
  {
    id: "9",
    title: "Tenet",
    genres: ["Sci-Fi", "Action"],
    rating: 7.4,
    year: 2020,
    description: "Armed with only one word, a protagonist journeys through a twilight world of international espionage.",
    poster: "https://images.unsplash.com/photo-1574267432644-f610a4fc70b7?w=400&h=600&fit=crop",
  },
  {
    id: "10",
    title: "Ex Machina",
    genres: ["Sci-Fi", "Thriller"],
    rating: 7.7,
    year: 2014,
    description: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence.",
    poster: "https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?w=400&h=600&fit=crop",
  },
  {
    id: "11",
    title: "Edge of Tomorrow",
    genres: ["Sci-Fi", "Action"],
    rating: 7.9,
    year: 2014,
    description: "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
    poster: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400&h=600&fit=crop",
  },
  {
    id: "12",
    title: "Gravity",
    genres: ["Sci-Fi", "Thriller"],
    rating: 7.7,
    year: 2013,
    description: "Two astronauts work together to survive after an accident leaves them stranded in space.",
    poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getRecommendations(
  movieTitle: string,
  preferences: Preferences
): Promise<Movie[]> {
  // Simulate network delay
  await delay(800);

  // Filter movies based on preferences
  let results = MOVIE_DATABASE.filter((movie) => {
    // Exclude the searched movie
    if (movie.title.toLowerCase() === movieTitle.toLowerCase()) {
      return false;
    }

    // Filter by minimum rating
    if (movie.rating < preferences.minRating) {
      return false;
    }

    // Filter by genres if specified
    if (preferences.genres.length > 0) {
      const hasMatchingGenre = movie.genres.some((genre) =>
        preferences.genres.includes(genre)
      );
      if (!hasMatchingGenre) {
        return false;
      }
    }

    return true;
  });

  // Sort by rating (descending)
  results.sort((a, b) => b.rating - a.rating);

  // Limit results
  results = results.slice(0, preferences.maxResults);

  return results;
}
