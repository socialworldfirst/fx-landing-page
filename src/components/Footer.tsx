import Link from "next/link";

interface FooterColumn {
  title: string;
  links: { name: string; href: string; external?: boolean }[];
}

interface FooterProps {
  columns?: FooterColumn[];
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { name: "World Account", href: "https://www.worldfirst.com/uk/world-account/", external: true },
      { name: "Receive", href: "https://www.worldfirst.com/uk/receive/", external: true },
      { name: "Pay", href: "https://www.worldfirst.com/uk/pay/", external: true },
      { name: "FX", href: "https://www.worldfirst.com/uk/fx/", external: true },
      { name: "Pay 1688 Suppliers", href: "https://www.worldfirst.com/uk/pay-1688/", external: true },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "E-commerce Seller", href: "https://www.worldfirst.com/uk/ecommerce/", external: true },
      { name: "Supplier Payment", href: "https://www.worldfirst.com/uk/supplier-payment/", external: true },
      { name: "Pay into China", href: "https://www.worldfirst.com/uk/pay-to-china/", external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "https://www.worldfirst.com/uk/blog/", external: true },
      { name: "Customer Stories", href: "https://www.worldfirst.com/uk/customer-stories/", external: true },
      { name: "User Guides", href: "https://www.worldfirst.com/uk/user-guides/", external: true },
      { name: "FAQs", href: "https://www.worldfirst.com/uk/faqs/", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About WorldFirst", href: "https://www.worldfirst.com/uk/about-us/", external: true },
      { name: "Why WorldFirst", href: "https://www.worldfirst.com/uk/why-worldfirst/", external: true },
      { name: "Contact Us", href: "https://www.worldfirst.com/uk/contact-us/", external: true },
      { name: "Security", href: "https://www.worldfirst.com/uk/security/", external: true },
    ],
  },
];

export default function Footer({ columns = defaultColumns }: FooterProps) {
  return (
    <footer className="bg-wf-footer text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-medium text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 text-[13px] hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/70 text-[13px] hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Attribution */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.brandfetch.io/idQI0qYhhb/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1768794155662"
                alt="WorldFirst"
                className="h-5 w-auto opacity-70"
              />
              <span className="text-white/50 text-xs">
                &copy; {new Date().getFullYear()}, Ant International or its affiliates. All rights reserved.
              </span>
            </div>
            <p className="text-white/40 text-xs text-center md:text-right max-w-md">
              WorldFirst is a trading name of WorldFirst UK Ltd, authorised and
              regulated by the Financial Conduct Authority (FRN: 900508).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
