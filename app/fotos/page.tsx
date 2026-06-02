import PageHero from "@/components/PageHero";
import FotosGallery from "@/components/FotosGallery";

export default function FotosPage() {
  return (
    <>
      <PageHero
        eyebrow="Inspiratie"
        title={
          <>
            Foto <em>galerij</em>.
          </>
        }
        subtitle="Bekijk onze uitgevoerde projecten en laat u inspireren voor uw eigen situatie."
        slotId="pagehero-fotos"
        slotPlaceholder="Sfeerfoto galerij"
      />
      <FotosGallery />
    </>
  );
}
