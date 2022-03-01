const loadPhones = () => {
    const url = 'https://openapi.programming-hero.com/api/phones?search=iphone'
    fetch(url)
    .then(res => res.json())
    .then(allData => displayPhones(allData.data))
}
loadPhones();
const displayPhones = phones =>{
    // console.log(phones)
    const phonesDiv = document.getElementById('phones');
    phones.forEach(phone =>{
        console.log(phone)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
        <div class="card h-100 shadow-sm rounded">
          <div class="text-center mt-3">
            <img  src="${phone.image}" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.brand}</p>
            <button type="button" class="btn btn-primary">More Details</button>
          </div>
        </div>
      </div>
        `
        phonesDiv.appendChild(div)
    })
}