const commands = require("./commands");

// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  //1        //2     3        parametros
  let info = data.toString().trim().split(" "); // Remueve la nueva línea ------------ ["echo", "hola", "mundo",]
  let cmd = info[0]; ///////esto me aclara la funcion a ejecutar
  let parametros = info.slice(1).join(" "); //////esto me da los parametros

  commands[cmd](parametros);

  // if (cmd === "pwd") {
  //   commands.pwd();
  // } else if (cmd === "date") {
  //   commands.date();
  // } else if (cmd === "ls") {
  //   commands.ls();
  // } else if (cmd === "echo") {
  //   commands.echo(args);
  // } else if (cmd === "cat") {
  //   let path = args[0];
  //   commands.cat(path);
  // }
});
