document.getElementById('error').style.display = 'none';
const loadPhones = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(allData => displayPhones(allData.data.slice([0],[20])))
     }

        //  display phones 
const displayPhones = phones =>{
    // console.log(phones)
    const phonesDiv = document.getElementById('phones');
    phonesDiv.textContent = '';
     if(phones.length == 0){
       document.getElementById('error').style.display = 'block';
    }
    phones.forEach(phone =>{
        // console.log(phone)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col p-4">
        <div class="card h-100 shadow-sm rounded">
          <div class="text-center mt-3">
            <img  src="${phone.image}" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title text-success"><strong>${phone.phone_name}</strong></h5>
            <p class="card-text text-info">${phone.brand}</p>
            <button onclick="phoneDetails('${phone.slug}')" type="button" class="button px-3 py-2 text-white">More Details</button>
          </div>
        </div>
      </div>
        `
        phonesDiv.appendChild(div)
        // console.log(phone)
    })
  }
  
// detail information 
const phoneDetails = phoneId =>{
    console.log(phoneId) 
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
    .then(res => res.json())
    .then(id =>displayDetail(id.data));
}
 const displayDetail = phone => {
     const detailsDiv = document.getElementById('detail-info');
     console.log(detailsDiv)
     const div = document.createElement('div');
     // detailsDiv.textContent = '';
     div.classList.add('detail-display')
     div.innerHTML = `
     <h5 class="text-center text-success fw-bold mt-3">Phone Detail Information </h5>
     <div class="card detail-card m-3 h-25 shadow-sm rounded mx-auto">
           <div class="text-center mt-3">
             <img  src="${phone.image}" class="card-img-top" alt="...">
           </div>
           <div class="card-body">
             <h5 class="card-title text-success"><strong>${phone.name}</strong></h5>
             <h4 class="card-text brand"><strong>${phone.brand}</strong></h4>
             <p class="card-text"><strong><span class="detail"> Release Date:</span> ${phone.releaseDate}</strong></p>
             <p class="card-text"><strong ><span class="detail"> Chit Set:</span> ${phone.mainFeatures.chipSet}</p></strong>
             <p class="text-success text-center">Sensors</p>
             <p class="card-text"><strong ><span class="detail"> Sensors:</span> ${phone.mainFeatures.sensors}</p></strong>
             <p class="card-text"><strong ><span class="detail"> Storage:</span> ${phone.mainFeatures.storage}</p></strong>
             <p class="text-success text-center">Others</p>
             <p class="card-text"><strong ><span class="detail"> Bluetooth:</span> ${phone?.others?.Bluetooth}</p></strong>
             <p class="card-text"><strong ><span class="detail"> GPS:</span> ${phone?.others?.GPS}</p></strong>
             <p class="card-text"><strong ><span class="detail"> WLAN:</span> ${phone?.others?.WLAN}</p></strong>
            
     </div>
    
    `
     detailsDiv.appendChild(div);
   console.log(phone);
 }


