import React, {useState, useEffect} from "react"
import "./ChatroomPage.css"
import MoodIcon from '@material-ui/icons/Mood'
import Chatbox from './Chatbox'
//import io from 'socket.io-client'
//let socket

const tips = ['feel free to EXAGGERATE your words by using capital letters', 'use your partner for leverage. Together, shoot for the skies', 'for comedy, agree with your peer and dramatize what they say', 'smile because it will make you happier', 'do not keep your peers waiting while you write long pagragraphs. Instead, write shorter lines', 'blank your mind to the past and future. Stay focused on the NOW.', 'choose whatever crazy character tickles your fancy', 'do not enter with a predetermined storyline. Enter with a blank mind. Create the plot with each back-and-forth response', 'try to get better and better. When your chat ends, review it. Look for ways to improve your chatting skills', 'cooperation works wonders. See your peer as your partner in creating a beautiful storyline', "chats can get intense. Come prepared with a box of tissues and a shoulder to lean on...or don't", 'partner with your peer to create deep, intense, emotional storylines']
const randomTip  = tips[Math.floor(Math.random() * tips.length)]

const ChatroomPage = ({socket}) => {
  
  useEffect(() => {
    //LISTEN for Socket Events
    socket.on('chat start', peersName => {
      setChat(chat => ({...chat, peer: peersName, startTime: currentTime()}))
      setWaitingForPeer(false)
      setChatInSession(true)
    })

    return () => {
      if (socket) socket.off('chat start')
    }
  }, [])


  //EMIT Socket Events

  async function startChatBtnClicked(){
    const isInternet = await checkInternet()
    if (isInternet) {
      setWaitingForPeer(true)
      socket.emit('enter chatQueue', chat.you)
    }
  }

  function cancelSearch(){
    setWaitingForPeer(false)
    socket.emit('leave chatQueue')
    //emit 'end chat' in case of race conditions where server had already started a chat a nanosecond earlier
    socket.emit('end chat')
  }


  //Helper Functions

  async function checkInternet() {
    //if no internet then request will thrown an Error
    //no-cors mode requests opaque response thereby returning faster and providing extra safety against no-cors issue
    const request = {method: 'HEAD', mode: 'no-cors'};
    try {
      await fetch('https://www.4scorechat.com', request)
      return true
    }
    catch(e) {
      setIsInternet(false)
      setTimeout(() => setIsInternet(true), 5000)
      return false
    }
  }

  const currentTime = () => new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  function suggestCharacter(){
    //suggests a new character - always different than previous one
    let randomChar
    do {
      const characterList = ['Whoopee Cushion Maker', 'Elven Archer', 'Powerful Circus Clown', 'Ballerina Spy', 'Website Builder', 'Funny Prankster', 'Mighty Knight', 'Dragon Slayer', 'Viking Warrior','Leader of Warrior Army','Laughing Jack', 'Plumbing SuperHero', '9th Level Wizard', 'Charming Beggar', 'Vampire Hunter', 'Alien Warlord', 'Green Tailed Alien', 'Pirate Captain', 'Laughing Sorcerer', 'Maniac Magician', 'Hypnotist Master', 'Defender of the Righteous', 'Job Applicant', 'Rebel Leader', 'Tiny Warlord', 'Dancing Champion', 'Scared Scuba Diver', 'Founder of Farters R Us', 'Psycho Therapist', 'News Reporter', 'Wealthy Merchant', 'Productivity Coach', 'Karate Dude', 'Forgetful Surgeon', 'Mighty Lawyer', 'Dude with Diaper Gun', 'Pro Water Gunner', 'Happy Gnome', 'Large Demon', 'Bloody Doctor', 'Party Animal Pirate', 'Galactic Bounty Hunter', 'Fuzzy Wuzzy Wrestler', 'Water Balloon Gangster', 'Boxing Champ', 'Adventurer', 'Minotaur in a Maze', 'Dungeon Troll', 'Sam the Sheriff', 'Alexyn, Lord of Dragons', 'Partying Swordsman', 'Zilod the Fighter', 'Pharix, Lord of Chaos', 'Green Ogre', 'Owner of Shop', 'The Witch of Zimbodia', 'Soccer Coach', 'The SuperHero', 'Zombie Goblin', 'Terrified of Heights', 'Unicycle Speed Racer', 'Afraid of Bugs', 'Lover of Spiders', 'Fortune Teller']
      const randomNum = Math.floor(Math.random() * characterList.length)
      randomChar = characterList[randomNum]
    } while (randomChar === chat.you)
    setChat({...chat, you: randomChar})
  }

  const characterIcon = {
    color: 'white',
    verticalAlign: 'middle',
    marginLeft: '5px'
  }

  const [isInternet, setIsInternet] = useState(true)
  const [waitingForPeer, setWaitingForPeer] = useState(false)
  const [chatInSession, setChatInSession] = useState(false)

  const [chat, setChat] = useState({title: '', you: '', peer: '', conversation: [], message: ''})


  return (
    <>
    <section className="chatroom-page-wrapper">
      <h1 className="page-title">Chatroom</h1>
      <p id="tip">Tip: {randomTip}</p>
      {!chatInSession &&
      <>
        <button className={`suggest-character btn ${waitingForPeer ? 'disabled' : ''}`} onClick={suggestCharacter}>Suggest <MoodIcon style={characterIcon}/></button>
        <div className={`${waitingForPeer ? 'low-opacity' : ''}`}>
          <p className="your-character-text">Your character: </p>
          <input className={`choose-char ${waitingForPeer ? 'not-clickable' : ''}`} value={chat.you} placeholder="Ex: Crazy Tour Guide" maxLength="30" 
          disabled={waitingForPeer} onChange={e => setChat({...chat, you: e.target.value})} autoFocus/>
        </div>
      </>
      }
      {(!waitingForPeer && !chatInSession) &&  
        <button className={`start-chat btn ${chat.you ? '' : 'disabled'}`} disabled={!chat.you} 
        onClick={startChatBtnClicked}>Start Chat</button>
      }
      {!isInternet &&
        <p className='no-internet'>Could not connect. Please check your internet connection and try again.</p>
      }
      {waitingForPeer && 
        <div className="waiting-for-peer"> 
          <p className="waiting-title">Looking for someone to pair you with...</p>
          <button className="btn" id='cancel-chat-btn' onClick={cancelSearch}>Cancel</button>
          <p className="waiting-note">(Prime chatting time is Sundays at 8pm EST)</p>
        </div>
      }
    </section>
    {chatInSession &&
      <div className="center-chatbox">
        <Chatbox chat={chat} chatInSession={chatInSession} suggestCharacter={suggestCharacter} setChat={setChat} setChatInSession={setChatInSession} socket={socket} />
      </div>
    }
    </>
  )
}

export default ChatroomPage