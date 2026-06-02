import ImageSlot from "./ImageSlot";

/** Absolutely-positioned cover slot used inside .product-card tiles. */
export default function ProductImgSlot({ placeholder }: { placeholder: string }) {
  return (
    <div className="img-slot-wrap">
      <ImageSlot placeholder={placeholder} />
    </div>
  );
}
