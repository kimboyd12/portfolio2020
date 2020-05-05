import React from 'react';
import styled from "styled-components";
import './App.css';
import kim from './images/kim.png';


const Header = styled.div`
  color: #B7BDDC;
  margin-left: 5%;
  margin-top: 5%;
  font-family: 'Poppins', sans-serif;
`

const About = styled.div`
  display: flex;
  color: #22253A;
  background-color: #B7BDDC;
  padding: 2%;
  font-family: 'Poppins', sans-serif;
`

const AboutPara = styled.p`
  width: 50%;
  margin-left: 3%;
`


const SocialsPara = styled.div`
  width: 20%;
  margin-left: 10%;
  padding: 2%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #D9DCED;
  height: 30%;
  margin-top: 10%;
`
const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 3px solid #495698;
color: #495698;
margin: 0.5em 1em;
padding: 0.25em 1em;
font-size: 1rem;
`

const HeadImg = styled.img`
  width: 15%;
  height: 15%;
  margin-left: 5%;
  margin-top: 3%;
  border-radius: 8px;
`
const Main = styled.div`
  display:flex;
`
function App() {
  return (
    <div className="main">
      <Main>
      <HeadImg src={kim}>
      </HeadImg>
      <Header>
        <h3>Hello, my name is</h3>
        <h1>Kim Boyd.</h1>
      </Header>
      </Main>
      <br></br>
      <About>
        <AboutPara>
        <h4>About Me</h4>
        <p>Hello! I'm Kim, a software developer based in Atlantic City, New Jersey. Currently, I am a part-time student at Lambda School studying Full Stack Web Development.</p>
        <br></br>
        <h4>Recently I have been working with:</h4>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>
        <br></br>
        <h4>Want to see what I have been working on?</h4>
        <a href="https://www.github.com/kimboyd12"><Button>GitHub</Button></a>
        </AboutPara>
        <SocialsPara>
          <h4>Let's Connect!</h4>
          <a href="https://www.linkedin.com/in/kim-boyd"><Button>LinkedIn</Button></a>
          <a href="https://www.facebook.com/kimberlyboyd"><Button>Facebook</Button></a>
          <a href="https://www.instagram.com/__kmbrly"><Button>Instagram</Button></a>
        </SocialsPara>
      </About>
    </div>

  );
}

export default App;
