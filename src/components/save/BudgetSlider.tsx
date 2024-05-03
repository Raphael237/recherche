import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const BudgetSlider: React.FC = () => {
    const [price, setPrice] = useState(0);
    const handleSliderChange = (value: number | number[]) => {
        if (typeof value === 'number') {
            setPrice(value);
        }
    };


    const formatPrice = (value: number)=>{
        return `${value} FCFA`;
    };

    return (

        <div className="text-left w-full md:w-[48%] xl:w-[22%] relative bg-white rounded-xl">
            <div className="mb-4 flex items-center text-gray-500 text-sm">
                <div className="flex items-center gap-1 ml-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        ></path>
                    </svg>
                    <span className="mr-3.5">Budgets</span>
                </div>
                <Slider
                    className="w-5/6 accent-indigo-600 mr-3.5"
                    min={0}
                    max={3500}
                    defaultValue={0}
                    onChange={handleSliderChange}
                />
                <div className="text-center mt-4 text-xs text-gray-700 font-bold p-2 bg-gray-300 rounded-full">
                    {formatPrice(price)}
                </div>
            </div>

        </div>
    );
};

export default BudgetSlider;