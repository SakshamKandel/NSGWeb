import Link from 'next/link';
export default function RelatedLinks({ links, title = 'Explore the next chapter.' }: { links: {label:string;href:string}[];title?:string }) {
  return <section className="related-section" data-reveal><p className="eyebrow">Discover more</p><h2>{title}</h2><div className="related-links">{links.map(link => <Link key={link.href} href={link.href}><span>{link.label}</span><span aria-hidden="true">↗</span></Link>)}</div></section>;
}
