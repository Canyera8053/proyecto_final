require("dotenv").config()
const express = require("express")
const cors = require("cors")
 const db = require("./config/database")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('./client'))
 //db.execute("SELECT * FROM hospitalizacion").then((res) => console.log("get all", res[0])).catch((err) => console.log(err, "not working"))
 
 //db.execute('INSERT INTO hospitalizacion (Nombre, Especie, Tutora, Tratamiento, Estado) VALUES ("turbo", "gato", "Aaron",  "vacunar", "ok")')

 //db.execute("DELETE FROM hospitalizacion WHERE hospitalizacion.id = 8")



const port = process.env.PORT || 2018
app.listen (port, ()=>{
    console.log(`listening al port ${port}`)
})


app.get("/", (req, res) =>{
    res.status(200).send("<h1>final projecte scafolding</h1>")

})