import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type ButtonProps = {
    onClick: () => void;
    variant: 'BG_WHITE' | 'BG_GRAY';
    disabled?: boolean;
    rightIcon?: IconDefinition;
    leftIcon?: IconDefinition;
    children?: React.ReactNode;
};

const BUTTON_VARIANTS = {
    BG_WHITE: 'text-black bg-white hover:bg-gray-200/[0.6]',
    BG_GRAY: 'text-white bg-gray-400/[0.6] hover:bg-gray-500/[0.7]',
};

const Button = ({
    onClick,
    variant = 'BG_WHITE',
    disabled = false,
    rightIcon,
    leftIcon,
    children,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${BUTTON_VARIANTS[variant]} font-semibold py-2 px-6 rounded transition-all duration-200 focus:outline-none focus:shadow-outline ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}
        >
            {leftIcon && (
                <FontAwesomeIcon
                    icon={leftIcon}
                    className={`mr-2 text-initial`}
                />
            )}
            {children}
            {rightIcon && (
                <FontAwesomeIcon
                    icon={rightIcon}
                    className={`mr-2 text-initial`}
                />
            )}
        </button>
    );
};

export default Button;
