async function getJoke(){
  try{

const characterName = document.getElementById("characterName").value;


    const url = "https://api.disneyapi.dev/character?name="+characterName

    const headers = new Headers();
    headers.append("Accept", "application/json")

    const response = await fetch(url, {headers:headers})

    const json = await response.json();
    console.log(json);

    const jokeHolder = document.getElementById("jokeHolder")
    jokeHolder.append (document.createElement("br"))

let img = document.createElement("img");
img.src=json.data[0].imageUrl;


img.width=100
jokeHolder.appendChild(img)

  }
  catch(error){
    console.log(error)
  }
}