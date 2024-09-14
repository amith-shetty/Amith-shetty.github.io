import './Background.css';
import Block from './Block'
import {useState, useEffect} from 'react'

function Background() {
  const size = 40;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const cols = Math.ceil(width / size);
  const rows = Math.ceil(height / size);
  const numBlocks = cols * rows;

  const [cursorIndex, setCursorIndex] = useState(-1);
  const [glow, setGlow] = useState(Array(numBlocks).fill(false));
  
  useEffect(() => {
    if (cursorIndex >= 0 && cursorIndex < numBlocks) {
      const newGlow = Array(numBlocks).fill(false);
      newGlow[cursorIndex] = true;
      setGlow(newGlow);
    }
  }, [cursorIndex, numBlocks]);

  return (
      <div className="Background">
        {glow.map((e, i) => <Block key={i} index={i} setCursorIndex={setCursorIndex} glow={glow[i]}></Block>)}
      </div>
  );
}

export default Background;