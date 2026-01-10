import { Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import About from './pages/about'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Book from './pages/book'
import Event from './pages/event'
import BookTable from './pages/bookTable'
import Gallery from './pages/gallery'
import Contact from './pages/contact'
import Products from './pages/products'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path='/book' element={<Book />} />
        <Route path='/event' element={<Event />} />
        <Route path='/products' element={<Products />} />
        <Route path='/bookTable' element={<BookTable />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
