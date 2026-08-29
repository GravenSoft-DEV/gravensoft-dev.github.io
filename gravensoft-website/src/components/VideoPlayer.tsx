interface VideoSchema {
    url: string
    containerClassOverride?: string;
    videoClassOverride?: string;
}

export default function VideoPlayer({ url, containerClassOverride, videoClassOverride }: VideoSchema) {
  return (
    <div className={`overflow-hidden bg-black ${containerClassOverride ? containerClassOverride : "shadow-2xl max-w-3xl mx-auto my-8 rounded-xl"}`}>
      <video 
        className={`w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full max-w-none pointer-events-none object-cover aspect-video ${videoClassOverride}`}
        muted
        autoPlay
        playsInline
        key={url}
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}