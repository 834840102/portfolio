import { useState } from 'react'
import styled from 'styled-components'
import BottomBar from '../comps/bottom'
import Navigation from '../comps/navigation'
import styles from '../styles/Home.module.css'


const Cont =styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

const Intro = styled.div`
  width:100%;
  min-height:80vh;
  display:flex;
  justify-content: center;

`
const LeftCont = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 10vh;
  margin-right: 2vw;
`

const RigitCont = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
`

const Header = styled.h1`

`

const SubHead = styled.h3`

`

const Text = styled.div`
  font-size: 22px;
  font-weight: 400;
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

const Categories = styled.div`
display: flex;
justify-content: space-around;
align-items:center;
width: 100%;
margin: 2% 0;
`

const Item = styled.div`
  width:400px;
  height:500px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items:center;
  flex-direction: column;
`

const Description = styled.a`
  font-size:26px;
  font-weight: 400;
  color: skyblue;
  text-decoration: underline;
`

const ItemImg = styled.img`
  width:300px;
  height:400px;
  margin-top:2%;
`

const ItemImgDiff = styled.img`
  width:300px;
  height:300px;
`



export default function Home() {

  return (
    <Cont>
      <Navigation pageName={"Welcome to John Zhou portfolio"} />
      <Intro>
        <LeftCont>
          <Header>Hello,</Header>
        </LeftCont>
        <RigitCont>
          <SubHead>My name is Fangyuan Zhou. ( John Zhou )</SubHead>
          <Text>I am a web/mobile developer.</Text>
        </RigitCont>
      </Intro>
      <HeaderTxt>Profile</HeaderTxt>
      <Line></Line>
      <Categories>
            <Item>
              <Text>Frefurnish / Mobile App</Text>
                <Description target='_blank' href='https://github.com/saihajvir/Frefurnish' rel="noreferrer">Live View</Description>
                <a target='_blank' href='https://github.com/saihajvir/Frefurnish' rel="noreferrer">
                <ItemImgDiff src='/Frefurnish_round.png'  />
                </a>
            </Item> 
            <Item>
                <Text>Nutritional Spaces / Website</Text>
                <Description target='_blank' href='https://github.com/834840102/dynamic-finalproject-group5' rel="noreferrer">Live View</Description>
                <a target='_blank' href='https://github.com/834840102/dynamic-finalproject-group5' rel="noreferrer">
                <ItemImg src='/Logo3.png'/>
                </a>
            </Item>
            <Item>
              <Text>West Point Hotel / WordPress</Text>
                <Description target='_blank' rel="noreferrer" href='https://www.figma.com/proto/5y2Cpr6Jy9pWpWPIoBDYYf/West-Point-Hotel-Prototype-Website?node-id=211%3A2&scaling=min-zoom&page-id=211%3A1&starting-point-node-id=211%3A2'>Live View</Description>
                <a target='_blank' rel="noreferrer" href='https://www.figma.com/proto/5y2Cpr6Jy9pWpWPIoBDYYf/West-Point-Hotel-Prototype-Website?node-id=211%3A2&scaling=min-zoom&page-id=211%3A1&starting-point-node-id=211%3A2'>
                <ItemImg src='Frame.png'/>
                </a>
            </Item>
        </Categories>
      <BottomBar />  
    </Cont>
  )
}
