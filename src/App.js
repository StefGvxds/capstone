import './App.css';
import AboveFooter from "./components/AboveFooter.jsx";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import Logo from "./images/Logo.svg";

function App() {
  return (
      <div className="App">
          <meta name="description" content="My restaurant"/>
          <meta name="og:littleLemon" content={Logo}/>
          <meta name="og:description" content="My restaurant"/>
          <meta name="og:image" content=""/>
          <section className="app-section">
              <Header></Header>
              <Banner></Banner>
              <Specials></Specials>
              <Testimonials></Testimonials>
              <AboveFooter></AboveFooter>
              <Footer></Footer>
          </section>

      </div>
  );
}

export default App;
