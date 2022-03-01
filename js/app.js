const loadPhones = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(allData => displayPhones(allData.data))
}
loadPhones();
const displayPhones = phones =>{
    // console.log(phones)
    const phonesDiv = document.getElementById('phones');
    phonesDiv.textContent = '';
    phones.forEach(phone =>{
        // console.log(phone.slug)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col p-4">
        <div class="card h-100 shadow-sm rounded">
          <div class="text-center mt-3">
            <img  src="${phone.image}" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.brand}</p>
            <button onclick='phoneDetails(${JSON.stringify(phone.slug)})' type="button" class="button px-3 py-2 text-white">More Details</button>
          </div>
        </div>
      </div>
        `
        phonesDiv.appendChild(div)
    })
}
const phoneDetails = phoneId =>{
    // console.log(phoneId) 
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
    .then(res => res.json())
    .then(id => displayDetail(id.data));
}
const displayDetail = phoneId => {
    // const phoneContainer = document.getElementById('phone-container');

    const detailsDiv = document.getElementById('detail-info');
    detailsDiv.textContent = '';
    const div = document.createElement('div');
    div.classList.add('detail-display')
    div.innerHTML = `
    <h5 class="text-center text-info fw-bold mt-3">Phone Detail Information </h5>
    <div class="card h-50 shadow-sm rounded w-75 mx-auto">
          <div class="text-center mt-3">
            <img  src="${phoneId.image}" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">${phoneId.name}</h5>
            <p class="card-text">${phoneId.brand}</p>
            <p class="card-text">${phoneId.releaseDate}</p>
    </div>
    
    `
    detailsDiv.appendChild(div);
    console.log(phoneId);
}