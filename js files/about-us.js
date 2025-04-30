document.addEventListener("DOMContentLoaded", function () {
    
    
    const teamMembers = [
        { name: "Leonard Marida", position: "CEO", image: "../images/picture.jpg" },
        { name: "Abdel-Rahim el-Hani", position: "Sales Manager", image: "https://media.licdn.com/dms/image/v2/D5603AQFqyAhUS43frQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710683413268?e=1747267200&v=beta&t=JtwmCk-JQI5rzItr9pbdgn9BpueLHx7bkzTi0vtpDNs" },
        { name: "Hadi Majed", position: "Corporate Relations Manager", image: "https://media.licdn.com/dms/image/v2/D4E03AQE__8W55RMd_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721213009914?e=1747267200&v=beta&t=puJaFGlVNtAmwToajk4T88RkmqTW3NIUrjxPNgVLvxs" },
        { name: "Omar al-Ghadban", position: "Lead Technician", image: "https://media.licdn.com/dms/image/v2/D4E03AQFuUVs64gQvxA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719136841277?e=1747267200&v=beta&t=hzWkZp_ESxMCKAg_WqsEvPeCeImA_8mTugz3sLWII7w" } // Added 4th member
    ];

    const teamSection = document.getElementById("team-members");
    teamMembers.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("team-member");

        memberDiv.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.position}</p>
        `;

        teamSection.appendChild(memberDiv);
    });
});
function toggleMenu() {
    document.querySelector('.mobile-menu').classList.toggle('active');
}