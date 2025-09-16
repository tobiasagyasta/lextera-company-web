const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold">LIT (Lextera Innovative Technologies)</h2>
          <div className="mt-4">
            <p>Head Office: [Placeholder: Jakarta, Indonesia]</p>
            <p>Phone: <a href="tel:+6282280853270" className="hover:underline">+62 822 8085 3270</a></p>
            <p>Email: <a href="mailto:info@lit.co.id" className="hover:underline">info@lit.co.id</a></p>
            <p>Website: <a href="http://www.lit.co.id" target="_blank" rel="noopener noreferrer" className="hover:underline">www.lit.co.id</a></p>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} LEXTERA INNOVATIVE TECHNOLOGIES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
