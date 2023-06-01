import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

function Featured({type}) {
  return (
    <div className="featured"> 
    {type && ( 
      <div className="category">
        <span>
          {type=="movie" ? "Movies" : "Series"}
        </span>
        <select name="genre" id="genre">
          <option>Genre</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="historical">Historical</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="sci-fie">Sci-fi</option>
          <option value="thriller">Thriller</option>
          <option value="western">Western</option>
          <option value="adventure">Adventure</option>
          <option value="drama">Drama</option>
          <option value="animation">Animation</option>
          <option value="documentary">Documentary</option>
          

        </select>
      </div>
    )}
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQiBi1xCQ39Old8wPKOnzsV3GIaRn3tN9LQ&usqp=CAU" alt=""/>  */}
        <div className="info">
          <img src="" alt=""/>
          <span className="description">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium ac ligula sit amet imperdiet. Aliquam posuere dignissim nisi, ut rutrum magna tincidunt sed. Sed malesuada ipsum ut lacus pharetra dapibus. Nam mattis pulvinar metus, at consequat sapien vehicula et. Ut eu mi dignissim, ornare tortor eu, efficitur ligula. Donec sodales lacinia nunc sed rutrum. Etiam bibendum interdum mauris quis laoreet.

Nulla in volutpat odio. Donec eget luctus nulla, quis porttitor ex. Vivamus elementum enim sit amet dignissim placerat. Phasellus quis tristique elit, a facilisis felis. Phasellus ut nulla sit amet lacus euismod varius. Aliquam volutpat efficitur risus vel tempor. In a felis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus posuere id elit eu dictum. Donec at mi imperdiet, dapibus orci vitae, ultricies libero. Proin commodo metus ut nunc sollicitudin vestibulum. Morbi quis turpis eu leo ultricies facilisis id sit amet velit. Phasellus porttitor erat non mi ultricies elemeLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium ac ligula sit amet imperdiet. Aliquam posuere dignissim nisi, ut rutrum magna tincidunt sed. Sed malesuada ipsum ut lacus pharetra dapibus. Nam mattis pulvinar metus, at consequat sapien vehicula et. Ut eu mi dignissim, ornare tortor eu, efficitur ligula. Donec sodales lacinia nunc sed rutrum. Etiam bibendum interdum mauris quis laoreet.

Nulla in volutpat odio. Donec eget luctus nulla, quis porttitor ex. Vivamus elementum enim sit amet dignissim placerat. Phasellus quis tristique elit, a facilisis felis. Phasellus ut nulla sit amet lacus euismod varius. Aliquam volutpat efficitur risus vel tempor. In a felis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus posuere id elit eu dictum. Donec at mi imperdiet, dapibus orci vitae, ultricies libero. Proin commodo metus ut nunc sollicitudin vestibulum. Morbi quis turpis eu leo ultricies facilisis id sit amet velit. Phasellus porttitor erat non mi ultricies eleme */}
          </span>
          <div className="buttons">
            <button className="play">
              <PlayArrow/>
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined/>
              <span>Info</span>
            </button>
          
          </div>
        </div>
    </div>
   
  );
}

export default Featured
