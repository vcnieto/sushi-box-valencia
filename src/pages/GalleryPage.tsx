import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Gallery from '@/components/Gallery';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20 page-fade-in">
      <Header />
      <main className="pt-10 pb-16">
        <Gallery />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;
