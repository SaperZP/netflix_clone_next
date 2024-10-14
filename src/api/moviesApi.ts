import { Movie, MovieDetails } from "@/api/tmdbTypes";

const API_KEY = process.env.API_KEY;

export type MovieType = "now_playing" | "popular" | "top_rated" | "upcoming";

export const getMovies = async (type: MovieType): Promise<Movie[]> => {
  try {
    console.log("Fetching movies...");
    console.log("API_KEY", !!API_KEY);
    const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch movies: ${res.status}`);
    }
    const { results } = await res.json();
    return results as Movie[];
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Unable to fetch movies");
  }
};

export const getVideoKey = async (movieId: number | string): Promise<string> => {
  const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
  const res = await fetch(videoUrl);
  if (!res.ok) throw new Error("Failed to fetch data");
  const { results } = await res.json();
  return results[0]?.key;
};

export const getMovieDetails = async (movieId: string) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  console.log(data, "data");
  return data as MovieDetails;
};
