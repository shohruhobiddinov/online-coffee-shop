import React from 'react';
import FindLocations from "./findLocations";
import Footer from "../home/footer";

function Locations(props) {
    return (
        <div>
            <div className="forNavbar w-full h-[18vh] fixed z-[999]"></div>
            <div className={"w-full h-[18vh]"}></div>
            <div className={"findLocation w-full h-[60vh] flex items-center justify-center text-white"}>
                <h1 className={"text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-[800] font-bills"}>
                    Find A Location
                </h1>
            </div>
            <FindLocations/>
            <Footer/>
        </div>
    );
}

export default Locations;