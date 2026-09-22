import Link from 'next/link';
export default function Header({ red = false }: { red?: boolean }) {
  return <header className="site-header flex items-start justify-between"><Link href="/" aria-label="Ness Sport Global home"><img src={`/images/logo-${red ? 'white' : 'red'}.webp`} alt="NSG — Ness Sport Global" className="brand-logo" width="176" height="62" /></Link>{!red && <Link className="menu-link" href="/">Menu <span aria-hidden="true">＋</span></Link>}</header>;
}
