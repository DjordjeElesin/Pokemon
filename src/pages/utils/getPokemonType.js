const getPokemonType = (type) => {
    let background
    switch (type) {
      case "grass":
        background = "#9bcc50";
        break;
      case "poison":
        background = "#b97fc9";
        break;
      case "fire":
        background = "#fd7d24";
        break;
      case "flying":
        background = "linear-gradient(180deg, #3dc7ef , #bdb9b8 )";
        break;
      case "water":
        background = "#4592c4";
        break;
      case "bug":
        background = "#729f3f";
        break;
      case "normal":
        background = "#a4acaf";
        break;
      case "electric":
        background = "#ffcb05";
        break;
      case "ground":
        background = "linear-gradient(180deg, #f7de3f , #ab9842 )";
        break;
      case "fairy":
        background = "#fdb9e9";
        break;
      case "fighting":
        background = "#d56723";
        break;
      case "psychic":
        background = "#BF40BF";
        break;
      case "rock":
        background = "##a38c21";
        break;
      case "steel":
        background = "#9eb7b8";
        break;
      case "ice":
        background = "#51c4e7";
        break;
      case "ghost":
        background = "#7b62a3";
        break;
      case "dragon":
        background = "linear-gradient(180deg, #53a4cf , #f16e57 )";
        break;
      default:
        background = "#707070";
    }
    return background;
  };
  
  export default getPokemonType;
  