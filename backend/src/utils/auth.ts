import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export function verifyAuthHeader(authHeader?: string) {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Unauthorized");
  }
  const token = authHeader.replace("Bearer ", "");
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    throw new Error("Unauthorized");
  }
}
