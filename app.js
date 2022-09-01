const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => 
fetchData());

const fetchData = async()=> {
    try {
        const res = await fetch('api.json')
        const data = await res.json();
        //console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error);
    }
}


//aca pintamos nuestra info en el dom
const pintarCards = (data) => {
    data.forEach(producto => {
        console.log(producto);
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = producto.precio;
        templateCard.querySelector('img').setAttribute('src', producto.img);
        templateCard.querySelector('.btn-dark').dataset.id = producto.id;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
}