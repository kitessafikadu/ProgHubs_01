const users = [];
let userIdCounter = 1;

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const addUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newUser = { id: userIdCounter++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(userIndex, 1);
  res
    .status(200)
    .json({ message: `User with ID ${userId} deleted successfully` });
};

module.exports = { getUsers, addUser, deleteUser };
