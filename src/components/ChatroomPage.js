import React, {useState, useEffect} from "react"
import "./ChatroomPage.css"
import MoodIcon from '@material-ui/icons/Mood'
import Chatbox from './Chatbox'

const ChatroomPage = ({socket, randomTip}) => {
  
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
      const characterList = ['Wedding entertainer','Whoopee cushion maker', 'Elven archer', 'Circus clown', 'Ballerina', 'Spy', 'Website builder', 'A prankster', 'Mighty knight', 'Dragon slayer', 'Viking warrior','Leader of warrior army','Laughing Jack', 'Plumbing superhero', '9th level wizard', 'Beggar', 'Vampire hunter', 'Alien warlord', 'A martian', 'Pirate captain', 'A vampire', 'Sorcerer', 'Maniac magician', 'Hypnotist', 'Defender of the righteous', 'Job applicant', 'Rebel', 'Tiny warlord', 'Dancing champion', 'Dance teacher', 'Scuba diver', 'Founder of Farters R Us', 'Psycho therapist', 'News reporter', 'Wealthy merchant', 'Karate master', 'Forgetful surgeon', 'Lawyer', 'Dude with diaper gun', 'Pro water gunner', 'Happy gnome', 'trickster demon', 'Doctor', 'Party animal', 'Bounty hunter', 'Wrestler', 'Water balloon thrower', 'Boxing champ', 'Adventurer', 'A minotaur', 'Dungeon troll', 'Sam the sheriff', 'Alexyn, Lord of dragons', 'Partying swordsman', 'Zilod the fighter', 'Pharix, Lord of chaos', 'Green ogre', 'Owner of shop', 'Witch of Zimbodia', 'Sports coach', 'A superhero', 'Zombie goblin', 'Unicyclist', 'Lover of spiders', 'Fortune teller', 'Sumo wrestler', 'Airplane pilot', 'Taxi driver', 'Gardener', 'Tour guide', 'Farmer', 'World Traveler', 'Exotic Traveler', 'Keeper of beasts', 'Pet shop owner', 'A robot', 'Boat captain', 'Travel agent', 'Chef']
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

  const [chat, setChat] = useState({title: '', you: '', peer: '', conversation: []})


  return (
    <>
    <section className="chatroom-page-wrapper">
      <h1 className="page-title">Chatroom</h1>
      <p id="tip">Add to your calendar!! &nbsp;<span className="tip-best-time">Sunday 8:00pm EST</span>. Guaranteed to be people online at that time, every Sunday.</p>
      {/* Have temporarily replaced randomTip with Best Chatting Time    Tip: {randomTip}*/}

      {!chatInSession &&
      <>
        <button className={`suggest-character btn ${waitingForPeer ? 'disabled' : ''}`} onClick={waitingForPeer ? null: suggestCharacter}>Suggest <MoodIcon style={characterIcon}/></button>
        <div className={`${waitingForPeer ? 'low-opacity' : ''}`}>
          <p className="your-character-text">Your character: </p>
          <input className={`choose-char ${waitingForPeer ? 'not-clickable' : ''}`} value={chat.you} placeholder="Ex: scientist" maxLength="30" 
          disabled={waitingForPeer} onChange={e => setChat({...chat, you: e.target.value})}/>
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
          <p className="waiting-title">Looking for someone...</p>          
          <button className="btn" id='cancel-chat-btn' onClick={cancelSearch}>Cancel</button>
          <p className="waiting-note">Best chatting time is <span className="best-time">Sunday 8:00pm EST</span>. Come then to get matched instantly!</p>
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