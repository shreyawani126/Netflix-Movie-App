import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from "@material-ui/icons"
import "./listitem.scss"
import { useState } from "react"

function Listitem(index) {
const [isHovered,setIsHovered]=useState(false);
const trailer="https://www.youtube.com/watch?v=pBk4NYhWNMM"

  return (
    <div className="listItem" 
    style={{left: isHovered && index*225-50+ index*2.5}}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OFz78i3P7uVMO_jGVCBp8d3SVK1P7gmlYQ&usqp=CAU" alt=""/>
      
      {isHovered &&(
        <>
      <video src={trailer} autoPlay={true} loop />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpOutlined className="icon"/>
          <ThumbDownOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">16+</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor,sit amet consectetur adipiscing elit.Prasentium
          hic rem eveniet error possimus,neque ex doloribus.
        </div>
        <div className="genre">Action</div>
      </div>
      </>
      )}
    </div>
  )
}

export default Listitem
