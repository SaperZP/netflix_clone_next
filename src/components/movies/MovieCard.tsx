import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface MovieProps {
  poster_path: string;
  id: number;
  title: string;
  vote_average: number;
}

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const MovieCard: FC<MovieProps> = ({
  poster_path,
  id,
  title,
  vote_average,
}) => {
  return (
    <Link
      href={`/movies/${id}`}
      className="relative h-[240px] w-40 cursor-pointer"
    >
      <Image
        src={poster_path ? IMG_API + poster_path : defaultImage}
        width={160}
        height={240}
        alt="movie-card"
        className="border-2 border-transparent brightness-[80%] transition hover:border-white hover:brightness-100"
        title={title}
      />
      <span className="absolute right-1 top-1 z-10 font-semibold text-white drop-shadow-md">
        {vote_average.toFixed(1)}
      </span>
    </Link>
  );
};

export default MovieCard;
