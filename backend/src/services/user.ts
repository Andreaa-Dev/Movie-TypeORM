import { User } from "../entity/User";
import { NotFoundError } from "../helpers/apiError";

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

const updateUserById = async (
  userID: number,
  update: Partial<User>
): Promise<User> => {
  let foundUser = await User.findOne({ id: userID });
  if (!foundUser) {
    throw new NotFoundError("User not found");
  }
  const newUser = { ...foundUser, ...update } as User;
  return newUser.save();
};

const deleteUserByEmail = async (email: string): Promise<User> => {
  const foundUser = await User.findOne({ email: email });
  if (!foundUser) {
    throw new NotFoundError("User not found");
  }
  return foundUser?.remove();
};

export default {
  createUser,
  findAll,
  findUserByEmail,
  updateUserById,
  deleteUserByEmail,
};
