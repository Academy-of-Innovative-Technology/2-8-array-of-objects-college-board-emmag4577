const colleges = [
    {
        id: "harvard",
        info: {
            location:"Cambridge, Massachusetts",
            program:"Mind, Brain, and behavior program",
            website:"https://www.harvard.edu",
            logo:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_coat_of_arms.svg",
            rank:"1"
        }
    },
    {
        id: "princeton",
        info: {
            location:"Princeton, New Jersey",
            program:"Computer Science/Psychology",
            website:"https://www.princeton.edu",
            logo:"https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg",
            rank:"2"
        }
    },
    {
        id: "SUNY Binghamton",
        info: {
            location: "Binghamton, New York",
            program: "computer science",
            website: "https://www.binghamton.edu",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRaZUgiT-j8HVNs_ieiw1QGJPa4qkWQ5UZtg&s",
            rank: "3"
        }
    },
    {
        id: "SUNY Stonybrook",
        info: {
            location: "Stonybrook, New York",
            program: "computer science",
            website: "https://stonybrook.edu",
            logo: "https://www.stonybrook.edu/marcom/_images/2015/10/logo_stacked_vert.jpg",
            rank: "4"
        }
    },
    {
        id: "New York University",
        info: {
            location: "Manhattan, New York",
            program: "computer science",
            website: "https://www.nyu.edu",
            logo: "https://fundit.fr/sites/default/files/styles/max_650x650/public/actors/2518-universite-new-york-nyu.png?itok=z-UBR5U8",
            rank: "5"
        }
    }

];
const listGroup = document.querySelector(".list-group");

listGroup.innerHTML = " ";

colleges.forEach(college => {
    const card = document.createElement("div");
    card.classList.add("list-group-item", "college-card");

    card.innerHTML = `
    <div class="row">
        <div class="col-2">
            <img src="${college.info.logo}" alt="${college.id}" class="collegeImage">
        </div>
        <div class="col-7 college-info">
        <h5>${college.info.rank}. ${college.id}</h5>
                <p><strong>Address:</strong> ${college.info.location}</p>
                <p><strong>Website:</strong>
                    <a href="${college.info.website}" target="_blank">
                        ${college.info.website}
                    </a>
                </p>
                <p><strong>Google Maps:</strong>
                    <a href="https://maps.google.com?q=${college.info.location}" target="_blank">
                        View on Google Maps
                    </a>
                </p>
            </div>
        </div>
    `;

    listGroup.appendChild(card);
});