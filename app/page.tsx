'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { navigation } from '@/lib/content';
export default function Home() {
  const [section,setSection]=useState<number|null>(null);
  const [group,setGroup]=useState<number|null>(null);
  useEffect(()=>{const key=(event:KeyboardEvent)=>{if(event.key==='Escape'){if(group!==null)setGroup(null);else setSection(null);}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);},[group]);
  return <div className="home-shell"><a href="#navigation" className="skip-link">Skip to navigation</a><Header red/>
    <main id="navigation" className="navigation-stage">
      <p className="home-intro">A world of sport. A personal approach.</p>
      <nav className="navigation-grid" aria-label="Main navigation">
        <div className="primary-column"><div className="primary-links">{navigation.map((entry,index)=><button key={entry.title} className={`primary-link ${section===index?'selected':''}`} aria-expanded={section===index} aria-controls="secondary-navigation" onClick={()=>{setSection(section===index?null:index);setGroup(null);}}>{entry.title==='For Talent'?<img className="primary-logo" src="/images/nsg-next.webp" alt="NSG Next"/>:entry.title}<span className="nav-arrow" aria-hidden="true">↗</span></button>)}</div><div className="secondary-links"><Link href="/about/">Who We Are</Link><Link href="/work/">Our Work</Link></div></div>
        {section!==null&&<div id="secondary-navigation" className="sub-column animate-enter" key={section} aria-label={`${navigation[section].title} categories`}><Link className="overview-link" href={navigation[section].overview}>Overview <span aria-hidden="true">↗</span></Link>{navigation[section].groups.map((entry,index)=><button className={group===index?'selected':''} key={entry.title} aria-expanded={group===index} aria-controls="tertiary-navigation" onClick={()=>setGroup(group===index?null:index)}>{entry.title}</button>)}</div>}
        {section!==null&&group!==null&&<div id="tertiary-navigation" key={`${section}-${group}`} className="sub-column tertiary-column animate-enter" aria-label={navigation[section].groups[group].title}>{navigation[section].groups[group].items.map(item=><Link href={item.href} key={item.title}>{item.title}</Link>)}</div>}
      </nav>
    </main><Footer red/></div>;
}
