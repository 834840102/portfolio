import styled from "styled-components"
import { useRouter } from "next/router"

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 340px;
    background-color: #66BAE9;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

const NavCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const NavNames = styled.li`
    padding: 30px;
    background-color: #66BAE9;
    color: #fff;
    font-size: 20px;
    list-style: none;
    cursor: pointer;
`

const IntroText = styled.div`
    display: flex;
    color: #fff;
    font-size: 36px;
    font-weight: 500;
    padding-left:50px;
`;

const Navigation = ({
    pageName="",
    index = "/",
    about = "/about",
}) =>{

    const r = useRouter()
    return (
        <Cont>
            <div></div>
            <NavCont>
                <NavNames onClick={()=>r.push(index)}>Home</NavNames>
                <NavNames onClick={()=>r.push(about)}>About</NavNames>
            </NavCont>
            <IntroText>{pageName}</IntroText>
        </Cont>
    )
}

export default Navigation;