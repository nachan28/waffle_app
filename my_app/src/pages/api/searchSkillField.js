import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("kon")
    const { username, introduction, background,kerword } = await req.body;
    // console.log(user)
    const stringSearch = await prisma.users.findMany({
      where:{
        introduction: introduction,
        background: background,
      },
      

    });
    return res.json(stringSearch);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
