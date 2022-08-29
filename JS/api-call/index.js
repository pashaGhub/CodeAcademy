document.getElementById("addCar").addEventListener("click", () => {
  const newBrand = document.getElementById("brand").value;
  const newModel = document.getElementById("model").value;

  fetch("https://olive-bead-glazer.glitch.me/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      brand: newBrand,
      model: newModel,
    }),
  }).then((response) => {
    console.log(response);
    getData();
  });
});

const getData = async () => {
  try {
    const response = await fetch("https://olive-bead-glazer.glitch.me/");
    const data = await response.json();

    if (!response.ok) {
      alert("ups something went wrong");
    }

    const container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach((car) => {
      const carBrand = document.createElement("h1");
      carBrand.textContent = car.brand;

      container.append(carBrand);
    });
  } catch (error) {
    const container = document.getElementById("container");
    container.innerHTML = null;
    console.log(error.message);

    const errorMessage = document.createElement("h1");
    errorMessage.textContent = error.message;

    container.append(errorMessage);
  }

  //   fetch("https://olive-bead-glazer.glitch.measd/", {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       if (response.status >= 400) {
  //         alert("something went wrong");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       const container = document.getElementById("container");
  //       container.innerHTML = null;

  //       data.forEach((car) => {
  //         const carBrand = document.createElement("h1");
  //         carBrand.textContent = car.brand;

  //         container.append(carBrand);
  //       });
  //     })
  //     .catch((error) => {
  //       const container = document.getElementById("container");
  //       container.innerHTML = null;
  //       console.log(error.message);

  //       const errorMessage = document.createElement("h1");
  //       errorMessage.textContent = error.message;

  //       container.append(errorMessage);
  //     });
};

getData();
