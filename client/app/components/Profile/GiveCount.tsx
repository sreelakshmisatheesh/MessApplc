//sreelk
// import React, { useState, useEffect } from "react";

// type GiveCountProps = {
//     onGiveCount: (meal: string) => void;
//     onSubmit?: () => void;
//     userName: string;
//     setIsMealSelected: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const GiveCount: React.FC<GiveCountProps> = ({
//     onGiveCount,
//     onSubmit,
//     userName,
//     setIsMealSelected,
// }) => {
//     const [selectedMeals, setSelectedMeals] = useState<string[]>([]);
//     const [queue, setQueue] = useState<{ user: string; timestamp: Date }[]>([]);
//     const [totalCount, setTotalCount] = useState<number>(0);

//     const handleGiveCount = (meal: string) => {
//         setSelectedMeals((prevSelectedMeals) => [...prevSelectedMeals, meal]);
//         const timestamp = new Date();
//         setQueue((prevQueue) => [...prevQueue, { user: userName, timestamp }]);
//         console.log(`${userName} entered the queue at ${timestamp}`);
//         onGiveCount(meal);
//     };

//     const handleSubmission = () => {
//         if (selectedMeals.length > 0) {
//             setIsMealSelected(true);
//         }
//         if (onSubmit) onSubmit();
//         const currentDate = new Date();
//         const nextDay = new Date(currentDate);
//         nextDay.setDate(currentDate.getDate() + 1);
//         nextDay.setHours(9, 0, 0, 0);
//         const timeUntilNextDay = nextDay.getTime() - currentDate.getTime();
//         setTimeout(() => {
//             console.log("Good morning, meals are ready!");
//             queue.forEach(({ user, timestamp }) => {
//                 console.log(`${user} entered the queue at ${timestamp}`);
//             });
//         }, timeUntilNextDay);

//         // Update totalCount and store in localStorage
//         const newTotalCount = totalCount + selectedMeals.length;
//         setTotalCount(newTotalCount);
//         localStorage.setItem("totalCount", newTotalCount.toString());
//     };

//     return (
//         <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px] flex justify-between">
//             <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//                 <h2 className="text-lg font-semibold mb-2">Breakfast</h2>
//                 <label className="flex items-center">
//                     <input
//                         type="checkbox"
//                         onChange={() => handleGiveCount("Breakfast")}
//                         className="form-checkbox h-5 w-5 text-blue-500"
//                     />
//                     <span className="ml-2">Choose</span>
//                 </label>
//             </div>
//             <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//                 <h2 className="text-lg font-semibold mb-2">Lunch</h2>
//                 <label className="flex items-center">
//                     <input
//                         type="checkbox"
//                         onChange={() => handleGiveCount("Lunch")}
//                         className="form-checkbox h-5 w-5 text-blue-500"
//                     />
//                     <span className="ml-2">Choose</span>
//                 </label>
//             </div>
//             <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//                 <h2 className="text-lg font-semibold mb-2">Dinner</h2>
//                 <label className="flex items-center">
//                     <input
//                         type="checkbox"
//                         onChange={() => handleGiveCount("Dinner")}
//                         className="form-checkbox h-5 w-5 text-blue-500"
//                     />
//                     <span className="ml-2">Choose</span>
//                 </label>
//             </div>
//             <div className="w-full flex justify-center">
//                 <button
//                     onClick={handleSubmission}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                     Submit
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default GiveCount;

//bydef + 1
// GiveCount.tsx
import React, { useState } from "react";

type GiveCountProps = {
    onGiveCount: (meal: string) => void;
    onSubmit?: () => void;
    userName: string;
    setIsMealSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

const GiveCount: React.FC<GiveCountProps> = ({
    onGiveCount,
    onSubmit,
    userName,
    setIsMealSelected,
}) => {
    const [selectedMeals, setSelectedMeals] = useState<string[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);

    const handleGiveCount = (meal: string) => {
        setSelectedMeals((prevSelectedMeals) => [...prevSelectedMeals, meal]);
        onGiveCount(meal);
    };

    const handleSubmission = () => {
        if (selectedMeals.length > 0) {
            setIsMealSelected(true);
            setTotalCount((prevTotalCount) => prevTotalCount + selectedMeals.length);
            localStorage.setItem("totalCount", (totalCount + selectedMeals.length).toString());
        }
        if (onSubmit) onSubmit();
    };

    return (
        <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px] flex justify-between">
            <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold mb-2">Breakfast</h2>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        onChange={() => handleGiveCount("Breakfast")}
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2">Choose</span>
                </label>
            </div>
            <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold mb-2">Lunch</h2>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        onChange={() => handleGiveCount("Lunch")}
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2">Choose</span>
                </label>
            </div>
            <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold mb-2">Dinner</h2>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        onChange={() => handleGiveCount("Dinner")}
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2">Choose</span>
                </label>
            </div>
            <div className="w-full flex justify-center">
                <button
                    onClick={handleSubmission}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default GiveCount;
