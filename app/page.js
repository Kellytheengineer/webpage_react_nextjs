import Image from "next/image";
import "./page.css";

function Header({title}){
  return(
    <header className="header-container">
        <h1>{title}</h1>
      </header> 
  );
}

function Hero1 ({imageU,sourceSet,size}) {
  return(
  <img
  src={imageU}//"/images/hero-mobile.png"
  srcSet={sourceSet}//"/images/hero-mobile.png 900w, /images/hero-desktop.png 901w"
  sizes={size}//"(max-width: 900px) 100vw, 901px"
  alt="Cozy living room with a fireplace"
  className="hero-image"
/>
)}

function Figure ({picture, alt, header, text}){
  return(
    <article className="tile">
    <img
    src={picture}
    alt={alt}
    className="tile-image"
    />
    <h3>{header}</h3>
    <p>{text}
    </p>
    </article>
  ) 
}

function Footer ({weblink1, text1,weblink2, text2,weblink3, text3 , email , emailtext}){

  return(
  <footer className="footer">
          <div className="colunms-container">
            <div className="footer-column">
              <p>Find us on:</p>
              <ul className="footer-nav">
                <li>

                  <a href={weblink1} className="socials-link">
                  {text1}
                    </a>
                </li>
                <li>
                  <a href={weblink2} className="socials-link">
                  {text2}
                    </a>
                </li>
                <li>
                  <a href={weblink3} className="socials-link">
                  {text3}</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <p>Contact us:</p>
              <address>
                <a href={email} className="email-link">
                {emailtext}
                  </a>
              </address>
            </div>
          </div>
        </footer>
  )
}

export default function Home() {
  return (
  <body>
      <div className="wrapper">
      <Header 
      title={"🔥Fireplace palace"}/>
        <main>
          <section className="hero-section">
            <Hero1
            src= {'app/images/hero-desktop.png'}
            sourceSet={'app/images/hero-desktop.png 900w, app/images/hero-desktop.png 901w'}
            imageURL={'(max-width: 900px) 100vw, 901px'}
            />
            <div className="hero-description">
              <p className="hero-headline">
                Discover the <br />
                perfect fireplace ...
              </p>
              <p className="consultation-paragraph">
                Book consultation: <span className="number-span">0121 345 6789</span>
              </p>
            </div>
          </section>
          <hr className="separator" />
          <section id="how-it-works" className="how-it-works-section">
            
            <h2 className="how-it-works-text">How It Works</h2>
            <div className="tiles">
      
                <Figure
                  picture={"app/images/how-it-works-1.png"}
                  alt={"Phone call illustration"}
                  header={"Give us a call..."}
                  text={"Call us and book in a 'Design Consultation' on a date and time that suits you."}
                  article={""}
                />
               
                <Figure
                    picture={"/images/how-it-works-2.png"}
                    alt={"Home visit illustration"}
                    header={"We come to you..."}
                    text={"We come to your home to do an assessment of the space and to your style preference."}
                  />  
            
                <Figure
                    picture={"/images/how-it-works-3.png"}
                    alt={"Fireplace recommendation illustration"}
                    header={"We recommend..."}
                    text={"We send you a bespoke set of fireplace recommendations."}
                    />
            </div>
          </section>
        </main>
        <Footer
            weblink1={"https://www.facebook.com"}
            text1={"Facebook"}
           
            weblink2={"https://www.instagram.com"}
            text2={"Instgram"}
          
            weblink3={"https://www.tiktok.com"}
            text3={"Tiktok"}

            email={"mailto:info@firepalace.co.uk2"}
            emailtext={"info@firepalace.co.uk"}
            />
      </div>
    </body>
  );
}


