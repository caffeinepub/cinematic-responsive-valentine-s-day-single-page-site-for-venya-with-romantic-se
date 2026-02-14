import Section from '../components/Section';

const galleryImages = [
  { id: 1, src: '/assets/gallery/venya prompt.jpg', alt: 'Venya photo 1' },
  { id: 2, src: '/assets/gallery/venyaprompt2.jpg', alt: 'Venya photo 2' },
  { id: 3, src: '/assets/gallery/venya prompt 3.jpg', alt: 'Venya photo 3' },
  { id: 4, src: '/assets/gallery/venya prompt4.jpg', alt: 'Venya photo 4' },
  { id: 5, src: '/assets/gallery/venya prompt5.jpg', alt: 'Venya photo 5' },
  { id: 6, src: '/assets/gallery/venya prompt6.jpg', alt: 'Venya photo 6' },
  { id: 7, src: '/assets/gallery/venya prompt7.jpg', alt: 'Venya photo 7' },
];

export default function PhotoGallerySection() {
  return (
    <Section className="bg-gradient-to-b from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
        Our Beautiful Moments 💕
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {galleryImages.map((image) => (
          <div key={image.id} className="flex justify-center">
            <div className="heart-frame relative w-64 h-64 md:w-80 md:h-80">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  clipPath: 'path("M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z")',
                  transform: 'scale(3.5)',
                  transformOrigin: 'center',
                }}
              />
              <div className="absolute inset-0 rounded-full shadow-2xl box-glow pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
