import React from "react"
import "./homepage.css"

export const Homepage=()=>{
    return(
        <>
        <div className="header">
            <div id="header_up">
                <div id="left_header">
            <p id="logo">PETSTAY</p>
            </div>
            <div id="right_header">
            <p>Home</p>
            <p>Places</p>
            <p>Signup</p>
            </div>
            </div>
            <img id="animals" src="https://www.pngall.com/wp-content/uploads/10/Pet-Transparent-PNG.png" style={{width:"100%",height:"100%"}}></img>
    </div>

    <div id="after_header">
        <h1>A perfect stay for your pets</h1>
        <p>Established in 2005, we provide a home-from-home dog boarding service where no dogs from different households are mixed, and you get to meet your carer before your dog/s stay.</p>
        <p>Our booking process enables us to select the perfect carer for your dog, giving you complete peace of mind when you are on holiday.  You can rest assured that your dog’s routines will be followed, and they will be given all of the love and attention they would receive at home.</p>
    </div>

    <div id="pethome">
        <img src="https://abetterworldforpets.com/wp-content/uploads/2019/02/ABWFP_P4_Image_1-1024x481.jpg" style={{width:"50%",height:"300px"}}></img>
        <div id="pethome_text">
            <h1>You love pets and so we!!</h1>
            <p>We understand your dogs are your babies and so we take their care very seriously. We take lots of details first about your dog/s then we can match them perfectly to one of our many loving dog carers. We do not mix dogs from different households, so our service is exclusive to your dog/s.</p>
            <p>PetStay have been operating for over 16 years and have been awarded 5* reviews from our happy customers and their doggies.</p>
        </div>
    </div>

    <div id="petplay">
        <div id="petplay_text">
            <h1>PetStay over the last 3 years have looked after 19,589 dogs</h1>
        <p>PetStay offers you complete peace of mind while you are away. Not only is PetStay licensed and insured to take care of your beloved dog, we ensure that your pooch is in the best possible hands.</p>
        <p>Before booking, we will organise a meet-and-greet which will allow you and your dog to meet the carer in their own home</p>
        </div>
       <img src="https://i0.wp.com/topdogtips.com/wp-content/uploads/2015/08/How-to-Write-a-Dog-Boarding-Business-Plan5.jpg?fit=1021%2C600&ssl=1" style={{width:"50%",height:"300px"}}></img> 
    </div>

    <footer>
        <div>
            <h1>About</h1>
            <p>Find your location branch</p>
            <p>Bengaluru</p>
            <p>petstayindia@gmail.com</p>
            <p>+1800 345 903 245</p>
        </div>
        <div>
            <h1>Contact</h1>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div>
            <h1>Support</h1>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div>
            <h1>Privacy</h1>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </footer>
        </>
    )
}