import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('../Assets');
const output = path.resolve('public/images');
await mkdir(output, { recursive: true });
const entries = [
 ['NSG Logo/White.png','logo-white',650],['NSG Logo/Red.png','logo-red',650],['NSG Logo/NSG Next/NSG Next White.png','nsg-next',900],
 ['Works/Vasteras United/Logo Whtie.png','vasteras',600],['Works/NSG Unity/White and Yellow Logo.png','unity',600],['Works/Vini Jr India Tour/White Logo.png','vini',600],
 ['Works/Vasteras United/Photos/Squad with trophy.JPG','vasteras-trophy',1600],['Works/Vasteras United/Photos/squad Photo.JPG','vasteras-squad',1200],['Works/Vasteras United/Photos/batting.JPG','vasteras-batting',1400],
 ...[1,2,3].map(i=>[`Works/Vini Jr India Tour/Vini Jr Photos/${i}.jpg`,`vini-${i}`,1400]),
 ['Works/NSG Unity/Flags + Logos/Revo Music.png','unity-revo',500],
 ['Works/NSG Unity/Flags + Logos/Saint Vincent & Granedines.png','unity-saint-vincent',500],
 ['Works/NSG Unity/Flags + Logos/Scotland Flag.png','unity-scotland',500],
 ['Works/NSG Unity/Flags + Logos/Portugal Flag.png','unity-portugal',500],
];
const slugs = {'Will Bosisto':'william-bosisto','Priyank Panchal':'priyank-panchal','Binod Bhandari':'binod-bhandari','Gulshan Jha':'gulshan-jha','Najibullah Zadran':'najibullah-zadran','GianPiero Meade':'gianpiero-meade','Adithya Shetty':'adithya-shetty','Jay Gohel':'jay-gohel'};
for (const file of await readdir(path.join(root,'Players Photos'))) { const name = file.split('(')[0].trim(); if (slugs[name]) entries.push([`Players Photos/${file}`,slugs[name],850]); }
for (const [file,name,width] of entries) { await sharp(path.join(root,file)).rotate().resize({width,withoutEnlargement:true}).webp({quality:88}).toFile(path.join(output,`${name}.webp`)); }
console.log(`Prepared ${entries.length} images.`);
