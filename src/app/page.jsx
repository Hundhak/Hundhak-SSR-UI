import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Hundhak</h1>
      <Link href="/news">Nyheter</Link>
    </div>
  )
}