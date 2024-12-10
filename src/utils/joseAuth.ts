import * as jose from "jose";

const secret = new TextEncoder().encode(
  process.env.NEXT_SECRET_JWT_KEY as string
);

export const signToken = async (user: string) => {
  const token = await new jose.SignJWT({ user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret);
  return token;
};

export const verifyToken = async (token: string) => {
    try {
        const { payload } = await jose.jwtVerify(token, secret);
        return ({ valid: true, payload });
      } catch (error) {
        return ({ valid: false, error });
      }
};
