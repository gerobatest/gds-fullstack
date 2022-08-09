exports.hello = (req, res) => {
    res.json({
        "hello":["chris", "ben"]
    })
    //res.render('hello')
}