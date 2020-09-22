import React from 'react'
import MoodIcon from '@material-ui/icons/Mood'
import './ChatroomPageButtons.css'

const SuggestCharacterButton = ({ waitingForPeer, setChat, chat }) => {
  function suggestCharacter() {
    //suggests a new character - always different than previous one
    let randomChar
    do {
      const characterList = [
        'Concert singer',
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
        'A plumber',
        'Hunter of vampires',
        'Alien warlord',
        'A martian',
        'Pirate captain',
        'A vampire',
        'Sorcerer',
        'Magician',
        'Hypnotist',
        'Defender of the righteous',
        'Job applicant',
        'Rebellious teenager',
        'Hungry teenager',
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
        '5-Tentacled martian',
        'Keeper of beasts',
        'Pet shop owner',
        'A robot',
        'Boat captain',
        'Travel agent',
        'Chef',
        'Captain Breakfast',
        'Pancake flipping pirate',
        'Fashion designer',
        'Toy maker',
        'Water gun manufacturer',
        'Expert in burping',
        'Party planner',
        'Stuntsman',
        'Marathon runner',
        'Suspicious product salesman',
        'Theater Director',
        'Retired war general',
        'Fitness trainer',
        'Arcade store owner',
        'Roller coaster designer',
        'Healthy foods salesperson',
        'Carnival worker',
        'A jolly good fellow',
        'Hot dog stand guy',
        'Farmer from the 1500s',
        'Security guard',
        'Dog owner',
        'TV show producer',
        'Farmer from Mars',
        'Searching for treasure',
        'Cruise ship captain'
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
