// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// // Sample queue data
// let queue = [];

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());

// // Endpoint to receive meal count data
// app.post('/meal-count', (req, res) => {
//     const mealCounts = req.body;

//     // Store meal counts for each user
//     mealCounts.forEach(({ user, mealCount }) => {
//         queue.push({ user, mealCount });
//     });

//     res.send('Meal counts stored successfully');
// });

// // Endpoint to retrieve meal counts for a specific user
// app.get('/meal-count/:user', (req, res) => {
//     const user = req.params.user;

//     // Find meal count for the specified user
//     const userMealCount = queue.find(entry => entry.user === user);

//     if (userMealCount) {
//         res.json({ user: userMealCount.user, mealCount: userMealCount.mealCount });
//     } else {
//         res.status(404).send('Meal count not found for the user');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
