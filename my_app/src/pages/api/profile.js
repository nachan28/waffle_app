import { prisma } from "./signup.js";

// export default function Profile() {
//     if (req.method === "POST") {
//         const { name, email } = req.body;
//         const user = await prisma.user.create({
//           data: {
//             name,
//             email,
//           },
//         });
//         return res.json(user);
//       } else {
//         res.status(405).json({ message: "Method Not Allowed" });
//       }
//   return <div>profile</div>;
// }
