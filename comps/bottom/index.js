import { useRouter } from "next/router";
import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { bgcolor,textcolor } from '../variables'

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  min-height:30vh;
  background:${props=>props.background};
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

const MainCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
`

const Icons = styled.img`
  cursor: pointer;
  width:${props => props.w};
  height:50px;
  padding: 0 20px;
`

const SignText = styled.div`
  font-size:16px;
  font-weight: 400;
`

const PolicyCont = styled.div`
  max-height: 200px;
  display: flex;
  margin-right:2%;
`

const Term = styled.div`
  cursor: pointer;
  padding-right: 5px;
  white-space:nowrap;
  font-size:22px;
  font-weight: 400;
  color:${props=>props.color};
  :hover {
		color: #fff;
	}
`


const Break = styled.div`
  width: 1px;
  height: 30px;
  background-color: #000;
`

const Policy = styled.div`
  cursor: pointer;
  padding-left: 5px;
  white-space:nowrap;
  font-size:22px;
  font-weight: 400;
  color:${props=>props.color};
  :hover {
		color: #fff;
	}
`
const MidCont = styled.div`
  min-height: 25vh;
  display:flex;
  flex-direction: column;
  algin-items:center;
  justify-content: space-around;
  margin-right:5%;
`

const InputCont = styled.div`
  display: flex;
  align-items: center;
`

const Des = styled.p`
  font-size:26px;
  font-weight: 400;
  margin-right: 20px;
  color:${props=>props.color};
`

const Input = styled.input`
  width: 500px;
  height: 80px;
  border-radius: 10px;
`
const Button = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  width: 100px;
  height: 60px;
  border: 1px solid #000;
  background: #fcfcfc;
  margin-left: 20px;
`

export default function BottomBar() {
  const r = useRouter()
  const {theme} = useTheme();
  
  return <Cont background={bgcolor[theme]}>
    <MainCont>

      <div>
        <a target='_blank' href='https://www.facebook.com/profile.php?id=100004292283632'><Icons src='/Facebook_icon.png' w={50} /></a>
        <a target='_blank' href='https://www.linkedin.com/in/fangyuan-john-zhou-101473229/'><Icons src='/LinkedIn_icon_circle.svg.png' w={50} /></a>
        <a target='_blank' href='https://twitter.com/johnzhou97'><Icons src='/Twitter-logo.png' w={56} /></a>
      </div>
      <MidCont>
        <InputCont>
          <Des color={textcolor[theme]}>Email:</Des>
          <Input type={'email'} placeholder='Email' />
          <Button>Send</Button>
        </InputCont>
      <PolicyCont>
        <Term onClick={() => r.push("/term")} color={textcolor[theme]}>Terms of Use</Term>
        <Break></Break>
        <Policy onClick={() => r.push("/policy")} color={textcolor[theme]}>Privacy Policy</Policy>
      </PolicyCont>
      </MidCont>
    </MainCont>
        <SignText>??Copyright 2022. John Zhou. BCIT Front End Developer Portfolio.</SignText>
  </Cont>
}
//add a email button 