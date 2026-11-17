const SHEETS = {
  primary: "/creative-media/originals-atlas-hd.avif",
  variation: "/creative-media/creative-variations-a.avif",
  application: "/creative-media/creative-variations-b.avif",
};
export default function CreativeArtwork({index, variant="primary", alt="", className="", rounded=true}) {
  const x = (index % 3) * 50;
  const y = Math.floor(index / 3) * 50;
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative aspect-[760/525] w-full overflow-hidden border border-[#E9ECEF] bg-[#F7F7F5] bg-no-repeat ${rounded?"rounded-[10px]":""} ${className}`}
      style={{
        backgroundImage:`url("${SHEETS[variant]}")`,
        backgroundSize:"300% 300%",
        backgroundPosition:`${x}% ${y}%`,
      }}
    />
  );
}
