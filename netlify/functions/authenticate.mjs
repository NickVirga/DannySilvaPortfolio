const jwt = require("jsonwebtoken");

export async function handler(event, context) {
  const parsedEvent =  JSON.parse(event.body);
  const innerData = JSON.parse(parsedEvent.body)
  
  if (innerData.password === process.env.PASSWORD) {

    const token = jwt.sign(
      {
        password: innerData.password
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );


    return {
      statusCode: 200,
      body: JSON.stringify({ authenticated: true, token: token }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ authenticated: false }),
    };
  }
};
