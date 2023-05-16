import './App.css'
import './index.css'
import './components/navbarStyle.css'
import Navbar from './components/Navbar';
import ContainerStory from './components/ContainerStory';
import ContainerService from './components/ContainerService';
import ContainerSpecial from './components/ContainerSpecial';
import ProductLine from './components/ProductLine';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div>
      <Navbar />
      <navbarStyle />
      <ContainerStory />
      <ContainerService />
      <ContainerSpecial />
      <ProductLine />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
