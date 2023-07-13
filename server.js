const expres = require("express")
const app = expres()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT || 5000);