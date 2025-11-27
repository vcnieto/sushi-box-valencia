import logo from '@/assets/LOGO.png';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B1717] backdrop-blur border-b border-black/40 shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            if (location.pathname === '/') {
              handleScrollTo('inicio');
            } else {
              navigate('/', { state: { scrollTo: 'inicio' } });
            }
          }}
          className="flex items-center group"
        >
          <img
            src={logo}
            alt="Sushi Box Valencia"
            className="h-14 w-14 rounded-full object-cover shadow-lg ring-2 ring-[#EEEBDD]/10"
          />
        </button>

        <nav className="flex items-center gap-8 text-sm md:text-base font-medium text-[#EEEBDD]">
          <button
            type="button"
            onClick={() => {
              if (location.pathname === '/') {
                handleScrollTo('inicio');
              } else {
                navigate('/', { state: { scrollTo: 'inicio' } });
              }
            }}
            className="hover:text-[#810000] transition-colors"
          >
            Inicio
          </button>
          <button
            type="button"
            onClick={() => {
              navigate('/menu');
            }}
            className="hover:text-white/70 transition-colors"
          >
            Menú
          </button>
          <button
            type="button"
            onClick={() => {
              if (location.pathname === '/') {
                handleScrollTo('galeria');
              } else {
                navigate('/', { state: { scrollTo: 'galeria' } });
              }
            }}
            className="hover:text-white/70 transition-colors"
          >
            Galería
          </button>
          <button
            type="button"
            onClick={() => {
              if (location.pathname === '/') {
                handleScrollTo('contacto');
              } else {
                navigate('/', { state: { scrollTo: 'contacto' } });
              }
            }}
            className="hover:text-white/70 transition-colors"
          >
            Contacto
          </button>

          <a href="https://wa.me/34633260476" target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="ml-2 rounded-full bg-[#810000] text-[#EEEBDD] hover:bg-[#630000] px-5 py-2.5 text-xs md:text-sm font-semibold tracking-wide shadow-md border-none"
            >
              Hacer pedido
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
