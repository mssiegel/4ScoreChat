import React from "react"
import './ChatroomPageButtons.css'

const StartChatButton = ({chat, setIsInternet, setWaitingForPeer, socket}) => {
  async function startChatBtnClicked(){
    const isInternet = await checkInternet()
    if (isInternet) {
      setWaitingForPeer(true)
      socket.emit('enter chatQueue', chat.you)
    }
  }

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

  return (
    <button className={`start-chat btn ${chat.you ? '' : 'disabled'}`} disabled={!chat.you} onClick={startChatBtnClicked}>Start Chat</button>
  )
}

export default StartChatButton