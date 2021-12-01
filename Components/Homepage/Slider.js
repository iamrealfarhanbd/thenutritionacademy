const HomeSlider = () => {
    return (
        <>
     <div className="rs-slider style2">
        <div className="rs-carousel owl-carousel" data-loop="true" data-items={1} data-margin={0} data-autoplay="false" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={1} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={1} data-ipad-device-nav2="true" data-ipad-device-dots2="false" data-md-device={1} data-md-device-nav="true" data-md-device-dots="false">
          <div className="slide-part">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-last">
                  <div className="img-part">
                    <img src="assets/images/slider/home8/1.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 pr-50">
                  <div className="content">
                    <div className="sub-title wow bounceInLeft" data-wow-delay="300ms" data-wow-duration="2000ms">Good Food Good Life</div>
                    <h1 className="title wow fadeInRight" data-wow-delay="600ms" data-wow-duration="2000ms">Cooking Start Learing recipes to Cook today</h1>
                    <div className="sl-btn wow fadeInUp" data-wow-delay="900ms" data-wow-duration="2000ms">
                      <a className="readon orange-btn" href="#">Get Started</a>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>    
          <div className="slide-part">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-last">
                  <div className="img-part">
                    <img src="assets/images/slider/home8/2.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 pr-80">
                  <div className="content">
                    <div className="sub-title wow bounceInLeft" data-wow-delay="300ms" data-wow-duration="2000ms">Good Food Good Life</div>
                    <h1 className="title wow fadeInRight" data-wow-delay="600ms" data-wow-duration="2000ms">Be Happy healthy And Successful Simplifited</h1>
                    <div className="sl-btn wow fadeInUp" data-wow-delay="900ms" data-wow-duration="2000ms">
                      <a className="readon orange-btn" href="#">Discover More</a>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default HomeSlider;