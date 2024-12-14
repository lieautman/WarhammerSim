import GameBoard from "./GameBoard/GameBoard";

function Game() {
  const parseCSVTextToJSON = function (text) {
    var lines = text.split("\n");
    var result = [];
    var headers;
    for (var i = 0; i < lines.length; i++) {
      headers = lines[i].split("\n");
    }
    var cont = 0;
    for (i = 0; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split("\n");
      for (var j = 0; j < headers.length; j++) {
        obj[cont] = currentline[j];
      }
      cont++;
      result.push(obj);
    }
    console.log("ceva json", result);
  };

  const loadCSV = function () {
    fetch("./BaseSizeAndMovement.csv")
      .then((response) => response.text())
      .then((responseText) => {
        console.log("ceva", responseText);
        parseCSVTextToJSON(responseText);
      });
  };
  loadCSV();
  return <GameBoard />;
}

export default Game;
