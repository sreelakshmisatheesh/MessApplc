// // //ParentComponent.tsx

// // import GiveCount from "./GiveCount";
// import Profile from "./Profile";

// // const ParentComponent: React.FC = () => {
// //     const handleGiveCount = (meal: string) => {
// //         // Handle the logic when a meal is selected
// //         console.log(`Selected ${meal}`);

// //         // Display a pop-up window
// //         alert(`You are entering a queue for ${meal}`);
// //     };


// //     return (
// //         <div>
// //             <h1>Parent Component</h1>
// //             <GiveCount onGiveCount={handleGiveCount} />
// //         </div>
// //     );
// // };

// // export default ParentComponent;

// // import React, { useState, useEffect } from "react";

// // const GiveCount: React.FC = () => {
// //     const [selectedMeals, setSelectedMeals] = useState<string[]>([]);
// //     const [queue, setQueue] = useState<{ user: string; timestamp: Date }[]>([]);

// //     const handleGiveCount = (meal: string) => {
// //         // Update selected meals
// //         setSelectedMeals((prevSelectedMeals) => [...prevSelectedMeals, meal]);

// //         // Add user to the queue with timestamp
// //         const user = "User"; // Assuming a generic user identifier for now
// //         const timestamp = new Date();
// //         setQueue((prevQueue) => [...prevQueue, { user, timestamp }]);

// //         // Log user's entry to the queue
// //         console.log(`${user} entered the queue at ${timestamp}`);
// //     };


// //     useEffect(() => {
// //         // Schedule task to send token message the next day at 9 am
// //         const currentDate = new Date();
// //         const nextDay = new Date(currentDate);
// //         nextDay.setDate(currentDate.getDate() + 1);
// //         nextDay.setHours(9, 0, 0, 0);

// //         const timeUntilNextDay = nextDay.getTime() - currentDate.getTime();

// //         const timerId = setTimeout(() => {
// //             // Send token message to users in the queue
// //             console.log("Good morning, meals are ready!");

// //             // Log users in the queue and their timestamps
// //             queue.forEach(({ user, timestamp }) => {
// //                 console.log(`${user} entered the queue at ${timestamp}`);
// //             });
// //         }, timeUntilNextDay);

// //         // Cleanup timer
// //         return () => clearTimeout(timerId);
// //     }, [queue]);

// //     return (
// //         <div>
// //             <h2>Select Meals</h2>
// //             <label>
// //                 <input
// //                     type="checkbox"
// //                     onChange={() => handleGiveCount("Breakfast")}
// //                     checked={selectedMeals.includes("Breakfast")}
// //                 />
// //                 Breakfast
// //             </label>
// //             <label>
// //                 <input
// //                     type="checkbox"
// //                     onChange={() => handleGiveCount("Lunch")}
// //                     checked={selectedMeals.includes("Lunch")}
// //                 />
// //                 Lunch
// //             </label>
// //             <label>
// //                 <input
// //                     type="checkbox"
// //                     onChange={() => handleGiveCount("Dinner")}
// //                     checked={selectedMeals.includes("Dinner")}
// //                 />
// //                 Dinner
// //             </label>
// //         </div>
// //     );
// // };

// // export default GiveCount;

// // ParentComponent.tsx
// import React from "react";
// import GiveCount from "./GiveCount";

// const ParentComponent: React.FC = () => {
//     const handleGiveCount = (meal: string) => {
//         // Handle the logic when a meal is selected
//         console.log(`eppo select chytha Selected ${meal}`);

//         // Display a pop-up window
//         alert(`You are entering a queue for ${meal}`);
//     };

//     return (
//         <div>
//             <h1>Parent Component</h1>
//             <GiveCount onGiveCount={handleGiveCount} />
//         </div>
//     );
// };

// export default ParentComponent;
