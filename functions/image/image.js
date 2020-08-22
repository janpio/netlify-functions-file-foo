const fs = require('fs')
const path = require("path")

exports.handler = async (event, context) => {
  const fileName = "logo.png"
  var imagepath = path.resolve(process.env.LAMBDA_TASK_ROOT, "src", fileName)
  console.log('imagepath: ', imagepath)

  console.log("process.env.LAMBDA_TASK_ROOT", process.env.LAMBDA_TASK_ROOT)
  fs.readdir(process.env.LAMBDA_TASK_ROOT + "", function(err, items) {
    console.log("# content of process.env.LAMBDA_TASK_ROOT")
    console.log(items);
  })
  fs.readdir(process.env.LAMBDA_TASK_ROOT + "/src", function(err, items) {
    console.log("# content of process.env.LAMBDA_TASK_ROOT/src")
    console.log(items);
  })
  fs.readdir(process.env.LAMBDA_TASK_ROOT + "/src/functions", function(err, items) {
    console.log("# content of process.env.LAMBDA_TASK_ROOT/src/functions")
    console.log(items);
  })
  fs.readdir(process.env.LAMBDA_TASK_ROOT + "/src/functions/image", function(err, items) {
    console.log("# content of process.env.LAMBDA_TASK_ROOT/src/functions/image")
    console.log(items);
  })

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