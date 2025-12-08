import fsiLogo from "@/assets/fsi-logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-slate-300 text-sm">Проект при поддержке</p>
          <img 
            src={fsiLogo} 
            alt="Фонд содействия инновациям" 
            className="h-16 object-contain"
          />
        </div>
        <div className="mt-6 pt-6 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
