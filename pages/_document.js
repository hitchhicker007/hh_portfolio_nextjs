import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head >
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&amp;family=Roboto+Mono:wght@400;500;700&amp;display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="fonts/icomoon/style.css" />
        <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />
        <link rel="stylesheet" href="css/aos.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery-3.4.1.min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/jquery.animateNumber.min.js"></script>
          <script src="/js/jquery.waypoints.min.js"></script>
          <script src="/js/jquery.fancybox.min.js"></script>
          <script src="/js/aos.js"></script>
          <script src="/js/wave-animate.js"></script>
          <script src="/js/circle-progress.js"></script>
          <script src="/js/imagesloaded.pkgd.js"></script>
          <script src="/js/isotope.pkgd.min.js"></script>
          <script src="/js/jquery.easing.1.3.js"></script>
          <script src="/js/TweenMax.min.js"></script>
          <script src="/js/ScrollMagic.min.js"></script>
          <script src="/js/scrollmagic.animation.gsap.min.js"></script>
          <script src="/js/custom.js"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument