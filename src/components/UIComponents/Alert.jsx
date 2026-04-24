import React from 'react';
import { X, AlertCircle, CheckCircle, Info } from 'lucide-react';

/**
 * Modern Alert Component
 * Variants: success, error, warning, info
 */
const Alert = ({
  children,
  variant = 'info',
  title,
  closable = true,
  onClose,
  icon: CustomIcon = null,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const variantConfig = {
    success: {
      bg: 'bg-green-50 border-green-200',
      text: 'text-green-800',
      icon: 'text-green-600',
      defaultIcon: CheckCircle,
    },
    error: {
      bg: 'bg-red-50 border-red-200',
      text: 'text-red-800',
      icon: 'text-red-600',
      defaultIcon: AlertCircle,
    },
    warning: {
      bg: 'bg-yellow-50 border-yellow-200',
      text: 'text-yellow-800',
      icon: 'text-yellow-600',
      defaultIcon: AlertCircle,
    },
    info: {
      bg: 'bg-blue-50 border-blue-200',
      text: 'text-blue-800',
      icon: 'text-blue-600',
      defaultIcon: Info,
    },
  };

  const config = variantConfig[variant];
  const Icon = CustomIcon || config.defaultIcon;

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  return (
    <div
      className={`flex items-start gap-4 p-4 rounded-lg border ${config.bg} ${className}`}
      {...props}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.icon}`} />
      <div className="flex-1">
        {title && <h4 className={`font-semibold ${config.text}`}>{title}</h4>}
        <p className={`text-sm ${config.text}`}>{children}</p>
      </div>
      {closable && (
        <button
          onClick={handleClose}
          className={`flex-shrink-0 p-1 rounded hover:opacity-70 transition-opacity ${config.icon}`}
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Alert;
