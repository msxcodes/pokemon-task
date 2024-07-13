import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./components/pokemon-card";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { IPoke } from "../../interfaces/poke-interface";

const HomeSection = () => {
  const [pokemon, setPokemon] = useState<IPoke[]>([]);

  const [filteredData, setFilteredData] = useState<IPoke[]>([]);

  const fetchApiData = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150"
    );
    filterResponseData(data.results as any[]);
  };

  const searchData = (searchTerm: string) => {
    setFilteredData(
      pokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  };

  const filterResponseData = (data: any[]) => {
    let poke = data.map((data: any, i: number) => {
      return {
        name: data.name,
        url: data.url,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          i + 1
        }.png`,
      };
    });
    setPokemon(poke);
    setFilteredData(poke);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <div className="flex items-center px-3 mb-8 rounded-md border max-w-xs mx-auto border-neutral-700 p-1 ">
        <Search className="opacity-60" size={16} />
        <Input
          onChange={(e) => searchData(e.target.value)}
          type="text"
          className="border-none text-lg size-full p-1 flex items-center"
          placeholder="Search Pokemon Here..."
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-4 md:px-0">
        {filteredData &&
          filteredData.map((item, index) => {
            return (
              <PokemonCard key={index} name={item.name} image={item.image} />
            );
          })}
      </div>
    </div>
  );
};

export default HomeSection;
