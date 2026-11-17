import Image from "next/image";

function dimensionsFrom(item) {
  const match = (item.dimensions || "").match(/(\d+)\s*[×x]\s*(\d+)/);
  return match ? [Number(match[1]), Number(match[2])] : [1600, 1000];
}

/** Displays the actual source image, never an enlarged thumbnail atlas. */
export default function CreativeArtwork({item, hero=false, caption=true, className=""}) {
  if (!item) return null;
  const [width,height] = dimensionsFrom(item);
  const smallSource = Math.min(width,height) <= 320;
  return (
    <figure className={`min-w-0 ${className}`}>
      <a
        href={item.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full-size image: ${item.alt}`}
        className="group block rounded-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0072FC]"
      >
        <div className={`flex items-center justify-center overflow-hidden rounded-[12px] border border-[#E8EDEF] bg-[#F7F8F9] px-4 py-7 sm:px-8 ${hero?"min-h-[230px] sm:min-h-[360px]":"min-h-[190px] sm:min-h-[240px]"}`}>
          <Image
            src={item.src}
            alt={item.alt}
            width={width}
            height={height}
            unoptimized
            loading={hero?"eager":"lazy"}
            className={`h-auto w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01] ${smallSource?"max-h-[130px] max-w-[130px] sm:max-h-[150px] sm:max-w-[150px]":hero?"max-h-[660px] max-w-full":"max-h-[460px] max-w-full"}`}
          />
        </div>
      </a>
      {caption&&(
        <figcaption className="mt-3 flex flex-wrap items-start justify-between gap-2">
          <span className="max-w-[78%] text-xs font-medium leading-relaxed text-[#35424C]">{item.alt}</span>
          <span className="text-[10px] uppercase tracking-[.06em] text-[#8E9AA4]">{item.type}</span>
        </figcaption>
      )}
    </figure>
  );
}
