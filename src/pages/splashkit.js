// import { Box } from "@mui/material"
import React from "react"
import "./index.css"
import Button from "react-bootstrap/Button"
import { StaticImage } from "gatsby-plugin-image"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"

function Home() {
  return (
    <Container>
      <NavBar />
      <Col className="on-img">
        <StaticImage
          className="splashkit-img"
          width={250}
          height={268}
          src={"../assets/splashkit.png"}
          alt="capstone"
        />
      </Col>
      <div className="test">
        <h1 className="on-heading">Splashkit</h1>
        <br></br>
        <br></br>

        <Row className="row">
          <Col className="col">
            <div className="block1">
              <h1>What is Splashkit?</h1>
              <br></br>
              <p>
                The SplashKit website is accessible here:{" "}
                <a href="https://splashkit.io/">SplashKit - Home</a>
              </p>
              <br></br>
              <p>
                <a href="https://splashkit.io/">Splashkit</a> is a C++ Software
                Development Kit. It is a beginner-friendly abstraction over SDL
                and many other libraries to assist in introductory programming
                education, and can be used to create 2D games.
              </p>
              <br></br>
              <p>
                It is an open-source Software Development Kit (SDK) created with
                the purpose of reducing the overhead required for truly
                technical coding.
              </p>
              <br></br>
              <p>
                SplashKit includes a large library of methods that a user may
                experiment with and apply. A function is a piece of code that
                accomplishes a purpose by calling other lines of code, it's much
                simpler to use pre-defined functions rather than creating all
                the code yourself when creating a game.
              </p>
              <br></br>
              <p>
                Although SplashKit is a large library, capabilities may always
                be improved or added to expand its realism and complexity. This
                enables users to include more sophisticated elements into their
                SplashKit projects more easily and quickly.
              </p>
              <br></br>
              <h1>Where is it used?</h1>
              <br></br>
              <p>
                Currently, SplashKit is primarily used within Deakin University,
                with the intention of growing into a larger Educational Toolkit.
              </p>
              <br></br>
              <p>
                The students at Deakin University, studying Introduction to
                Programming have been the most exposed to this product. They are
                the ideal consumers of this product – within the first 12 weeks
                of using SplashKit in Introduction to Programming, students can
                code 2D games with unrestricted creativity and have a grounded
                knowledge of C++.
              </p>
              <br></br>
              <h1>What does this mean for Thoth Tech?</h1>
              <br></br>
              <p>
                Here at Thoth Tech, our aim is to improve both functionality,
                experience and support for upon the current library of the
                SplashKit SDK. Allowing users to create more realistic gameplay
                and games. We also wish to build a solution capable of
                highlighting the achievements of the SplashKit users to ensure
                exposure of the product and capability as an educational tool.
              </p>
              <br></br>
              <h1>What are the goals for Splas</h1>
              <br></br>
              <p>
                This is entirely up to the team’s expertise, interest, and
                vision. However, the direction previously discussed includes:
              </p>
              <ul>
                <li>
                  Fix incompatibility of SplashKit with Python version 3.8.x
                </li>
                <li>Building upon the menu framework</li>
                <li>Data visualisation</li>
                <li>Audio mixing</li>
                <li>Machine learning</li>
                <li>Creating an Arcade Machine and game database</li>
                <li>Ease the installation process</li>
              </ul>
              <br></br>
              <h1>Understanding SplashKit</h1>
              <br></br>
              <h3>Getting Started</h3>
              <br></br>
              <p>
                The following steps will provide the reader with a basic
                understanding of SplashKit.
              </p>
              <br></br>
              <ol>
                <li>Become familiar with SplashKit</li>
                <br></br>
                <ul>
                  <li>
                    Visit the SplashKit.io website - here you can read
                    documentation and articles about the SplashKit functions.
                  </li>
                  <li>Explore the SplashKit Source Code.</li>
                  <li>
                    Read through the User Guides created by previous developers
                    in the Background Docs Folder.
                  </li>
                </ul>
                <br></br>
                <li>Install SplashKit SDK into your machine</li>
                <br></br>
                <ul>
                  <li>
                    Watch provided video (“Windows SplashKit Installation – with
                    audio”)
                  </li>
                </ul>
                <br></br>
                <li>How to run the code</li>
                <br></br>
                <ul>
                  <li>Watch the provided video (“how_to_test_code”)</li>
                </ul>
                <br></br>
                <li>How to test you code</li>
                <br></br>
                <ul>
                  <li>
                    Run this command line in msys2 64bit for installing cmake
                  </li>
                  <br></br>
                  <div className="code">
                    pacman -S git mingw-w64-x86_64-cmake
                    mingw-w64-x86_64-toolchain mingw-w64-x86_64-ninja
                  </div>
                  <br></br>
                  <li>Install option 3</li>
                  <li>Enter this command line in your msys2</li>
                  <br></br>
                  <div className="code">
                    git clone --recursive -j2
                    https://github.com/SplashKit/SplashKit.git
                  </div>
                  <br></br>
                  <li>It will copy SplashKit file to your choosen folder.</li>
                  <li>
                    Use the cd command to find the find where the Cmakelist.txt
                    is.
                  </li>
                  <br></br>
                  <div className="code">cd /c/SplashKit/projects/cmake</div>
                  <br></br>
                  <li>Enter this command, generate files</li>
                  <br></br>
                  <div className="code">cmake -G "Ninja"</div>
                  <br></br>
                  <li>and then enter this command line</li>
                  <br></br>
                  <div className="code">ninja</div>
                </ul>
              </ol>
              <br></br>
              <h3>Installation</h3>
              <br></br>
              <p>SplashKit requires some software to set up:</p>
              <br></br>
              <ul>
                <li>MSYS2 Terminal</li>
                <li>Visual Studio Code</li>
                <li>G++ language tools</li>
              </ul>
              <br></br>
              <p>
                As SplashKit is aimed at beginners, Visual Studio Code is the
                optimal choice due to its simplicity and ease of use.
              </p>
              <br></br>
              <p>
                A written installation guide for all Operating Systems (OS) can
                be found{" "}
                <a href="https://splashkit.io/articles/installation/">here</a>
              </p>
              <br></br>
              <p>
                A video installation guide for Windows OS can be found{" "}
                <a href="https://deakin365.sharepoint.com/:v:/s/ThothTech2/EXWvjZKY61RGjgewzgySCS0BXQVagohU70wRH3hh2cl_0g?e=tgMpiP">
                  here
                </a>
              </p>
              <br></br>
              <h3>Source Code</h3>
              <br></br>
              <p>
                GitHub: <a href="https://github.com/splashkit">SplashKit</a>
              </p>
              <br></br>
              <p>SplashKit comprises of 4 sections:</p>
              <br></br>
              <ul>
                <li>SplashKit Manager (SKM)</li>
                <li>SplashKit-Core</li>
                <li>SplashKit.io</li>
                <li>SplashKit translator</li>
              </ul>
              <br></br>
              <p>
                SplashKit Manager or SKM is the CLI/App tool for installing and
                managing SplashKit, as well as creating, building, and running
                SplashKit projects. SKM is highly editable through including
                folders and bash code into the SplashKit directory / GitHub.
              </p>
              <br></br>
              <p>
                SplashKit Core is the code for SplashKit, it is what makes up
                the all-purpose SDK. All direction to SplashKit comprised of
                creating or building upon the core code. Each component was
                referred to as a module.
              </p>
              <br></br>
              <p>
                SplashKit.io is the website, which is referred to throughout
                this document.
              </p>
              <br></br>
              <p>
                SplashKit translator is responsible for the translation of the
                SplashKit C++ source into another language.
              </p>
              <br></br>
              <h3>SplashKit on your device</h3>
              <br></br>
              <p>
                SplashKit duplicates a version of the Source Code onto your
                device. This is accessed here:
              </p>
              <br></br>
              <div className="code">
                C:\msys64\home\&lt;user/&gt;\.SplashKit
              </div>
              <br></br>
              <p>
                This is how SplashKit Manager (SKM) can create projects with
                preconfigured files. For C++ projects, these can be accessed
                here:
              </p>
              <br></br>
              <div className="code">
                C:\msys64\home\&lt;user/&gt;\.SplashKit\new\c++\files
              </div>
              <br></br>
              <p>
                SplashKit is a library which includes a variety of functionality
                detailed on the website. Each file is referred to as a module,
                which groups the functions by use. The function code and headers
                of SplashKit can be accessed here:
              </p>
              <br></br>
              <div className="code">
                C:\msys64\home\&lt;user/&gt;\.SplashKit\source
              </div>
              <br></br>
              <h1>Product Lifecycle</h1>
              <br></br>
              <h5>TBA</h5>
              <br></br>
            </div>
          </Col>
        </Row>

        <Row className="row">
          <Col className="col">
            <div className="on-btn">
              <p className="para">One stop for all projects</p>
              <Button
                href="https://github.com/thoth-tech"
                className="btn"
                variant="outline-dark"
              >
                Company Github
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </Container>
  )
}
export default Home
