import { TeaHouseHome } from "../components/TeaHouseHome";
const schema={"@context":"https://schema.org","@type":"Organization",name:"AFT Techno Trade",alternateName:"AFT Tea Factory",description:"Premium Assam tea producer rooted in small tea growers and craftsmanship.",address:{"@type":"PostalAddress",addressLocality:"Dibrugarh",addressRegion:"Assam",addressCountry:"IN"}};
export default function Home(){return <><TeaHouseHome/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></>}
