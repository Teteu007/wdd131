const tournamentSelect = document.querySelector("#tournament");
const cardsElement = document.getElementById("cards");
const eventList = document.querySelector("#eventlist");
const fieldList = document.querySelector("#fieldlist");

const tournaments = [
    {
      id: "st-1234",
      name: "Tree removal",
      
    },
    {
      id: "st-1235",
      name: "Stump Grinding",
      
    },
    {
      id: "st-1236",
      name: "Tree trimming",
      
    },
  ];

  const fields = [
    {
      name: "Matheus",
      averagerating: 5,
      imgurl: "images/field1.webp" 
    },
    {
      name: "Cathy",
      averagerating: 5,
      imgurl: "images/field2.webp"
    },
    {
      name: "Mike",
      averagerating: 5,
      imgurl: "images/field3.webp"
    },
];

function createTournamentSelectList() {
  tournaments.forEach(t => {
    optElement = document.createElement("option");
    optElement.setAttribute("value", t.id);
    optElement.innerText = t.name

    tournamentSelect?.appendChild(optElement);
  });
}

createTournamentSelectList();

function createFieldCards() {
  fields.forEach(f => {
    if (f.averagerating > 4.3){
      const card = document.createElement("section");
      card.classList.add("card");
      const title = document.createElement("h3");
      title.innerText = f.name;
      card.appendChild(title);

      const img = document.createElement("img");
      img.setAttribute("src", f.imgurl);
      img.setAttribute("alt", "Blades Tree Removal");
      card.appendChild(img);
      
      const desc = document.createElement("div");
      desc.innerHTML = `
      <p>${f.averagerating}⭐</p>
      `
      card.appendChild(desc);

      cardsElement?.appendChild(card)
    }
  });
}

createFieldCards();

function createEventsTable() {
  tournaments.forEach(t => {
    const row = document.createElement("tr");
    const header = document.createElement("th");
    const code = document.createElement("td");
    const datestart = document.createElement("td");
    const dateend = document.createElement("td");
    const numteams = document.createElement("td");

    header.innerText = t.name;
    code.innerText = t.id;
    datestart.innerText = t.datestart;
    dateend.innerText = t.dateend;
    numteams.innerText = t.numteams;


    row.appendChild(header);
    row.appendChild(code);
    row.appendChild(datestart);
    row.appendChild(dateend);
    row.appendChild(numteams);

    eventList?.appendChild(row);
  });
}

createEventsTable()

function createFieldsTable() {
  fields.forEach(f => {
    const row = document.createElement("tr");
    const header = document.createElement("th");
    const rating = document.createElement("td");

    header.innerText = f.name;
    rating.innerText = f.averagerating;

    row.appendChild(header);
    row.appendChild(rating);
    
    fieldList?.appendChild(row);
  });
}

createFieldsTable();