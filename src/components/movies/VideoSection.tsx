export default function VideoSection({ videoKey }: { videoKey: string }) {
  return (
    <iframe
      className="relative h-full w-full"
      src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0`}
      title="Youtube Video Player"
    />
  );
}
