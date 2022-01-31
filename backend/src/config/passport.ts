import GoogleTokenStrategy from "passport-google-id-token";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import { JWT_SECRET } from "../../util/secrets";

import UserService from "../services/user";

const clientId = process.env.GOOGLE_CLIENT_ID;
export const googleStrategy = new GoogleTokenStrategy(
  { clientID: clientId },
  async function (parsedToken: any, googleId: string, done: any) {
    const userPayload = {
      email: parsedToken?.payload.email,
      firstName: parsedToken?.payload?.given_name,
      lastName: parsedToken?.payload?.family_name,
      image: parsedToken?.payload?.picture,
    };
    const user = await UserService.createUserWithGoogle(userPayload);
    done(null, user);
  }
);

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done: any) => {
    const userEmail = payload.email;
    const foundUser = await UserService.findUserByEmail(userEmail);
    done(null, foundUser);
  }
);
