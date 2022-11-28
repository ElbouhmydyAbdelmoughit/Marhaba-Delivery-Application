const { success } = require("consola");
const app = require("./app");

app.listen(process.env.PORT || 8080, () => {
  success({
    message: "app listening on port: " + process.env.PORT,
    badge: true,
  });
});
