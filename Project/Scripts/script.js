async function renderComponent(id, file) {
    const element = document.getElementById(id);
    const response = await fetch(file);
    if (response.ok) {
        element.innerHTML = await response.text();
        console.log(response);
    } else {
        throw new Error(`Can't load file ${file}`);
    }
}

renderComponent('header-wrapper', 'header.html')
renderComponent('footer-wrapper', 'footer.html')