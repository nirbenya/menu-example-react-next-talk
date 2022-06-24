import { keyframes } from 'styled-components';
import colors from './colors';

export const pulse = keyframes`
    0% { transform: scale(1); }
    35% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;

export const bounceKeyframes = keyframes`
    0%,
    80%,
    100% { transform: scale(0) }
    40% { transform: scale(1.0) }
`;

export const backgroundColorChangeKeyFrames = keyframes`
      0%   {background: ${colors.gray95}}
      50%  {background: #FFF3D6;}
      100% {background: ${colors.gray95};}
`;

export const actionColorHighlightChangeKeyFrames = keyframes`
      0%   {color: ${props => props.theme.actionColor}}
      50%  {color: #FFF3D6;}
      100% {color: ${props => props.theme.actionColor};}
`;

export const easedPulse = keyframes`
    0% { transform: scale(1); }
    35% { transform: scale(1.185); }
    100% { transform: scale(1); }
`;

export const easeEnterFromTop = keyframes`
    from { 
        overflow: hidden; 
        transform: translateY(-30%); 
        opacity: 0; 
    }
    to { 
        transform: translateY(0); 
        opacity: 1;
    }
`;
