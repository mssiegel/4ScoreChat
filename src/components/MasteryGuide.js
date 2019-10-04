import React from "react"
import './common.css'
import './MasteryGuide.css'


const yesAnd = {
  title: 'Yes, And...',
  lesson: "Always accept as fact what the other person says. Then add a bit of info to it. So if someone tells you that he's ready to fight against an evil goblin army, then acknowledge that info and build on it. Keep doing so and you'll end up creating a fascinating storyline that continuously grows and expands.",
  goodImprov: [
    ['Goblin King', "Roarrrr!! I'm ready for battle"],
    ['Farmer', "Me too!! My blood is boiling!"],
    ['Farmer', "I brought my steam-powered jumbo ax"]
  ],
  badImprov: [
    ['Goblin King', "Roarrrr!! I'm ready for battle"],
    ['Farmer', "What are you talking about? There's no fight going on."]
  ]
}

const startPositive = {
  title: 'Start on a Positive Note',
  lesson: "Don't start with a character called 'sad sheriff' or 'boring teacher'. Those kinds of lackluster starts usually lead to boring scenes. Instead, pick character names such as 'Sam the Sheriff' or use adjectives such as 'tiny sherriff' or 'teacher from Mars.' The same goes regarding your first statements. Don't start a scene by saying 'you are weird and uncool.' Instead start with something exciting like, 'I LOVE your clothing style!",
  goodImprov: [
    ['Big Knight', "WOW! Your Muscles are soooo HUGE."],
    ['Store Owner', "That's right! Every day I do 300 pushups!"]
  ],
  badImprov: [
    ['Sad Alien', "Hi, I am lost"],
    ['Karate Dude', "I am sad as I cannot break planks with my bare hands."]
  ]
}

const oneLineAtATime = {
  title: 'One Line at a Time',
  lesson: "Try to use short, one-line messages. The shorter the better. Entering messages in quick bursts lets the other person respond in 'real-time.' Can you imagine waiting a long time while your peer was typing up a huge message? What could you do, other than sit and wait? How could you possibly add to the story if you have no idea what huge message your peer is typing up? For these reasons, feel free to rapidly fire out short messages",
  goodImprov: [
    ['Robert', "That tentacled monster is oozing so much slime"],
    ['Samantha', "Be careful"],
    ['Samantha', "Its eyes are hypnotic"],
    ['Samantha', "And it falls in love with any man it sees"]
  ],
  badImprov: [
    ['Robert', "That tentacled monster is oozing so much slime"],
    ['Samantha', "Be careful. Its eyes are hypnotic. And it falls in love with any man it sees"]
  ]
}

const Lesson = ({lessonContent}) => {
  const {title, lesson, goodImprov, badImprov} = lessonContent
  
  const renderExample = conversation => (
    <>
    {conversation.map(([name, message], i) => 
      (<div key={i}>{name}: <i>{message}</i></div>)
    )}
    </>
  )
  
  return (
    <>
      <div className='guide-title'>{title}</div>
      <p>{lesson}</p>
      <div className='good'>Good Improv:</div>
      {renderExample(goodImprov)}
      <br/>

      <div className='bad'>Bad Improv:</div>
      {renderExample(badImprov)}
      <br/><br/>
    </>
  )
}



const MasteryGuide = () => {

  const emptyDiv = {
    height: '40px'
  }
  
  return (
    <>
    <section className='page-wrapper'>
      <h1 className='title-style'>Mastery Guide</h1>
      <div className='common-center'>
        <Lesson lessonContent={yesAnd}/>
        <Lesson lessonContent={oneLineAtATime}/>
        <Lesson lessonContent={startPositive}/>
      </div>
    </section>
    <div style={emptyDiv}></div>
    </>
  )
}

export default MasteryGuide