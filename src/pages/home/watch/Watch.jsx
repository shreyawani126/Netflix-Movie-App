import { ArrowBack } from "@material-ui/icons"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
    <div className="back">
        <ArrowBack/>
        Home
        
    </div>
    <video className="video" autoplay progress controls 
    src="https://www.youtube.com/watch?v=xVYUKxF0wMc" />
      
    </div>
  )
}

