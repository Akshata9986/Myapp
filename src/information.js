let info = [
    {
        name: "Avi",
        age: 21,
    },
    {
        name: "Akshata",
        age: 22,
    },

    {
        name: "Nayana",
        age: 22,
    },

];

info.map((value, index) => {
    return <li key={index}>{value}</li>;
})

export default info;