// Create Mini Express App (Separate Route)
import exp from 'express';
export const userapp = exp.Router();

// Test Data (in-memory array to store users)
let users = [];

// REST API - Representation State Transfer

// Route to handle GET request of Client (http://localhost:3002/user-api/users)
// Fetch all users
userapp.get('/users', (req, res) => {
    // Send response to Client with all users
    res.json({ message: "All users", payload: users });
});

// Route to handle POST request of Client
// Create a new user
userapp.post('/users', (req, res) => {
    const newUser = req.body; // Get new user data from request body
    users.push(newUser);      // Add new user to array
    res.json({ message: "User created", payload: newUser });
});

// Route to handle PUT request of Client
// Update an existing user
userapp.put('/users', (req, res) => {
    let modifiedUser = req.body; // Get modified user from client

    // Find index of existing user in array
    let index = users.findIndex(userObj => userObj.id === modifiedUser.id);

    if (index === -1) {
        return res.json({ message: "User Not found" });
    }

    // Update user at found index
    users.splice(index, 1, modifiedUser);

    // Send response
    res.json({ message: "User Updated", payload: modifiedUser });
});

// Route to handle DELETE request of Client
// Delete user by Id
userapp.delete('/users/:id', (req, res) => {
    let idofUrl = Number(req.params.id); // Get id from URL parameter

    // Find index of user
    let index = users.findIndex(userObj => userObj.id === idofUrl);

    if (index === -1) {
        return res.json({ message: "User Not found" });
    }

    // Delete user by index
    users.splice(index, 1);

    // Send response
    res.json({ message: "User Removed" });
});

// Route to handle GET request of Client by Id
// Fetch single user by Id
userapp.get("/u/:id", (req, res) => {
    let paraid = Number(req.params.id); // Get id from URL parameter

    // Find user by Id
    let user = users.find(userObj => userObj.id === paraid);

    if (user === undefined) {
        return res.json({ message: "User not Found" });
    }

    // Send response with found user
    res.json({ message: "User Found", payload: user });
});
