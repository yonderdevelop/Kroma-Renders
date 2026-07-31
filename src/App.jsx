import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <ValueProps />
      <Process />
      <Pricing />
      <Gallery />
      <ContactCTA />
      <Footer />
    </Layout>
  );
}

export default App;
