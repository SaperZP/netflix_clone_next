"use client";
import MovieCard from "./MovieCard";
import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function MovieList({ movies }: { movies: any }) {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div
      className="grid grid-flow-col gap-4 space-x-3 overflow-x-scroll"
      ref={ref}
      {...events}
    >
      {movies.map((movie: any) => (
        <MovieCard key={movie?.id} {...movie} />
      ))}
    </div>
  );
}
