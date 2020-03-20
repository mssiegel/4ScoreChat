import React from 'react'
import MoodIcon from '@material-ui/icons/Mood'
import './ChatroomPageButtons.css'

const SuggestCharacterButton = ({ waitingForPeer, setChat, chat }) => {
  function suggestCharacter() {
    //suggests a new character - always different than previous one
    let randomChar
    do {
      const characterList = [
        'Wedding entertainer',
        'Whoopee cushion maker',
        'Elven archer',
        'Circus clown',
        'Ballerina',
        'Spy',
        'Website builder',
        'A prankster',
        'Mighty knight',
        'Dragon slayer',
        'Viking warrior',
        'Leader of warrior army',
        'Laughing Jack',
        'Plumbing superhero',
        '9th level wizard',
        'Beggar',
        'Vampire hunter',
        'Alien warlord',
        'A martian',
        'Pirate captain',
        'A vampire',
        'Sorcerer',
        'Maniac magician',
        'Hypnotist',
        'Defender of the righteous',
        'Job applicant',
        'Rebel',
        'Tiny warlord',
        'Dancing champion',
        'Dance teacher',
        'Scuba diver',
        'Founder of Farters R Us',
        'Psycho therapist',
        'News reporter',
        'Wealthy merchant',
        'Karate master',
        'Forgetful surgeon',
        'Lawyer',
        'Dude with diaper gun',
        'Pro water gunner',
        'Happy gnome',
        'Trickster demon',
        'Doctor',
        'Party animal',
        'Bounty hunter',
        'Wrestler',
        'Water balloon thrower',
        'Boxing champ',
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
        'Unicyclist',
        'Lover of spiders',
        'Fortune teller',
        'Sumo wrestler',
        'Airplane pilot',
        'Taxi driver',
        'Gardener',
        'Tour guide',
        'Farmer',
        'World Traveler',
        'Exotic Traveler',
        'Keeper of beasts',
        'Pet shop owner',
        'A robot',
        'Boat captain',
        'Travel agent',
        'Chef'
      ]
      const randomNum = Math.floor(Math.random() * characterList.length)
      randomChar = characterList[randomNum]
    } while (randomChar === chat.you)
    setChat({ ...chat, you: randomChar })
  }

  const characterIcon = {
    color: 'white',
    verticalAlign: 'middle',
    marginLeft: '5px'
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
