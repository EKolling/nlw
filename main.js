function createGame(player1, hour, player2) {
return `
<li>
  <img src="./assets/logo_${player1}.svg" alt="logo_${player1}">
    <strong>${hour}</strong>
    <img src="./assets/logo_${player2}.svg" alt="logo_${player2}">
</li>                        
`
}

function createCard(date, day, games){ 
  return`
  <div class="card">
    <h2>${date} <span>${day}</span></h2>
      <ul>
      ${games}
      </ul>
  </div>
  `
}

document.querySelector("#app").innerHTML = `
            <header>
                <img src="./assets/logo_cabecalho.svg" alt="logo nlw">
            </header>
              <main id="cards">
                  ${createCard("24/11", "quinta", createGame("brasil", "16:00", "serbia"))}
                  ${createCard("28/11", "segunda" createGame("switzerland", "13:00", "brasil"))}
                  ${createCard("02/12", "sexta" createGame("brasil", "16:00", "cameroon"))}
              </main>
`