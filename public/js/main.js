document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://rap-names-two.onrender.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
        document.querySelector('h3').innerText = data.age
        document.querySelector('h4').innerText = data.birthLocation
    }catch(error){
        console.log(error)
    }
}