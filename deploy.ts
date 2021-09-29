const { publish } = require("gh-pages")

try {
  publish("build", {
    branch: "prod",
    repo: "https://github.com/anclaev/dev.git",
    message: "Deploy.",
  })
} catch (e) {
  console.log(e)
}
