
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import "./list.scss";
import Listitem from "../listitem/Listitem";
import { useRef, useState } from "react";

function List() {
    const [isMoved,seIsMoved]=useState(false);
    const [slideNumber,setSlideNumber]=useState(0);

    const listRef=useRef()

    const handleClick=(direction) =>{
        seIsMoved(true)
        let distance=listRef.current.getBoundingClientRect().x-50
        if(direction==="left" && slideNumber>0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform= `translateX(${230+distance}px)`
        }
        if(direction==="right" && slideNumber<5){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform= `translateX(${-230+distance}px)`
        }
    }
    return (
        <div className="list">
            <span className="listtitle">Continue to Watch</span>
            <div className="wrapper">
            <ArrowBackIosOutlined className="sliderarrow left"
             onClick={()=>handleClick("left")} 
            style={{display: !isMoved && "none"}}
             />
            <div className="container" ref={listRef}>
                <Listitem index={0}/>
                 <Listitem index={1}/>
                 <Listitem index={2}/>
                 <Listitem index={3}/>
                 <Listitem index={4}/> 
                 <Listitem index={5}/>
                 <Listitem index={6}/>
                 <Listitem index={7}/>
                 <Listitem index={8}/>
                 <Listitem index={9}/>
                  
            </div>
            <ArrowForwardIosOutlined className="sliderarrow right" onClick={()=>handleClick("right")} />
            </div>
        </div>
    );
}

export default List
