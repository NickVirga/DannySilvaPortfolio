

export default async (req, context) => {
  const jwt = require("jsonwebtoken");

  try {
    const data = await req.json()
    if (!data.body) {
      throw new Error("Request body is empty or undefined");
    }
    const password = JSON.parse(data.body).password

    if (password === Netlify.env.get("PASSWORD")) {
      const token = jwt.sign(
        {
          password: password
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "24h",
        }
      );
        return new Response(JSON.stringify({ authenticated: true, token: token }), { status: 200 })
    } else {
      return new Response(JSON.stringify({ authenticated: false }), { status: 401 })
    }

  } catch (error) {
    console.error("Error handling request:", error);

    return new Response(JSON.stringify({ error: "Invalid request" }), { status: 400 });
  }
 
 
};
