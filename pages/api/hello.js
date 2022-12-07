// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let data = {
    name: "Joush",
    email: "joush@mail.io",
    message: "Make a Happy life!",
  };

  if (req.method === "GET") {
    res.status(200).json({ data: data });
  }

  if (req.method === "POST") {
    console.log("POST method is working!");
    const { name, email, message } = req.body;

    data = {
      name: name,
      email: email,
      message: message,
    };

    res.status(200).json({ data });
  }
}
