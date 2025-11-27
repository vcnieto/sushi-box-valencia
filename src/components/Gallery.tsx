import galeria1 from '@/assets/galeria1.jpg';
import galeria2 from '@/assets/galeria2.jpg';
import galeria3 from '@/assets/galeria3.jpg';
import galeria4 from '@/assets/galeria4.jpg';
import galeria5 from '@/assets/galeria5.jpg';
import galeria6 from '@/assets/galeria6.jpg';
import galeria7 from '@/assets/galeria7.jpg';

const galleryImages = [
  { src: galeria1 },
  { src: galeria2 },
  { src: galeria3 },
  { src: galeria4 },
  { src: galeria5 },
  { src: galeria6 },
  { src: galeria7 },
];

const Gallery = () => {
  // Duplicamos las imágenes para crear un efecto de cinta infinita
  const loopImages = [...galleryImages, ...galleryImages];

  return (
    <section id="galeria" className="py-20 bg-[#EEEBDD] border-t border-black/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1B1717] mb-4">
            Galería
          </h2>
          <div className="h-[2px] w-14 md:w-16 bg-[#810000] mx-auto rounded-full mb-5" />
          <p className="text-sm md:text-base text-[#1B1717]/80">
            Fotos reales de nuestros platos y presentaciones.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="flex gap-4 gallery-marquee">
            {loopImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="min-w-[60%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[23%] bg-white rounded-2xl shadow-md overflow-hidden border border-neutral-200"
              >
                <div className="aspect-[4/3] w-full bg-neutral-100">
                  <img
                    src={image.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
