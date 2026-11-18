import Image from "next/image";

export default function CreativeArtwork({
  media,
  aspect = "landscape",
  priority = false,
  className = "",
  canOpen = false,
  elitePresentation = false,
  whiteBackground = false,
}) {
  if (!media) return null;
  const isSmallSource = media.index >= 13 && media.index <= 16;
  const frame = [
    "relative isolate flex w-full items-center justify-center overflow-hidden",
    elitePresentation
      ? "rounded-[12px] border border-[#E2E8F0] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#B8D5FC] hover:shadow-[0_8px_26px_rgba(0,114,252,.055)]"
      : whiteBackground
        ? "rounded-[10px] border border-[#E7EAEE] bg-white"
        : "rounded-[10px] border border-[#E7EAEE] bg-[#F7F8F9]",
    aspect === "square" ? "aspect-square" : aspect === "wide" ? "aspect-[16/10]" : "aspect-[4/3]",
    className,
  ].join(" ");

  const image = isSmallSource ? (
    <Image
      src={media.src}
      alt={media.alt}
      width={160}
      height={160}
      unoptimized
      className="h-auto max-h-[160px] w-auto max-w-[160px] object-contain"
    />
  ) : (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      unoptimized
      priority={priority}
      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 80vw, 900px"
      className={elitePresentation ? "object-contain p-4 md:p-7" : "object-contain p-2.5 md:p-4"}
    />
  );
  if (canOpen) {
    return (
      <a
        href={media.src}
        target="_blank"
        rel="noopener noreferrer"
        className={frame + " focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0072FC]"}
        aria-label={`Open full-size original: ${media.alt}`}
        title="Open full-size image"
      >
        {image}
      </a>
    );
  }
  return <div className={frame}>{image}</div>;
}
