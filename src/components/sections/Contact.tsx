import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-[#1845cb]  to-[#e4e3e4] text-transparent bg-clip-text">
          Contact Us
        </span>
      </h2>
      <p className="mt-4 mb-8 text-xl text-muted-foreground text-center">
        We'd love to hear from you.
      </p>
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold">Head Office:</h4>
            <p className="text-muted-foreground">
              [Placeholder: Jakarta, Indonesia]
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Phone:</h4>
            <a
              href="tel:+6282280853270"
              className="text-muted-foreground hover:underline"
            >
              +62 822 8085 3270
            </a>
          </div>
          <div>
            <h4 className="font-semibold">Email:</h4>
            <a
              href="mailto:info@lit.co.id"
              className="text-muted-foreground hover:underline"
            >
              info@lit.co.id
            </a>
          </div>
          <div>
            <h4 className="font-semibold">Website:</h4>
            <a
              href="http://www.lit.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:underline"
            >
              www.lit.co.id
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
