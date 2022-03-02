import Head from 'next/head'
import Testing from './testing'
import Section1 from './section1/section1'
import Introtalkform from './IntoTalkForm/IntroTalkForm'

export default function Home() {
  return (
    <div className="container">
      {/* <h1>hiiiiiiiiiiii broooooo</h1> */}
      {/* <Testing /> */}
      {/* <Section1 /> */}
      <Introtalkform />
    </div>
  )
}
