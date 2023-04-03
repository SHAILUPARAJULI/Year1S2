const searchBtn = document.getElementById("searchBtn");
const repoList = document.getElementById("repoList");

searchBtn.addEventListener("click", async () => {
    const username = document.getElementById("username").value;
    if (!username) return;

    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    repoList.innerHTML = "";
    for (const repo of repos) {
        const listItem = document.createElement("li");
        listItem.textContent = repo.name;
        repoList.appendChild(listItem);
    }
});