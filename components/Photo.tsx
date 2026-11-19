import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  wide?: boolean;
};

export function Photo({
  src,
  alt,
  sizes = "(min-width: 1000px) 33vw, (min-width: 700px) 50vw, 100vw",
  priority = false,
  wide = false,
}: Props) {
  return (
    <div className={wide ? "media media-wide" : "media"}>
      <Image className="media-img" src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </div>
  );
}
