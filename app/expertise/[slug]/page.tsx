import { notFound } from 'next/navigation';
import PageShell from '@/components/page-shell';
import StorySections from '@/components/story-sections';
import RelatedLinks from '@/components/related-links';
import { expertise } from '@/lib/stories';
export function generateStaticParams() { return expertise.map(e => ({ slug:e.slug })); }
export async function generateMetadata({ params }: {params:Promise<{slug:string}>}) { const {slug}=await params; const entry=expertise.find(e=>e.slug===slug); return {title:entry?.label ?? 'Our Expertise',description:entry?.intro}; }
export default async function ExpertisePage({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params; const entry=expertise.find(e=>e.slug===slug); if(!entry) notFound();
 return <PageShell><header className="editorial-heading"><p className="eyebrow">Ness Sport Global / {entry.label}</p><h1 className="red-text">{entry.title}</h1><p className="lead-copy">{entry.intro}</p></header><StorySections sections={entry.sections}/><RelatedLinks links={entry.links}/></PageShell>;
}
