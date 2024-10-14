import React from "react";
import { getMovieDetails, getVideoKey } from "@/api/moviesApi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import VideoSection from "@/components/movies/VideoSection";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function MovieDetailsPage({
  params,
}: {
  params: { movieId: string };
}) {
  const movieDetails = await getMovieDetails(params.movieId);
  const videoKey = await getVideoKey(params.movieId);
  const { title, overview, genres, release_date } = movieDetails;

  return (
    <div className="relative mx-auto h-[55vh] text-white md:container">
      <div className="flex-col">
        <h1 className="pb-4 pt-20 text-center text-4xl text-white">{title}</h1>
        <div className="mb-5 flex items-center justify-center gap-3">
          {genres.map((item) => (
            <div key={item.id} className="rounded-md bg-slate-600 px-3 py-2">
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {videoKey && <VideoSection videoKey={videoKey} />}

      <div className="mt-3 flex flex-col items-center gap-3 p-3 md:mt-4">
        <Card className="w-full">
          <CardHeader className="text-center text-2xl font-bold">
            Overview
          </CardHeader>
          <CardContent>
            <h2 className="text-center text-lg font-semibold italic text-red-500">
              {" "}
              Release Date: {release_date}
            </h2>

            <p className="text-center">{overview}</p>
          </CardContent>
          <div className="mb-5 text-center">
            <Link
              className={buttonVariants({ variant: "destructive" })}
              href="/movies"
            >
              {" "}
              Back
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
