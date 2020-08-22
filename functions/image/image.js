const fs = require('fs')
const path = require("path")

exports.handler = async (event, context) => {
  const fileName = "logo.png"
  var imagepath = path.resolve(process.env.LAMBDA_TASK_ROOT, "src", fileName)
  console.log('imagepath: ', imagepath)

  console.log("process.env.LAMBDA_TASK_ROOT", process.env.LAMBDA_TASK_ROOT)
  fs.readdir(process.env.LAMBDA_TASK_ROOT + "", function(err, items) {
    console.log(items);
    for (var i=0; i<items.length; i++) {
        console.log(items[i])
    }
  })
  fs.readdir(process.env.LAMBDA_TASK_ROOT + "/src", function(err, items) {
    console.log(items);
    for (var i=0; i<items.length; i++) {
        console.log(items[i])
    }
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