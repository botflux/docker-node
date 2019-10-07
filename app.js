const express = require ('express')
const app = express()

app.set('view engine', 'twig')

const PORT = process.env.PORT || 3000

app.get ('/:name', (req, res) => {
    const { name } = req.params

    return res.render('index', { name })
})

app.listen(PORT, () => console.log(`Application listening on port ${PORT}`))
