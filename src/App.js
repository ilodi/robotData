import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Ai from './components/Ai';
import Clients from './components/Clients';
import Banner from './components/Banner';
import Advanced from './components/Advanced';
import About from './components/About';

// Static File
import hero_One from './static/img/hero.jpg';
import hero_Two from './static/img/heroOne.jpg';

import logo from './static/brand/logo.svg';
import bg_img_cont from './static/img/contact.jpg';
import iconAi from './static/icon/aiLogo.svg';
import iconHK from './static/icon/airHK.svg';
import imgClients from './static/img/client.jpg';
import imgParthners from './static/img/parthners.jpg';
import imgAuxParthners from './static/img/f.jpeg';
import iconAboutA from './static/icon/aboutA.svg';
import iconAboutB from './static/icon/aboutB.svg';

function App() {
  const title = 'Robot Data Co. Ltd. is a Hong Kong AI company';
  const date = new Date().getFullYear();
  return (
    <div className="App">
      <Header />
      <Hero hero_One={hero_One} hero_Two={hero_Two}/>
      <About logo={logo} iconAboutA={iconAboutA} iconAboutB={iconAboutB} />
      <Advanced />
      <Banner />
      <Clients
        iconHK={iconHK}
        imgClients={imgClients}
        imgParthners={imgParthners}
        imgAuxParthners={imgAuxParthners}
      />
      <Ai iconAi={iconAi} />
      <Contact bg_img_cont={bg_img_cont} />
      <Footer date={date} logo={logo} title={title} />
    </div>
  );
}

export default App;
