const jwt = require("jsonwebtoken");
const fs = require("fs");
const util = require("util");
const sharp = require('sharp');

const verifyToken = util.promisify(jwt.verify);

exports.handler = async (event, context) => {
  
  const token = event.headers.authorization.replace("Bearer ", "");

  try {
    const payload = await verifyToken(token, process.env.JWT_SECRET_KEY);

    if (payload.password === process.env.PASSWORD) {
      console.log("password worked")
      const url = event.headers.url;
      console.log("url:", url)
   
      if (fs.existsSync(require.resolve(url))) {
        console.log("image exists")
        const imageBuffer = fs.readFileSync(require.resolve(url));

        const resizedImageBuffer = await sharp(imageBuffer)
          .resize({ width: 300 })
          .toBuffer();

        return {
          statusCode: 200,
          body: resizedImageBuffer.toString("base64"),
          isBase64Encoded: true,
          headers: {
            "Content-Type": "image/png",
          },
        };
      } else {
        console.log("image doesn't exist")
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
