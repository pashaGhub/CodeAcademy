<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>Welcome to our web</p>
    <button>top rated movies today</button>
    <div id="container">
      <p>press the button to see the top rated movies today</p>
    </div>
    <script>
      const movieArr = [
        { title: "Minions", age: 0, creator: "Zbigniew", price: 5 },
        { title: "The Black Phone", age: 18, creator: "Jimmy", price: 7 },
        { title: "Elvis", age: 16, creator: "Elise", price: 6 },
        { title: "Top Gun: Maverick", age: 12, creator: "Nataly", price: 12 },
      ];
      document.querySelector("button").addEventListener("click", () => {
        document.querySelector("#container > p").remove();

        movieArr.forEach(({ title, creator, age, price }) => {
          const container = document.createElement("div");
          const titleEl = document.createElement("h1");
          const creatorEl = document.createElement("h2");
          const ageEl = document.createElement("h4");
          const priceEl = document.createElement("h4");

          titleEl.textContent = `Movie title: ${title}`;
          creatorEl.textContent = `Creator: ${creator}`;
          ageEl.textContent = `Minimum age: ${age}`;
          priceEl.textContent = `Ticket price: ${price}`;

          container.style.color = "#fff";
          container.style.background = "#333";
          container.style.padding = "0 0 0 1rem";

          container.append(titleEl);
          container.append(creatorEl);
          container.append(ageEl);
          container.append(priceEl);

          document.getElementById("container").append(container);
        });

        // for (let i = 0; i < movieArr.length; i++) {
        //   const container = document.createElement("div");
        //   const title = document.createElement("h1");
        //   const creator = document.createElement("h2");
        //   const age = document.createElement("h4");
        //   const price = document.createElement("h4");

        //   title.textContent = `Movie title: ${movieArr[i].title}`;
        //   creator.textContent = `Creator: ${movieArr[i].creator}`;
        //   age.textContent = `Minimum age: ${movieArr[i].age}`;
        //   price.textContent = `Ticket price: ${movieArr[i].price}`;

        //   container.style.color = "#fff";
        //   container.style.background = "#333";
        //   container.style.padding = "0 0 0 1rem";

        //   container.append(title);
        //   container.append(creator);
        //   container.append(age);
        //   container.append(price);

        //   document.getElementById("container").append(container);
        // }
      });
    </script>
  </body>
</html>
