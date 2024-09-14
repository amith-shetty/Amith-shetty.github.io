import './Background.css';
import Block from '../../components/block/Block'
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
    const DropRatio = 0.5
    const newGlow = Array(numBlocks).fill(false);
    const neighbours = [
      (cursorIndex - cols + 3) - 1,  (cursorIndex - cols + 3),  (cursorIndex - cols + 3) + 1,
      cursorIndex - 1, cursorIndex, cursorIndex + 1,
      (cursorIndex + cols - 3) - 1, (cursorIndex + cols - 3), (cursorIndex + cols - 3) + 1
    ]

    const inBound = neighbours.filter((index) => (index > 0 && index <= numBlocks))
    const dropped = inBound.filter(() =>  Math.random() > DropRatio)
    dropped.forEach((index) => {
      newGlow[index] = true;
    })
    newGlow[cursorIndex] = true;
    
    setGlow(newGlow);



  }, [cursorIndex, numBlocks]);

  return (
      <div className="Background">
        {glow.map((_, i) => <Block key={i} index={i} setCursorIndex={setCursorIndex} glow={glow[i]}></Block>)}
      </div>
  );
}

export default Background;