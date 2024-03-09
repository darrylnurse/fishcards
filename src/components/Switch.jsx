// eslint-disable-next-line react/prop-types
export default function Switch({symbol, color}){
  return (
      <div style={{textShadow: "1px 1px 2px black", backgroundColor: color}}
           className={"p-5 hover:scale-[102%] active:scale-[98%] hover:drop-shadow-xl drop-shadow-lg w-full bg-cyan-400 rounded-2xl select-none cursor-pointer h-full flex justify-center items-center"}>
        {symbol}
      </div>
  )
}