"use client"

import InteractiveMap from "./components/interactive-map"

//Just mock data for now.
//TODO: Create service handling Map pins and dog friendly locations.
const markers = [
  {
    anchor: [59.3293, 18.0686], // Stockholm
    title: "Hundtastiska Restaurangen",
    description: "100% hundvänlig restaurang",
    content: "En mysig restaurang i centrala Stockholm där hundar är välkomna både inomhus och utomhus. Perfekt för hundägare som vill njuta av en måltid utan att lämna sina fyrbenta vänner hemma."
  },
  {
    anchor: [57.7089, 11.9746], // Göteborg
    title: "Fik för Fido",
    description: "Endast utomhus",
    content: "Ett trevligt fik vid vattnet i Göteborg med hundvänliga sittplatser utomhus. Idealiskt för en avkopplande fika med utsikt över vattnet tillsammans med din hund."
  },
  {
    anchor: [55.6049, 13.0038], // Malmö
    title: "Pawsitively Delicious",
    description: "Delvis hundvänlig restaurang",
    content: "En populär restaurang i Malmö där hundar är tillåtna på uteserveringen. Ett utmärkt ställe för att njuta av en god måltid med din hund."
  },
  {
    anchor: [63.8258, 20.2630], // Umeå
    title: "K9 Kaféet",
    description: "100% hundvänligt kafé",
    content: "Ett charmigt kafé i Umeå där hundar är välkomna både inomhus och utomhus. Ett perfekt ställe för en kaffe med din bästa vän."
  },
  {
    anchor: [59.8586, 17.6389], // Uppsala
    title: "Wagging Tails Bistro",
    description: "Endast utomhus",
    content: "En restaurang i Uppsala med en stor hundvänlig uteservering. Perfekt för en middag i det fria med din hund."
  },
  {
    anchor: [59.2741, 15.2066], // Örebro
    title: "Barking Bakery",
    description: "Delvis hundvänligt fik",
    content: "Ett fik i Örebro där hundar är välkomna på uteserveringen. Ett mysigt ställe att njuta av en fika med din hund."
  },
  {
    anchor: [58.4108, 15.6214], // Linköping
    title: "Howlin' Good Eats",
    description: "100% hundvänlig restaurang",
    content: "En hundvänlig restaurang i Linköping som välkomnar hundar både inomhus och utomhus. Ett bra ställe för att äta ute med din hund."
  },
  {
    anchor: [56.1612, 15.5869], // Karlskrona
    title: "Puppy's Place",
    description: "Delvis hundvänligt kafé",
    content: "Ett kafé i Karlskrona där hundar är tillåtna på uteserveringen. Ett trevligt ställe att njuta av en kaffe med din hund."
  },
  {
    anchor: [64.7506, 20.9528], // Kiruna
    title: "Snowy Paws Restaurant",
    description: "Delvis hundvänlig restaurang",
    content: "En restaurang i Kiruna där hundar är tillåtna på den uppvärmda uteserveringen. Perfekt för en måltid efter en snöig promenad med din hund."
  },
  {
    anchor: [60.6749, 17.1413], // Gävle
    title: "Furry Friends Café",
    description: "100% hundvänligt fik",
    content: "Ett fik i Gävle som välkomnar hundar både inomhus och utomhus. Ett härligt ställe att njuta av en fika med din hund."
  }
]



export default function Map() {
  return (
    <div>
      <InteractiveMap markers={markers} />
    </div>
  )
}