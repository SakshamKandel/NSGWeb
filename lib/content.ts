export const players = [
  { slug: 'william-bosisto', name: 'William Bosisto', country: 'Australia', file: 'Will Bosisto ( Australia ).png' },
  { slug: 'priyank-panchal', name: 'Priyank Panchal', country: 'India', file: 'Priyank Panchal (India).png' },
  { slug: 'binod-bhandari', name: 'Binod Bhandari', country: 'Nepal', file: 'Binod Bhandari ( nepal ).png' },
  { slug: 'gulshan-jha', name: 'Gulshan Jha', country: 'Nepal', file: 'Gulshan Jha ( Nepal ).png' },
  { slug: 'najibullah-zadran', name: 'Najibullah Zadran', country: 'Afghanistan', file: 'Najibullah Zadran (Afghanistan).png' },
  { slug: 'gianpiero-meade', name: 'GianPiero Meade', country: 'Italy', file: 'GianPiero Meade ( Italy ).png' },
  { slug: 'adithya-shetty', name: 'Adithya Shetty', country: 'United Arab Emirates', file: 'Adithya Shetty ( UAE ).png' },
  { slug: 'jay-gohel', name: 'Jay Gohel', country: 'India · Saurashtra', file: 'Jay Gohel ( Saurashtra).png' },
];
export type MenuGroup = { title: string; items: { title: string; href: string; logo?: string }[] };
export const navigation: { title: string; overview: string; groups: MenuGroup[] }[] = [
  { title: 'For Talent', overview: '/expertise/talent/', groups: [
    { title: 'Sports Talent', items: [{title:'Our Approach',href:'/expertise/sports-talent/'},{ title: 'Our Players', href: '/players/' }, ...players.map(p => ({ title: p.name, href: `/players/${p.slug}/` }))] },
    { title: 'NSG Talents', items: [{ title: 'NSG Next', href: '/nsg-next/', logo: 'nsg-next.webp' }] },
  ] },
  { title: 'For Teams', overview: '/expertise/teams/', groups: [
    { title: 'Team Management', items: [{title:'Our Approach',href:'/expertise/team-management/'},{ title: 'Vasteras United', href: '/work/vasteras-united/' }] },
  ] },
  { title: 'For Events', overview: '/expertise/events/', groups: [
    { title: 'Tours', items: [{title:'International Tours',href:'/expertise/tours/'},{ title: 'Vini Jr India Tour', href: '/work/vini-jr-india-tour/' }] },
    { title: 'Cricket', items: [{title:'Cricket Events',href:'/expertise/cricket/'},{ title: 'NSG Unity Cup', href: '/work/nsg-unity-cup/' }] },
  ] },
];
export const unityTeamAssets: Record<string,string> = {
  'Revo Music': 'unity-revo.webp',
  'Saint Vincent and the Grenadines Cricket Association': 'unity-saint-vincent.webp',
  'Scotland A': 'unity-scotland.webp',
  'Portugal': 'unity-portugal.webp',
};
export const works = [
  { slug: 'vasteras-united', title: 'Vasteras United', category: 'Team management', date: '15–20 June 2026', location: 'Sweden', status: 'Season one champions', logo: 'vasteras.webp', intro: 'A first season. A championship.', description: 'NSG managed Vasteras United in the inaugural Nordic Smash T20 Cricket League in Sweden. The team finished the first season as champions.', images: ['vasteras-trophy.webp', 'vasteras-squad.webp', 'vasteras-batting.webp'], captions: ['Vasteras United celebrating with the trophy.', 'The Vasteras United squad.', 'Vasteras United in action.'] },
  { slug: 'vini-jr-india-tour', title: 'Vini Jr India Tour', category: 'International tour', date: '4–5 October 2026', location: 'India', status: 'Upcoming', logo: 'vini.webp', intro: 'Vini Jr. Coming to India.', description: 'NSG is bringing Vini Jr to India for a tour planned for 4 and 5 October 2026. Further information about the tour programme and locations will be announced.', images: ['vini-1.webp', 'vini-2.webp', 'vini-3.webp'], captions: ['Vini Jr.', 'Vini Jr.', 'Vini Jr.'] },
  { slug: 'nsg-unity-cup', title: 'NSG Unity Cup', category: 'T20 cricket', date: '10–17 October 2026', location: 'Venue to be announced', status: 'Upcoming', logo: 'unity.webp', intro: 'United by the game.', description: 'The NSG Unity Cup is a T20 cricket event planned for 10 to 17 October 2026, bringing together teams through the game of cricket.', teams: ['Revo Music', 'Saint Vincent and the Grenadines Cricket Association', 'Scotland A', 'Portugal'], images: [], captions: [] },
];
