import Banner from '@/components/banner'
import Footer from '@/components/footer'
import Widget from '@/components/widget'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full space-y-20">
      <Banner />
      <Widget />
      <Footer />
    </main>
  )
}
