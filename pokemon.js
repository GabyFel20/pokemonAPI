function getRandomInt (min, max)  {
    return Math.floor(Math.random() * (max-min)) + min;
}

console.log(getRandomInt (1,151));

document.addEventListener('DOMContentLoaded',()=> {
    fetchData ()
})

const fetchData = async () => {
    try {
        const res = await fetch ('https://pokeapi.co/api/v2/pokemon/150')
        const data = await res.json()
        console.log(data)

    } catch (error){
        console.log(error)
    }
}

