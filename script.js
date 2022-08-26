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
  age: function () {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const playerAge = currentYear - this.birth.year;
    return playerAge;
  },
  height: 170, //in centimeter
  positions: ["Attacking Midfield, Midfield"],
  club: "Nottingham Forrest FC",
  nationality: "England",
  career: [
    {
      club: "Fletcher Moss Rangers",
      season: "Youngster / Youth",
      description: "Having played for Fletcher Moss Rangers and Penketh United as a youngster, Lingard joined Manchester United's youth academy at the age of seven and progressed through the age groups. He was part of the Manchester United team that won the 2010–11 FA Youth Cup, before signing a professional contract in the summer of 2011."
    },
    {
      club: "Manchester United",
      season: '2011-2012',
      description: "Lingard was first included in a senior matchday squad on 30 November 2011, in the League Cup quarter-finals against Crystal Palace at Old Trafford, remaining unused as Sir Alex Ferguson's team lost 2–1 after extra time. He had his only other call-up of the season on 4 January 2012, again unused in a 3–0 away Premier League loss to Newcastle United."
    },
    {
      club: "Leicester City(loan)",
      season: '2012-2013',
      description: "On 6 November 2012, Lingard and teammate Michael Keane joined Leicester City on loan for a month. He made his competitive debut later that day, in a 0–0 Championship draw away to Bolton Wanderers, coming on as a substitute for Martyn Waghorn in the 85th minute. His loan was later extended to 2 January 2013, and he totalled five appearances for the Foxes."
    },
    {
      club: "Manchester United",
      season: "2013-2014",
      description: `Lingard was selected in the 19-man squad for Manchester United's 2013 pre-season tour. He scored his first two goals for United in a 5–1 friendly win against the A-League All Stars in Sydney on 20 July, the first of which was the club's first goal under new manager David Moyes. After the match, he said "I believe in myself but I have to start believing in myself more".[23] He also scored against Yokohama F. Marinos[24] and Kitchee SC to finish the tour as top scorer with four goals in as many matches. Although he had hoped to "skip the loan stage this time and break straight through" at Manchester United, Lingard joined Birmingham City on a month's loan on 19 September, and went straight into the starting eleven for the Championship match against Sheffield Wednesday at St Andrew's two days later. He opened the scoring after 20 minutes with his first goal in senior football when goalkeeper Chris Kirkland parried Chris Burke's shot, completed his hat-trick 13 minutes later, and scored a fourth in the second half to secure a 4–1 win. Lingard was unavailable for Birmingham's League Cup third-round tie because Manchester United did not want him cup-tied,[28] then in his third league match, he made up for missing a penalty, awarded when he was fouled apparently outside the area, with an 89th-minute header to complete a 4–0 defeat of Millwall. Agreement was reached to extend Lingard's loan until 14 December, but he then missed three matches while receiving treatment at Manchester United for a knee injury.[31] The loan was further extended, to 1 January 2014, but Lingard was suspended for the last two matches of the spell. He was sent off during a match against Wigan Athletic on 26 December for a lunge on Jordi Gómez immediately after being refused a free kick when he appeared to be fouled. Although Birmingham hoped to extend the loan, Lingard returned to Manchester United and was an unused substitute in the match against Swansea City on 11 January.
On 27 February 2014, Lingard joined another Championship club, Brighton & Hove Albion, on a 93-day loan. He scored his first goal for the club on 8 April, in a 4–1 win against former club Leicester City, who had sealed promotion to the Premier League days earlier. While with Albion, Lingard played 17 times, including in the Championship play-offs, and scored 4 goals.
      `
    },
    {
      club: "Manchester United",
      season: '2014-2015',
      description: `On 4 August 2014, Lingard came off the bench to score the third goal in United's 3–1 International Champions Cup Final win over Liverpool. He made his competitive debut for the club in the first match of the 2014–15 Premier League season at home to Swansea City, starting the match but was replaced by Adnan Januzaj because of injury after 24 minutes. Swansea won 2–1 in Louis van Gaal's first competitive match as United manager. On 2 February 2015, Lingard joined Championship club Derby County on loan until the end of the season.[39] He made his first start on 14 February, against Reading in the FA Cup.[40] 
      `
    },
    {
      club: "Manchester United",
      season: '2015-2016',
      description: `On 7 November 2015, Lingard scored his first senior goal for Manchester United in a 2–0 win against West Bromwich Albion at Old Trafford, opening the scoring with a shot past Boaz Myhill from outside the penalty area.[41] On 12 January 2016, he scored against Newcastle United in a 3–3 draw at St James' Park, with a finish that went between the legs of the goalkeeper after a reverse assist from Wayne Rooney. He added his third goal of the season on 2 February against Stoke City in a 3–0 victory with a closer range diving header from a cross by Cameron Borthwick-Jackson.[43] On 7 February 2016, Lingard scored his fourth goal of the season in a 1–1 draw against Chelsea at Stamford Bridge, breaking the deadlock with a spin and shot inside the penalty area.[44] On 21 May 2016, Lingard scored the winning goal for Manchester United in the 2016 FA Cup Final against Crystal Palace, having come on as a second-half substitute for other goalscorer Juan Mata.[45]
      `
    }
  ]
};

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
                <td>${playerData.birth.date}, ${playerData.birth.month} ${playerData.birth.year} <span class="player-age">(age ${playerData.age()})</span></td>
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
          mainDetail.innerHTML = `<section class="career">
                        ${
                          playerData.career.map(timeline => `<div class="timeline-container">
                              <h2>${timeline.season} <span class='club-career'>${timeline.club}</span></h2>
                              <p>${timeline.description}</p>
                            </div>`)
                        }
                    </section>`;
          break;
        case "Achievements":
          storyTab.classList.remove("tab-button-active");
          careerTab.classList.remove("tab-button-active");
          achievementsTab.classList.add("tab-button-active");
          mainDetail.innerHTML = `rausah banter" anjing ndak kantru!!`;
          break;
        default:
          alert("no tab was clicked");
          break;
      }
    })
  );

