import './components/all.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import wideLogo from './img/wide_logo.png';
import BandsintownWidget from './components/BandsintownWidget';
import SpotifyPlayer from './components/SpotifyPlayer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import SpotifySidebar from './components/SpotifySidebar';
import { Helmet } from 'react-helmet';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

function App() {
  function importAll(r) {
    let images = [];
    r.keys().forEach((item, index) => {
      images.push(r(item));
    });
    return images;
  }

  const images = importAll(
    require.context('./img/slider', false, /\.(png|jpe?g|svg)$/),
  );

  const bandsintownWidgetConfig = {
    bandName: 'SAL and the Stonewall Hippies',
    colorLinkText: '#000000',
    displayStartTime: true,
    displayPlayMyCity: true,
    colorText: '#FFFFFF',
    colorBackground: 'rgba(0, 0, 0, 0)',
    displayPastDates: true,
    displayLimit: 15,
    colorLink: '#f4efb5',
  };

  return (
    <div className="App">
      <Helmet>
        <html lang="en" />
        <title>SAL & The Stonewall Hippies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="With deep roots styled and sharpened in the hallows of the
                      West Texas haunt of The Blue Light, Sal and the Stonewall
                      Hippies are gaining traction with each and every
                      performance.  Stylistically falling somewhere between
                      flatlanders and troubadour’s - imparting strife and life’s
                      darker side, Sal and company drive to tug on the
                      heartstrings of any lovers of thematic storylines and fan
                      of tight pockets.  Bluesy undertones and hints of grit and
                      growth always shine brightly with each note of progress
                      and reflection."
        />

        <link
          rel="icon"
          type="image/png"
          href={`img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`img/favicon-16x16.png`}
          sizes="16x16"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="SAL & The Stonewall Hippies" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`img/dylan-landscape.jpg`} />
        <link rel="stylesheet" href="https://use.typekit.net/dwy0vuj.css" />
      </Helmet>
      <div className="hidden sm:block">
        <SpotifySidebar />
      </div>
      <div className="p-2 md:p-8 max-w-7xl flex flex-col justify-center mx-auto">
        <Navbar />

        <div>
          <div className="bg-gray-900 pb-16">
            <section id="home">
              <img src={wideLogo} className="relative pt-2 px-10" />
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 5000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                {images &&
                  images.map((image) => {
                    return (
                      <SwiperSlide>
                        <img
                          src={image}
                          className="relative px-4 object-contain w-full hover:transition-transform hover:scale-[1.07] duration-700 hover:border-x-8 border-x-black"
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </section>
            <main className="mx-4 md:mx-10 lg:mx-24">
              <section id="about">
                <div className="text-center mt-4 mb-8 pb-2">
                  <h1 className="my-4 font-bold text-2xl md:text-3xl lg:text-4xl border-b border-primary pb-2 text-white">
                    About
                  </h1>
                  <div>
                    <p className="text-white p-2 text-left">
                      With deep roots styled and sharpened in the hallows of the
                      West Texas haunt of The Blue Light, Sal and the Stonewall
                      Hippies are gaining traction with each and every
                      performance.  Stylistically falling somewhere between
                      flatlanders and troubadour’s - imparting strife and life’s
                      darker side, Sal and company drive to tug on the
                      heartstrings of any lovers of thematic storylines and fan
                      of tight pockets.  Bluesy undertones and hints of grit and
                      growth always shine brightly with each note of progress
                      and reflection.
                    </p>
                    <p className="text-white p-2 text-left">
                      The most appealing aspect of Sal and the Stonewall Hippies
                      are their ability to convey their message to everyone.  A
                      product of blended life experienced well lived, their
                      music is honest and likely to be a gut punch for anyone
                      who has struggled along the journey of life.  Once
                      described as versatile blues, no genre can capture the
                      true nature of the sound being created by Sal and the
                      Stonewall Hippies.
                    </p>
                    <p className="text-white p-2 text-left">
                      Taking heavy influence from classic blues sprinkled with
                      acoustic storylines of reality, Sal and the Stonewall
                      Hippies can best be described as a barefoot walk through a
                      muddy riverbank at the end of a hot summers day seeking
                      reflection and refuge.
                    </p>
                    <p className="text-white p-2 text-left">
                      Sonically taking keys from a melting pot of influences,
                      Sal and the Stonewall Hippies continue to evolve their
                      sound with each project, while remaining grounded.  Should
                      you be in the market for new music, Sal will definitely
                      quench your thirst for the new and unique- straying away
                      from standard tropes and fashioning their own brand of
                      melodic harmony and a walk through life without rose
                      colored glasses.
                    </p>
                    <p className="text-white p-2 text-left">
                      If  you find yourself somewhere between the glass ceiling
                      and rock bottom, Sal and the Stonewall Hippies will rise
                      to the occasion and can certainly quench the pallet of any
                      fan of music. Born through the lens of the neon mirage and
                      imparting a constant evolution of a backbeat that
                      parallels the rhythm of life.
                    </p>
                  </div>
                </div>
              </section>
              <section id="shows">
                <div className="text-center mt-4 mb-8 pb-2">
                  <h1 className="my-4 font-bold text-2xl md:text-3xl lg:text-4xl border-b border-primary pb-2 text-white">
                    Shows
                  </h1>
                  <BandsintownWidget
                    bandsintownWidgetData={bandsintownWidgetConfig}
                  />
                </div>
              </section>
              <section id="media">
                <div className="text-center mt-4 mb-8 pb-2">
                  <h1 className="my-4 font-bold text-2xl md:text-3xl lg:text-4xl border-b border-primary pb-2 text-white">
                    Media
                  </h1>

                  <SpotifyPlayer
                    height={250}
                    url="https://open.spotify.com/embed/album/52vsYTBDlW4C6yfgOtZxuT"
                  />
                  <SpotifyPlayer
                    height={80}
                    url="https://open.spotify.com/embed/album/3xC4d2Ec8wI2iu7PaG6b2Q"
                  />
                </div>
              </section>
              <section id="contact">
                <div className="text-center mt-4 mb-8 pb-2">
                  <h1 className="my-4 font-bold text-2xl md:text-3xl lg:text-4xl border-b border-primary pb-2 text-white">
                    Contact
                  </h1>
                  <ContactSection />
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
