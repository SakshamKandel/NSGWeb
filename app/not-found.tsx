import Link from 'next/link';
import PageShell from '@/components/page-shell';
export default function NotFound() { return <PageShell><p className="eyebrow">404</p><h1 className="red-text">Page not found.</h1><p className="body-copy">This page is not available.</p><Link href="/" className="text-link">Back to NSG →</Link></PageShell>; }
