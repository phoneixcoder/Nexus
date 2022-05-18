import { useRef } from "react";
import { useEffect } from "react";
import './cursor.css';
const Cursor = () =>{

  const delay = 13;
  const dot = useRef(null);
  const dotOutLine = useRef(null);
  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const __x = useRef(0);
  const __y = useRef(0);

  const requestRef = useRef(null);
 
  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);
    
    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    }

  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const toggleCursorVisibility = () => {
    if(cursorVisible.current){
      dot.current.style.opacity = 1;
      dotOutLine.current.style.opacity = 1;
    }else{
      dot.current.style.opacity = 0;
      dotOutLine.current.style.opacity = 0;
    }
  };
  const toggleCursorSize = () => {
    if(cursorEnlarged.current){
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dotOutLine.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
    }else{
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutLine.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  }
  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  }

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  }  
  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  }  

  const mouseMoveEvent = e => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  }

  const animateDotOutline = () => {
    __x.current += (endX.current - __x.current)/ delay;
    __y.current += (endY.current - __y.current)/ delay;
  
    dotOutLine.current.style.top = __y.current + 'px';
    dotOutLine.current.style.left = __x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
  }

  return (
    <>
      <div ref={dotOutLine} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>
      
    </>
  );
};
export default Cursor;