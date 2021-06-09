import Image from 'next/image'

export default function Project({ url,name,desc,type,img }){

    function switchCase(data){
        switch (data) {
            case 0: //portrait
                return <Image src={img} layout='responsive' height={600} width={300} />
            
            case 1: // landscape
                return <Image src={img} layout='responsive' height={400} width={700} />                

            case 2: //square
                return <Image src={img} layout='responsive' height={500} width={500} />
        
            default:
                break;
        }
    }

    return (
        <div>
            <div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="" target="_blank" className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="1">
                <div className="overlay">
                    <span className="wrap-icon icon-link2"></span>
                    <div className="portfolio-item-content">
                        {/* <h3>{name}</h3>
                        <p>{desc}</p> */}
                    </div>
                </div>
                {/* {portrait ? <Image src={img} layout='responsive' height={600} width={300} /> :
                <Image src={img} layout='responsive' height={400} width={700} />} */}
                {switchCase(type)}
                </a>
            </div>
        </div>
    )
}
