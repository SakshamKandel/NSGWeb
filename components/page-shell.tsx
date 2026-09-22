import Header from './header';
import Footer from './footer';
import Reveal from './reveal';
export default function PageShell({ children }: { children: React.ReactNode }) { return <div className="content-shell"><a className="skip-link" href="#content">Skip to content</a><Header /><main id="content" className="page-wrap"><Reveal>{children}</Reveal></main><Footer /></div>; }
