import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/page-shell';
import RelatedLinks from '@/components/related-links';
import CountryFlag from '@/components/country-flag';
import { players } from '@/lib/content';
import { playerStories } from '@/lib/stories';
export function generateStaticParams() { return players.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const p = players.find(p => p.slug === slug); return { title: p?.name ?? 'Player', description: playerStories[slug]?.intro }; }
export default async function PlayerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const player = players.find(p => p.slug === slug); if (!player) notFound();
  const story = playerStories[slug]; const next = players[(players.indexOf(player) + 1) % players.length];
  return <PageShell>
    <div className="player-hero">
      <div className="player-hero-copy">
        <p className="eyebrow"><Link href="/players/">Sports Talent</Link><span className="crumb-divider">/</span>Cricket</p>
        <h1 className="red-text">{player.name}</h1>
        <div className="player-origin"><CountryFlag country={player.country}/><p className="player-position">{story.role}</p></div>
        <p className="lead-copy">{story.intro}</p>
        <a href="#player-story" className="text-link">The player’s story <span aria-hidden="true">↓</span></a>
      </div>
      <figure className="player-photo-frame">
        <div className="portrait-red-shape" aria-hidden="true"/>
        <img className="player-hero-image" src={`/images/${player.slug}.webp`} alt={player.name} width="600" height="900"/>
      </figure>
    </div>
    <section className="player-facts" aria-label="Player details" data-reveal>{story.facts.map(f=><div key={f.label}><p>{f.label}</p><h2>{f.value}</h2></div>)}</section>
    <section id="player-story" className="player-story story-section" data-reveal>
      <div className="section-kicker"><p className="eyebrow">The player’s story</p><h2>{story.headline}</h2></div>
      <div className="body-copy">{story.paragraphs.map(p=><p key={p}>{p}</p>)}{story.sources.length>0&&<details className="source-details"><summary>Career references</summary><div>{story.sources.map(s=><a key={s.url} href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a>)}</div></details>}</div>
    </section>
    <section className="roster-note" data-reveal><p className="eyebrow">Managed by Ness Sport Global</p><h2>Individual stories.<br />One global roster.</h2><p className="body-copy">Our players bring different skills, experiences and perspectives to the game. Explore the people who make up the NSG cricket roster.</p><Link className="text-link" href="/players/">Meet all eight players →</Link></section>
    <RelatedLinks title="Meet the next player." links={[{label:next.name,href:`/players/${next.slug}/`},{label:'Our approach to sports talent',href:'/expertise/sports-talent/'}]}/>
  </PageShell>;
}
