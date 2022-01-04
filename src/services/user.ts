import { NotFoundError } from "../../helpers/apiError";
import { User } from "../entity/User";

const createUser = async (user: User): Promise<User> => {
  return User.create(user).save();
};

const findAll = async (user: User): Promise<User[]> => {
  return User.find();
};

const findUserByEmail = async (email: string): Promise<User> => {
  const foundUser = await User.findOne({ email: email });
  if (!foundUser) {
    throw new NotFoundError("User not found");
  }
  return foundUser;
};

const updateUserById = async (id: number): Promise<User> => {
  const foundUser = await User.findOne({ id: id });
};
export default { createUser, findAll, findUserByEmail };
