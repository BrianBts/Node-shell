const fs = require("fs");
const request = require("request");

module.exports = {
  pwd: function () {
    let proceso = process.cwd();
    process.stdout.write(proceso + "\n");
    process.stdout.write("prompt > ");
  },

  date: function () {
    let date = Date();
    process.stdout.write(date + "\n");
    process.stdout.write("prompt > ");
  },

  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },

  echo: function (parametros) {
    let palabras = "";
    palabras += parametros;
    process.stdout.write(palabras + "\n");
    process.stdout.write("prompt > ");
  },

  cat: function (fileName) {
    fs.readFile(`${fileName}`, (err, data) => {
      if (err) throw err;
      process.stdout.write(data + "\n");
      process.stdout.write("prompt > ");
    });
  },

  head: function (path) {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        console.log("Error en: ", err);
        return;
      }
      let text = data;
      let slicedText = text.split("\n").slice(0, 10).join("\n");
      process.stdout.write(slicedText + "\n");
      process.stdout.write("prompt > ");
    });
  },

  tail: function (path) {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        console.log("Error en: ", err);
        return;
      }
      let text = data;
      let slicedText = text.split("\n").slice(-10).join("\n");
      process.stdout.write(slicedText + "\n");
      process.stdout.write("prompt > ");
    });
  },

  curl: function (url) {
    request(url.toString(), (err, response, data) => {
      if (err) throw err;
      process.stdout.write(data + "\n");
      process.stdout.write("prompt > ");
    });
  },
};
