const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement, findQuotesByPerson } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));
const quotesRouter = express.Router();
app.use("/api/quotes", quotesRouter);

quotesRouter.get("/random", (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  console.log(randomQuote);
  res.send({
    quote: randomQuote,
  });
});

quotesRouter.get("/", (req, res, next) => {
  const person = req.query.person;
  if (person) {
    const quotesByPerson = findQuotesByPerson(quotes, person);
    res.send({
      quotes: quotesByPerson,
    });
  } else {
    res.send({
      quotes,
    });
  }
});

quotesRouter.post("/", (req, res, next) => {
  const { quote, person } = req.query;
  if (quote && person) {
    const newQuote = { quote, person };
    quotes.push(newQuote);
    res.send({
      quote: newQuote,
    });
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log("we live people");
});
