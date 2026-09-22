import Link from 'next/link';
export default function Footer({ red = false }: { red?: boolean }) {
  if (red) return <footer className="site-footer on-red flex flex-wrap justify-between gap-4"><span>Ness Sport Global</span><span>© 2026 NSG</span></footer>;
  return <footer className="detail-footer"><div className="footer-top"><Link href="/" aria-label="NSG home"><img src="/images/logo-white.webp" alt="Ness Sport Global" width="176" height="62" /></Link><p>Talent. Teams.<br />A world of possibility.</p><nav aria-label="Footer navigation"><Link href="/about/">Who We Are</Link><Link href="/players/">Our Players</Link><Link href="/work/">Our Work</Link><Link href="/nsg-next/">NSG Next</Link></nav></div><div className="footer-bottom"><span>Ness Sport Global</span><span>© 2026 NSG</span></div></footer>;
}
