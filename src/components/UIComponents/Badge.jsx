import React from 'react';

/**
 * Modern Badge Component
 * Variants: primary, secondary, success, warning, danger, info
 * Sizes: sm, md, lg
 */
const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon = null,
  ...props
}) => {
  const baseClass = 'inline-flex items-center gap-1 font-semibold rounded-full transition-colors duration-300';

  const sizeClass = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }[size];

  const variantClass = {
    primary: 'bg-primary-100 text-primary-700 hover:bg-primary-200',
    secondary: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200',
    success: 'bg-green-100 text-green-700 hover:bg-green-200',
    warning: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
    danger: 'bg-red-100 text-red-700 hover:bg-red-200',
    info: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
  }[variant];

  return (
    <span
      className={`${baseClass} ${sizeClass} ${variantClass} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </span>
  );
};

export default Badge;
