// routes/index.js

module.exports = function (app, Book) {
  // GET ALL BOOKS
  app.get("/api/books", function (req, res) {
    var query = req.query;
    console.log(query);

    if (!!query.sortdatafield && !!query.sortorder) {
      var sorting = {
        sort: [[query.sortdatafield, query.sortorder]],
      };
      Book.find()
        .sort(sorting.sort)
        .exec(function (err, books) {
          if (err) return res.status(500).send({ error: "database failure" });
          res.json(books);
        });
    } else {
      Book.find().exec(function (err, books) {
        if (err) return res.status(500).send({ error: "database failure" });
        res.json(books);
      });
    }
  });
};
