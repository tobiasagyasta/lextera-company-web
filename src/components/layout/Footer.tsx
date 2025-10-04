const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <p className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} LEXTERA INNOVATIVE TECHNOLOGY. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
