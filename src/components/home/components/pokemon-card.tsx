import { IPokeCard } from "../../../interfaces/pokecard-interface";
import { Card, CardFooter } from "../../ui/card";

const PokemonCard = ({ name, image }: IPokeCard) => {
  return (
    <Card className="hover:-translate-y-3 cursor-pointer transition-all duration-300 border-2 hover:border-blue-500">
      <div className="border flex justify-center items-center overflow-hidden">
        <img
          src={image}
          alt="image"
          className="size-44 flex justify-center items-center"
        />
      </div>
      <CardFooter>
        <div className="uppercase font-semibold mt-4">{name}</div>
      </CardFooter>
    </Card>
  );
};

export default PokemonCard;
