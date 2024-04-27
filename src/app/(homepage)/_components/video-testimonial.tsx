"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoTestimonial = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div
      className="flex items-center justify-center md:mt-20 p-2 flex-col gap-8 w-full h-[500px] max-w-7xl "
      id="demo"
    >
     
    </div>
  );
};

export default VideoTestimonial;
