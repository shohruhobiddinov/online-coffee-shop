import React from 'react';
import image1 from "../../assets/Ellipse 1.png"
import image2 from "../../assets/Ellipse 2.png"
import image3 from "../../assets/Ellipse 3.png"
import image4 from "../../assets/Ellipse 4.png"

function AllCoffees(props) {
    const dataOfCoffees = [
        {
            image: image1,
            title: "Sumatra Mandhandling",
            price: "$18.50 – $87.50 10%",
            ingredients: "Milk Chocolate, Blueberry, Brown Sugar"
        },
        {
            image: image2,
            title: "Colombian Supremo",
            price: "$15.00 – $80.00",
            ingredients: "Caramel, Almond, Citrus"
        },
        {
            image: image3,
            title: "Ethiopian Yirgacheffe",
            price: "$20.00 – $90.00",
            ingredients: "Jasmine, Lemon, Bergamot"
        },
        {
            image: image4,
            title: "Kenya AA",
            price: "$22.00 – $92.00",
            ingredients: "Grapefruit, Blackberry, Chocolate"
        },
        {
            image: image1,
            title: "Guatemala Antigua",
            price: "$17.00 – $85.00",
            ingredients: "Spice, Chocolate, Toffee"
        },
        {
            image: image2,
            title: "Brazil Santos",
            price: "$16.50 – $82.50",
            ingredients: "Nutty, Cocoa, Mild Acidity"
        },
        {
            image: image3,
            title: "Costa Rica Tarrazu",
            price: "$19.00 – $88.00",
            ingredients: "Honey, Floral, Stone Fruit"
        },
        {
            image: image4,
            title: "Honduras Marcala",
            price: "$18.00 – $86.00",
            ingredients: "Brown Sugar, Chocolate, Apple"
        }
    ];


    return (
        <div className={"allCoffees w-full p-[7%] font-poppins"}>
           <div className={"w-full text-center"}>
               <h1 className={"uppercase text-[#6F3D28] font-[700] text-[40px]"}>all coffees</h1>
           </div>
            <div className={"flex flex-wrap justify-start"}>
                {
                    dataOfCoffees.map((item, index) => (
                        <div key={index} className={"mt-10 text-[18px] sm:w-full md:w-[48%] lg:w-[31%] xl:w-[23%] mx-[1%] text-center px-[30px] my-5"}>
                            <img src={item.image} alt={item.title} className={"mx-auto"}/>
                            <h2 className={"font-[400]"}>
                                {item.title}
                            </h2>
                            <h3 className={"text-[#E04848] my-3"}>
                                {item.price}
                            </h3>
                            <h4 className={"text-[16px]"}>
                                {item.ingredients}
                            </h4>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AllCoffees;