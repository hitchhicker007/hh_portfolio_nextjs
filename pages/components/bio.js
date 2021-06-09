import Image from 'next/image'

export default function Bio(){
    return (

        <div className="untree_co-section pb-0" id="about-section">
         <div className="container">
            <div className="row mb-4">
               <div className="col-lg-6 text-left">
                  <h2 className="section-heading gsap-reveal-hero mb-0"><strong>About</strong></h2>
                  <p className="gsap-reveal-hero">wassupp, As you know I'm very passionate about coding along with gaming. So yeh, you can say day by coder night by a gamer.</p>
                  <div className="wave gsap-reveal-hero">
                     <svg>
                        <path d="M10,10 L50,100 L90,50"></path>
                     </svg>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-6 position-relative">
                  <div className="experience-wrap gsap-reveal-hero">
                     <div className="experience">
                        <a href="https://drive.google.com/file/d/1_xkVXjPWB3Zzw40K6w2ANuVhxENOtGyj/view?usp=sharing" target="_blank"><span className="icon-arrow_forward"></span> Download my CV</a>
                     </div>
                  </div>
                  <figure className="dotted-bg gsap-reveal-img">
                     <Image src="/images/about_pic.jpg" alt="Parth Panchal" layout="responsive" width={900} height={1100} />
                  </figure>
               </div>
               <div className="col-lg-6 pl-md-5">
                  <h3 className="text-black h5 font-weight-bold mb-3 gsap-reveal-hero">Bio</h3>
                  <p className="gsap-reveal-hero">Well, my real name is Parth Panchal. I'm a computer engineer from India. I've completed tons of projects and will complete tons more. I believe that code is a tool that converts my imagination into reality. Apart from that, I'm very passionate about gaming and handling my youtube channel in my free time. </p>
                  <p className="gsap-reveal-hero ">I'm trying to make my future in the world of AI and ML. If you are also kind of me and wanna do something stormy. Then, two heads are better than one.</p>
                  <p className="gsap-reveal-hero"><a href="mailto:phpanchal842001@gmail.com" target="_blank" className="btn btn-black">mail me</a></p>
               </div>
            </div>
         </div>
      </div>

    )
}
