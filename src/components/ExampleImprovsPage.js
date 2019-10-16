import React from "react"
import './ExampleImprovsPage.css'
import Chatbox from './Chatbox'

const firstExample = {
  title: "The Hypnotist's Watch",
  you: 'Hypnotist Master',
  peer: 'Mighty Lawyer',
  conversation : [
    ['peer', 'Mighty Lawyer', 'nice watch you got'],
    ['you', 'Hypnotist Master', 'thanks. its pure gold'],
    ['you', 'Hypnotist Master', 'a gift from a client'],
    ['peer', 'Mighty Lawyer', 'wow! it looks so expensive'],
    ['peer', 'Mighty Lawyer', 'thats quite the gift'],
    ['you', 'Hypnotist Master', 'yes. the client was quite willing to part with it'],
    ['peer', 'Mighty Lawyer', "oh wow. why's that?"],
    ['you', 'Hypnotist Master', 'let me show youuuuuu'],
    ['you', 'Hypnotist Master', 'look into my eyesssss'],
    ['peer', 'Mighty Lawyer', 'oooh such beautiful eyes you have'],
    ['you', 'Hypnotist Master', 'you are getting sleeepppyyyy'],
    ['you', 'Hypnotist Master', 'so sleeeeepy'],
    ['peer', 'Mighty Lawyer', 'ohhhhhhh'],
    ['peer', 'Mighty Lawyer', 'so tireddddd'],
    ['you', 'Hypnotist Master', 'keep looking into my eyes'],
    ['you', 'Hypnotist Master', 'now repeat after me'],
    ['you', 'Hypnotist Master', '"i will give my gold watches to the hypnotist master"'],
    ['peer', 'Mighty Lawyer', '"i will give my gold watches to the hypnotist master..."'],
    ['peer', 'Mighty Lawyer', 'but only if he gives me PIZZA!!!!'],
    ['you', 'Hypnotist Master', 'what, why pizza?'],
    ['peer', 'Mighty Lawyer', 'because I LOVE pizza!!'],
    ['you', 'Hypnotist Master', 'I love pizza too!'],
    ['you', 'Hypnotist Master', 'especially extra cheese pizza'],
    ['peer', 'Mighty Lawyer', 'me too!'],
    ['peer', 'Mighty Lawyer', 'anyone who likes extra cheesy pizza is a friend in my book'],
    ['you', 'Hypnotist Master', 'gee thanks'],
    ['peer', 'Mighty Lawyer', "since we're friends, can i have your gold watch"],
    ['you', 'Hypnotist Master', 'sure thing.'],
    ['you', 'Hypnotist Master', "here's the gold watch"],
    ['peer', 'Mighty Lawyer', 'thanks. now look at my watch'],
    ['peer', 'Mighty Lawyer', 'see it swinging back and forth'],
    ['peer', 'Mighty Lawyer', 'back and forth'],
    ['you', 'Hypnotist Master', "i'm looking"],
    ['peer', 'Mighty Lawyer', 'you are getting sleepppppyyy'],
    ['peer', 'Mighty Lawyer', 'keep looking at gold watch'],
    ['peer', 'Mighty Lawyer', 'now repeat after me'],
    ['peer', 'Mighty Lawyer', '"I will buy 5 pies of extra cheese pizza for the MIGHTY LAWYER!!"'],
    ['you', 'Hypnotist Master', '"I will buy 5 pies of extra cheese pizza for the MIGHTY LAWYER!!"'],
    ['peer', 'Mighty Lawyer', 'gee thanks'],
    ['you', 'Hypnotist Master', 'my pleasure.'],
    ['you', 'Hypnotist Master', 'but how do i pay for the pizza?'],
    ['peer', 'Mighty Lawyer', 'here take this gold watch'],
    ['peer', 'Mighty Lawyer', 'barter it as payment'],
    ['peer', 'Mighty Lawyer', 'thanks for getting the pizza!!!!'],
    ['peer', 'Mighty Lawyer', 'and you can eat it with me'],
    ['peer', 'Mighty Lawyer', 'friend'],
    ['you', 'Hypnotist Master', 'thanks friend']
  ]
}

const secondExample = {
  title: "The Swordfighter's Secret",
  you: 'News Reporter',
  peer: 'Partying Swordsman',
  conversation : [
    ['you', 'News Reporter', "welcome to the newsroom"],
    ['peer', 'Partying Swordsman', "Gee whiz. So many cameras"],
    ['you', 'News Reporter', "That's right! this is channel 5"],
    ['you', 'News Reporter', "thanks for coming to be interviewed"],
    ['peer', 'Partying Swordsman', "You're welcome"],
    ['peer', 'Partying Swordsman', "ask me whatever you'd like"],
    ['you', 'News Reporter', "all rightw"],
    ['you', 'News Reporter', "how do you balance partying with your swordfighting lessons"],
    ['peer', 'Partying Swordsman', "good question."],
    ['peer', 'Partying Swordsman', "I do them both at same time"],
    ['you', 'News Reporter', "how?"],
    ['peer', 'Partying Swordsman', "I blast music"],
    ['peer', 'Partying Swordsman', "and dance"],
    ['peer', 'Partying Swordsman', "while holding and waving my swords"],
    ['you', 'News Reporter', "amazing! tell me more"],
    ['peer', 'Partying Swordsman', "I also sing"],
    ['peer', 'Partying Swordsman', "at the top of my lungs"],
    ['peer', 'Partying Swordsman', "and i swordfight to the rhythm"],
    ['peer', 'Partying Swordsman', "of my voice"],
    ['you', 'News Reporter', "your voice?"],
    ['peer', 'Partying Swordsman', "yes. I sing a tune"],
    ['peer', 'Partying Swordsman', "and swordfight to the song i sing"],
    ['you', 'News Reporter', "can you give an example"],
    ['peer', 'Partying Swordsman', "sure thing"],
    ['peer', 'Partying Swordsman', 'i might sing, "lalalala its timeeee to attack"'],
    ['peer', 'Partying Swordsman', "and then I'll thrust my sword forward"],
    ['you', 'News Reporter', "incredible"],
    ['peer', 'Partying Swordsman', "exactly. i fight with beauty"],
    ['peer', 'Partying Swordsman', "thats my secret"],
    ['you', 'News Reporter', "Wow. That wraps up our interview"],
    ['you', 'News Reporter', "Thanks for sharing your singing swordfighting techniques"]
  ]
}


const ExampleImprovsPage = () => {

  return (
    <>
    <section className="examples-page-wrapper">
      <h1 className='page-title examples-padding-bottom'>Example Improvs</h1>

      <div className="center-chatbox examples-padding-bottom">
        <Chatbox chat={firstExample} noBottom={true} />
      </div>
      <div className="center-chatbox examples-padding-bottom">
        <Chatbox chat={secondExample} noBottom={true} />
      </div>
    </section>
    </>
  )
}

export default ExampleImprovsPage