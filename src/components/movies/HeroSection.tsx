import { getVideoKey } from "@/api/moviesApi";
import React from "react";
import VideoSection from "./VideoSection";
import { Button } from "../ui/button";

import { Play } from "lucide-react";
import Link from "next/link";
import { Movie } from "@/api/tmdbTypes";

export default async function HeroSection({ movie }: { movie: Movie }) {
  const videoKey = await getVideoKey(movie.id);

  return (
    <div className="relative h-[60vh] w-full md:h-screen">
      <VideoSection videoKey={videoKey} />

      <div className="absolute top-[60%] ml-4 md:ml-16">
        <h1 className="max-w-xl text-xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
          {movie?.title}
        </h1>
        <p className="w-[90%] text-[8px] text-white drop-shadow-lg md:mt-8 md:w-[80%] md:text-lg lg:w-[50%]">
          {movie?.overview}
        </p>

        <Button asChild className="mt-5">
          <Link
            href={`/movies/${movie?.id}`}
            className="flex items-center justify-center"
          >
            <Play className="mr-1 w-4 text-black md:w-7" />
            <span> Play</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
