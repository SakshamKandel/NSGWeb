import type { Metadata } from 'next';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import './globals.css';
export const metadata: Metadata = { title: { default: 'NSG — Ness Sport Global', template: '%s | Ness Sport Global' }, description: 'Ness Sport Global. Player management, team management and international sporting events.', icons: { icon: { url: '/favicon.png', type: 'image/png' }, apple: '/favicon.png' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
