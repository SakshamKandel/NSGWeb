import type { StorySection } from '@/lib/stories';
export default function StorySections({ sections }: { sections: StorySection[] }) {
  return <div className="story-sections">{sections.map((section,index) => <section className="story-section" data-reveal key={section.title}><div className="section-kicker"><span className="section-number">{String(index+1).padStart(2,'0')}</span>{section.logo?<div className="section-logo"><img src={`/images/${section.logo}`} alt={section.title}/></div>:<h2>{section.title}</h2>}</div><div className="body-copy">{section.paragraphs.map(p => <p key={p}>{p}</p>)}</div></section>)}</div>;
}
