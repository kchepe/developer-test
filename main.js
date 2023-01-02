import fs from "fs";
import path from "path";

const runScriptsInFolder = async (folder, data, result) => {
  const files = fs.readdirSync(folder);
  for (const file of files) {
    if (path.extname(file) === ".js") {
      const script = await import(`${folder}/${file}`);
      result = await script.default(data, result);
    }
  }
  return result;
};

const main = async () => {
  let data = {};
  let result = {};

  result = await runScriptsInFolder("./folder_name1", data, result);
  result = await runScriptsInFolder("./folder_name2", data, result);
  result = await runScriptsInFolder("./folder_name3", data, result);
};

main().catch((err) => {
  console.log("ERROR: ", err);
});
