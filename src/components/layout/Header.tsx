import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              LEXTERA
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about">About</Link>
            <Link href="#history">History</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
