import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type ButtonProps = {
    onClick: () => void;
    color?: string;
    bgColor?: string;
    disabled?: boolean;
    rightIcon?: IconDefinition;
    leftIcon?: IconDefinition;
    hover?: {
        color?: string;
        bgColor?: string;
    };
    children?: React.ReactNode;
};

const Button = ({
    onClick,
    color = 'black',
    bgColor = 'white',
    disabled = false,
    rightIcon,
    leftIcon,
    hover,
    children,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`text-${color} bg-${bgColor} font-semibold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition-all duration-200${hover?.color ? `hover:text-${hover.color}-500` : ''} ${hover?.bgColor ? `hover:bg-${hover.bgColor}` : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}
        >
            {leftIcon && (
                <FontAwesomeIcon
                    icon={leftIcon}
                    className={`mr-2 text-${color}`}
                />
            )}
            {children}
            {rightIcon && (
                <FontAwesomeIcon
                    icon={rightIcon}
                    className={`mr-2 text-${color}`}
                />
            )}
        </button>
    );
};

export default Button;
