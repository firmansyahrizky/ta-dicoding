"use strict";
//html elements
const playerAge = document.querySelector(".player-age");
const profileTable = document.querySelector(".table-container");
const buttonTabs = document.querySelectorAll(".tab-button");
const storyTab = document.querySelector(".story-tab");
const careerTab = document.querySelector(".career-tab");
const achievementsTab = document.querySelector(".achievements-tab");
const mainDetail = document.querySelector(".main-detail");
//ends of html elements

const playerData = {
  name: "Jesse Lingard",
  birth: {
    date: 15,
    month: "December",
    year: 1992,
  },
  age: "",
  height: 170, //in centimeter
  positions: ["Attacking Midfield, Midfield"],
  club: "Nottingham Forrest FC",
  nationality: "England",
};

function ageCalculator() {
  const currentYear = new Date().getFullYear();
  const playerAge = currentYear - playerData.birth.year;
  playerData.age = playerAge;
}

function modifyProfileTable() {
  profileTable.innerHTML = `
    
    <table class="profile-table" cellspacing=0>
        <thead>
            <tr>
                <th class="table-head" colspan="2">Profile</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Name:</th>
                <td>${playerData.name}</td>
            </tr>
            <tr>
                <th>Date of Birth:</th>
                <td>${playerData.birth.date}, ${playerData.birth.month} ${playerData.birth.year} <span class="player-age">(age ${playerData.age})</span></td>
            </tr>
            <tr>
                <th>Height:</th>
                <td>${playerData.height} cm</td>
            </tr>
            <tr>
                <th>Position(s):</th>
                <td>${playerData.positions}</td>
            </tr>
            <tr>
                <th>Club:</th>
                <td>${playerData.club}</td>
            </tr>
            <tr>
                <th>Nationality:</th>
                <td>${playerData.nationality}</td>
            </tr>
        </tbody>    
    </table>   
    `;
}

function tabDetailController() {
  //how tab works:
  //recognize the clicked button
  //match the clicked button with section detail
  //show the section detail only for clicked and matched button

  buttonTabs.forEach((tab) =>
    tab.addEventListener("click", function () {
      let clickedTab = tab.textContent;

      switch (clickedTab) {
        case "Story":
          storyTab.classList.add("tab-button-active");
          careerTab.classList.remove("tab-button-active");
          achievementsTab.classList.remove("tab-button-active");
          mainDetail.innerHTML = `<section class="story">
          <article>
            <p>
              Jesse Ellis Lingard (born 15 December 1992) is an English professional footballer who plays
              as an attacking midfielder or winger for Premier League club Nottingham Forest and the
              England national team. He has won the UEFA Europa League, FA Cup, FA Community Shield, and
              EFL Cup, becoming one of only three players to score in all of the latter three
              finals.
            </p>
            <p>
              Lingard made his senior debut while on loan at Leicester City in 2012, and spent time on
              loan at Birmingham City and Brighton & Hove Albion during the 2013–14 season and at Derby
              County in 2015. He broke into the Manchester United first-team under Louis van Gaal in 2015,
              and was a regular in the side until 2018, when he fell out of favour under Ole Gunnar
              Solskjær and struggled to regain his place in the side. A productive loan spell with West
              Ham United in 2021 saw Lingard rediscover his form, scoring nine goals in 16 appearances. He
              returned to Manchester United for one more season until he was released at the end of the
              2021-22 season.
            </p>
          </article>
          </section>`;
          break;
        case "Career":
          storyTab.classList.remove("tab-button-active");
          careerTab.classList.add("tab-button-active");
          achievementsTab.classList.remove("tab-button-active");
          mainDetail.innerHTML = `<section class="career">career</section>`;
          break;
        case "Achievements":
          storyTab.classList.remove("tab-button-active");
          careerTab.classList.remove("tab-button-active");
          achievementsTab.classList.add("tab-button-active");
          mainDetail.innerHTML = `<section class="achievements">achievements</section>`;
          break;
        default:
          alert("no tab was clicked");
          break;
      }
    })
  );
}

tabDetailController();
ageCalculator();
modifyProfileTable();
