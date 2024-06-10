let theInput = document.querySelector(".get-repos input")
let getBtn = document.querySelector(".get-repos .get-button")
let reposData = document.querySelector(".show-data")


getBtn.addEventListener("click", function(){
    if (theInput.value.trim() == "" ) { // If Value is Empty 
        reposData.innerHTML = `<span>Please Write Github Username</span>`
    }else{

        fetch(`https://api.github.com/users/${theInput.value}/repos`).then((res)=> res.json()).then((repos) => {
            // console.log(repos)
                    // Clear The Container
                    reposData.innerHTML = ""
            
                    // Loop On Repositries
                    repos.forEach(repo => {
                        console.log(repo.name);
                        let mainDiv = document.createElement("div");
                        let url = document.createElement("a")
                        url.href = `https://github.com/${theInput.value}/${repo.name}`
                        let stars = document.createElement("span")
                        url.setAttribute("target" , "_blank")
                        let urlText = document.createTextNode("visit")
                        let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`)
                        let mainDivText = document.createTextNode(repo.name)
                        let itemsContainer = document.createElement("span");
                        itemsContainer.className = "items-container"
                        // Stars.textContent = `Stars ${repo.stargazers_count}`
                        // mainDiv.textContent = repo.name;
                        // url.textContent = "visit";
                        mainDiv.className = "repo-box"
                        url.appendChild(urlText)
                        stars.appendChild(starsText)
                        itemsContainer.appendChild(url);
                        itemsContainer.appendChild(stars);
                        mainDiv.appendChild(mainDivText);
                        mainDiv.appendChild(itemsContainer);
                        reposData.append(mainDiv);
                    });
        })
    }
})











