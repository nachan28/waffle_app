import { PrismaClient } from "@prisma/client";
import { use } from "react";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, introduction, finalrole, background, user_s_skills, user_s_fields } = await req.body;
    console.log("body: ", req.body)
    const result = await prisma.users.findUnique({
      where: {
        username: username,
      }
    })
    const updateUser = await prisma.users.update({
      where:{
        username: username
      },
      data: {
        introduction: introduction,
        background: background,
        role:finalrole
      },
    });
    console.lo

    for (const skill_id of user_s_skills){
      const record = await prisma.user_s_skills.create({
        data: {
          user_id: result.id,
          skill_id: skill_id + 1
        }
      })
    }

    for (const field_id of user_s_fields){
      const record = await prisma.user_s_fields.create({
        data: {
          user_id: result.id,
          field_id: field_id + 1
        }
      })
    }
    

    
    // 何をreturnするかについては今後もうちょい検討
    return res.json(updateUser);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
