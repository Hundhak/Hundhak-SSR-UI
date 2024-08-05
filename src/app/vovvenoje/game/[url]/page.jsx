/**
 * Page displaying a single game.
 */

import SimpleGame from "./components/simple-game"
import GiveTreat from "./components/give-treat"



const GamePage = ({ params: url }) => {

  return (
    <div className="flex justify-center items-center border-2 border-black p-5 rounded-lg w-fit mx-auto">
      <GiveTreat />
    </div>
  )
}

export default GamePage