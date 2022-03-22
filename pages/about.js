import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import BottomBar from '../comps/bottom'
import Navigation from '../comps/navigation'
import styles from '../styles/Home.module.css'

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

const Intro = styled.div`
  display: flex;
  align-items:center;
  margin: 2% 0;
`

const MyImg = styled.img`
  width:200px;
  height:200px;
  border-radius: 50%;
  object-fit:cover;
  margin-left:10%;
`

const IntroCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2%;
`

const IntroText = styled.span`
  font-size:22px;
  font-weight:600;
  margin: 10px 0;
`

const DesCont =styled.div`
  width: 50%;
  margin-left: 5vw;
  margin-bottom: 5vh;
`

const HeaderTxt = styled.div`
  font-size:32px;
  font-weight: 700;
`

const Line = styled.div`
  width:50%;
  height:1px;
  background-color: black;
  margin-top:2%;
  margin-bottom:2%;
`

const Text = styled.div`
  width: 80%;
  font-size:26px;
  font-weight: 400;
`

export default function About() {
  return (
    <Cont>
      <Navigation pageName={"About"} />
      <Intro>
        <MyImg src='Myself.jpg' />
        <IntroCont>
          <IntroText>Fangyuan Zhou(John)</IntroText>
          <IntroText>Front End Developer</IntroText>
          <IntroText>Graduated from BCIT</IntroText>
          <IntroText>Digital Design and Development program</IntroText>
        </IntroCont>
        <DesCont>
          <HeaderTxt>Profile</HeaderTxt>
          <Line></Line>
          <Text>Use various design theories and creative toolsets to create customer-focused visual design and websites. Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies. Goal-oriented Web Designer with a strong commitment to collaboration and solutions-oriented problem-solving.</Text>
        </DesCont>
      </Intro>
      <BottomBar />
    </Cont>
  )
}
