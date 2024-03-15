//object of question answer pairs

import Flashcard from "./Flashcard.jsx";
import Switch from "./Switch.jsx";
import React, {useEffect, useState} from "react";
import Countdown from "react-countdown";


export default function Page(){

  //const [pulse, setPulse] = useState(false);

  const images = {
    weirdfish: "https://media.sketchfab.com/models/2ce6e525975344a58485e8d8e192844e/thumbnails/451410058f134431ad85ccec8f5d34c0/046ce90593d245f0aa243b3e6c95ba4c.jpeg",
    catfish: "https://img.freepik.com/premium-vector/cute-catfish-cartoon-icon-illustration_725118-273.jpg?w=360",
    water: "https://t4.ftcdn.net/jpg/02/60/12/53/360_F_260125376_MQqe2h3iHkdhp57cKLBbLzU6hpq59VoM.jpg",
    spellwater: "https://t3.ftcdn.net/jpg/00/68/66/96/360_F_68669649_USKNEah0nTdwfAqGko3tm9nHxUY20NrK.jpg",
    swim: "https://t3.ftcdn.net/jpg/04/71/41/06/360_F_471410699_RoOncbBz8ull0Z4inBydMzLYoCtUvRsR.jpg",
    yay: "https://i.ibb.co/FqS2gVj/DALL-E-2024-03-08-22-14-29-A-semi-realistic-cartoony-scene-of-children-smiling-and-cheering-around-a.webp",
    all: "https://t3.ftcdn.net/jpg/00/39/33/12/360_F_39331239_NN2PxSkk5kxTafeUULXlNFJsfGde3e4G.jpg",

    beluga: "https://wwfint.awsassets.panda.org/img/original/huso_huso_schoenbrunn_phyllis.jpg",
    mekong: "https://www.mandai.com/content/dam/wrs/river-safari/animals/signpost/1x1/mekong-giant-catfish-1x1.jpg",
    gar: "https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2022/05/1280/720/Melanistic-alligator-gar-Justin-Jordan-copy.jpg?ve=1&tl=1",
    tiger: "https://www.totalfisherman.com/tiger_fish_images/tiger_fish_being_held.jpg",
    wels: "https://naturefishblog.files.wordpress.com/2017/02/welscatfish_orig.jpg",
    barb: "https://www.khmertimeskh.com/wp-content/uploads/2023/03/55844-750x440.jpg",
    paroon: "https://fishlab.com/wp-content/uploads/2022/11/shutterstock_492757738.jpg",
    taimen: "https://news.wisc.edu/newsphotos/images/Mongolia_Hogan_Zeb_taimen04.jpg",
    dragon: "https://pbs.twimg.com/media/BuH6U1oIIAAsasp.jpg:large",

    arapaima: "https://media.wired.com/photos/59269a378d4ebc5ab806ad9a/master/pass/Arapaima-73797921.jpg",
    bambusa: "https://www.greenflow.hk/cdn/shop/products/9db3394948486f15ed293dc93b52f48_1946x.jpg?v=1640159199",
    jorge: "https://www.worldlifeexpectancy.com/images/a/w/b/lates-niloticus/lates-niloticus.webp",
    sting: "https://s3.amazonaws.com/media.jungledragon.com/images/2994/52802_medium.jpg?AWSAccessKeyId=05GMT0V3GWVNE7GGM1R2&Expires=1710979210&Signature=6InYYrETquZ%2BvkZEa0NKUNNOfdA%3D",
    extinct: "https://th-thumbnailer.cdn-si-edu.com/nmflh5ijDgeN3lbEOswg9SUx7to=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/f5/ec/f5ecfbf0-253d-4e6c-894f-67f7afe1752c/ap_20010350989859.gif",
    bullshark: "https://c.tenor.com/dWRJU3k0FF4AAAAd/tenor.gif",
    pacu: "https://cdn.wcs.org/2022/05/25/8x0w1rmx2j_Julie_Larsen_Maher_9476_Paku_CH_AQ_03_30_11.jpg",
    lung: "https://live.staticflickr.com/2814/12098421495_abc46f871f_b.jpg",
  }

  const solutions = {
    "do you like fishies?": ["yes!", images.yay],
    "spell fish!": ["f-i-s-h", images.weirdfish],
    "what is a catfish": ["a fish", images.catfish],
    "where can you find fishies?": ["water", images.water],
    "spell water!": ["w-a-t-e-r", images.spellwater],
    "do fishies swim?": ["yes!", images.swim],
    "what is your favorite fishy?": ["all!!!", images.all],
  }

  const hardSolutions = {
    "What is the largest freshwater fish?": ["Beluga Sturgeon", images.beluga],
    "What is the conservation status of the Giant Barb as determined by the IUCN?": ["Critically Endangered", images.barb],
    "In what year was the Alligator gar first described?": ["1803", images.gar],
    "What is the scientific name of the Goliath Tigerfish?": ["Hydrocynus goliath", images.tiger],
    "What is the order of the Siberian Taimen according to scientific classification?": ["Salmoniformes", images.taimen],
    "Into which countries has the Paroon Shark been introduced?": ["Anatolia, South Africa and Malaysia", images.paroon],
    "What is the lesser-used name for the Silver Arowana?": ["Water Monkey", images.dragon],
    "What is the favorite food of Wels Catfish in Northern European water systems?": ["'Pigeons'", images.wels],
    "In which river is the largest species of catfish found?": ["The Mekong River", images.mekong],
  }

  const impossibleSolutions = {
    "Run.": [<div key={"hello"}><Countdown date={Date.now() + 10000} overtime={true} zeroPadTime={2} precision={1}/></div>, images.bullshark], //add an onComplete prop lol (it would be very funny)
    "What is the name of the 8th largest Nile Perch?": ["Jorge", images.jorge],
    "Are you safe from Marbled Lungfish on land?": ["No", images.lung],
    "Calculate the diameter of a Female Giant Freshwater Stingray given the Summer Rains were interrupted for 3 weeks by a category 3 instead of 4 monsoon.": ["1.5982 meters", images.sting],
    "Find a Living Chinese Paddlefish specimen within the next 24 hours.": ["Okay", images.extinct],
    "What are the exact coordinates of the nearest Arapaima.": ["40° 45' 20.7936'' N 73° 50' 10.662'' W", images.arapaima],
    "Which non-fortuitous event reportedly occurred in 2001 in a rural village in Papua New Guinea involving the castration and subsequent death of two Fisherman?": [
        "The Pacu primarily feeds on plant material, making it a predominantly herbivorous species. This dietary preference is reflected in its dentition; its teeth are surprisingly human-like, square and flat, designed for grinding and crushing seeds and nuts.",
        images.pacu],
    "What is the name that locals use for the Yellowcheek Bambusa?": ["鱤魚", images.bambusa],
  }

  const [questions, setQuestions] = useState(Object.keys(solutions));
  const [flip, setFlip] = useState(false);
  const [reset, setReset] = useState(false);
  const [direction, setDirection] = useState("forward");
  const [currObject, setCurrObj] = useState(solutions);
  const [color, setColor] = useState('#6FF1B7');
  const [anim, setAnim] = useState(false);
  const [difficulty, setDifficulty] = useState("Easy");
  const passFlip = value => setFlip(value);
  const passReset = value => setReset(value);

  const flipReset = () => {
    setAnim(true);
    setFlip(false);
    setReset(true);
    //setPulse(false);
  }

  // prefer this version, it moves the flashcards forwards and backwards sequentially, but the project requires random ig

  // const moveFront = () => {
  //   setQuestions(prev => {
  //     const newOrder = [...prev];
  //     newOrder.unshift(newOrder.pop());
  //     return newOrder;
  //   })
  //   flipReset();
  //   setDirection("forward");
  // }
  //
  // const moveBack = () => {
  //   setQuestions(prev => {
  //     const newOrder = [...prev];
  //     newOrder.push(newOrder.shift());
  //     return newOrder;
  //   })
  //   flipReset();
  //   setDirection("backwards");
  // }

  // Add a state for the history stack
  const [historyStack, setHistoryStack] = useState([]);
  useEffect(()=> {
    if(historyStack.length >= 10) historyStack.shift();
  }, [historyStack]);

  // Utility function to generate a random index, excluding the current index
  const getRandomIndex = (length, excludeIndex) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * length);
    } while (randomIndex === excludeIndex);
    return randomIndex;
  }

  const moveFront = () => {
    flipReset();
    setDirection("forward");
    setQuestions(prev => {
      const currentQuestion = prev[prev.length - 1];
      setHistoryStack([...historyStack, currentQuestion]);
      const randomIndex = getRandomIndex(prev.length, questions.indexOf(currentQuestion));
      const newOrder = [...prev];
      const [selected] = newOrder.splice(randomIndex, 1);
      newOrder.push(selected);
      return newOrder;
    });
  }

  const moveBack = () => {
    flipReset();
    setDirection("backwards");
    setHistoryStack(prevHistory => {
      if (prevHistory.length > 0) {
        const previousQuestion = prevHistory[prevHistory.length - 1];
        setQuestions(prev => {
          const newOrder = [...prev];
          if (newOrder.includes(previousQuestion)) newOrder.push(newOrder.splice(newOrder.indexOf(previousQuestion), 1)[0]);
          else newOrder.push(previousQuestion);
          return newOrder;
        });
        return prevHistory.slice(0, -1);
      }
      return prevHistory;
    });
  }

  const updateDifficulty = (newDifficulty) => {
    let newSolutions;
    let newColor;

    switch (newDifficulty) {
      case "Easy":
        newSolutions = solutions;
        newColor = green;
        break;
      case "Medium":
        newSolutions = hardSolutions;
        newColor = blue;
        break;
      case "Hard":
        newSolutions = impossibleSolutions;
        newColor = red;
        break;
      default:
        newSolutions = solutions;
        newColor = green;
    }

    setCurrObj(newSolutions);
    setQuestions(Object.keys(newSolutions));
    setColor(newColor);
    setDifficulty(newDifficulty);
    setHistoryStack([]);
    flipReset();
  };

  const green = '#6FF1B7';
  const blue = '#6FADF1';
  const red = '#F18E6F';

  // budget debugging
  // useEffect(() => {
  //   console.log("Current object", currObject);
  //   console.log("Current question", questions);
  //   console.log("History stack", historyStack);
  // })

  return (
      <div className={"h-screen bg-yellow-200 grid grid-rows-7 p-7 lg:p-5 overflow-hidden bg-[url(/src/assets/arapaima.jpg)] bg-right bg-no-repeat bg-cover"}>

        <div style={{textShadow: "1px 1px 2px black"}}
             className={"select-none text-white flex flex-col items-center justify-center"}>
          <div className={"text-7xl"}>Fishcards!</div>
          <div>Total {difficulty} <span className={"line-through"}>Fish</span> Cards: {questions.length}</div>
        </div>

        <div className={"text-center text-white select-none gap-5 lg:gap-3 flex justify-center items-center"}>

          <div onClick={()=> updateDifficulty("Easy")}>
            <Switch symbol={'Easy'} color={green}/>
          </div>

          <div onClick={()=> updateDifficulty("Medium")}>
            <Switch symbol={'Medium'} color={blue}/>
          </div>

          <div onClick={()=> updateDifficulty("Hard")}>
            <Switch symbol={'Hard'} color={red}/>
          </div>

        </div>

        <div className={"row-span-3 flex justify-center items-center"}>
          <div className={"relative h-full w-full flex items-center justify-center"}>
          {questions.map(solution => {
            return (
                <div key={solution.id} onAnimationEnd={() => setAnim(false)} className={`${anim && (solution === questions[questions.length - 1]) ? (direction === 'forward' ? 'top-card' : 'bottom-card') : ''} h-2/3 w-full lg:h-full lg:w-5/12 absolute flex justify-center drop-shadow-lg`}> {/*//${solution === questions[questions.length - 1] ? (direction === 'forward' ? 'top-card' : 'bottom-card') : ''}*/}
                  {/*
                  issue is that when you try to read currObject[solution]
                  it seems to be undefined when you switch difficulties
                  instead of switching objects, why not filter object keys array?
                  filter for difficulty
                  have one big object

                  I was WRONG! History stack was pushing its top element onto the questions stack for a different difficulty
                  So when the new difficulty tried to retrieve its value of a key it didnt have (from the previous difficulty),
                  it returned undefined and errored the whole program

                  Solution: when changing difficulty, the history stack is set to [] empty
                  */}
                      <Flashcard
                          question={solution}
                          answer={currObject[solution][0]}
                          setFlip={passFlip} flip={flip}
                          setReset={passReset}
                          reset={reset}
                          color={color}
                          image={currObject[solution][1]}/>
                </div>
            )
          })}
          </div>
        </div>

        <div className={"flex justify-center items-center row-span-1 lg:row-span-1"}>
          <div className={"w-2/3 lg:w-1/5 h-1/3 grid grid-cols-2 gap-8 lg:gap-2 text-3xl text-white"}>
            <div onClick={moveBack}><Switch symbol={'<'} color={color}/></div>
            <div onClick={moveFront}><Switch symbol={'>'} color={color}/></div>
          </div>
        </div>

      </div>
  )
}