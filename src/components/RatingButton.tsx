// components/RatingButton.tsx

import { FC } from 'react';
import { useMessage } from '../contexts/MessageContext';

interface RatingButtonProps {
    isActive: boolean;
    isVisible: boolean;
    name: string;
    tip: string;
    onClick: () => void;
}

const RatingButton: FC<RatingButtonProps> = ({ isActive, isVisible, name, tip, onClick }) => {
    const { reportHoverMessage } = useMessage();
    const imageName = `/icons/${isActive ? 'gold' : 'grey'}-${name}.png`;
    const handleMouseEnter = () => {
        reportHoverMessage(tip);
    }

    const handleMouseLeave = () => {
        reportHoverMessage('');
    }

    return (
        <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            style={{ paddingRight: '2px', display: isVisible ? 'inline' : 'none' }}
            src={imageName}
            onClick={onClick}
            alt={name}
        />
    );
};

export default RatingButton;
