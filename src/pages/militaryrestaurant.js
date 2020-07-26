import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/common/Layout'
import SEO from '../components/seo'
import '../components/ExampleImprovsPage.css'
import SampleChatbox from '../components/chatbox/SampleChatbox'

const ExampleImprov = () => (
  <Layout>
    <SEO
      title='The Military Restaurant'
      description='A simple ogre just wants a burger. But the guy behind the counter has other ideas...'
    />
    <ExampleImprovPage />
  </Layout>
)

export default ExampleImprov

const example1 = {
  title: 'The Military Restaurant',
  you: 'Blue Ogre',
  peer: 'Yogi Okukura',
  conversation: [
    ['you', 'Blue Ogre', 'oh my. i am so hungry'],
    ['you', 'Blue Ogre', 'i really need something to eat'],
    ['peer', 'Yogi Okukura', "Don't look at me, meathead. I'm no meal."],
    ['you', 'Blue Ogre', 'then what on earth are you doing here behind the counter'],
    ['you', 'Blue Ogre', "of Merg's meat diner"],
    ['you', 'Blue Ogre', 'you are literally behind the counter'],
    ['peer', 'Yogi Okukura', 'Some obnoxious snob took me here.'],
    ['peer', 'Yogi Okukura', 'Also, you should go and get a salad.'],
    ['peer', 'Yogi Okukura', "you don't NEED anymore meat!"],
    ['you', 'Blue Ogre', 'ehhh?'],
    ['you', 'Blue Ogre', 'NO ONE TALKS TO ME LIKE THAT!!!!!'],
    ['you', 'Blue Ogre', 'I demand service!!!!'],
    ['you', 'Blue Ogre', "I don't believe it. I've been coming here for 3 years"],
    ['you', 'Blue Ogre', 'this is my first time meeting a jerk like you'],
    ['peer', 'Yogi Okukura', "Well I'm not just a jerk"],
    ['peer', 'Yogi Okukura', "I'm Yogi Okukura, the Ultimate Soldier!!"],
    ['you', 'Blue Ogre', 'oh my gosh!'],
    ['you', 'Blue Ogre', 'you must be here to buy the restaurant!!!'],
    ['you', 'Blue Ogre', "you're that military guy who wants to make this a military lunchroom"],
    ['you', 'Blue Ogre', 'where everyone must do 20 pushups just to order a salad'],
    ['peer', 'Yogi Okukura', "Yeah, tubby, I survived a killing game and I'm in a foul mood."],
    ['you', 'Blue Ogre', 'tubby?!!?!?!!!'],
    ['you', 'Blue Ogre', "i'll let it pass..."],
    ['you', 'Blue Ogre', 'but next time...'],
    ['peer', 'Yogi Okukura', "You don't scare me, bub."],
    ['you', 'Blue Ogre', 'RARARARAR'],
    ['you', 'Blue Ogre', '*flips table*'],
    ['you', 'Blue Ogre', 'GIVE ME A BURGER!!!'],
    ['peer', 'Yogi Okukura', "No way, fatso. Eat any more junk food and you'll get diabetes!"],
    ['you', 'Blue Ogre', 'EHHHH?????'],
    ['you', 'Blue Ogre', 'RARARARARA'],
    ['you', 'Blue Ogre', '*Pounds counter*'],
    ['you', 'Blue Ogre', 'A BURGER. NOW!!!'],
    ['peer', 'Yogi Okukura', 'YOU WANNA EAT? GET TO EXERCISING!'],
    ['you', 'Blue Ogre', 'FINE!!!'],
    ['you', 'Blue Ogre', 'THEN TELL ME HOW TO EXERCISE!!!'],
    ['peer', 'Yogi Okukura', 'START YOUR PUSH-UPS!'],
    ['peer', 'Yogi Okukura', 'GET GOING, YOU BIG OAF!'],
    ['peer', 'Yogi Okukura', "C'MON, I DON'T GOT ALL DAY!!"],
    ['you', 'Blue Ogre', 'EHHHHH?!!!'],
    ['you', 'Blue Ogre', 'fine!!'],
    ['you', 'Blue Ogre', '1'],
    ['you', 'Blue Ogre', '2'],
    ['you', 'Blue Ogre', '3'],
    ['you', 'Blue Ogre', 'gosh darn this is so toughhhh'],
    ['you', 'Blue Ogre', "i'm out of breath....."],
    ['peer', 'Yogi Okukura', "Aaaand that's why you don't eat too much."],
    ['you', 'Blue Ogre', 'i need a burger'],
    ['you', 'Blue Ogre', 'to replenish my strength'],
    ['peer', 'Yogi Okukura', "Choke down a veggie burger, then. It'll help."],
    ['you', 'Blue Ogre', 'i need a coke too!!!'],
    ['you', 'Blue Ogre', "WHERE'S MY BURGER!!!"],
    ['you', 'Blue Ogre', '*RARARARARAR* BURGER NOW!!!'],
    ['peer', 'Yogi Okukura', "*tosses the tray next to him* HERE'S YOUR VEGGIE BURGER AND..."],
    ['peer', 'Yogi Okukura', 'You gotta chug down some water!'],
    ['peer', 'Yogi Okukura', 'No beef or carbon in MY joint.'],
    ['peer', 'Yogi Okukura', 'If you wanna stuff your face with greasy food and get heart disease...'],
    ['peer', 'Yogi Okukura', '...THEN YOU BETTER GET OUT OF MY DINER!'],
    ['you', 'Blue Ogre', "fine! I'll eat the veggie burger"],
    ['you', 'Blue Ogre', '*takes a bite*'],
    ['you', 'Blue Ogre', 'Oohhhhh i like it'],
    ['you', 'Blue Ogre', 'GIMME ANOTHER!'],
    ['peer', 'Yogi Okukura', 'Good choice. Catch!'],
    ['you', 'Blue Ogre', 'yummm!'],
    ['you', 'Blue Ogre', "oooh i'm feeling the strength!"],
    ['you', 'Blue Ogre', '*does 5 pushups*'],
    ['you', 'Blue Ogre', 'BOO YAH!!!'],
    ['peer', 'Yogi Okukura', 'eat another veggie burger'],
    ['peer', 'Yogi Okukura', 'and take out your wallet'],
    ['peer', 'Yogi Okukura', 'its payment time'],
    ['you', 'Blue Ogre', 'HAHAHA'],
    ['you', 'Blue Ogre', "you think I'm paying for these fake burgers???"],
    ['you', 'Blue Ogre', 'oooooh thats funny!!!!'],
    ['you', 'Blue Ogre', 'ROFL!'],
    ['peer', 'Yogi Okukura', '*makes fists*'],
    ['peer', 'Yogi Okukura', "What'd you say, punk?"],
    ['you', 'Blue Ogre', 'uh...put me down for credit'],
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
