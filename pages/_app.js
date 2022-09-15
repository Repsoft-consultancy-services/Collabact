import '../styles/globals.css'
import '../styles/swipper.css'
import Footer from './components/shared/Footer'
import Navbar from './Components/Shared/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar></Navbar>
  <Component {...pageProps} />
  <Footer></Footer>
  </>
  
}

export default MyApp
