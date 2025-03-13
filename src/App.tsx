interface PokemonCard {
  id: number;
  image: string;
  name: string;
  types: string[];
}

const data: PokemonCard[] = [
  {
    id: 1,
    name: "Geodude",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["fire", "water"],
  },
  {
    id: 2,
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["electric"], // Corretto "Elettric" in "electric"
  },
  {
    id: 3,
    name: "Bubs",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["fire", "water"],
  },
  {
    id: 4,
    name: "Bubs",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["fire", "water"],
  },
  {
    id: 5,
    name: "Squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["water"],
  },
  {
    id: 6,
    name: "Charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["fire"],
  },
];

const typeColors: { [key: string]: string } = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-500",
};

function getTypeColor(type: string) {
  return typeColors[type] || "bg-gray-400"; // Colore di fallback
}

export const App = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-sky-200">
      {data.map((item) => (
        <div key={item.id} className="bg-white p-4 shadow-md rounded-lg w-40 text-center">
          <h3 className="text-lg font-bold">{item.id} - {item.name}</h3>
          <img src={item.image} alt={item.name} className="w-full h-32 object-contain" />
          <div className="flex justify-center gap-2 mt-2">
            {item.types.map((type) => (
              <div key={type} className={`px-2 py-1 rounded ${getTypeColor(type)}`}>
                {type}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Detail = () => {
  return null;
};
