const CharacterCard = ({ id, quote, character, image }) => {
  return (
    <div
      key={id}
      className="320px-639px:w-[90%] sm:w-[80%] xl:w-[62.5rem] mx-auto 320px-639px:p-1 sm:p-3 mb-5 bg-white border rounded-md"
    >
      <img className="mb-2 mx-auto" src={image} alt="character" loading="lazy" />
      <div className="flex flex-col items-center p-2">
        <p className=" 320px-639px:text-[1rem] text-[1.4rem] bg-pink mb-[1rem] mx-5 p-3 border border-black rounded-md text-white font-poppins text-center">
          {quote}
        </p>
        <p className=" 320px-639px:text-[1.2rem] text-[1.8rem] bg-pink mx-5 p-3 border border-black rounded-md text-white font-poppins text-center">
          {character}
        </p>
      </div>
    </div>
  )
}

export default CharacterCard
