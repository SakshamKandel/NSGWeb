import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/page-shell';
import StorySections from '@/components/story-sections';
import RelatedLinks from '@/components/related-links';
import { works, unityTeamAssets } from '@/lib/content';
import { workStories } from '@/lib/stories';
export function generateStaticParams() { return works.map(w => ({ slug: w.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const work=works.find(w=>w.slug===slug); return { title:work?.title ?? 'Our Work',description:work?.description }; }
export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
 const {slug}=await params; const work=works.find(w=>w.slug===slug); if(!work) notFound();
 const related=works.filter(w=>w.slug!==slug).slice(0,2);
 return <PageShell>
   <div className="event-heading"><div><p className="eyebrow"><Link href="/work/">Our Work</Link><span className="crumb-divider">/</span>{work.category}</p><h1 className="red-text">{work.title}</h1><p className="event-tagline">{work.intro}</p></div><div className="work-logo event-logo"><img src={`/images/${work.logo}`} alt={`${work.title} logo`} width="200" height="200"/></div></div>
   <div className="event-details"><dl className="event-facts"><div><dt>Date</dt><dd>{work.date}</dd></div><div><dt>Location</dt><dd>{work.location}</dd></div><div><dt>Status</dt><dd className="red-text">{work.status}</dd></div></dl><p className="lead-copy">{work.description}</p></div>
   {work.images[0]&&<figure className={`event-cover ${slug==='vini-jr-india-tour'?'tour-cover':''}`} data-reveal><img src={`/images/${work.images[0]}`} alt={work.captions[0]}/><figcaption><span>{work.captions[0]}</span><span>NSG / {work.category}</span></figcaption></figure>}
   <StorySections sections={workStories[slug]}/>
   {work.teams&&<section className="tournament-teams" data-reveal><p className="eyebrow">The planned field</p><h2>Four teams.<br />One shared game.</h2><div className="unity-team-grid">{work.teams.map(team=><div className="unity-team" key={team}><div className="unity-team-visual"><img src={`/images/${unityTeamAssets[team]}`} alt={team==='Revo Music'?'Revo Music logo':`${team} flag`} width="180" height="110" loading="lazy"/></div><h3>{team}</h3></div>)}</div><p className="body-copy">Match schedules, venue details and final team information will be announced as the tournament approaches.</p></section>}
   {work.images.length>1&&<section className="gallery-section" data-reveal><p className="eyebrow">In pictures</p><h2>{slug==='vini-jr-india-tour'?'The face of the tour.':'Moments from the campaign.'}</h2><div className="event-gallery">{work.images.slice(1).map((src,i)=><figure key={src}><img src={`/images/${src}`} alt={work.captions[i+1]} loading="lazy"/><figcaption>{work.captions[i+1]}</figcaption></figure>)}</div></section>}
   <RelatedLinks title="More from the world of NSG." links={related.map(w=>({label:w.title,href:`/work/${w.slug}/`}))}/>
 </PageShell>;
}
