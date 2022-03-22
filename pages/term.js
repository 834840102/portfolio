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

export default function TermOfUse () {
    return <Cont>
        <Navigation pageName={"Term Of Use"} />
        <Header>TERMS OF USE</Header>
        <Text>&quot;John Zhou&quot; welcomes you to its Web site. Using this Web site indicates your consent and agreement to be bound by this User Agreement and any policies or practices contained herein.</Text>
        <Text>All content and information (including, but not limited to, code, graphics, photos, guides, promotional materials, press releases, articles, plans, schedules, illustrations, audio clips, and video clips) displayed on this Web site is owned or licensed by &quot;John Zhou&quot; and its respective owners, all content on this site is protected by copyright and other intellectual property laws. Any names, titles, logos and designs displayed on the Web site that contain v, titles, logos, or brands are the exclusive property and trademarks of &quot;John Zhou&quot; or its members. You may not modify, publish, transmit, transfer, sell, reproduce, re-post or alter any such content. Sowmya Malur hereby grants you a personal, non-exclusive, non-assignable and non-transferable license to use and display, for home, non-commercial and personal use only, one copy of any content that you may download from this Web site. Any other use or reproduction of this Web site, in whole or in part, will be considered to be a violation of &quot;John Zhou&quot; intellectual property rights.</Text>
        <Text>Your use of this Web site constitutes your agreement to abide by these terms of use included in this online User Agreement. &quot;John Zhou&quot; reserves the right to modify, alter or otherwise update this User Agreement at any time.</Text>
        <Text>If you disagree with any of the above terms of use or any part of the User Agreement, do not use this Web site.</Text>
        <Text>Last Update:</Text>
        <Text>Mar 07, 2021</Text>
        <Text>John Zhou, Front-End Developer, BCIT</Text>
        <BottomBar />
    </Cont>
}