import Image from 'next/image'

export default function Footer(){
    return (        
      <div className="untree_co-section">
      <div className="container">
         <div className="row mb-5">
            <div className="col-lg-7 text-center mx-auto">
               <h2 className="section-heading gsap-reveal-hero mb-0"><strong>Social media</strong></h2>
               <p className="gsap-reveal-hero">stay in touch</p>
               <div className="wave gsap-reveal-hero">
                  <svg>
                     <path d="M10,10 L50,100 L90,50"></path>
                  </svg>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="0">
               <div className="post-entry">
                  <a href="https://github.com/hitchhicker007" target="_blank" className="thumb"><img src="images/gitjpg.jpg" alt="image" className="img-fluid" /></a>
                  <h3 className="text-center"><a href="https://github.com/hitchhicker007" target="_blank">Github</a></h3>
               </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
               <div className="post-entry">
                  <a href="https://www.youtube.com/channel/UCSADUZvNHq5Omiif_J0JJvw" target="_blank" className="thumb"><img src="images/yt.png" alt="image" className="img-fluid" /></a>
                  <h3 className="text-center"><a href="https://www.youtube.com/channel/UCSADUZvNHq5Omiif_J0JJvw" target="_blank">YouTube</a></h3>
               </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
               <div className="post-entry">
                  <a href="https://twitter.com/hitchhickerrr" target="_blank" className="thumb"><img src="images/twitter.jpg" alt="image" className="img-fluid" /></a>
                  <h3 className="text-center"><a href="https://twitter.com/hitchhickerrr" target="_blank">Twitter</a></h3>
               </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
               <div className="post-entry">
                  <a href="https://www.instagram.com/hitchhicker.tech/" target="_blank" className="thumb"><img src="images/insta-pic.jpg" alt="image" className="img-fluid" /></a>
                  <h3 className="text-center"><a href="https://www.instagram.com/hitchhicker.tech/" target="_blank">Instagram</a></h3>
               </div>
            </div>
         </div>
      </div>
   </div>
    )
}