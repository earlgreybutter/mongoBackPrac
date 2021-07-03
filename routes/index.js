// routes/index.js

module.exports = function (app, Book) {
  // GET ALL BOOKS
  app.get("/api/books", function (req, res) {
    // Select the collection on which you want to perform an operation
    // var butter = req.db.collection('butter');

    // butter.find({}, {}, function(err, books) {
    //     if (err) return res.status(500).send({ error: 'database failure' });
    //     res.json(books);
    // })

    Book.find(function (err, books) {
      if (err) return res.status(500).send({ error: "database failure" });
      res.json(books);
    });
  });
};
