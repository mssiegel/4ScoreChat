import React from 'react'
import './ExampleImprovsPage.css'
import SampleChatbox from './chatbox/SampleChatbox'

const firstExample = {
  title: "The Hypnotist's Watch",
  you: 'Hypnotist master',
  peer: 'Mighty lawyer',
  conversation: [
    ['peer', 'Mighty lawyer', 'nice watch you got'],
    ['you', 'Hypnotist master', 'thanks. its pure gold'],
    ['you', 'Hypnotist master', 'a gift from a client'],
    ['peer', 'Mighty lawyer', 'wow! it looks so expensive'],
    ['peer', 'Mighty lawyer', 'thats quite the gift'],
    ['you', 'Hypnotist master', 'yes. the client was quite willing to part with it'],
    ['peer', 'Mighty lawyer', "oh wow. why's that?"],
    ['you', 'Hypnotist master', 'let me show youuuuuu'],
    ['you', 'Hypnotist master', 'look into my eyesssss'],
    ['peer', 'Mighty lawyer', 'oooh such beautiful eyes you have'],
    ['you', 'Hypnotist master', 'you are getting sleeepppyyyy'],
    ['you', 'Hypnotist master', 'so sleeeeepy'],
    ['peer', 'Mighty lawyer', 'ohhhhhhh'],
    ['peer', 'Mighty lawyer', 'so tireddddd'],
    ['you', 'Hypnotist master', 'keep looking into my eyes'],
    ['you', 'Hypnotist master', 'now repeat after me'],
    ['you', 'Hypnotist master', '"i will give my gold watches to the hypnotist master"'],
    ['peer', 'Mighty lawyer', '"i will give my gold watches to the hypnotist master..."'],
    ['peer', 'Mighty lawyer', 'but only if he gives me PIZZA!!!!'],
    ['you', 'Hypnotist master', 'what, why pizza?'],
    ['peer', 'Mighty lawyer', 'because I LOVE pizza!!'],
    ['you', 'Hypnotist master', 'I love pizza too!'],
    ['you', 'Hypnotist master', 'especially extra cheese pizza'],
    ['peer', 'Mighty lawyer', 'me too!'],
    ['peer', 'Mighty lawyer', 'anyone who likes extra cheesy pizza is a friend in my book'],
    ['you', 'Hypnotist master', 'gee thanks'],
    ['peer', 'Mighty lawyer', "since we're friends, can i have your gold watch"],
    ['you', 'Hypnotist master', 'sure thing.'],
    ['you', 'Hypnotist master', "here's the gold watch"],
    ['peer', 'Mighty lawyer', 'thanks. now look at my watch'],
    ['peer', 'Mighty lawyer', 'see it swinging back and forth'],
    ['peer', 'Mighty lawyer', 'back and forth'],
    ['you', 'Hypnotist master', "i'm looking"],
    ['peer', 'Mighty lawyer', 'you are getting sleepppppyyy'],
    ['peer', 'Mighty lawyer', 'keep looking at gold watch'],
    ['peer', 'Mighty lawyer', 'now repeat after me'],
    ['peer', 'Mighty lawyer', '"I will buy 5 pies of extra cheese pizza for the MIGHTY LAWYER!!"'],
    ['you', 'Hypnotist master', '"I will buy 5 pies of extra cheese pizza for the MIGHTY LAWYER!!"'],
    ['peer', 'Mighty lawyer', 'gee thanks'],
    ['you', 'Hypnotist master', 'my pleasure.'],
    ['you', 'Hypnotist master', 'but how do i pay for the pizza?'],
    ['peer', 'Mighty lawyer', 'here take this gold watch'],
    ['peer', 'Mighty lawyer', 'barter it as payment'],
    ['peer', 'Mighty lawyer', 'thanks for getting the pizza!!!!'],
    ['peer', 'Mighty lawyer', 'and you can eat it with me'],
    ['peer', 'Mighty lawyer', 'friend'],
    ['you', 'Hypnotist master', 'thanks friend']
  ]
}

const secondExample = {
  title: "The Swordfighter's Secret",
  you: 'News reporter',
  peer: 'Partying swordsman',
  conversation: [
    ['you', 'News reporter', 'welcome to the newsroom'],
    ['peer', 'Partying swordsman', 'Gee whiz. So many cameras'],
    ['you', 'News reporter', "That's right! this is channel 5"],
    ['you', 'News reporter', 'thanks for coming to be interviewed'],
    ['peer', 'Partying swordsman', "You're welcome"],
    ['peer', 'Partying swordsman', "ask me whatever you'd like"],
    ['you', 'News reporter', 'all rightw'],
    ['you', 'News reporter', 'how do you balance partying with your swordfighting lessons'],
    ['peer', 'Partying swordsman', 'good question.'],
    ['peer', 'Partying swordsman', 'I do them both at same time'],
    ['you', 'News reporter', 'how?'],
    ['peer', 'Partying swordsman', 'I blast music'],
    ['peer', 'Partying swordsman', 'and dance'],
    ['peer', 'Partying swordsman', 'while holding and waving my swords'],
    ['you', 'News reporter', 'amazing! tell me more'],
    ['peer', 'Partying swordsman', 'I also sing'],
    ['peer', 'Partying swordsman', 'at the top of my lungs'],
    ['peer', 'Partying swordsman', 'and i swordfight to the rhythm'],
    ['peer', 'Partying swordsman', 'of my voice'],
    ['you', 'News reporter', 'your voice?'],
    ['peer', 'Partying swordsman', 'yes. I sing a tune'],
    ['peer', 'Partying swordsman', 'and swordfight to the song i sing'],
    ['you', 'News reporter', 'can you give an example'],
    ['peer', 'Partying swordsman', 'sure thing'],
    ['peer', 'Partying swordsman', 'i might sing, "lalalala its timeeee to attack"'],
    ['peer', 'Partying swordsman', "and then I'll thrust my sword forward"],
    ['you', 'News reporter', 'incredible'],
    ['peer', 'Partying swordsman', 'exactly. i fight with beauty'],
    ['peer', 'Partying swordsman', 'thats my secret'],
    ['you', 'News reporter', 'Wow. That wraps up our interview'],
    ['you', 'News reporter', 'Thanks for sharing your singing swordfighting techniques']
  ]
}

const ExampleImprovsPage = () => {
  return (
    <>
      <section className='examples-page-wrapper'>
        <h1 className='page-title examples-padding-bottom'>Example Improvs</h1>

        <div className='center-chatbox examples-padding-bottom'>
          <SampleChatbox chat={firstExample} />
        </div>
        <div className='center-chatbox examples-padding-bottom'>
          <SampleChatbox chat={secondExample} />
        </div>
      </section>
    </>
  )
}

export default ExampleImprovsPage
