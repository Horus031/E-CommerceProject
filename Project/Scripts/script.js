async function renderComponent(id, file) {
    const element = document.getElementById(id);
    const response = await fetch(file);
    if (response.ok) {
        console.log(response);
        element.innerHTML = await response.text();
    } else {
        throw new Error(`Can't load file ${file}`);
    }
}

renderComponent('header-wrapper', 'header.html')
renderComponent('footer-wrapper', 'footer.html')