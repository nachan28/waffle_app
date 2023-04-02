import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("kon")
    const  keyword  = await req.body;
    console.log(keyword, "key")
    const stringSearch = await prisma.users.findMany({
      where:{
        OR :[
            {
             introduction: {
                contains: keyword
             } ,
            },
            {
            background: {
                contains:keyword
            },

            }
         
        ]      
       }
    });
    console.log(stringSearch)
    return res.json(stringSearch);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
