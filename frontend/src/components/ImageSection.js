import React from 'react'
import styled from 'styled-components'
import resume from '../img/aboutMe2.jpg'
import PrimaryButton from './PrimaryButton';

function ImageSection() {
  return (
    <ImagesectionStyled>
      <div className="left-content">
        <img src={resume} alt="about me" />
      </div>
      <div className="right-content">
        <h4>I am Obi, <span>Few things about me</span></h4>
        <p className="paragraph">
          A full stack software developer, skilled in Javascript, React, node.js,
          React-Native, MongoDB, Express, Python, Django, sql, docker, Machine 
          Learning, f#, and vuejs. I love writing clean code based on micro Services
          and implementing beautiful software architectures. I play Football
          and cook when i am not reading Uncle Bob's book. 
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Languages</p>
            <p>Location</p>
            <p>Services</p>
            <p>Hobbies</p>
          </div>
          <div className="info">
            <p>: English, German, Igbo, Hausa</p>
            <p>: Germany, Nigeria</p>
            <p>: Full-stack Web and mobile development</p>
            <p>: Football, Traveling, Cooking</p>
          </div>
        </div>
        <PrimaryButton title={'Download CV'}/>
      </div>
    </ImagesectionStyled>
  )
}

const ImagesectionStyled = styled.div`
  margin-top: 4rem;
  display: flex;
  .left-content{
    width: 100%;
    img{
      width: 90%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right-content{
    
    h4{
      font-size: 2rem;
      color: var(--white-color);
      span{
        font-size: 2rem;
        text-transform: capitalize;
      }
    }
    p{
      font-size: .9rem;
    }
    .paragraph{
      padding: 1rem 0;
      text-transform: capitalize;
    }
    .about-info{
      display: flex;
      padding-bottom: 1rem;
      .info-title{
        padding-right: 2rem;
      }
      .info-title, .info{
        p{
          padding: .2rem 0;
          text-transform: capitalize;
        }
      }
    }
  }
`;
export default ImageSection
