import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, email } = req.body;
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
      },
    });
    return res.json(user);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
