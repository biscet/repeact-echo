const { join } = require("node:path");
const fs = require("node:fs");

const deleteFolderRecursive = (path) => {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach((file) => {
      let curPath = path + "/" + file;

      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });

    fs.rmdirSync(path);
  }
};

exports.default = (context) => {
  const currentVersion = String(context.packager.appInfo.version);
  const folder = join(__dirname, "../release/", currentVersion);
  deleteFolderRecursive(folder);
};
