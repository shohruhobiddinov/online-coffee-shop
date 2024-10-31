import React from 'react';
import {Button} from "antd";

function FindLocations(props) {
    return (
        <div>
            <div className={"w-full h-[100vh] relative"}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45060306.91979327!2d-129.94270855!3d46.423669000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885063734cc6b0bd%3A0x5d78e2a827485531!2sAmerican%20Coffee%20Cups!5e0!3m2!1sen!2s!4v1730191076571!5m2!1sen!2s"
                    className={"border-none w-full h-full"} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className={"absolute sm:w-[90%] md:w-[350px] h-full top-0 p-5 right-[5%] bg-[#EDEDEDDE]"}>
                    <Button className={"w-full rounded-none bg-[#8F614E] text-white text-[17px] py-5"} type={"dark"}>
                        Find Locations
                    </Button>
                    <div className={"w-full h-[90%] mt-[5%] text-center bg-white text-[#715347] p-5"}>
                        We cannot find your current location. Please search for a location above
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindLocations;