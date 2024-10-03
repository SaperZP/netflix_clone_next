import React from 'react'
import { getMovieDetails, getVideoKey } from '@/api/moviesApi'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import VideoSection from '@/components/movies/VideoSection';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export async function generateMetadata({params}:{params:{movieId:string}}){
  const movieDetails = await getMovieDetails(params.movieId)
  return {
    title: movieDetails.title,
    description: movieDetails.overview
  }
}

export default async function MovieDetailsPage({params}:{params:{movieId:string}}) {
  const movieDetails = await getMovieDetails(params.movieId)
  const videoKey = await getVideoKey(params.movieId)
  const {title, overview, genres, release_date} = movieDetails

  return (

    <div className='h-[55vh] relative md:container mx-auto text-white'>
      <div className="flex-col">
        <h1 className="text-center text-white text-4xl pt-20 pb-4">{title}</h1>
        <div className="flex gap-3 justify-center items-center mb-5">
          {genres.map((item:{name:string, id:string})=> (
            <div key={item.id} className='py-2 px-3 bg-slate-600 rounded-md'>
            {item.name}
            </div>
          ))}
        </div>
      </div>

      {videoKey&&<VideoSection videoKey={videoKey}/>}

        <div className="flex flex-col items-center mt-3 md:mt-4 gap-3 p-3">
          <Card className='w-full'>
            <CardHeader className='text-center font-bold text-2xl'>Overview</CardHeader>
            <CardContent>
              <h2 className='text-center font-semibold italic text-lg text-red-500'> Release Date: {release_date}</h2>

              <p className='text-center'>{overview}</p>
            </CardContent>
            <div className="text-center mb-5">
            <Link className={buttonVariants({variant:'destructive'})} href="/movies"> Back</Link>


            </div>
          </Card>

        </div>
    </div>

      )
}
