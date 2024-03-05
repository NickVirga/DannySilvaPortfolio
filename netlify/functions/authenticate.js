exports.handler = async function (event, context) {
  const { password } = JSON.parse(event.body);

  // Check if the password is correct
  if (password === "dannyart2024") {
    return {
      statusCode: 200,
      body: JSON.stringify({ authenticated: true }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ authenticated: false }),
    };
  }
};
