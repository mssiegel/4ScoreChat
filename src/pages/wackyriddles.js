import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/common/Layout'
import SEO from '../components/seo'
import '../components/ExampleImprovsPage.css'
import SampleChatbox from '../components/chatbox/SampleChatbox'

const ExampleImprov = () => (
  <Layout>
    <SEO title='Wacky Riddles' description='How do pirates end fights and other classic riddles' />
    <ExampleImprovPage />
  </Layout>
)

export default ExampleImprov

const example1 = {
  title: 'Wacky Riddles',
  you: 'Sam Rickers',
  peer: 'Wacky riddler',
  conversation: [
    ['peer', 'Wacky riddler', 'How is Samwise?'],
    ['you', 'Sam Rickers', 'I am terrified.'],
    ['you', 'Sam Rickers', 'riddles scare the heeby jeebies out of me'],
    ['peer', 'Wacky riddler', 'You know what be the scariest riddle of all?'],
    ['you', 'Sam Rickers', 'ahhhhhh'],
    ['you', 'Sam Rickers', 'you always ask the scariest riddles'],
    ['you', 'Sam Rickers', 'fine, tell me'],
    ['peer', 'Wacky riddler', 'Taxes'],
    ['you', 'Sam Rickers', 'hahahhahahha'],
    ['you', 'Sam Rickers', "i like these riddles. i'm not afraid anymore"],
    ['you', 'Sam Rickers', 'ask me another'],
    ['peer', 'Wacky riddler', 'Do you know where shaving cream comes from?'],
    ['you', 'Sam Rickers', 'nope'],
    ['peer', 'Wacky riddler', 'Sheared Cattle'],
    ['you', 'Sam Rickers', "huh, i don't get it"],
    ['peer', 'Wacky riddler', 'only a shaved cow can make shaved cream'],
    ['you', 'Sam Rickers', 'oh hahahahahah'],
    ['you', 'Sam Rickers', 'thats good!!'],
    ['peer', 'Wacky riddler', 'How many people does it take to change a lightbulb?'],
    ['you', 'Sam Rickers', 'one. just me'],
    ['peer', 'Wacky riddler', 'Depends what bulb it is'],
    ['peer', 'Wacky riddler', 'how do pirates end fights'],
    ['you', 'Sam Rickers', 'with a cannonball'],
    ['peer', 'Wacky riddler', 'Stop ARRRGGuing'],
    ['you', 'Sam Rickers', 'hahahahhahahhaha'],
    ['you', 'Sam Rickers', 'hey riddler, which football players have the biggest feet?'],
    ['peer', 'Wacky riddler', 'which'],
    ['you', 'Sam Rickers', 'The Giants!!!!'],
    ['peer', 'Wacky riddler', "What's a pirates favorite football team"],
    ['peer', 'Wacky riddler', 'the packers'],
    ['you', 'Sam Rickers', 'huh?'],
    ['peer', 'Wacky riddler', 'its just a fact'],
    ['you', 'Sam Rickers', 'why do pirates like packers?'],
    ['peer', 'Wacky riddler', "they're cheeseheads"],
    ['peer', 'Wacky riddler', 'all pirates love wisconsin'],
    ['you', 'Sam Rickers', "i still don't understand."],
    ['peer', 'Wacky riddler', 'why do pirates love reading the newspaper?'],
    ['you', 'Sam Rickers', "i don't know"],
    ['peer', 'Wacky riddler', 'Green Bay packers arrrrrticles'],
    ['you', 'Sam Rickers', "i iike the articles. but i still don't understand the packers reference"],
    ['you', 'Sam Rickers', 'oh, is cause of they like the green bay?'],
    ['peer', 'Wacky riddler', 'what is the Green Bay packers favorite pastime?'],
    ['you', 'Sam Rickers', 'playing football : )'],
    ['peer', 'Wacky riddler', 'Making pastrami'],
    ['you', 'Sam Rickers', 'they like to pack pastrami?'],
    ['peer', 'Wacky riddler', 'yes'],
    ['you', 'Sam Rickers', 'why?'],
    ['peer', 'Wacky riddler', 'Its a great deli meat'],
    ['peer', 'Wacky riddler', 'Definitely top 3'],
    ['you', 'Sam Rickers', 'its the best forsure!'],
    ['you', 'Sam Rickers', 'but why do the packers like it?'],
    ['you', 'Sam Rickers', 'that i dont understand'],
    ['peer', 'Wacky riddler', "that's why they call me"],
    ['peer', 'Wacky riddler', 'the'],
    ['peer', 'Wacky riddler', 'WACKY'],
    ['peer', 'Wacky riddler', 'Riddler'],
    ['you', 'Sam Rickers', 'wait, so the answer is just wacky?'],
    ['you', 'Sam Rickers', 'no real good explanation?'],
    ['peer', 'Wacky riddler', 'I mean if you interviewed all the members of the packers half must love'],
    ['peer', 'Wacky riddler', 'pastrami'],
    ['you', 'Sam Rickers', 'yeah, thats cause nearly everyone loves pastrami'],
    ['peer', 'Wacky riddler', 'Except for my mother'],
    ['you', 'Sam Rickers', 'get her watching football and cheering for packers'],
    ['you', 'Sam Rickers', "then she'll like pastrami too"],
    ['peer', "Wacky riddler's mother Maxine", 'what did my good for nothing son say about me'],
    ['peer', "Wacky riddler's mother Maxine", 'does he have a problem with my cooking'],
    ['peer', "Wacky riddler's mother Maxine", 'my knees ache'],
    ['peer', "Wacky riddler's mother Maxine", 'would you like some cabbage soup?'],
    ['you', 'Sam Rickers', 'yes!!!! i hope it has pastrami inside!!'],
    ['you', 'Sam Rickers', 'i love pastrami cabbage soup'],
    ['peer', "Wacky riddler's mother Maxine", 'NO'],
    ['you', 'Sam Rickers', 'uh no?'],
    ['peer', "Wacky riddler's mother Maxine", 'no pastrami in my house'],
    ['peer', "Wacky riddler's mother Maxine", 'just wet'],
    ['peer', "Wacky riddler's mother Maxine", 'limp'],
    ['peer', "Wacky riddler's mother Maxine", 'cabbage'],
    ['you', 'Sam Rickers', 'uh, come again?'],
    ['peer', "Wacky riddler's mother Maxine", 'they say a cabbage is only soup ready once its got mold on it'],
    ['peer', "Wacky riddler's mother Maxine", 'hey'],
    ['you', 'Sam Rickers', 'that sounds like the worst cooking advice ever'],
    ['peer', "Wacky riddler's mother Maxine", 'my great grandmother gave me this cabbage soup recipe'],
    ['peer', "Wacky riddler's mother Maxine", 'it only has three ingredients'],
    ['peer', "Wacky riddler's mother Maxine", 'battery accid'],
    ['peer', "Wacky riddler's mother Maxine", 'tobacco'],
    ['peer', "Wacky riddler's mother Maxine", 'and cabbage'],
    ['you', 'Sam Rickers', 'hahaha no wonder your knees ache'],
    ['peer', "Wacky riddler's mother Maxine", "that's from all my cooking"],
    ['peer', "Wacky riddler's mother Maxine", 'my stove top is only two feet above the ground'],
    [
      'peer',
      "Wacky riddler's mother Maxine",
      'bending down all these years to make cabbage soup has taken its toll on me',
    ],
    ['you', 'Sam Rickers', 'yes, let me fix the stove top for you'],
    ['you', 'Sam Rickers', 'oh look! theres a know on the side of your stove top to raise it'],
    ['you', 'Sam Rickers', 'one sec.'],
    ['you', 'Sam Rickers', '*turns knob*'],
    ['you', 'Sam Rickers', 'there! now your stove top is proper hieght'],
    ['peer', "Wacky riddler's mother Maxine", 'this is far too high sammy'],
    ['you', 'Sam Rickers', 'ohhhh, i just turned knob down to lower it'],
    ['peer', "Wacky riddler's mother Maxine", 'Fantastic'],
    ['you', 'Sam Rickers', 'you ought to see a doctor'],
    ['peer', 'doctor', 'hello there'],
    ['peer', 'doctor', 'what seems to be the issue'],
    ['peer', 'maxine', 'my hands shake and I have this guy telling me how I should run my'],
    ['peer', 'maxine', 'kitchen'],
    ['peer', 'doctor', 'well now that is just rude'],
    ['you', 'Sam Rickers', 'listen here doctor, this lady doesnt eat pastrami'],
    ['you', 'Sam Rickers', 'that IS rude'],
    ['peer', 'doctor', "I guess that's a good point"],
    ['you', 'Sam Rickers', 'you better tell maxine that strong men love pastrami'],
    ['you', 'Sam Rickers', 'her hands are shaking'],
    ['you', 'Sam Rickers', 'its because she eats so much limp cabbage'],
    ['you', 'Sam Rickers', 'and zero pastrami'],
    ['peer', 'maxine', 'I need a cabbage gatorade'],
    ['peer', 'maxine', 'my favorite'],
    ['peer', 'maxine', 'twice the electrolytes'],
    ['you', 'Sam Rickers', "you wouldn't need the gatorade if you had a slice of pastrami"],
    ['you', 'Sam Rickers', 'i brought some in my backpack. one second'],
    ['you', 'Sam Rickers', '*takes out pastrami*'],
    ['peer', 'maxine', 'well. if. you insist'],
    ['peer', 'maxine', '*takes bite*'],
    ['peer', 'maxine', 'it tastes'],
    ['peer', 'maxine', 'like cabbage'],
    ['peer', 'maxine', 'everything is cabbage'],
    ['you', 'Sam Rickers', 'oh my gosh. you are so in love with cabbage'],
    ['you', 'Sam Rickers', 'i think the doctor will need to do surgery on your taste buds'],
    ['peer', 'doctor', "she's right"],
    ['peer', 'doctor', 'this pastrami tastes like cabbage'],
    ['peer', 'doctor', "what's wrong with your tastebuds sam?"],
    ['you', 'Sam Rickers', 'my tastebuds...'],
    ['you', 'Sam Rickers', "uh i don't know."],
    ['you', 'Sam Rickers', 'shine your flashlight in my mouth'],
    ['you', 'Sam Rickers', '*opens mouth wide*'],
    ['peer', 'doctor', 'oh my god'],
    ['peer', 'doctor', 'were you born with a giant tooth for a tongue'],
    ['peer', 'doctor', 'and multiple tongues for teeth?'],
    ['you', 'Sam Rickers', 'yeah, i had a weird genetics'],
    ['you', 'Sam Rickers', 'i had lots of surgeries as a kid'],
    ['you', 'Sam Rickers', 'messed up my mouth and such'],
    ['peer', 'doctor', 'well I think this operation will do you good'],
    ['you', 'Sam Rickers', 'i hope its not too expensive'],
    ['peer', 'doctor', '*takes out gatorade syringe*'],
    ['peer', 'doctor', 'ill do it for free'],
    ['peer', 'doctor', 'open wide'],
    ['you', 'Sam Rickers', '*opens wide*'],
    ['peer', 'doctor', '*injects every tongue tooth and the tooth tongue*'],
    ['peer', 'doctor', '*his tooth tongue turns into a cabbage tongue*'],
    ['peer', 'doctor', 'phew back to normal'],
    ['you', 'Sam Rickers', 'gosh, my whole mouth tastes like cabbage'],
    ['you', 'Sam Rickers', 'this is sooooo groossss'],
    ['peer', 'maxine', "that's life sonny"],
    ['peer', 'maxine', "Don't frown. I'll give you a free bowl of cabbage soup"],
  ],
}

const ExampleImprovPage = () => {
  return (
    <>
      <section className='examples-page-wrapper'>
        {/*<h1 className='page-title examples-padding-bottom'>Example Improvs</h1>*/}

        <div className='center-chatbox examples-padding-bottom'>
          <SampleChatbox chat={example1} />
        </div>
      </section>
    </>
  )
}
