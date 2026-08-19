import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Button({ children, to, variant = 'primary', className = '', style = {}, ...props }) {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem 1.5rem',
        borderRadius: 'var(--border-radius)',
        fontWeight: '600',
        fontFamily: 'var(--font-primary)',
        cursor: 'pointer',
        transition: 'all var(--transition-normal)',
        border: '1px solid transparent',
        textDecoration: 'none',
    };

    let variantStyle = {};
    if (variant === 'primary') {
        variantStyle = {
            backgroundColor: isHovered ? 'var(--color-light-gold)' : 'var(--color-gold)',
            color: 'var(--color-white)',
        };
    } else if (variant === 'outline') {
        variantStyle = {
            backgroundColor: isHovered ? 'var(--color-gold)' : 'transparent',
            borderColor: 'var(--color-gold)',
            color: isHovered ? 'var(--color-white)' : 'var(--color-gold)',
        };
    } else if (variant === 'dark') {
        variantStyle = {
            backgroundColor: isHovered ? 'var(--color-gold)' : 'var(--color-dark-black)',
            color: 'var(--color-white)',
        };
    }

    const mergedStyle = { ...baseStyle, ...variantStyle, ...style };

    if (to) {
        return (
            <Link
                to={to}
                style={mergedStyle}
                className={className}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            style={mergedStyle}
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            {children}
        </button>
    );
}
