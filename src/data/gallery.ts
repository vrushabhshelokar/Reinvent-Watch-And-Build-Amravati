import { GalleryPhoto } from "@/types/event";

/**
 * Past Event Gallery Data
 * Uses demo images as temporary placeholders until actual event photographs are provided.
 * Easily replaceable by updating image sources below.
 */
export const pastEventGallery: GalleryPhoto[] = [
  {
    id: "keynote-session",
    src: "/images/gallery-1.jpg",
    alt: "Auditorium technology keynote and cloud computing session",
    caption: "Keynote & Cloud Architecture Sessions",
    category: "Technical Talk",
  },
  {
    id: "builder-hackathon",
    src: "/images/gallery-2.jpg",
    alt: "Undergraduate students collaborating with laptops during hackathon lab",
    caption: "Hands-on Builder & Hackathon Labs",
    category: "Collaborative Lab",
  },
  {
    id: "stage-presentation",
    src: "/images/gallery-3.jpg",
    alt: "Keynote presentation stage with digital cloud topology screens",
    caption: "Keynote Watch & Architecture Demos",
    category: "Presentation",
  },
  {
    id: "peer-discussion",
    src: "/images/gallery-4.jpg",
    alt: "Collegiate developer group discussion and open networking",
    caption: "Student Builder Networking Circles",
    category: "Community",
  },
];
