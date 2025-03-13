interface PokemonCard{
  id: number;
  image: string;
  name: string;
  types: string[];
}
const data= [
  {
    id: 1,
    name: "BULBASAUR",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png ",
    types: ["poison", "water"],
  },

  {
  id: 2,
  name: "PIKACHU",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png ",
  types: ["elettric"],
},
{
id: 3,
  name: "CLEFAIRY",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
  types: ["fire", "water"],
},
{
id: 4,
  name: "RATTATA",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png ",
  types: ["fire", "water"],
},
{
id: 5,
  name: "SQUI LE",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png ",
  types: ["fire", "water"],
},
{
  id: 6,
    name: "CHARMANDER",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png ",
    types: ["fire"],
  },
];

const typeC: { [key: string]: string} = {
  fire: "bg-red-300",
  water: "bg-blue-300",
  elettric: "bg-yellow-200",
  poison: "bg-purple-400",
};

function getTypeColor(type: string){
  const color= typeC[type];
  return color;
}


const Card = (props: PokemonCard) => {
  return  <div className="flex flex-wrap bg-red-200 p-0.1 w-3xs">
            {props.id} - {props.name}
            <img src = {props.image}/>
            <div className="flex flex-wrap bg-red-200 gap-2 p-3">
              {props.types.map((type) => {
              return <div className={`p-4 ${getTypeColor(type)}`}>{type}</div>
             })}
            </div>
          </div>

 
}

export const App = () => {
  return (
  <div>
    <div className="flex flex-wrap gap-40 p-50">
      {data.map ((item) => {
        return <Card id={item.id} name={item.name} image={item.image} types={item.types} />
      })}
    </div>
  </div>
  );
};

export const Detail = () => {
  return null
}