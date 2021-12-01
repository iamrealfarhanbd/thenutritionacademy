const HomeEvent = ({blogs}) => {
  const blg = [
    {
      id: 1,
      title: 'Spicy Quince And Cranberry Chutney',
      date: 'July 24, 2020 ',
      category: 'new margonia'
    },
    {
      id: 2,
      title: 'Essential Fall Fruits That Aren’t Apples',
      date: 'July 24, 2020 ',
      category: 'new margonia'
    },
    {
      id: 3,
      title: 'Persimmon, Pomegranate, And Massaged Kale Salad',
      date: 'July 24, 2020 ',
      category: 'new margonia'
    }
  ]
    return (
        <>
        <div className="rs-event home8-style1 event-bg pt-100 pb-100 md-pt-70 md-pb-70">
          <div className="container">
            <div className="sec-title3 text-center">
              <div className="sub-title uppercase mb-10">
                Latest Events
              </div>
              <h2 className="title mb-30">Latest News and Blogs</h2>
            </div>
            <div className="rs-carousel owl-carousel" 
              data-loop="true" 
              data-items={3} 
              data-margin={30} 
              data-autoplay="true"
              data-autoplay-timeout={7000} 
              data-smart-speed={2000} 
              data-dots="true" 
              data-nav="false" 
              data-nav-speed="false" 
              data-mobile-device={1} 
              data-mobile-device-nav="false" 
              data-mobile-device-dots="true" 
              data-ipad-device={2} 
              data-ipad-device-nav="false" 
              data-ipad-device-dots="true" 
              data-ipad-device2={1} 
              data-ipad-device-nav2="false" 
              data-ipad-device-dots2="true"
              data-md-device={3} 
              data-md-device-nav="false"
              data-md-device-dots="true"
            >
              {blg && blg.map(blog =>
                  <div className="event-item">
                    <div className="event-short">
                      <div className="featured-img">
                        <img src="assets/images/event/1.jpg" alt="Image" />
                        <div className="dates">
                          {blog.date} 
                        </div>
                      </div>
                      <div className="content-part">
                        <h4 className="title"><a href="#">{blog.title}</a></h4>
                        <div className="time-sec">
                          <div className="timesec"><i className="fa flaticon-clock" /> </div>
                          <div className="address"><i className="fa fa-map-o" /> {blog.category}</div>
                        </div>
                      </div> 
                    </div>
                  </div>
              )}


              <div className="event-item">
                <div className="event-short">
                  <div className="featured-img">
                    <img src="assets/images/event/2.jpg" alt="Image" />
                    <div className="dates">
                      July 24, 2020  
                    </div>
                  </div>
                  <div className="content-part">
                    <h4 className="title"><a href="#">Persimmon, Pomegranate, And Massaged Kale Salad</a></h4>
                    <div className="time-sec">
                      <div className="timesec"><i className="fa flaticon-clock" /> 11:00 AM -  
                        03:00 AM </div>
                      <div className="address"><i className="fa fa-map-o" /> New Margania</div>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="event-item">
                <div className="event-short">
                  <div className="featured-img">
                    <img src="assets/images/event/3.jpg" alt="Image" />
                    <div className="dates">
                      July 24, 2020  
                    </div>
                  </div>
                  <div className="content-part">
                    <h4 className="title"><a href="#">Essential Fall Fruits That Aren’t Apples</a></h4>
                    <div className="time-sec">
                      <div className="timesec"><i className="fa flaticon-clock" /> 11:00 AM -  
                        03:00 AM </div>
                      <div className="address"><i className="fa fa-map-o" /> New Margania</div>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="event-item">
                <div className="event-short">
                  <div className="featured-img">
                    <img src="assets/images/event/4.jpg" alt="Image" />
                    <div className="dates">
                      July 24, 2020  
                    </div>
                  </div>
                  <div className="content-part">
                    <h4 className="title"><a href="#">Job Seekers From Overcoming Failure</a></h4>
                    <div className="time-sec">
                      <div className="timesec"><i className="fa flaticon-clock" /> 11:00 AM -  
                        03:00 AM </div>
                      <div className="address"><i className="fa fa-map-o" /> New Margania</div>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="event-item">
                <div className="event-short">
                  <div className="featured-img">
                    <img src="assets/images/event/5.jpg" alt="Image" />
                    <div className="dates">
                      July 24, 2020  
                    </div>
                  </div>
                  <div className="content-part">
                    <h4 className="title"><a href="#">Best Technology Graduation Ceremony.</a></h4>
                    <div className="time-sec">
                      <div className="timesec"><i className="fa flaticon-clock" /> 11:00 AM -  
                        03:00 AM </div>
                      <div className="address"><i className="fa fa-map-o" /> New Margania</div>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="event-item">
                <div className="event-short">
                  <div className="featured-img">
                    <img src="assets/images/event/6.jpg" alt="Image" />
                    <div className="dates">
                      July 24, 2020  
                    </div>
                  </div>
                  <div className="content-part">
                    <h4 className="title"><a href="#">Educational Technology and Mobile Learning</a></h4>
                    <div className="time-sec">
                      <div className="timesec"><i className="fa flaticon-clock" /> 11:00 AM -  
                        03:00 AM </div>
                      <div className="address"><i className="fa fa-map-o" /> New Margania</div>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="event-item">
                <div className="event-short">
                  <div className="featured-img">
                    <img src="assets/images/event/7.jpg" alt="Image" />
                    <div className="dates">
                      July 24, 2020  
                    </div>
                  </div>
                  <div className="content-part">
                    <h4 className="title"><a href="#">Job Seekers From Overcoming Failure</a></h4>
                    <div className="time-sec">
                      <div className="timesec"><i className="fa flaticon-clock" /> 11:00 AM -  
                        03:00 AM </div>
                      <div className="address"><i className="fa fa-map-o" /> New Margania</div>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="event-item">
                <div className="event-short">
                  <div className="featured-img">
                    <img src="assets/images/event/8.jpg" alt="Image" />
                    <div className="dates">
                      July 24, 2020  
                    </div>
                  </div>
                  <div className="content-part">
                    <h4 className="title"><a href="#">Educavo Learning Gala Day For Kids</a></h4>
                    <div className="time-sec">
                      <div className="timesec"><i className="fa flaticon-clock" /> 11:00 AM -  
                        03:00 AM </div>
                      <div className="address"><i className="fa fa-map-o" /> New Margania</div>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="event-item">
                <div className="event-short">
                  <div className="featured-img">
                    <img src="assets/images/event/9.jpg" alt="Image" />
                    <div className="dates">
                      July 24, 2020  
                    </div>
                  </div>
                  <div className="content-part">
                    <h4 className="title"><a href="#">Best Technology Graduation Ceremony.</a></h4>
                    <div className="time-sec">
                      <div className="timesec"><i className="fa flaticon-clock" /> 11:00 AM -  
                        03:00 AM </div>
                      <div className="address"><i className="fa fa-map-o" /> New Margania</div>
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

export default HomeEvent;