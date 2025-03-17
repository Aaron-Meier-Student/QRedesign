fetch("https://raw.githubusercontent.com/Aaron-Meier-Student/QRedesign/refs/heads/main/body.txt")
    .then((response) => response.text())
    .then((data) => {
        document.body.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching text:", error));
fetch("https://raw.githubusercontent.com/Aaron-Meier-Student/QRedesign/refs/heads/main/head.txt")
    .then((response) => response.text())
    .then((data) => {
        document.head.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching text:", error));
