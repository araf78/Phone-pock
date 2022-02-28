const loadPhones = () => {
    const url = 'https://openapi.programming-hero.com/api/phones?search=iphone'
    fetch(url)
    .then(res => res.json())
    .then(allData => displayPhones(allData.data))
}
loadPhones();
const displayPhones = phones =>{
    phones.forEach(phone =>{
        console.log(phone)
    })
}