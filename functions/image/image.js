const fs = require('fs')
const path = require("path")

exports.handler = async (event, context) => {
  const fileName = "logo.png"
  var imagepath = path.resolve(process.env.LAMBDA_TASK_ROOT, fileName)
  console.log('imagepath: ', imagepath)

  if(!fs.existsSync(imagepath)) {
    return {
      statusCode: 404
    }
  }

  const content = fs.readFileSync(imagepath)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'image/png',
    },
    body: content.toString('base64'),
    isBase64Encoded: true
  };
};