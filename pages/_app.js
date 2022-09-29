import '../styles/globals.css'
import '../styles/swipper.css'
import '../styles/navbar.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function MyApp({ Component, pageProps }) {
  return <>
  <Navbar></Navbar>
  <Component {...pageProps} />
  <Footer></Footer>
  </>
  
}

export default MyApp
