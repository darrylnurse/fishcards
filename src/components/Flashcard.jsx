// eslint-disable-next-line react/prop-types
export default function Flashcard({question, answer, setFlip, flip, setReset, reset, color, image}){

  //const [flip, setFlip] = useState(false);
  const clickCard = () => { //lets move these to parent so we can affect from switch
    setFlip(!flip);
    setReset(false);
  }

  return (
        <div onClick={(clickCard)}
             className={`card ${flip ? (flip && reset ? 'flip-front' : 'flip-back') : ''} text-white text-xl md:text-2xl lg:text-3xl 2xl:text-4xl w-full h-full bg-fuchsia-200 cursor-pointer select-none border-4 border-white flex items-center justify-center`}
             style={{backgroundColor: color, textShadow: "1px 1px 2px black"}}>
          <div className={"front text-center p-8"}>{question}</div>

          <div className={`flex flex-col items-center gap-1 lg:gap-6 back text-center ${answer === "Hydrocynus goliath" ? 'italic' : ''}`}>
            <div className={`flex items-center justify-center ${question === "Which non-fortuitous event reportedly occurred in 2001 in a rural village in Papua New Guinea involving the castration and subsequent death of two Fisherman?" ? 'text-xs lg:text-sm  px-8' : ''}`}>
              {answer}
            </div>
            <div className={"h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] overflow-hidden rounded-2xl"}><img className={" w-full h-full object-cover"} src={image} alt={"answer-image"}/></div>
          </div>

        </div>
  )
}