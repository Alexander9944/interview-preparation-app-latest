import React from 'react';

/**
 * Modern Card Component
 * Variants: default, glass, gradient, outlined
 */
const Card = ({
  children,
  variant = 'default',
  className = '',
  hover = true,
  onClick = null,
  ...props
}) => {
  const baseClass = 'rounded-xl overflow-hidden transition-all duration-300';

  const variantClass = {
    default: 'bg-white border border-neutral-200/50 shadow-soft-md',
    glass: 'glass border border-white/20 shadow-glass',
    gradient: 'bg-gradient-to-br from-white to-neutral-50 border border-neutral-200/50 shadow-soft-md',
    outlined: 'bg-white border-2 border-primary-200/50',
  }[variant];

  const hoverClass = hover ? 'hover:shadow-soft-lg hover:-translate-y-1 cursor-pointer' : '';

  return (
    <div
      className={`${baseClass} ${variantClass} ${hoverClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card with header, body, and footer sections
 */
export const CardLayout = ({ header, footer, children, ...props }) => (
  <Card {...props}>
    {header && (
      <div className="px-6 py-4 border-b border-neutral-200/50">
        {header}
      </div>
    )}
    <div className="px-6 py-4">
      {children}
    </div>
    {footer && (
      <div className="px-6 py-4 border-t border-neutral-200/50 bg-neutral-50/50">
        {footer}
      </div>
    )}
  </Card>
);

export default Card;
