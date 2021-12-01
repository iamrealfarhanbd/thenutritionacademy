const HomeCategories = ({courses}) => {
    const crs = [
        {
           id: 1,
           title: 'Testy Delicious Food Recipes for Lunch Tellus Eleifend' ,
           studnets: 25,
           lessons: 6,
           price: '22.20',
           thumb: ''
        },
        {
           id: 2,
           title: 'Healthy Tuna Salads for Fast Lunches' ,
           studnets: 25,
           lessons: 6,
           price: '22.20',
           thumb: ''
        },
        {
           id: 3,
           title: 'Boozy Halloween Drinks for the Grown-Ups' ,
           studnets: 20,
           lessons: 5,
           price: '22.20',
           thumb: ''
        }
    ]
    return (
          <div id="rs-popular-courses" className="rs-popular-courses style5 pt-100 pb-100 md-pt-70 md-pb-70">
          <div className="container">
            <div className="sec-title3 text-center mb-45">
              <div className="sub-title primary"> Popular Courses</div>
              <h2 className="title mb-0">Explore our Diet &amp; Nutrition Courses</h2>
            </div>

            <div className="row">
            
                {
                    crs && crs.map(course => 
                        <div key={course.id} className="col-lg-4 col-md-6 mb-30">
                            <div className="courses-item">
                            <div className="courses-grid">
                                <div className="img-part">
                                <a href="#"><img src="assets/images/courses/home8/1.jpg" alt="" /></a>
                                </div>
                                <div className="content-part">
                                <div className="course-price">
                                    <span className="price">${course.price}</span>
                                </div>
                                <h3 className="title">{course.title}<a href="#"></a></h3>
                                <ul className="meta-part">
                                    <li className="user">
                                    <i className="fa fa-user" />
                                    {course.studnets} Students                                        
                                    </li>
                                    <li className="user">
                                    <i className="fa fa-file" />
                                    {course.lessons} Lessons                                        
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>  
                    )
                }

              {/* <div className="col-lg-4 col-md-6 mb-30">
                <div className="courses-item">
                  <div className="courses-grid">
                    <div className="img-part">
                      <a href="#"> <img src="assets/images/courses/home8/2.jpg" alt="" /></a>
                    </div>
                    <div className="content-part">
                      <div className="course-price">
                        <span className="price">$22.00</span>
                      </div>
                      <h3 className="title"><a href="#">Healthy Tuna Salads for Fast Lunches</a></h3>
                      <ul className="meta-part">
                        <li className="user">
                          <i className="fa fa-user" />
                          30 Students                                        
                        </li>
                        <li className="user">
                          <i className="fa fa-file" />
                          5 Lessons                                        
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>  

              <div className="col-lg-4 col-md-6 mb-30">
                <div className="courses-item">
                  <div className="courses-grid">
                    <div className="img-part">
                      <a href="#"><img src="assets/images/courses/home8/3.jpg" alt="" /></a>
                    </div>
                    <div className="content-part">
                      <div className="course-price">
                        <span className="price">$22.00</span>
                      </div>
                      <h3 className="title"><a href="#">Boozy Halloween Drinks for the Grown-Ups</a></h3>
                      <ul className="meta-part">
                        <li className="user">
                          <i className="fa fa-user" />
                          30 Students                                        
                        </li>
                        <li className="user">
                          <i className="fa fa-file" />
                          6 Lessons                                        
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>  

              <div className="col-lg-4 col-md-6 md-mb-30">
                <div className="courses-item">
                  <div className="courses-grid">
                    <div className="img-part">
                      <a href="#"><img src="assets/images/courses/home8/4.jpg" alt="" /></a>
                    </div>
                    <div className="content-part">
                      <div className="course-price">
                        <span className="price">$22.00</span>
                      </div>
                      <h3 className="title"><a href="#">Classic Make-Ahead Thanks Giving Casseroles</a></h3>
                      <ul className="meta-part">
                        <li className="user">
                          <i className="fa fa-user" />
                          15 Students                                        
                        </li>
                        <li className="user">
                          <i className="fa fa-file" />
                          5 Lessons                                        
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>  

              <div className="col-lg-4 col-md-6 sm-mb-30">
                <div className="courses-item">
                  <div className="courses-grid">
                    <div className="img-part">
                      <a href="#"><img src="assets/images/courses/home8/5.jpg" alt="" /></a>
                    </div>
                    <div className="content-part">
                      <div className="course-price">
                        <span className="price">$22.00</span>
                      </div>
                      <h3 className="title"><a href="#">Ingredient Recipes for Nearly-Effortless Meals</a></h3>
                      <ul className="meta-part">
                        <li className="user">
                          <i className="fa fa-user" />
                          20 Students                                        
                        </li>
                        <li className="user">
                          <i className="fa fa-file" />
                          10 Lessons                                        
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>  

              <div className="col-lg-4 col-md-6">
                <div className="courses-item">
                  <div className="courses-grid">
                    <div className="img-part">
                      <a href="#"><img src="assets/images/courses/home8/6.jpg" alt="" /></a>
                    </div>
                    <div className="content-part">
                      <div className="course-price">
                        <span className="price">$22.00</span>
                      </div>
                      <h3 className="title"><a href="#">Vegetarian Skillet Dinners for Easy Weeknight Meals</a></h3>
                      <ul className="meta-part">
                        <li className="user">
                          <i className="fa fa-user" />
                          30 Students                                        
                        </li>
                        <li className="user">
                          <i className="fa fa-file" />
                          5 Lessons                                        
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
    )
}


export default HomeCategories;

  