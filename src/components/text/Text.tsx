import React from 'react';
import clsx from 'clsx';

import Typography, { BODY_ELEMENTS, TTypographyWeight } from '../../foundations/typography';

import PText from './Text.props';
import {
    DEFAULT_TEXT_MARGIN,
    DEFAULT_TEXT_SIZE,
    DEFAULT_TEXT_ELEMENT,
    DEFAULT_TEXT_WEIGHT,
} from './Text.constants';

const Text: React.FC<PText> = ({
    children,
    className,
    color,
    inheritLineHeight = false,
    size = DEFAULT_TEXT_SIZE,
    element = DEFAULT_TEXT_ELEMENT,
    weight = DEFAULT_TEXT_WEIGHT,
    margin = DEFAULT_TEXT_MARGIN,
}): JSX.Element => {
    // Whenever this component is used with an element that is not supported within the headings throw an error!
    if (element && !BODY_ELEMENTS.includes(element)) {
        throw new Error(
            `Compass Components: Heading component was used with an unsupported element '${element}'.
            Please provide an element from these available options: ${BODY_ELEMENTS.join(', ')}.`
        );
    }

    return (
        <Typography
            className={clsx(className, 'Text')}
            element={element}
            size={size}
            margin={margin}
            color={color}
            weight={weight as TTypographyWeight}
            role={'text'}
            inheritLineHeight={inheritLineHeight}
        >
            {children}
        </Typography>
    );
};

export default Text;
