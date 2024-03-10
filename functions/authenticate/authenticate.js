const jwt = require("jsonwebtoken")

exports.handler = async (event, context) => {
  
  try {
    const dataBody = JSON.parse(event.body)
    const password = JSON.parse(dataBody.body).password
    
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
    
    return {
      statusCode: 200,
      body: JSON.stringify({ authenticated: true, token: token}),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ authenticated: false}),
    };
  }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({authenticated: true, error: error}),
    };
  }
};

