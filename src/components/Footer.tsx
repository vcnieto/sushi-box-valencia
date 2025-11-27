import { MapPin, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sushi Box</h3>
            <p className="text-background/80 text-sm">
              Sushi de autor a domicilio en Valencia.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/?q=C.+de+Beatríz+Tortosa,+1,+Algirós,+46021+València"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-background/80 hover:text-background transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  C. de Beatríz Tortosa, 1<br />
                  Algirós, 46021 València, Valencia
                </span>
              </a>
              <a 
                href="tel:+34633260476" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+34 633 26 04 76</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <a
              href="https://www.instagram.com/sushibox_valencia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/80 hover:text-background transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@sushibox_valencia</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
            <a href="/aviso-legal" className="hover:text-background transition-colors">
              Aviso Legal
            </a>
            <a href="/politica-privacidad" className="hover:text-background transition-colors">
              Política de Privacidad
            </a>
            <a href="/politica-cookies" className="hover:text-background transition-colors">
              Política de Cookies
            </a>
          </div>
          <p className="text-center text-sm text-background/60 mt-4">
            © {new Date().getFullYear()} Sushi Box. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
