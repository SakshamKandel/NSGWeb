const countries: Record<string,string> = {Australia:'au',India:'in',Nepal:'np',Afghanistan:'af',Italy:'it','United Arab Emirates':'ae'};
export default function CountryFlag({ country }: {country:string}) {
 const name=country.split(' · ')[0]; const code=countries[name];
 return <span className="country-with-flag">{code&&<img className="country-flag" src={`/flags/${code}.svg`} alt="" width="28" height="21"/>}<span>{country}</span></span>;
}
