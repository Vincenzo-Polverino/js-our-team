const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

let rowEl = document.querySelector('.row');

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  let { name, role, email, img } = member;
  let markup =
   `
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 d.flex flex-wrap">
      <div class="card bg-black d-flex flex-row align-items-center flex-wrap rounded-0">
       <img width="120" src="${img}" class="me-3">
        <div class="d-flex flex-column">
          <h4 class="text-white">${name}</h4>
          <span class="text-white">${role}</span>
          <a href="#" class="text-decoration-none text-info">${email}</a>
        </div>
      </div>
    </div>
  `
  rowEl.innerHTML += markup
}