import React, {useState, useEffect} from "react"
import "./chatroomPage.css"
import MoodIcon from '@material-ui/icons/Mood';
import Chatbox from '../homepage/chatbox'

const chatroomPage = () => {
  const characterIcon = {
    color: 'white',
    verticalAlign: 'middle',
    marginLeft: '5px'
  }

  const displayTime = () => new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const startTime = displayTime()

  function suggestCharacter(){
    let randomChar;
    do {
      const characterList = ['Whoopee Cushion Maker', 'Elven Archer', 'Powerful Circus Clown', 'Ballerina Spy', 'Website Builder', 'Funny Prankster', 'Mighty Knight', 'Dragon Slayer', 'Viking Warrior','Leader of Warrior Army','Laughing Jack', 'Plumbing SuperHero', '9th Level Wizard', 'Charming Beggar', 'Vampire Hunter', 'Alien Warlord', 'Green Tailed Alien', 'Pirate Captain', 'Laughing Sorcerer', 'Maniac Magician', 'Hypnotist Master', 'Defender of the Righteous', 'Job Applicant', 'Rebel Leader', 'Tiny Warlord', 'Dancing Champion', 'Scared Scuba Diver', 'Founder of Farters R Us', 'Psycho Therapist', 'News Reporter', 'Wealthy Merchant', 'Productivity Coach', 'Karate Dude', 'Forgetful Surgeon', 'Mighty Lawyer', 'Dude with Diaper Gun', 'Pro Water Gunner', 'Happy Gnome', 'Large Demon', 'Bloody Doctor', 'Party Animal Pirate', 'Galactic Bounty Hunter', 'Fuzzy Wuzzy Wrestler', 'Water Balloon Gangster', 'Boxing Champ', 'Adventurer', 'Minotaur in a Maze', 'Dungeon Troll', 'Sam the Sheriff', 'Alexyn, Lord of Dragons', 'Partying Swordsman', 'Zilod the Fighter', 'Pharix, Lord of Chaos', 'Green Ogre', 'Owner of Shop', 'Battle-scarred Witch', 'Soccer Coach', 'The SuperHero', 'Zombie Goblin', 'Terrified of Heights', 'Unicycle Speed Racer', 'Afraid of Bugs', 'Lover of Spiders']
      const randomNum = Math.floor(Math.random() * characterList.length)
      randomChar = characterList[randomNum]
    } while (randomChar === chat.you)
    setChat({...chat, you: randomChar})
  }

  

  const [waitingForPeer, setWaitingForPeer] = useState(false)
  const [chatInSession, setChatInSession] = useState(false)
  
  const [chat, setChat] = useState({title: 'Start Chatting', you: '', peer: 'Sam the Sheriff', conversation: [], message: '', startTime})

  useEffect(() => {
    //send message to socket.io
  })

  return (
    <>
    <section className="about-page-wrapper">
      <h1 className="title-style">Chatroom</h1>
      <p id="tip">Tip: agree with your partner and build off what they say</p>
      <button className="suggest-character btn" onClick={suggestCharacter}>Suggest <MoodIcon style={characterIcon}/></button>
      <div>
        <p className="your-character-text">Your character: </p>
        <input className="choose-char" value={chat.you} placeholder="Ex: Crazy Tour Guide" maxLength="30" onChange={e => setChat({...chat, you: e.target.value})}/>
      </div>
      {(!waitingForPeer && !chatInSession) &&  
        <button className={`start-chat btn ${chat.you ? '' : 'disabled'}`} disabled={!chat.you} 
        onClick={() => {setWaitingForPeer(true); setChatInSession(true)}}>Start Chat</button>
      }
      {waitingForPeer && 
        <div className="waiting-for-peer"> 
          <p className="waiting-title">Looking for someone to pair you with...</p>
          <button className="btn" id='cancel-chat-btn' onClick={() => setWaitingForPeer(false)}>Cancel</button>
          <p className="waiting-note">(Prime chatting time is Sundays at 8pm EST)</p>
        </div>
      }
    </section>
    {chatInSession &&
      <div className="center">
        <Chatbox chat={chat} chatInSession={chatInSession} suggestCharacter={suggestCharacter} setChat={setChat} setChatInSession={setChatInSession} />
      </div>
    }
    </>
  )
}

export default chatroomPage