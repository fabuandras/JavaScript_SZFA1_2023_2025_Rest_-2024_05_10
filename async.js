export function getAdat(vegpont, callback) {
  fetch("adatok.json")
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
