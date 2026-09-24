"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const poster = "/images/aft/assam-dawn.png";

export function HeroMedia() {
  const [useVideo, setUseVideo] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMedia = () => setUseVideo(desktop.matches && !reducedMotion.matches);
    updateMedia();
    desktop.addEventListener("change", updateMedia);
    reducedMotion.addEventListener("change", updateMedia);
    return () => { desktop.removeEventListener("change", updateMedia); reducedMotion.removeEventListener("change", updateMedia); };
  }, []);
  return <div className="hero-media" aria-hidden="true"><Image src={poster} alt="" fill priority sizes="100vw" className="th-hero-image hero-poster" />{useVideo && !videoFailed && <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={poster} onError={() => setVideoFailed(true)}><source src="/videos/assam-tea-hero.mp4" type="video/mp4"/></video>}</div>;
}
