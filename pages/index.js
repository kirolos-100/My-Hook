
import { Inter } from 'next/font/google'
import State from './hooks/State'
import Effect from './hooks/Effect'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Ref from './hooks/Ref'
import Memo from './hooks/Memo'
import Callback from './hooks/callback/Callback'
import Context from './hooks/Context/Context'
import Reducer from './hooks/Reducer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div /* className=' flex flex-col ' */ >

      <Navbar/>
      {/* <State/> */}
      {/* <Effect/> */}
      {/* <Ref/> */}
      {/* <Memo/> */}
      {/* <Callback/> */}
      {/* <Context/> */}
      <Reducer/>

      <Footer/>

    </div>

    
  )
}
