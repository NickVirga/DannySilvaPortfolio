const jwt = require("jsonwebtoken")

exports.handler = async (event, context) => {

  try {
    const token = jwt.sign(
      {
        password: "password"
      },
      "e4744410f340cf3f2023dd61ede33b46256632a92536f5df684a908680e7fc7c",
      {
        expiresIn: "24h",
      }
    );
    
    return {
      statusCode: 200,
      body: JSON.stringify({token: token}),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
