const HomeNewsletter = () => {
    return (
        <>
      <div className="rs-newsletter home8-style1 bg7 pt-100 pb-100 md-pt-70 md-pb-70">
        <div className="container">
          <div className="content-wrap text-center">
            <div className="sec-title3 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
              <div className="sub-title"> Subscribe Newsletter</div>
              <h2 className="title">Subscribe To Our Newsletter!</h2>
            </div> 
            <form className="newsletter-form">
              <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
              <button type="submit">Submit</button> 
            </form>                        
          </div>
        </div>
      </div>
        </>
    )
}
export default HomeNewsletter;