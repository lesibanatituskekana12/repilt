import { useState } from "react";
import { X } from "lucide-react";

import cake1 from "@assets/generated_images/cake1.png";
import croissant from "@assets/generated_images/croissant.png";
import bread from "@assets/generated_images/bread.png";
import cupcake from "@assets/generated_images/cupcake.png";

const images = [
  { id: 1, imageUrl: cake1, caption: "Chocolate Cake" },
  { id: 2, imageUrl: croissant, caption: "Buttery Croissant" },
  { id: 3, imageUrl: bread, caption: "Fresh Bread" },
  { id: 4, imageUrl: cupcake, caption: "Vanilla Cupcake" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  return (
    <div className="min-h-screen py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} onClick={() => setSelectedImage(img)}>
            <img src={img.imageUrl} alt={img.caption} className="rounded-lg cursor-pointer" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)}>
            <X />
          </button>
          <img src={selectedImage.imageUrl} alt={selectedImage.caption} className="max-h-[90vh]" />
        </div>
      )}
    </div>
  );
}
