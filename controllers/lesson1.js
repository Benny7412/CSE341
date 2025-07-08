const emilyRoute = (req, res) => {
  res.send("Hello World");
};

 const blahRoute = (req, res) => {
  res.send("blah");
};

module.exports = {
    emilyRoute,
    blahRoute
}