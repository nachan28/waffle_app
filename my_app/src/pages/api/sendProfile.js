import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("kon")
    const { username, introduction, background } = await req.body;
    // console.log(user)
    const update = await prisma.users.update({
      where:{
        username: username
      },
      data: {
        introduction: introduction,
        background: background,
      },

    });
    return res.json(update);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
