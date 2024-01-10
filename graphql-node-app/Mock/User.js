// const users = [{
//     "id": 1,
//     "name": "Wolfie",
//     "age": 1,
//     "email": "wharsnipe0@washingtonpost.com",
//     "company": "Photolist"
//   }, {
//     "id": 2,
//     "name": "Meris",
//     "age": 2,
//     "email": "mcallicott1@eventbrite.com",
//     "company": "Photofeed"
//   }, {
//     "id": 3,
//     "name": "Farlee",
//     "age": 3,
//     "email": "fmedmore2@umich.edu",
//     "company": "Mydo"
//   }, {
//     "id": 4,
//     "name": "Katee",
//     "age": 4,
//     "email": "kbritten3@telegraph.co.uk",
//     "company": "Skinte"
//   }, {
//     "id": 5,
//     "name": "Bili",
//     "age": 5,
//     "email": "blantiff4@nhs.uk",
//     "company": "Oyope"
//   }, {
//     "id": 6,
//     "name": "Willard",
//     "age": 6,
//     "email": "wbeiderbeck5@upenn.edu",
//     "company": "Fadeo"
//   }, {
//     "id": 7,
//     "name": "Peyton",
//     "age": 7,
//     "email": "plegendre6@theatlantic.com",
//     "company": "Browsebug"
//   }, {
//     "id": 8,
//     "name": "Madel",
//     "age": 8,
//     "email": "mvint7@army.mil",
//     "company": "Youbridge"
//   }, {
//     "id": 9,
//     "name": "Osmond",
//     "age": 9,
//     "email": "ocowoppe8@ftc.gov",
//     "company": "Vipe"
//   }, {
//     "id": 10,
//     "name": "Griffith",
//     "age": 10,
//     "email": "ghauxley9@wunderground.com",
//     "company": "Bubbletube"
//   }]

const users = [
    { id: "1", name: "John", age: "30", companyName: "CompanyA" },
    { id: "2", name: "Alice", age: "25", companyName: "CompanyA" },
    { id: "3", name: "Bob", age: "28", companyName: "CompanyB" },
    { id: "4", name: "Eva", age: "22", companyName: "CompanyB" },
    { id: "5", name: "Mike", age: "35", companyName: "CompanyC" },
];

const companies = [
    { id: '1', name: "CompanyA", employes: ["1", "2"] },
    { id: '2', name: "CompanyB", employes: ["3", "4"] },
    { id: '3', name: "CompanyC", employes: ["5"] },
];



module.exports = { users, companies }