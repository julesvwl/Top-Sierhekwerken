import Image from "next/image";

type ImageSlotProps = {
  /** Real image source (from /public). When omitted a styled placeholder is shown. */
  src?: string;
  alt?: string;
  /** Placeholder caption shown when no src is provided. */
  placeholder?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Drop-in for the prototype's <image-slot> web component. Renders an optimized
 * cover image when `src` is set, otherwise a labelled placeholder so the layout
 * stays intact until real photography is supplied.
 */
export default function ImageSlot({
  src,
  alt = "",
  placeholder,
  priority,
  sizes = "100vw",
}: ImageSlotProps) {
  return (
    <span className="img-slot">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <span className="img-slot__ph">{placeholder}</span>
      )}
    </span>
  );
}
