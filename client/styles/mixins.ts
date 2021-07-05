import { isString } from '../utils/type.utils';

export const trs = (prop = 'all', duration = '250ms', easing = 'ease-in-out', delay = '0ms') => `
    transition: ${prop} ${duration} ${easing} ${delay};
`;

export const absolute = (top?: string | null, left?: string | null, bottom?: string | null, right?: string | null) => {
    let styles = 'position: absolute;';

    if (isString(top)) styles += `top: ${top};`;
    if (isString(left)) styles += `left: ${left};`;
    if (isString(bottom)) styles += `bottom: ${bottom};`;
    if (isString(right)) styles += `right: ${right};`;

    return styles;
};

export const size = (width?: string, height?: string) => {
    let styles = '';
    height = height ? height : width;

    if (isString(width)) styles += `width: ${width};`;
    if (isString(height)) styles += `height: ${height};`;

    return styles;
};
