import React, {useState} from 'react';
import {Button, Calendar, message} from 'antd';
import {FaCircleMinus, FaCirclePlus} from "react-icons/fa6";

const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

function BookingCoffee(props) {
    const [messageApi, contextHolder] = message.useMessage();
    const [zero, setZero] = useState(0);

    const success = () => {
        messageApi.open({
            type: 'success',
            content: `${zero} people can come!`
        })
    }

    const nextFunction = () => {
        setZero(0)
        success()
    }

    return (
        <div>
            <div className={"py-[7%] px-[15%] flex flex-wrap font-poppins"}>
                <div className={"w-full text-center"}>
                    <h3 className={"font-[700] text-[#291D15] text-[30px] mb-10"}>
                        Booking Coffee - on Monday, April 24, 2023
                    </h3>
                </div>
                <div className={"sm:w-full lg:w-[50%] my-5"}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} className={"border shadow-2xl"}/>
                </div>
                <div className={"sm:w-full lg:w-[50%] my-5 sm:pl-0 lg:pl-[10%] pt-[10%]"}>
                    <div className={"flex items-center justify-between"}>
                        <h3 className={"text-[21px] font-[400]"}>Booking for</h3>
                        <span className={"pb-1 border-b border-black w-[60px]"}>
                            <h3 className={"text-[20px]"}> {zero} </h3>
                    </span>
                        <span className={"flex items-center gap-3"}>
                            <FaCirclePlus className={"text-[25px] cursor-pointer"}
                                          onClick={() => setZero(zero + 1)}/>
                            <FaCircleMinus className={"text-[25px] cursor-pointer"}
                                           onClick={() => setZero(zero - 1)}/>
                    </span>
                    </div>
                    <p className={"text-[#F54848] my-5"}>
                        How many people are coming?
                    </p>
                    {contextHolder}
                    <Button className={"bg-[#3F4D9A] text-white text-[18px] float-end px-5"}
                            type={"submit"}
                            onClick={nextFunction}>
                        Next
                    </Button>
                </div>
            </div>
        </div>);
}

export default BookingCoffee;