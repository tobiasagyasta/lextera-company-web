// components/HeroVideo.jsx
import LogoCarousel from "./LogoCarousel";

const HeroVideo = () => {
  return (
    <>
      <div
        className="relative w-full h-[70vh] md:h-[120vh] overflow-hidden"
        id="headervid"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://og1kqh0muyfm8xji.public.blob.vercel-storage.com/jakarta-skyline-small.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* This is the overlay to hold your content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-black/50">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            The Future of Innovation
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-center">
            Building tomorrow's solutions today.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroVideo;
