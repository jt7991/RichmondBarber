import { getImage } from "astro:assets";
import sweptBack from "../assets/richmond-barbershop-swept-back-taper.jpg";
import beard from "../assets/richmond-barbershop-haircut-shaped-beard.jpg";
import curls from "../assets/richmond-barbershop-curly-taper-haircut.jpg";
import fringe from "../assets/richmond-barbershop-textured-fringe-taper.jpg";
import sidePart from "../assets/richmond-barbershop-classic-side-part.jpg";
import layered from "../assets/richmond-barbershop-long-layered-haircut.jpg";
import { WEBSITE_URL } from "./business";

// Gallery display order; shared by the page, structured data, and image sitemap.
const photos = [
  { src: sidePart, slug: "classic-side-part", caption: "Classic side part", alt: "Dark side-parted hair with a smooth swept-back finish and a short beard, shown in profile" },
  { src: layered, slug: "long-layered-cut", caption: "Long layered cut", alt: "Long copper-colored hair swept back in layers with a subtle taper above the ear" },
  { src: curls, slug: "curly-taper", caption: "Curly taper", alt: "Curly hair with a textured fringe and a clean taper around the temple and ear" },
  { src: fringe, slug: "textured-fringe", caption: "Textured fringe", alt: "Tousled brown fringe with short tapered sides in front of the Richmond Barbershop mural" },
  { src: sweptBack, slug: "swept-back-taper", caption: "Swept-back taper", alt: "Swept-back brown hair with volume on top and a closely tapered temple, viewed from the side" },
  { src: beard, slug: "haircut-shaped-beard", caption: "Classic cut & shaped beard", alt: "Side-parted auburn haircut paired with a neatly shaped full beard" },
];

export const galleryPhotos = await Promise.all(photos.map(async (photo) => {
  const full = await getImage({ src: photo.src, width: 1200, format: "webp", quality: 85 });
  return { ...photo, full, url: new URL(full.src, WEBSITE_URL).href };
}));

export const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${WEBSITE_URL}/#gallery`,
  url: `${WEBSITE_URL}/#gallery`,
  name: "Haircut and beard gallery at Richmond Barbershop",
  description: "Haircuts, tapers, textured styles, and beard work at Richmond Barbershop in Carytown, Richmond, VA.",
  hasPart: galleryPhotos.map((photo) => ({
    "@type": "ImageObject",
    name: photo.caption,
    caption: photo.caption,
    description: photo.alt,
    contentUrl: photo.url,
    encodingFormat: "image/webp",
    width: photo.full.attributes.width,
    height: photo.full.attributes.height,
  })),
};
