//Use the inquirer npm package to get user input.

import inquirer from "inquirer";
//Use the qr-image npm package to turn the user entered URL into a QR code image
import qr from "qr-image";
// use file subsystem
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("QR_img.jpg"));

   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

