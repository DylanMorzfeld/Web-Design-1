const shows = [
    { title: "Chef's Table", tag: "Documentary", img: "../images/Chef's-table.jpg" },
    { title: "The Bear", tag: "Drama", img: "../images/The-bear.avif" },
    { title: "Julie & Julia", tag: "Film", img: "../images/Julie-Julia.jpg" },
    { title: "Salt Fat Acid Heat", tag: "Docuseries", img: "../images/Salt-fat-acid-heat.jpg" },
    { title: "Ratatouille", tag: "Animated Film", img: "../images/ratatouille.webp" },
    { title: "The Great British Bake Off", tag: "Competition", img: "../images/Bakeoff.jpg" }
  ];
  
  const grid = document.getElementById("showGrid");
  const addBtn = document.getElementById("addShowBtn");
  
  function renderGrid() {
    grid.innerHTML = "";
    shows.forEach((show, index) => {
      const card = document.createElement("div");
      card.classList.add("show-card");
      card.innerHTML = `
        <img src="${show.img}" alt="Poster of ${show.title}">
        <h3>${show.title}</h3>
        <p class="tag">${show.tag}</p>
        <button class="btn remove" data-index="${index}">Remove</button>
      `;
      grid.appendChild(card);
    });
  
    document.querySelectorAll(".remove").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = btn.getAttribute("data-index");
        removeShow(index);
      });
    });
  }

  function removeShow(index) {
    shows.splice(index, 1);
    renderGrid();
  }
  
  addBtn.addEventListener("click", () => {
    const title = prompt("Enter the cooking show or movie title:");
    const tag = prompt("Enter a tag (e.g., Documentary, Film, Competition):");
    const img = prompt("Enter an image URL:");
    
    if (title && tag && img) {
      shows.push({ title, tag, img });
      renderGrid();
    }
  });
  
  renderGrid();
  