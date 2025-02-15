const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://twitter.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
        <p className="text-neutral-300">
          Desenvolvido por <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-white">Kelly Xavier</a>
        </p>
        <p className="text-neutral-300 mt-4">Todos os direitos reservados a Nolle © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;

