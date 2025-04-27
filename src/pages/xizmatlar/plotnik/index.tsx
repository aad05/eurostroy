import { AspectRatio } from "@/components/ui/aspect-ratio";


const images = [
  // Example images (replace with your own or make dynamic)
  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
  "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg",
  "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
  "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
  "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg",
  "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
  "https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg",
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
  "https://images.pexels.com/photos/349758/pexels-photo-349758.jpeg",
];

export default function Plotnik() {
  return (
    <div className="w-[80%] mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Plotnik Xizmatlari</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <AspectRatio ratio={4 / 5} key={i} className="overflow-hidden rounded-lg shadow">
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </AspectRatio>
        ))}
      </div>
    </div>
  );
}