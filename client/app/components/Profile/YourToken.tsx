// //sre
import React, { useEffect, useState } from "react";

type YourTokenProps = {
    breakfastExpiration: number;
    lunchExpiration: number;
    dinnerExpiration: number;
    isMealSelected: boolean;
};

const YourToken: React.FC<YourTokenProps> = ({
    breakfastExpiration,
    lunchExpiration,
    dinnerExpiration,
    isMealSelected,
}) => {
    const calculateExpiration = (expiration: number) => {
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiration * 1000);
        const differenceInSeconds = Math.floor((expirationDate.getTime() - now.getTime()) / 1000);
        return differenceInSeconds;
    };

    const [remainingTime, setRemainingTime] = useState({
        breakfast: calculateExpiration(breakfastExpiration),
        lunch: calculateExpiration(lunchExpiration),
        dinner: calculateExpiration(dinnerExpiration),
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => ({
                ...prevTime,
                breakfast: isMealSelected ? (prevTime.breakfast > 0 ? prevTime.breakfast - 1 : 0) : 0,
                lunch: isMealSelected ? (prevTime.lunch > 0 ? prevTime.lunch - 1 : 0) : 0,
                dinner: isMealSelected ? (prevTime.dinner > 0 ? prevTime.dinner - 1 : 0) : 0,
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, [isMealSelected]);

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
            {isMealSelected && (
                <>
                    {breakfastExpiration > 0 && (
                        <div
                            style={{
                                ...boxStyle,
                                backgroundColor: "#ffd966",
                                position: "relative",
                                textDecoration: remainingTime.breakfast === 0 ? "line-through" : "none",
                            }}
                        >
                            <div>Breakfast</div>
                            <div style={expirationStyle}>
                                Expires in {formatTime(remainingTime.breakfast)}
                            </div>
                        </div>
                    )}
                    {lunchExpiration > 0 && (
                        <div
                            style={{
                                ...boxStyle,
                                backgroundColor: "#a5d6a7",
                                position: "relative",
                                textDecoration: remainingTime.lunch === 0 ? "line-through" : "none",
                            }}
                        >
                            <div>Lunch</div>
                            <div style={expirationStyle}>Expires in {formatTime(remainingTime.lunch)}</div>
                        </div>
                    )}
                    {dinnerExpiration > 0 && (
                        <div
                            style={{
                                ...boxStyle,
                                backgroundColor: "#90caf9",
                                position: "relative",
                                textDecoration: remainingTime.dinner === 0 ? "line-through" : "none",
                            }}
                        >
                            <div>Dinner</div>
                            <div style={expirationStyle}>Expires in {formatTime(remainingTime.dinner)}</div>
                        </div>
                    )}
                </>
            )}
            {!isMealSelected && (
                <div style={boxStyle}>
                    <div style={expirationStyle}>Not eligible for token</div>
                </div>
            )}
        </div>
    );
};

const boxStyle: React.CSSProperties = {
    width: "200px",
    height: "120px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
};

const expirationStyle: React.CSSProperties = {
    fontSize: "14px",
    marginTop: "10px",
    color: "#555",
};

export default YourToken;

