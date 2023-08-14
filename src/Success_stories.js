import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Success_stories = () =>{
    return(
        <div>

            {/* ................................SUCCESS STORIES.................................... */}

            <section className="success-stories">
                <div className="success_container">
                    <div className="success_row">
                        <div className="success-h-main">
                            <div className="success-h">
                                <h4 className="success-heading">Our latest success stories</h4>
                            </div>
                        </div>
                        <Swiper 
                        modules= {[Navigation, Pagination,Scrollbar]}
                        spaceBetween={50}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className="success-story-content">
                                    <div>
                                        <img className="success-img" src="/image/teacher.png" alt="lancashire teaching agency"/>
                                        
                                    </div>
                                    <div className="success-content">
                                        <div className="client-tag">C L I E N T</div>
                                        <h3 className="success-content-h3">Lancashire Teaching Agency</h3>
                                        <h4 className="success-content-h4">Lancashire County Council (LCC) joined forces with Reed to establish the Lancashire Teaching Agency (LTA), combating teacher shortages, while helping to drive forward school standards and educational attainment.</h4>
                                        <button className="success-button">Read more</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="success-slides">
                                    <div>
                                        <img className="success-img" src="/image/shutterstock.png" alt="Bespoke IT Solutions Ltd"/>
                                        
                                    </div>
                                    <div className="success-content">
                                        <div className="client-tag">C L I E N T</div>
                                        <h3 className="success-content-h3">Bespoke IT Solutions Ltd</h3>
                                        <h4 className="success-content-h4">Over the last three years, Reed has built up a strong relationship with Bespoke IT Solutions Ltd, sourcing high-calibre tech professionals for 20 different roles.</h4>
                                        <button className="success-button">Read more</button>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* <SwiperSlide>
                                <div className="success-slides">
                                    <div>
                                        <img className="success-img" src="/image/dentist.png" alt="Oncologica UK"/>
                                        
                                    </div>
                                    <div className="success-content">
                                        <div className="client-tag">C L I E N T</div>
                                        <h3 className="success-content-h3">Oncologica UK</h3>
                                        <h4 className="success-content-h4">Reed has worked closely with Oncologica to secure hundreds of professionals to support high volumes of Covid and cancer testing throughout the pandemic.</h4>
                                        <button className="success-button">Read more</button>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="success-slides">
                                    <div>
                                        <img className="success-img" src="/image/female-university.png" alt="Oldham College"/>
                                        
                                    </div>
                                    <div className="success-content">
                                        <div className="client-tag">C L I E N T</div>
                                        <h3 className="success-content-h3">Oldham College</h3>
                                        <h4 className="success-content-h4">Reed sourced an initial ten temporary learning support assistants (LSAs) for Oldham College, providing such a great service that the college continues to work with us for its ongoing recruitment needs.</h4>
                                        <button className="success-button">Read more</button>

                                    </div>
                                </div>

                            </SwiperSlide> */}
                        </Swiper>
                        
                    </div>

                </div>

            </section>

            {/* .................................DOTTED LIST ........................................... */}

            {/* <section className="list-dotted-col">
                <div className="list-dotted-container">
                    <div className="list-dotted-container-main">
                        <div className="list-dotted-main-h">
                            <h2 className="title_h3">What's happening</h2>
                        </div>
                        <div className="list-dotted-content">
                            <div className="content-col">
                                <div className="content-col-box">
                                    <div>
                                        <img className="content-col-img" src="/image"/>
                                    </div>
                                    <div className="content-col-content">
                                        <div></div>
                                        <div>
                                            <h3 className="list_card_h">Reed’s UK salary guides 2023</h3>
                                        </div>
                                        <div>
                                            <p className="list_card_p">Use our salary guides to compare the UK average salary by sector - a resource for both employers and employees. Download the 2023 salary guides here.</p>
                                        </div>
                                        <div>
                                        <a className="list_card_a" href="" >Read more &#8674;</a>
                                        </div>

                                    </div>

                                </div>
                                
                            </div>

                            

                            <div className="content-col-col2">
                                <div className="content-col-box">
                                    <div>
                                        <img className="content-col-img" src="/image"/>
                                    </div>
                                    <div className="content-col-content">
                                        <div></div>
                                        <div>
                                            <h3 className="list_card_h">Inclusion at work 2022 - CIPD in partnership with Course Workzone</h3>
                                        </div>
                                        <div>
                                            <p className="list_card_p">This survey report, in partnership with the CIPD, examines what UK employers are currently doing to improve inclusion and diversity (I&D) in their workplaces and the practices they have found to be effective.</p>
                                        </div>
                                        <div>
                                        <a className="list_card_a" href="" >Read more &#8674;</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="content-col">
                                <div className="content-col-box">
                                    <div>
                                        <img className="content-col-img" src="/image"/>
                                    </div>
                                    <div className="content-col-content">
                                        <div></div>
                                        <div>
                                            <h3 className="list_card_h">The rise of reward specialist</h3>
                                        </div>
                                        <div>
                                            <p className="list_card_p">Our panel of experts explored why reward specialists are more in demand than ever and how companies can ensure they are offering the right reward and benefits packages to suit their employees.</p>
                                        </div>
                                        <div>
                                        <a className="list_card_a" href="" >Read more &#8674;</a>
                                        </div>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>    
                </div>
            </section> */}

            {/* ...................................FIND OFFICE..................................... */}

            <section className="find-office">
                <div className="find-office-container">
                    <div className="find-office-container-main">
                        <div className="find-office-h">
                            <h2 className="find-office-h-main">Find a Course Workzone office</h2>
                        </div>
                        <div className="find-office-p">
                            <p className="find-office-p-mains">Our national coverage allows us to offer a recruitment service taylored to your needs, with accurate local market intelligence on salaries, competitors and the best professionals who can help your business thrive.</p>
                        </div>
                        <div className="find-office-col">
                            <div className="selector-link">
                                <a className="selector-link-select" href="">&#8674;  East Anglia</a>
                                <a className="selector-link-select" href="">&#8674;  North West</a>
                                <a className="selector-link-select" href="">&#8674;  Wales</a>
                            </div>
                            <div className="selector-link">
                                <a className="selector-link-select" href="">&#8674;  North East</a>
                                <a className="selector-link-select" href="">&#8674;  Netherland</a>
                                <a className="selector-link-select" href="">&#8674;  Northern Ireland</a>    
                            </div>
                            <div className="selector-link">
                                <a className="selector-link-select" href="">&#8674;  London</a>
                                <a className="selector-link-select" href="">&#8674;  South Asia</a>
                                <a className="selector-link-select" href="">&#8674;  Yokshire & Humberside</a>    
                            </div>
                            <div className="selector-link">
                                <a className="selector-link-select" href="">&#8674;  Midlands</a>
                                <a className="selector-link-select" href="">&#8674;  South West</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* ......................................FOOTER..................................... */}

            <section className="">
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-container-content">
                            <div className="footer-container-head">
                                <div className="footer-logo">
                                    <img className="course-workzone-logo" src="/image/cwz.png" alt="Course Workzone"/>
                                </div>
                                <div className="footer-rating-card">
                                    <p className="footer-rating-card-p"><b>Excellent</b> 4.6 out of 5based on 700 reviews  Trustpilot</p>
                                </div>

                            </div>
                            <div className="footer-main-row">
                                <div className="footer-main-col1">
                                    <div className="footer-col1-row">
                                        <h4 className="footer-col1-row-h">For employers</h4>
                                        <a className="footer-col1-row-link" href="">Authorise timesheets</a>
                                        <a className="footer-col1-row-link" href="">Permanent recruitment</a>
                                        <a className="footer-col1-row-link" href="">Temporary recruitment</a>
                                        <a className="footer-col1-row-link" href="">Executive search</a>
                                        <a className="footer-col1-row-link" href="">All services</a>
                                    </div>
                                    <div className="footer-col1-row">
                                        <h4 className="footer-col1-row-h">For employers</h4>
                                        <a className="footer-col1-row-link" href="">Authorise timesheets</a>
                                        <a className="footer-col1-row-link" href="">Permanent recruitment</a>
                                        <a className="footer-col1-row-link" href="">Temporary recruitment</a>
                                        <a className="footer-col1-row-link" href="">Executive search</a>
                                        <a className="footer-col1-row-link" href="">All services</a>
                                    </div>
                                    <div className="footer-col1-row">
                                        <h4 className="footer-col1-row-h">For employers</h4>
                                        <a className="footer-col1-row-link" href="">Authorise timesheets</a>
                                        <a className="footer-col1-row-link" href="">Permanent recruitment</a>
                                        <a className="footer-col1-row-link" href="">Temporary recruitment</a>
                                        <a className="footer-col1-row-link" href="">Executive search</a>
                                        <a className="footer-col1-row-link" href="">All services</a>
                                    </div>
                                    <div className="footer-col1-row">
                                        <h4 className="footer-col1-row-h">For employers</h4>
                                        <a className="footer-col1-row-link" href="">Authorise timesheets</a>
                                        <a className="footer-col1-row-link" href="">Permanent recruitment</a>
                                        <a className="footer-col1-row-link" href="">Temporary recruitment</a>
                                        <a className="footer-col1-row-link" href="">Executive search</a>
                                        <a className="footer-col1-row-link" href="">All services</a>
                                    </div>
                                    <div className="footer-col1-row">
                                        <h4 className="footer-col1-row-h">About us</h4>
                                        <a className="footer-col1-row-link" href="">Our story</a>
                                        <a className="footer-col1-row-link" href="">Our social impact</a>
                                        <a className="footer-col1-row-link" href="">The Course Workzone</a>
                                        <a className="footer-col1-row-link" href="">Work for Course Workzone</a>
                                        <a className="footer-col1-row-link" href="">Franchise Patnership</a>
                                        <a className="footer-col1-row-link" href="">Diversity & inclusion</a>

                                    </div>
                                    <div className="footer-col1-row">
                                        <h4 className="footer-col1-row-h">Contact</h4>
                                        <a className="footer-col1-row-link" href="">Find office</a>
                                        <a className="footer-col1-row-link" href="">Get in touch</a>
                                        <a className="footer-col1-row-link" href="">Complaints policy</a>
                                        <a className="footer-col1-row-link" href="">Facebook</a>
                                        <a className="footer-col1-row-link" href="">Twitter</a>
                                        <a className="footer-col1-row-link" href="">Linkedln</a>
                                    </div>
                                </div>

                                <div className="footer-main-col2">
                                    <h2 className="footer-col2-h">Stay up to date with the latest employer insights & events</h2>
                                    <input className="email-input" type="email" placeholder="Email address"></input>
                                    <p className="footer-col2-p">By submitting this completed form to us, you agree to Reed contacting you about our products and services, and content that may be of interest to you. You can unsubscribe from these communications at any time. For more information, please see our <b>privacy policy</b>.</p>
                                    <p className="footer-col2-p">By clicking submit below, you consent to allow Reed to store and process the personal information submitted above.</p>
                                    <button className="footer-submit-btn">Submit</button>
                                </div>
                            </div>

                            <div className="footer-end">
                                <div className="footer-end-container">
                                    <div className="footer-end-col1">
                                        <a className="footer-end-col1-links" href="">Privacy policy</a>
                                        <p className="footer-end-col1-seperator"> | </p>
                                        <a className="footer-end-col1-links" href="">Terms & conditions</a>
                                        <p className="footer-end-col1-seperator"> | </p>
                                        <a className="footer-end-col1-links" href="">Cookies</a>
                                        <p className="footer-end-col1-seperator"> | </p>
                                        <a className="footer-end-col1-links" href="">Corporate governance</a>
                                        <p className="footer-end-col1-seperator"> | </p>
                                        <a className="footer-end-col1-links" href="">Slavery statement</a>
                                        <p className="footer-end-col1-seperator"> | </p>
                                        <a className="footer-end-col1-links" href="">eBilling</a>
                                        <p className="footer-end-col1-seperator"> | </p>
                                        <a className="footer-end-col1-links" href="">Sitemap</a>
                                        <p className="footer-end-col1-seperator"> | </p>
                                        <a className="footer-end-col1-links" href="">United kingdom</a>
                                    </div>

                                    <div className="footer-end-col2">
                                        <a className="social-media-icon" href="https://about.linkedin.com/">
                                            <img className="footer-end-col2-icon" src="/image/icons8-linkedin.png" alt="linkedln"/>
                                        </a>
                                        <a className="social-media-icon" href="https://www.facebook.com/">
                                            <img className="footer-end-col2-icon" src="/image/icons8-facebook.png" alt="Facebook"/>
                                        </a>
                                        <a className="social-media-icon" href="https://twitter.com/?lang=en">
                                            <img className="footer-end-col2-icon" src="/image/icons8-twitter.png" alt="Twitter"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>

        </div>
    )
}

export default Success_stories;