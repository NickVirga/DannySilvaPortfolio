const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const util = require("util");

const verifyToken = util.promisify(jwt.verify);

exports.handler = async (event, context) => {
  
  const token = event.headers.authorization.replace("Bearer ", "");

  try {
    const payload = await verifyToken(token, process.env.JWT_SECRET_KEY);

    if (payload.password === process.env.PASSWORD) {
      
      const url = event.headers.url;
      const imagePath = path.resolve(
        __dirname,
        "../../../../../public/images/open-season",
        path.basename(url)
      );

      if (fs.existsSync(imagePath)) {
        
        const imageBuffer = fs.readFileSync(imagePath);
        return {
          statusCode: 200,
          body: imageBuffer.toString("base64"),
          isBase64Encoded: true,
          headers: {
            "Content-Type": "image/png", // Adjust the content type based on your image type
          },
        };
      } else {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: "Image file not found" }),
        };
      }
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Unauthorized" }),
      };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Unauthorized" }),
    };
  }
};
