import HomeSlider from '@/components/HomeSlider'
import RootLayout from '@/layout/RootLayout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <HomeSlider/>
    </main>
  )
};

Home.getLayout = function getLayout(page){
  return(
    <RootLayout>
      {page}
    </RootLayout>
  )
}
