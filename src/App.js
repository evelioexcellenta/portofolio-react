import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
     <nav class="navbar">
        <h4>Evelio Excellenta</h4>
        <div class="nav-items"> |
            <a href="#about">About Me</a> |
            <a href="#experience">Experience</a> |
            <a href="#projects">Projects</a> |
            <a href="#skills">Skills</a> |
        </div>
    </nav>
    <hr style={{marginTop: 0}}/>
    <section id="about">
        <img src="./asset/image.jpg" alt=''/>

        <div>
            <h1>Hi I'm Evelio</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
        </div>

    </section>
    <hr/>
    <section class="container-experience">
        <header id="experience" style={{textAlign: "center", fontSize: 25}}><h1>--------------- Experience ---------------</h1></header>
        <div class="experience-items">
            <div class="experience-text">
                <div class="experience-header">
                    <h3>Project Based Intern : Data Scientist Virtual Internship x Rakamin Academy</h3>
                    <p>Jul 2023 - Aug 2023</p>
                </div>
                <div class="experience-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. </p>
                </div>
                
            </div>
            <img src="./asset/rakamin.jpg" />
        </div>

        <div class="experience-items">
            <img src="./asset/asdos.jpg"/>
            <div class="experience-text">
                <div class="experience-header">
                    <h3>Lecturer Assistant for Probability & Statistics</h3>
                    <p>Mar 2023 - Aug 2023</p>
                </div>
                <div class="experience-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. </p>
                </div>
            </div>
        </div>

        <div class="experience-items">
            <div class="experience-text">
                <div class="experience-header">
                    <h3>Instrumentation and Control Engineer</h3>
                    <p>Jan 2023 - Feb 2023</p>
                </div>
                <div class="experience-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. </p>
                </div>
            </div>
            <img src="./asset/lotte.jpg"/>
        </div>

        <div class="experience-items">
            <img src="./asset/excellentatrans.png"/>
            <div class="experience-text">
                <div class="experience-header">
                    <h3>
                        Sci-Fi City Trans Studio Cibubur Smart Robot Installation Technician</h3>
                    <p>Jun 2019 - Jun 2019</p>
                </div>
                <div class="experience-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. </p>
                </div>
            </div>
            
        </div>

        <div class="experience-items">
            <div class="experience-text">
                <div class="experience-header">
                    <h3>Microcontroller Programming Workshop & Robotics Trainer</h3>
                    <p>May 2017 - Dec 2019</p>
                </div>
                <div class="experience-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. </p>
                </div>
            </div>
            <img src="./asset/excellenta.png"/>

        </div>
    </section>
    <hr/>
    <footer id="contact">
        <div class="container-footer">
            <h1 style={{marginLeft: 48}}>CONTACT ME</h1>
            <div class="container-contact">
                <a href="https://www.instagram.com/evelioexcellenta/" class="a-contact">
                    <img src="./asset/instagram.png" class="contact-logo"/>
                    <p>Instagram</p>
                </a>
                <a class="a-contact">
                    <img src="./asset/gmail.png" class="contact-logo"/>
                    <p>E-mail</p>
                </a>
            </div>
            <div class="container-shop">
                <a href="https://www.linkedin.com/in/evelio-excellenta/" class="a-contact">
                    <img src="./asset/linkedin.png" class="contact-logo"/>
                    <p>Linked.in</p>
                </a>
                <a href="https://github.com/evelioexcellenta" class="a-contact" style={{marginLeft:12}}>
                    <img src="./asset/github.png" class="contact-logo"/>
                    <p>Git Hub</p>
                </a>
            </div>

        </div>
    </footer>
    </body>
    </div>
  );
}

export default App;
