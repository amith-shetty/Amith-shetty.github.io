import './Block.css';
import classNames from 'classnames';

type BlockProps = {
    index: number;
    setCursorIndex: (index: number) => void;
    glow: boolean;
};

function Block(props: BlockProps) {
    const {index, setCursorIndex, glow} = props
    const handleMouseMove = () => { // Removed 'event'
        setCursorIndex(index);
    };

    const blockClass = classNames('Block', { 'Glow': glow })

    return (
        <div className={blockClass} onMouseMove={handleMouseMove}>
        </div>
    );
}

export default Block;