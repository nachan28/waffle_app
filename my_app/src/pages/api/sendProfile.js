import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { introduction, background } = req.body;
    const user = await prisma.users.create({
      data: {
        introduction: introduction,
        background: background,
      },
    });
    return res.json(user);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
