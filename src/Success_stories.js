// import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"

const Success_stories = () =>{
    return(
        <div>

            {/* .................................INTRO............................... */}
            <section className="comp1-intro">
                <div id="intro">
                    <div id="paracircle">

                        <div id="para">
                            <div><h1 class="h1">What's Next...</h1></div>
                            <div>
                                <p class="p"> We're here to help you take your next<br/>
                                    step in the world of work, wherever<br></br> 
                                    or whatever it is. </p>
                            </div>
                                <br/>
                            <div id="parabtn">
                                <button id= "btn1">Find a role</button>
                                <button id="btn2">Hire talent</button>
                            </div>       
                        </div>

                        <div className="play_letter">
                            
                            {/* <button id="play_btn"></button> */}
                            <img class="play_button" src="/image/play-button.png" alt="play button"/>   
                        </div>
                    </div>    
                </div>
            </section>

            {/* ..........................EXPERTISE PAGE.................................. */}

            <section className="comp2-expertise-page">    
                <div className="expertise_p">
                    <div className="container">
                        <div className="title_container">
                            <div className="title">
                                <h3 className="title_h3">Our sectors of expertise</h3>
                            </div>
                            <div className="title_detail">
                                <p className="title_p">Since 1960 Reed has pioneered specialist
                                recruitment, sourcing knowledgeable, skilled 
                                professionals for jobs across the UK. Our experts 
                                recruit across 20 sectors, so whether you are looking 
                                to hire your next head of finance, or urgently require 
                                supply teachers, we can help you.</p>
                            </div>

                        </div>
                        <div className="row">
                            <div className="list_card">
                                <div className="list_card_img">
                                    <img className="card_img" src="/image/Accountancy.png" alt="accountancy & finance"/>

                                </div>
                                <div className="list_card_content">
                                    <h4 className="list_card_h">Accountancy & finance</h4>
                                    <p className="list_card_p">Reed's consultants are experienced in<br/>the accountancy and finance recruitment<br/> market, with each member of our team<br/> specialising across sectors and<br/> qualification levels.</p>
                                    <a className="list_card_a" href="" >Find out more &#8674;</a>
                                </div>
                                    
                            </div>
                            <div className="list_card">
                                <div className="list_card_img">
                                    <img className="card_img" src="/image/Business.png" alt="business support & administration"/>

                                </div>
                                <div className="list_card_content">
                                    <h4 className="list_card_h">Business support &<br/> administration</h4>
                                    <p className="list_card_p">Based across the UK, our specialists<br/> have a proven track record in quickly<br/> finding you high standard business<br/> support and administration professionals<br/> to meet your needs.</p>
                                    <a className="list_card_a" href="" >Find out more &#8674;</a>
                                </div>       
                            </div>

                            <div className="list_card">
                                <div className="list_card_img">
                                    <img className="card_img" src="/image/education-square.png" alt="education"/>

                                </div>
                                <div className="list_card_content">
                                    <h4 className="list_card_h">Education</h4>
                                    <p className="list_card_p">Our national network of specialist<br/> education recruiters work with over 10%<br/> of UK schools and understand the complex<br/> requirements of the classroom. </p>
                                    <a className="list_card_a" href="" >Find out more &#8674;</a>
                                </div>      
                            </div>

                            <div className="list_card">
                                <div className="list_card_img">
                                    <img className="card_img" src="/image/Health.png" alt="health & care"></img>

                                </div>
                                <div className="list_card_content">
                                    <h4 className="list_card_h">Health & care</h4>
                                    <p className="list_card_p">For over 60 years, Reed has delivered a<br/> full range of specialist health and care<br/> staffing solutions to the public,<br/> private, and third sectors.</p>
                                    <a className="list_card_a" href="" >Find out more &#8674;</a>
                                </div>       
                            </div>

                            <div className="list_card">
                                <div className="list_card_img">
                                    <img className="card_img" src="/image/Procurement-hero-small.png" alt="procurement & supply chain"/>

                                </div>
                                <div className="list_card_content">
                                    <h4 className="list_card_h">Procurement & supply<br/> chain</h4>
                                    <p className="list_card_p">Reed’s specialist procurement &<br/> supply chain recruiters will help you<br/> find the perfect addition to your team<br/> - whatever vacancy you are looking to<br/> fill. </p>
                                    <a  className="list_card_a" href="" >Find out more &#8674;</a>
                                </div>    
                            </div>

                            <div className="list_card">
                                <div className="list_card_img">
                                    <img className="card_img" src="/image/male-it-specialist.png" alt="technology"/>

                                </div>
                                <div className="list_card_content">
                                    <h4 className="list_card_h">Technology</h4>
                                    <p className="list_card_p">We are the IT recruitment specialists of<br/> choice for a broad range of corporate,<br/> public sector and SME organisations<br/> recruiting for both permanent and<br/> contract positions. </p>
                                    <a className="list_card_a" href="" >Find out more &#8674;</a>
                                </div>   
                            </div>

                            <div className="col">
                                <div className="col_container">
                                    <div className="col_div1">
                                        <span className="col-circle1"/>
                                        <span className="col-circle2"/>

                                    </div>
                                    <div className="col_div2">
                                        <button className="col_button">View all sectors of expertise</button>
                                        {/* <a className="col_button" role="button" href="">View all sectors of expertise</a> */}
                                    </div>
                                    <div className="col_div3">
                                    <span className="col-circle3"/>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>    

            {/* ...................................INFO PAGE................................ */}

            <section className="comp3-info-page">
                <div className="info_page_main">
                    <div className="infopage">
                        <div className="info_h2">
                            <h2 className="info_heading">Develop and grow your business with our network of local<br/> specialists behind you</h2>
                        </div>
                        <div className="info_p">
                            <p className="info_para">Working with Reed, you don't have to go it alone. With over 60 years' experience in specialist recruitment,
                                <br/> our dedicated consultants work with you to find talented professionals, to help your <br/>business flourish.</p>
                        </div>
                        <div className="info_circle">
                            <span className="cicle1">
                                <p className="pc">We have access to <span className="bold_fig">22m</span>  candidate CVs</p>
                            </span>
                            <span className="cicle2">
                                <p className="pc">We have a <span className="bold_fig"> 4.7</span>  average rating on Google</p>
                            </span>
                            <span className="cicle3">
                                <p className="pc">Nationwide we have <span className="bold_fig">33k</span>  temporary workers</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

    


            {/* ................................SUCCESS STORIES.................................... */}

            <section className="success-stories">
                <div className="success_container">
                    <div className="success_row">
                        <div className="success-h-main">
                            <div className="success-h">
                                <h4 className="success-heading">Our latest success stories</h4>
                            </div>
                        </div>
                        <AliceCarousel autoPlay autoPlayInterval="3000">
                            <div className="success-story-content">
                                <div className="success-slides">
                                    <div>
                                        <img className="success-img" src="/image/teacher.png" alt="lancashire teaching agency"/>
                                        
                                    </div>
                                    <div className="success-content1">
                                        <div className="client-tag">C L I E N T</div>
                                        <h3 className="success-content-h3">Lancashire Teaching Agency</h3>
                                        <h4 className="success-content-h4">Lancashire County Council (LCC) joined forces with Reed to establish the Lancashire Teaching Agency (LTA), combating teacher shortages, while helping to drive forward school standards and educational attainment.</h4>
                                        <button className="success-button">Read more</button>
                                    </div>
                                </div>

                                    

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
                            </div>

                        </AliceCarousel>

                    </div>

                </div>

            </section>

            {/* .................................DOTTED LIST ........................................... */}

            <section className="list-dotted-col">
                <div className="list-dotted-container">
                    <div className="list-dotted-container-main">
                        <div className="list-dotted-main-h">
                            <h2 className="title_h3">What's happening</h2>
                        </div>
                        <div className="list-dotted-content">
                            <div className="content-col">
                                <div className="content-col-box">
                                    <div>
                                        <img className="content-col-img" src="/image/Landing_page.png" alt="landing page"/>
                                    </div>
                                    <div className="content-col-content">
                                        <div class="list__card-tags">
                                            <span class="tag tag--content-type">T O O L</span>
                                            <span class="tag tag--label">B E N I F I T S</span>
                                        </div>
                                        <div className="list-col-content-h">
                                            <h3 className="list_card_h">Reed’s UK salary guides 2023</h3>
                                        </div>
                                        <div className="list-col-content-p">
                                            <p className="list_card_p">Use our salary guides to compare the UK average salary by sector - a resource for both employers and employees. Download the 2023 salary guides here.</p>
                                        </div>
                                        <div className="list-col-content-a">
                                            <a className="list_card_a" href="" >Read more &#8674;</a>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div className="content-col-col2">
                                <div className="content-col-box">
                                    <div>
                                        <img className="content-col-img" src="/image/business-people.png" alt="business people"/>
                                    </div>
                                    <div className="content-col-content">
                                        <div class="list__card-tags">
                                            <span class="tag tag--content-type">E B O O K</span>
                                            <span class="tag tag--label">E M P L O Y E R</span>
                                        </div>
                                        <div className="list-col-content-h">
                                            <h3 className="list_card_h">Inclusion at work 2022 - CIPD in partnership with Course Workzone</h3>
                                        </div>
                                        <div className="list-col-content-p">
                                            <p className="list_card_p">This survey report, in partnership with the CIPD, examines what UK employers are currently doing to improve inclusion and diversity (I&D) in their workplaces and the practices they have found to be effective.</p>
                                        </div>
                                        <div className="list-col-content-a">
                                        <a className="list_card_a" href="" >Read more &#8674;</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="content-col">
                                <div className="content-col-box">
                                    <div>
                                        <img className="content-col-img" src="/image/new-opportunity.png" alt="new opportunity"/>
                                    </div>
                                    <div className="content-col-content">
                                        <div class="list__card-tags">
                                            <span class="tag tag--content-type">W E B I N A R</span>
                                            <span class="tag tag--label">B E N I F I T S</span>
                                        </div>
                                        <div className="list-col-content-h">
                                            <h3 className="list_card_h">The rise of the reward specialist</h3>
                                        </div>
                                        <div className="list-col-content-p">
                                            <p className="list_card_p">Our panel of experts explored why reward specialists are more in demand than ever and how companies can ensure they are offering the right reward and benefits packages to suit their employees.</p>
                                        </div>
                                        <div className="list-col-content-a">
                                        <a className="list_card_a" href="" >Read more &#8674;</a>
                                        </div>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>    
                </div>
            </section>

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
            

        </div>
    )
}

export default Success_stories;