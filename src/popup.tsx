// import { CountButton } from "~features/CountButton"
import {Button} from "~features/Button"
import ExtensionIntro from "~features/Intro";

import "~style.css";

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
      {/* <CountButton /> */}
      {/* <Button /> */}
      <ExtensionIntro />
    </div>
  )
}

export default IndexPopup
