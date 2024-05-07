// // TotalCountDisplay.tsx

// import React, { useEffect, useState } from "react";

// const TotalCountDisplay: React.FC = () => {
//     const [totalCount, setTotalCount] = useState<number>(0);

//     useEffect(() => {
//         const totalCountFromStorage = localStorage.getItem("totalCount");
//         if (totalCountFromStorage) {
//             setTotalCount(parseInt(totalCountFromStorage));
//         }
//     }, []);

//     return (
//         <div>
//             <h1>Today Total Count: {totalCount}</h1>
//         </div>
//     );
// };

// export default TotalCountDisplay;

// import React, { useEffect, useState } from "react";

// const TotalCountDisplay: React.FC = () => {
//     const [totalCount, setTotalCount] = useState<number>(0);

//     // Load totalCount from localStorage on component mount
//     useEffect(() => {
//         const totalCountFromStorage = localStorage.getItem("totalCount");
//         if (totalCountFromStorage) {
//             setTotalCount(parseInt(totalCountFromStorage));
//         }
//     }, []);

//     // Update localStorage whenever totalCount changes
//     useEffect(() => {
//         localStorage.setItem("totalCount", totalCount.toString());
//     }, [totalCount]);

//     return (
//         <div>
//             <h1>Today Total Count: {totalCount}</h1>
//         </div>
//     );
// };

// export default TotalCountDisplay;


// import React, { useEffect, useState } from "react";

// const TotalCountDisplay: React.FC = () => {
//     const [totalCount, setTotalCount] = useState<number>(0);

//     useEffect(() => {
//         // Load total count from localStorage on component mount
//         const storedTotalCount = localStorage.getItem("totalCount");
//         if (storedTotalCount) {
//             setTotalCount(parseInt(storedTotalCount));
//         }
//     }, []);

//     const updateTotalCount = (increment: number) => {
//         // Update total count locally
//         const newTotalCount = totalCount + increment;
//         setTotalCount(newTotalCount);
//         // Update total count in localStorage
//         localStorage.setItem("totalCount", newTotalCount.toString());
//     };

//     return (
//         <div>
//             <h1>Today Total Count: {totalCount}</h1>
//             {/* You can pass the updateTotalCount function as a prop to other components */}
//         </div>
//     );
// };

// export default TotalCountDisplay;

// import React, { useEffect, useState } from "react";

// const TotalCountDisplay: React.FC = () => {
//     const [totalCount, setTotalCount] = useState<number>(0);

//     useEffect(() => {
//         // Load total count from localStorage on component mount
//         const storedTotalCount = localStorage.getItem("totalCount");
//         if (storedTotalCount) {
//             setTotalCount(parseInt(storedTotalCount));
//         }
//     }, []);

//     const updateTotalCount = (increment: number) => {
//         // Update total count locally
//         const newTotalCount = totalCount + increment;
//         setTotalCount(newTotalCount);
//         // Update total count in localStorage
//         localStorage.setItem("totalCount", newTotalCount.toString());
//     };

//     return (
//         <div>
//             <h1>Today Total Count: {totalCount}</h1>
//             {/* You can pass the updateTotalCount function as a prop to other components */}
//         </div>
//     );
// };

// export default TotalCountDisplay;



//bydef + 1
// TotalCountDisplay.tsx
import React, { useEffect, useState } from "react";

const TotalCountDisplay: React.FC = () => {
    const [totalCount, setTotalCount] = useState<number>(0);

    // Load totalCount from localStorage on component mount
    useEffect(() => {
        const totalCountFromStorage = localStorage.getItem("totalCount");
        if (totalCountFromStorage) {
            setTotalCount(parseInt(totalCountFromStorage));
        }
    }, []);

    // Update localStorage whenever totalCount changes
    useEffect(() => {
        localStorage.setItem("totalCount", totalCount.toString());
    }, [totalCount]);

    return (
        <div>
            <h1>Today Total Count: {totalCount}</h1>
        </div>
    );
};

export default TotalCountDisplay;
