const Expertise_page = () => {
    return(
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
    )
}

export default Expertise_page