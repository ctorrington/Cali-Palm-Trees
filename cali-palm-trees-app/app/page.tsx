import Image from 'next/image'
import { helloWorld } from '@/functions/src'
import Banner from './banner'

export default function Home() {
  return (
    <main>
      <h1>AYO</h1>
      <h2>TESTING BOIS</h2>
      <h3>helloWorld</h3>
      <p>p</p>
      <Banner />
    </main>
  )
}
