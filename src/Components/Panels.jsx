import React from 'react';
import '../App.css';
import img from '../images/image.jpg';
import Text from './Text.jsx';


function Panels() {
  const refPink=React.useRef(null);
  const refBeige=React.useRef(null);
  const refBottomPink=React.useRef(null);
  const refBottomBeige=React.useRef(null);

  React.useEffect(() => {
     
    const resizeableElePink = refPink.current;
    const stylesPink = window.getComputedStyle(resizeableElePink);
    let heightPink = parseInt(stylesPink.height, 10);
    let Pinky = 0;

    const resizeableEleBeige = refBeige.current;
    const stylesBeige = window.getComputedStyle(resizeableElePink);
    let heightBeige = parseInt(stylesBeige.height, 10);
    let Beigey = 0;

    resizeableElePink.style.top = null;
    resizeableEleBeige.style.bottom = null;
   //Pink
    const onMouseMoveBottomResizePink = (event) => {
      const Pinkdy = event.clientY - Pinky;
      heightPink = heightPink + Pinkdy;
      Pinky = event.clientY;
      resizeableElePink.style.height = `${heightPink}px`;
    };

    const onMouseUpBottomResizePink = (event) => {
      document.removeEventListener("mousemove", onMouseMoveBottomResizePink);
    };

    const onMouseDownBottomResizePink = (event) => {
      Pinky = event.clientY;
      const styles = window.getComputedStyle(resizeableElePink);
      resizeableElePink.style.top = styles.top;
      resizeableElePink.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResizePink);
      document.addEventListener("mouseup", onMouseUpBottomResizePink);
    };
 //Beige

    const onMouseMoveBottomResizeBeige = (event) => {
      const dyBeige = event.clientY - Beigey;
      heightBeige = heightBeige + dyBeige;
      Beigey = event.clientY;
      resizeableEleBeige.style.height = `${heightBeige}px`;
    };

    const onMouseUpBottomResizeBeige = (event) => {
      document.removeEventListener("mousemove", onMouseMoveBottomResizeBeige);
    };

    const onMouseDownBottomResizeBeige = (event) => {
      Beigey = event.clientY;
      const stylesBeige = window.getComputedStyle(resizeableEleBeige);
      resizeableEleBeige.style.bottom = stylesBeige.bottom;
      resizeableEleBeige.style.top = null;
      document.addEventListener("mousemove", onMouseMoveBottomResizeBeige);
      document.addEventListener("mouseup", onMouseUpBottomResizeBeige);
    };

    const resizerBottomPink = refBottomPink.current;
    resizerBottomPink.addEventListener("mousedown", onMouseDownBottomResizePink);
    const resizerBottomBeige = refBottomBeige.current;
    resizerBottomBeige.addEventListener("mousedown", onMouseDownBottomResizeBeige);


    return () => {
    resizerBottomPink.removeEventListener("mousedown", onMouseDownBottomResizePink);
    resizerBottomBeige.removeEventListener("mousedown", onMouseDownBottomResizeBeige);
    };
  }
, []);
  

  return (
      <div className="content_main-panels"> 
         <div ref={refPink} className="panel-1">
             <div ref={refBottomPink} className="panel-1_rezizble"></div>
         </div>
         <div className="content__Mob">
             <img src={img} alt="image not found" className="content_img" />
             <Text/>
         </div>
         <div ref={refBeige} className="panel-2">
            <div ref={refBottomBeige} className="panel-2_rezizble"></div>
         </div>
      </div> 
  );
}

export default Panels;
