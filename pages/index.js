import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Top from './components/top'
import Project from './components/project_card'
import Bio from './components/bio'
import Footer from './components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <title>HH</title>
      </Head>
      <Top />
      <div className="untree_co-section untree_co-section-4 pb-0" id="portfolio-section">
         <div className="container">
            <div className="relative">
               <div className="loader-portfolio-wrap">
                  <div className="loader-portfolio"></div>
               </div>
            </div>
            <div id="portfolio-single-holder"></div>
            <div className="portfolio-wrapper">
               <div id="posts" className="row">
                  <Project img="/images/amazon.png" type={1}/>
                  <Project img="/images/sleep.PNG" type={1}/>
                  <Project img="/images/room.PNG" type={2}/>
                  <Project img="/images/inchat.PNG" type={0}/>
                  <Project img="/images/onlineExam.PNG" type={1}/>
                  <Project img="/images/family.jpg" type={0}/>
                  <Project img="/images/hhapp.PNG" type={0}/>
                  <Project img="/images/tictactoe.jpeg" type={2}/>
                  <Project img="/images/hh-blog.PNG" type={1}/>
                  <Project img="/images/Face-Recognition-Automatic-Attendance-System.png" type={1}/>
                  <Project img="/images/handwritten-digit.png" type={2}/>
                  <Project img="/images/wa-bot.PNG" type={1}/>
                  <Project img="/images/ytvideo-download.jpg" type={1}/>                  
               </div>
            </div>
          </div>
        </div>                
      <Bio/>
      <Footer />
    </div>
  )
}
