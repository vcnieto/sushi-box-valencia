import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactSection from '@/components/ContactSection';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20 page-fade-in">
      <Header />
      <main className="pt-10 pb-16">
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
