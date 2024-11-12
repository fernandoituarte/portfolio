import { useState, useEffect } from "react";

import { Contact, Projects, Skills } from "./components/index";
import profile from "/profile.jpg";
import { LogoFI } from "./components"
import { TbCode } from "react-icons/tb";
import { FiAtSign, FiGithub } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import { SuccessAlert, ErrorAlert, InfoAlert } from "./components/alerts";

import "./App.css";

function App() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [infoMessage, setInfoMessage] = useState(false);

  useEffect(() => {
    const hasSeenInfoMessage = localStorage.getItem('hasSeenInfoMessage');
    if (!hasSeenInfoMessage) {
      setInfoMessage(true);
      localStorage.setItem('hasSeenInfoMessage', 'true'); 
    }
  }, []);

  return (
    <>
      <div className="background"></div>
      {/* Alerts */}
      <InfoAlert infoMessage={infoMessage} setInfoMessage={setInfoMessage} />
      <SuccessAlert successMessage={successMessage} />
      <ErrorAlert errorMessage={errorMessage} />
      <main>
        {/* Presentation */}
        <section id="presentation" className="presentation">
          <div className="presentation__grid">
            <img src={profile} alt="Profile image" height={'160px'} width={'160px'} fetchpriority="high" loading="eager" title="Image profile"/>
            <LogoFI className='logo' />
          </div>
          <article>
            <h1>
              <TbCode size={40} />
              <span> Fernando Ituarte</span>
            </h1>
            <p>
              {
                "Développeur web Full-Stack, avec de l'expérience en "
              }
              <span className="presentation__underline">
                {" "}
                Next.js, NestJS et Tailwind CSS
              </span>
              {", ainsi que dans la création d'"}
              <span className="presentation__underline">
                {" "}
                APIs REST et de microservices{" "}
              </span>
              .
            </p>
          </article>
        </section>

        {/* Social */}
        <section id="social" className="social">
          <h2>
            <FiAtSign size={34} />
            <span> Social</span>
          </h2>
          <nav className="social__nav">
            <a
              href="https://github.com/fernandoituarte"
              target="_blank"
              rel="noopener noreferrer"
              className="social__link draw meet"
            >
              <span>
                <FiGithub size={32} className="social__link--icon" />
              </span>
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/fernandoituarte/"
              target="_blank"
              rel="noopener noreferrer"
              className="social__link draw meet"
            >
              <span>
                <LiaLinkedin size={38} className="social__link--icon" />
              </span>
              <span>Linkedin</span>
            </a>
          </nav>
        </section>

        {/* Projects */}
        <Projects />

        {/* Skills */}
        <Skills />

        {/* About me */}
        <section id="about" className="about">
          <article>
            <h2>
              <span> About me</span>
            </h2>
            <p>
              {`Je suis un développeur web autodidacte originaire d'Uruguay, avec une approche claire : créer des solutions qui rendent les tâches plus simples, tant pour les utilisateurs que pour les développeurs. Ma priorité est d'écrire un code facile à comprendre, performant et évolutif, permettant à chaque projet de se développer de manière durable.`}
            </p>

            <p>
              {`
              Je travaille avec des technologies comme Next.js, qui m’aide à optimiser le SEO et la vitesse de chargement de chaque projet ; NestJS, un outil puissant pour structurer les applications backend de manière organisée ; et Tailwind CSS, qui me permet de styliser les interfaces rapidement et avec précision. Je suis également en train d'apprendre et d'intégrer des animations 3D avec Three.js et Blender 3D, dans le but d'élever l'expérience web à un nouveau niveau visuel.
              `}
            </p>

            <p>
              {`
              Dans chaque projet, je m'efforce de faciliter l'interaction des utilisateurs avec les applications et de rendre les processus plus simples. Je valorise profondément la communication claire, l'organisation et la responsabilité dans le travail en équipe, et j'aime résoudre des problèmes car je sais que chaque solution rend la vie de quelqu'un plus facile. En dehors de la technologie, je suis guitariste et passionné par l'art, en particulier la musique.`}
            </p>
            <p>
              {`
              Si tu as un projet intéressant ou si tu veux simplement discuter de technologie, de musique ou d'animations, je suis toujours ouvert à de nouvelles connexions !`}
            </p>
          </article>
        </section>

        {/* Contact */}
        <Contact
          setSuccessMessage={setSuccessMessage}
          setErrorMessage={setErrorMessage}
        />
      </main>
      <footer className="footer">
      © Fernando Ituarte - Presque tous les droits réservés ^^.
      </footer>
    </>
  );
}

export default App;
