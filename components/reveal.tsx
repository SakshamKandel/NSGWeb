'use client';
import { useEffect, useRef } from 'react';
export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const elements = ref.current?.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!elements || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('reveal-waiting'); entry.target.classList.add('reveal-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    elements.forEach(el => { if (el.getBoundingClientRect().top > window.innerHeight) el.classList.add('reveal-waiting'); observer.observe(el); });
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('reveal-waiting')); };
  }, []);
  return <div ref={ref} className="page-motion">{children}</div>;
}
