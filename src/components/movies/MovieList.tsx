"use client";
import MovieCard from "./MovieCard";
import React, { FC, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Movie } from "@/api/tmdbTypes";

type MovieListProps = {
  movies: Movie[];
}

const MovieList: FC<MovieListProps> = ({ movies }) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div
      className="grid grid-flow-col gap-4 space-x-3 overflow-x-scroll"
      ref={ref}
      {...events}
    >
      {movies.map((movie) => (
        <MovieCard key={movie?.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
