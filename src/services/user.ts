import { NotFoundError } from "../../helpers/apiError";
import { User } from "../entity/User";

const createUser = async (user: User): Promise<User> => {
  return User.create(user).save();
};

const findAll = async (user: User): Promise<User[]> => {
  return await User.find();
};

const findUserByEmail = async (email: string): Promise<User | undefined> => {
  const foundUser = User.findOne({ email: email });
  if (!foundUser) {
    throw new NotFoundError(`User not found`);
  }
  return foundUser;
};

export default { createUser };
