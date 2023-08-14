const Intro = () => {
    return (
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
    )
}

export default Intro