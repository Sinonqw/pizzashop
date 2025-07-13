'use client'
import React, { useState, useMemo } from 'react';

interface PriceCounterProps {
    baseCost: string;
    selectedSize: string; 
}

export function PriceCounter({ baseCost, selectedSize }: PriceCounterProps) {
    const [quantity, setQuantity] = useState(1);

    const numericBaseCost = useMemo(() => {
        return parseFloat(baseCost.replace(',', '.'));
    }, [baseCost]);


    const currentPrice = useMemo(() => {
        let price = numericBaseCost;

        if (selectedSize === '22') {
            price *= 0.90;
        } else if (selectedSize === '33') {
            price *= 1.10;
        }

        price *= quantity;

        return price.toFixed(2).replace('.', ',');
    }, [numericBaseCost, selectedSize, quantity]);


    const baseButtonClasses =
        "w-8 h-8 rounded-full flex items-center justify-center " +
        "transition-all duration-200 ease-out cursor-pointer select-none ";

    const buttonTextStyles = "text-[17px] font-normal leading-[110%]";

    const plusButtonClasses =
        baseButtonClasses +
        "bg-[linear-gradient(215deg,_#ff5924_0%,_#ffa229_100%)] " +
        "hover:scale-105 hover:shadow-[0_0_8px_0_rgba(255,162,41,0.6)]";

    const minusButtonClasses =
        baseButtonClasses +
        "bg-transparent relative " +
        "hover:scale-105 hover:shadow-[0_0_8px_0_rgba(163,163,163,0.2)]";

    const minusButtonBorder = (
        <span
            className="
                absolute inset-0
                rounded-full
                p-[1.5px]
                overflow-hidden
            "
            style={{
                background: '#a3a3a3',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
            }}
        ></span>
    );

    const handleDecrease = () => {
        setQuantity(prev => Math.max(1, prev - 1));
    };

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    return (
        <div className="flex items-center gap-12 w-full">
            <div
                className="text-white text-3xl font-normal text-left"
                style={{
                    textShadow: '0 0 10px rgba(255,255,255,0.4)',
                    minWidth: '80px'
                }}
            >
                {currentPrice}<sup className="text-lg font-light">$</sup>
            </div>

            <div className="flex items-center gap-2">
                <button
                    className={minusButtonClasses}
                    onClick={handleDecrease}
                >
                    {minusButtonBorder}
                    <span className={`relative z-10 ${buttonTextStyles} text-[#a3a3a3]`}>-</span>
                </button>

                <span className="text-white text-lg font-medium select-none" style={{ textShadow: '0 0 5px rgba(255,255,255,0.2)' }}>
                    {quantity}
                </span>

                <button
                    className={plusButtonClasses}
                    onClick={handleIncrease}
                >
                    <span className={`${buttonTextStyles} text-white`}>+</span>
                </button>
            </div>
        </div>
    );
}