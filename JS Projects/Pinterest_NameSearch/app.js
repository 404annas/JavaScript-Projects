let arr = [
  {
    name: "Petals Of Roses",
    image:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvc2VzfGVufDB8fDB8fHww",
  },
  {
    name: "Animals Everywhere",
    image:
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Crowd In The City",
    image:
      "https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3Jvd2QlMjBpbiUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Fruits In Planet",
    image:
      "https://images.unsplash.com/photo-1509813685-e7f0e4eaf3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZydWl0JTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Web Designs",
    image:
      "https://plus.unsplash.com/premium_photo-1661677942925-b6ad7b27af18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRlc2lnbnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Merry Christmas",
    image:
      "https://plus.unsplash.com/premium_photo-1661414570946-d4025d847c4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVycnklMjBjaHJpc3RtYXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Orange Peeled",
    image:
      "https://plus.unsplash.com/premium_photo-1693266286749-420cfcea5f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwcGVlbGVkfGVufDB8fDB8fHww",
  },
];

function showTheCards() {
  var cards = "";
  arr.forEach((obj) => {
    cards += `<div class="box">
        <img class="cursor-pointer" src=${obj.image} alt="image">
        <div class="caption">${obj.name}</div>
        </div>`;
  });
  document.querySelector(".container").innerHTML = cards;
}

function showOnSearch() {
  let input = document.querySelector("#searchinput");

  input.addEventListener("focus", () => {
    document.querySelector(".overlay").style.display = "block";
  });

  input.addEventListener("blur", () => {
    document.querySelector(".overlay").style.display = "none";
  });

  input.addEventListener("input", () => {
    const filterCards = arr.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value)
    );
    var cardsInfo = "";
    filterCards.forEach((element) => {
      cardsInfo += `<div class="red flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${element.name}</h3>
            </div>`;
    });
    document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = cardsInfo;
  });
}

showTheCards();
showOnSearch();
