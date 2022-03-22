import styled from 'styled-components'
import BottomBar from '../comps/bottom'
import Navigation from '../comps/navigation'

const Cont = styled.div`
    
`

const Header = styled.h1`
    margin-left: 10%;
`

const Text = styled.p`
    margin-left: 10%;
`

const UlList = styled.ul`
    margin-left: 15%;
`

const UlItem = styled.li`

`

export default function Policy() {
    return (
        <Cont>
            <Navigation pageName={"Privacy Policy"} />
            <Header>PRIVACY POLICY</Header>
            <Text>This policy applies to &quot;John Zhou&quot; Web site only. It is designed to inform you of how and why &quot;John Zhou&quot; gathers personal and non-personal information about you. This policy complies with provisions of the British Columbia Freedom of Information and Protection of Privacy Act.</Text>
            <Text>This may be Web site connected by &quot;hyperlinks&quot; to other Web sites. We are not responsible in any way for the privacy practices on other Web sites and suggest that you review the privacy policies on those linked Web sites before using them.</Text>
            <Text>We are accountable for this Privacy Policy and these practices on this Web site, including the Privacy Code set out below. If you have any questions or concerns regarding the privacy practices on this Web site, please e-mail us.</Text>
            <Text>What Information Is Collected?</Text>
            <Text>&quot;John Zhou&quot; collects two kinds of information from this Web site</Text>
            <Text>(A) Your voluntarily provided personal information. (B) Anonymous information about your visit</Text>
            <Text>A. Your Personal Information:</Text>
            <Text>During normal Web site usage, you can visit this site without communicating any personal information. However, to make use of certain features on this site, such as gift certificates, promotions, subscriptions or newsletters, users may be asked to register with &quot;John Zhou&quot; Web site. As part of this voluntary registration, &quot;John Zhou&quot; may request contact information (such as name, mailing address, e-mail address, etc.) and other data required for operating these services. The only way we can collect personal information from you is if you voluntarily provide it. By voluntarily providing this personal information to us by sending us a comment or suggestion, by entering a contest that is posted on this Web site, you will be consenting to the collection, use and distribution of your personal information by &quot;John Zhou&quot; for the purposes set out. You are under no obligation to provide us with personal information and can access and enjoy many parts of &quot;John Zhou&quot; Web site without providing us any personal information. Among other things, the following is a representative list of reasons we may ask for your personal information:</Text>
            <UlList>
                <UlItem>To run contests, select entrants, and choose prize winners;</UlItem>
                <UlItem>To respond to your questions or the comments you e-mail to us;</UlItem>
                <UlItem>To provide you with newsletters, bulletins or other information about our design or communication activities.</UlItem>
                <UlItem>To keep aggregate information on Web site use.</UlItem>
            </UlList>
            <Text>B. Anonymous Information About Your Visit:</Text>
            <Text>When you visit this site, information about your visit (e.g. how you navigate the site) may be collected and stored. This information may include the length of your visit, the date and time of your visit, the pages you look at and the sites you visit before and after leaving this site. It does not include personally identifiable information such as your name, mailing or e-mail address or telephone number. We use this non-identifiable and aggregate information to better design this Web site and develop an efficient Web marketing plan. We also may share this information with our Web designer, board of directors and sponsors.</Text>
            <Text>&quot;John Zhou&quot; may collect the following non-identifiable information when you visit this Web site:</Text>
            <UlList>
                <UlItem>Your Internet Service Provider (ISP)</UlItem>
                <UlItem>Time of your visit</UlItem>
                <UlItem>Pages you visited</UlItem>
                <UlItem>Web Browser Used</UlItem>
            </UlList>
            <Text>What If I Do Not Agree With this Privacy Policy?</Text>
            <Text>By visiting this Web site and voluntarily providing personal information to &quot;John Zhou&quot; Web site, you agree to the terms of this online User Agreement and the Privacy Policy contained herein. However, We welcome your comments and/or suggestions on improving this Web site and policies.</Text>
            <Text>John Zhou, Digital Design and Development program, BCIT</Text>
            <Text>Mar 08, 2021</Text>
            <BottomBar />
        </Cont>
    )
}