const { dataSource } = require("../../infrastructure/typeorm.js");
const User = dataSource.getRepository("User");

const connectToDB = async () => {
  try {
    const connection = await dataSource.initialize();
    if (!connection) {
      console.log("Error connecting to database");
    }
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

const addUserToDB = async (filter) => {
  const newUser = await User.create(filter);
  return await User.save(newUser);
};

const getUsersFromDB = async () => {
  return await User.find();
};

const updateUserToDB = async (filter) => {
  const { name, id } = filter;

  return await User.update({ id }, { name });
};

const deleteUserFromDB = async (filter) => {
  return await User.delete(filter)
};

module.exports = {
  connectToDB,
  addUserToDB,
  getUsersFromDB,
  updateUserToDB,
  deleteUserFromDB,
};
