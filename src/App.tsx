import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Portfolio from './components/Portfolio'
import Fundador from './components/Fundador'
import Contato from './components/Contato'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Fundador />
        <Sobre />
        <Portfolio />
        <Servicos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
