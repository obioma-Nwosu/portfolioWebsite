import React from 'react'
import styled from 'styled-components'
import Particle from "../components/Particle";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>Hi I'm <span>Obioma Bertrand Nwosu</span></h1>
        <p>
          I am a Full-Stack Software Developer With over 4 years of Experience. 
          I have a Masters Degree in Computational Engineering from the Friedrich 
          Alexander University Erlangen-Nuremberg Germany. 
        </p>
        <div className="icons">
          <a href="https://github.com/obioma-Nwosu" className="icon i-github"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/kashymeh/" className="icon i-linkedin"><LinkedInIcon/></a>
        </div>
      </div>
    </HomePageStyled>
  )
}
const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .particle-con{
    position: fixed;
    width: 100%;
    z-index: -1;
  }
  .typography{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    p{
      text-transform: capitalize;
    }
    .icons{
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon{
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all .4s ease-in-out;
        cursor: pointer;
        &:hover{
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child){
          margin-right: 1rem;
          
        }

        svg{
          margin: .5rem;
        }
      }

      .i-github{
        &:hover{
          border: 2px solid #4078c0;
          color: #4078c0;
        }
      }
    }
  }
`;

export default HomePage
