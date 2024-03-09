//object of question answer pairs

import Flashcard from "./Flashcard.jsx";
import Switch from "./Switch.jsx";
import {useState} from "react";

export default function Page(){

  const images = {
    weirdfish: "https://media.sketchfab.com/models/2ce6e525975344a58485e8d8e192844e/thumbnails/451410058f134431ad85ccec8f5d34c0/046ce90593d245f0aa243b3e6c95ba4c.jpeg",
    catfish: "https://img.freepik.com/premium-vector/cute-catfish-cartoon-icon-illustration_725118-273.jpg?w=360",
    water: "https://t4.ftcdn.net/jpg/02/60/12/53/360_F_260125376_MQqe2h3iHkdhp57cKLBbLzU6hpq59VoM.jpg",
    spellwater: "https://t3.ftcdn.net/jpg/00/68/66/96/360_F_68669649_USKNEah0nTdwfAqGko3tm9nHxUY20NrK.jpg",
    swim: "https://t3.ftcdn.net/jpg/04/71/41/06/360_F_471410699_RoOncbBz8ull0Z4inBydMzLYoCtUvRsR.jpg",

    beluga: "https://wwfint.awsassets.panda.org/img/original/huso_huso_schoenbrunn_phyllis.jpg",
    mekong: "https://www.mandai.com/content/dam/wrs/river-safari/animals/signpost/1x1/mekong-giant-catfish-1x1.jpg",
    gar: "https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2022/05/1280/720/Melanistic-alligator-gar-Justin-Jordan-copy.jpg?ve=1&tl=1",
    tiger: "https://www.totalfisherman.com/tiger_fish_images/tiger_fish_being_held.jpg",
    wels: "https://naturefishblog.files.wordpress.com/2017/02/welscatfish_orig.jpg",

    arapaima: "https://media.wired.com/photos/59269a378d4ebc5ab806ad9a/master/pass/Arapaima-73797921.jpg",
    bambusa: "https://www.greenflow.hk/cdn/shop/products/9db3394948486f15ed293dc93b52f48_1946x.jpg?v=1640159199",
    jorge: "https://www.worldlifeexpectancy.com/images/a/w/b/lates-niloticus/lates-niloticus.webp",
    sting: "https://s3.amazonaws.com/media.jungledragon.com/images/2994/52802_medium.jpg?AWSAccessKeyId=05GMT0V3GWVNE7GGM1R2&Expires=1710979210&Signature=6InYYrETquZ%2BvkZEa0NKUNNOfdA%3D",
    extinct: "https://th-thumbnailer.cdn-si-edu.com/nmflh5ijDgeN3lbEOswg9SUx7to=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/f5/ec/f5ecfbf0-253d-4e6c-894f-67f7afe1752c/ap_20010350989859.gif",
  }

  const solutions = {
    "Spell fish": ["f-i-s-h", images.weirdfish],
    "What is a catfish": ["a fish", images.catfish],
    "Where are fish located": ["water", images.water],
    "Spell water": ["w-a-t-e-r", images.spellwater],
    "Do fish swim?": ["yes!", images.swim],
  }

  const hardSolutions = {
    "What is the largest freshwater fish?": ["Beluga Sturgeon", images.beluga],
    "In which river is the largest species of catfish found?": ["The Mekong River", images.mekong],
    "In what year was the Alligator gar first described?": ["1803", images.gar],
    "What is the scientific name of the Goliath Tigerfish?": ["Hydrocynus goliath", images.tiger],
    "What is the favorite food of Wels Catfish in Northern European water systems?": ["'Pigeons'", images.wels],
  }

  const impossibleSolutions = {
    "What is the name of the 8th largest Nile Perch?": ["Jorge", images.jorge],
    "Calculate the diameter of a Female Giant Freshwater Stingray given the Summer Rains were interrupted for 3 weeks by a category 3 instead of 4 monsoon.": ["1.5982 meters", images.sting],
    "Find a Living Chinese Paddlefish specimen within the next 24 hours.": ["Okay", images.extinct],
    "What are the exact coordinates of the nearest Arapaima.": ["40° 45' 20.7936'' N 73° 50' 10.662'' W", images.arapaima],
    "What is the name that locals use for the Yellowcheek Bambusa?": ["鱤魚", images.bambusa],
  }

  let [questions, setQuestions] = useState(Object.keys(solutions));
  const [flip, setFlip] = useState(false);
  const [reset, setReset] = useState(false);
  const [direction, setDirection] = useState("forward");
  const [currObject, setCurr] = useState(solutions);
  const [color, setColor] = useState('#6FF1B7');
  const passFlip = value => setFlip(value);
  const passReset = value => setReset(value);

  // const randomElement = (array, exclude = null) => {
  //   const filteredArray = array.filter(element => element !== exclude);
  //   return filteredArray[Math.floor(Math.random() * filteredArray.length)];
  // }
  //
  // const removeElement = (array, remove) => {
  //   array.splice(array.indexOf(remove), 1);
  // }

  const flipReset = () => {
    setFlip(false);
    setReset(true);
  }

  const moveFront = () => {
    setQuestions(prev => {
      const newOrder = [...prev];
      newOrder.unshift(newOrder.pop());
      return newOrder;
    })
    flipReset();
    setDirection("forward");
  }

  const moveBack = () => {
    setQuestions(prev => {
      const newOrder = [...prev];
      newOrder.push(newOrder.shift());
      return newOrder;
    })
    flipReset();
    setDirection("backwards");
  }

  const changeDifficulty = (newSolutions, newColor) => {
    setQuestions(Object.keys(newSolutions));
    setCurr(newSolutions);
    setColor(newColor);
  }

  return (
      <div className={"h-screen bg-yellow-200 grid grid-rows-7 p-7 lg:p-5 overflow-hidden bg-[url(/src/assets/arapaima.jpg)] bg-no-repeat bg-cover"}>

        <div style={{textShadow: "1px 1px 2px black"}}
             className={"select-none text-7xl text-white flex items-center justify-center"}>Fishcards!</div>

        <div className={"text-center text-white select-none gap-5 lg:gap-3 flex justify-center items-center"}>
          <div onClick={()=> {
            changeDifficulty(solutions, '#6FF1B7');
            flipReset();
          }}><Switch symbol={'Easy'} color={'#6FF1B7'}/></div>
          <div onClick={()=> {
            changeDifficulty(hardSolutions, '#6FADF1');
            flipReset();
          }}><Switch symbol={'Medium'} color={'#6FADF1'}/></div>
          <div onClick={()=> {
            changeDifficulty(impossibleSolutions, '#F18E6F');
            flipReset();
          }}><Switch symbol={'Hard'} color={'#F18E6F'}/></div>
        </div>

        <div className={"row-span-3 flex justify-center items-center"}>
          <div className={"relative h-full w-full flex items-center justify-center"}>
          {questions.map(solution => {
            return (
                <div key={solution} className={`${solution === questions[questions.length - 1] ? (direction === 'forward' ? 'top-card' : 'bottom-card') : ''} h-2/3 w-full lg:h-full lg:w-5/12 absolute flex justify-center drop-shadow-lg`}>
                  <Flashcard question={solution} answer={currObject[solution][0]} setFlip={passFlip} flip={flip} setReset={passReset} reset={reset} color={color} image={currObject[solution][1]}/>
                </div>
            )
          })}
          </div>
        </div>

        <div className={"flex justify-center items-center row-span-1 lg:row-span-1"}>
          <div className={"w-2/3 lg:w-1/5 h-1/3 grid grid-cols-2 gap-8 lg:gap-2 text-3xl text-white"}>
            <div onClick={moveFront}><Switch symbol={'<'} color={color}/></div>
            <div onClick={moveBack}><Switch symbol={'>'} color={color}/></div>
          </div>
        </div>

      </div>
  )
}