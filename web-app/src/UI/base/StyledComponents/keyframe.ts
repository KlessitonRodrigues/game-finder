import { keyframes } from 'styled-components';

import { materialColors as mc } from 'src/styles/lib/palettes';

export const BgAnimation = keyframes`
    0% {background-position:0% 11%}
    50% {background-position:100% 90%}
    100% {background-position:0% 11%}
`;

//  #000000, #2174f3, #7101d3, #00910f, #9b0000, #000000
// https://www.gradient-animator.com/

export const BgAnimation2 = keyframes`
    0% {background-color: ${mc.blue['800']}}
    25% {background-color: ${mc.purple['800']}}
    50% {background-color: ${mc.green['900']}}
    100% {background-color: ${mc.red['900']}}
`;
