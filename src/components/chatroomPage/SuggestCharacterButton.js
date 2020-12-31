import React from 'react'
import MoodIcon from '@material-ui/icons/Mood'
import './ChatroomPageButtons.css'

const SuggestCharacterButton = ({ waitingForPeer, setChat, chat }) => {
  function suggestCharacter() {
    //suggests a new character - always different than previous one
    let randomChar
    do {
      const characterList = [
        'Skinny weight lifter',
        'Elaborate vacation planner',
        'Courageous Soldier',
        'Tiny Tim',
        'Generous Billionaire',
        'Impatient Marketer',
        'Gullible money lender',
        'Perfectionist dentist',
        'Timid crime boss',
        'Nerdy scientist',
        'Exiled king',
        'Bold fashion advisor',
        'Happy-go-lucky singer',
        'Whoopee cushion maker',
        'Elven archer',
        'Jolly circus clown',
        'Graceful ballerina',
        'Suspicious looking spy',
        'Technology wiz kid',
        'Mighty knight',
        'Dragon slayer',
        'Viking warrior',
        'Laughing Jack',
        'Plumbing superhero',
        '9th level wizard',
        'Lucky beggar',
        'Well-dressed plumber',
        'Hunter of beasts',
        'Alien warlord',
        'Friendly martian',
        'Pirate ship captain',
        'Cowardly vampire',
        'Stumbling sorcerer',
        'Panicky Magician',
        'Passionate Hypnotist',
        'Defender of the righteous',
        'Anxious job applicant',
        'Hungry teenager',
        'Tiny warlord',
        'Joyful dancer',
        'Dance teacher',
        'Founder of Farters R Us',
        'Psycho therapist',
        'News reporter',
        'Wealthy merchant',
        'Energized karate master',
        'Forgetful surgeon',
        'Dude with diaper gun',
        'Pro water gunner',
        'A proud demon',
        'Gullible doctor',
        'Party animal',
        'Overzealous bounty hunter',
        'Amateur wrestler',
        'Water balloon sniper',
        'Adventurer',
        'A minotaur',
        'Dungeon troll',
        'Sam the sheriff',
        'Alexyn, Lord of dragons',
        'Partying swordsman',
        'Zilod the fighter',
        'Pharix, Lord of chaos',
        'Green ogre',
        'Owner of shop',
        'Witch of Zimbodia',
        'Sports coach',
        'A superhero',
        'Zombie goblin',
        'Lover of spiders',
        'Fortune teller',
        'Cute sumo wrestler',
        'Taxi driver',
        'Gardener',
        'Tour guide',
        'Farmer',
        '5-Tentacled martian',
        'Keeper of beasts',
        'Pet shop owner',
        'A robot',
        'Travel agent',
        'Chef',
        'Captain Breakfast',
        'Pancake flipping pirate',
        'Creative fashion designer',
        'Toy maker',
        'Water gun manufacturer',
        'Expert in burping',
        'Party planner',
        'Good-humored stuntsman',
        'A slowpoke',
        'Suspicious product salesman',
        'Theater Director',
        'Energetic fitness trainer',
        'Roller coaster designer',
        'Carnival worker',
        'A jolly good fellow',
        'Hot dog stand guy',
        'TV show producer',
        'Farmer from Mars',
        'Frantic treasure hunter',
      ]
      const randomNum = Math.floor(Math.random() * characterList.length)
      randomChar = characterList[randomNum]
    } while (randomChar === chat.you)
    setChat({ ...chat, you: randomChar })
  }

  const characterIcon = {
    color: 'white',
    verticalAlign: 'middle',
    marginLeft: '5px',
  }

  return (
    <button
      className={`suggest-character btn ${waitingForPeer ? 'disabled' : ''}`}
      onClick={waitingForPeer ? null : suggestCharacter}
    >
      Suggest <MoodIcon style={characterIcon} />
    </button>
  )
}

export default SuggestCharacterButton
