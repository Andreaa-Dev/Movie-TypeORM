import { User } from "../entity/User";

const createUser = async (user: User): Promise<User> => {
  return User.create(user).save();
};

export default { createUser };
