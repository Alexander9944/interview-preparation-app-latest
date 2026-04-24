import React, { useState } from 'react';
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';

/**
 * Modern Input Component with validation states
 * Types: text, email, password, number, textarea
 * Status: default, success, error, loading
 */
const Input = React.forwardRef(({
  type = 'text',
  label,
  placeholder,
  error,
  success,
  loading = false,
  icon: Icon = null,
  helperText,
  required = false,
  className = '',
  containerClass = '',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const baseInputClass = 'input-base w-full bg-white text-neutral-900 placeholder-neutral-400';

  const stateClass = {
    error: 'border-red-400 focus:border-red-500 focus:ring-red-100',
    success: 'border-green-400 focus:border-green-500 focus:ring-green-100',
    loading: 'border-primary-400 focus:border-primary-500 focus:ring-primary-100 opacity-75',
    default: 'border-neutral-200 focus:border-primary-400 focus:ring-primary-100',
  };

  let currentState = 'default';
  if (loading) currentState = 'loading';
  else if (error) currentState = 'error';
  else if (success) currentState = 'success';

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          ref={ref}
          className={`${baseInputClass} ${stateClass[currentState]} resize-none ${className}`}
          placeholder={placeholder}
          {...props}
        />
      );
    }

    return (
      <div className="relative flex items-center">
        {Icon && (
          <Icon className="absolute left-3 w-5 h-5 text-neutral-400 pointer-events-none" />
        )}
        <input
          ref={ref}
          type={inputType}
          className={`${baseInputClass} ${stateClass[currentState]} ${Icon ? 'pl-10' : ''} ${className}`}
          placeholder={placeholder}
          disabled={loading}
          required={required}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 p-1 text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
        {error && !Icon && (
          <AlertCircle className="absolute right-3 w-5 h-5 text-red-500 pointer-events-none" />
        )}
        {success && !Icon && (
          <CheckCircle className="absolute right-3 w-5 h-5 text-green-500 pointer-events-none" />
        )}
      </div>
    );
  };

  return (
    <div className={`flex flex-col gap-2 ${containerClass}`}>
      {label && (
        <label className="font-medium text-sm text-neutral-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {renderInput()}
      {(helperText || error) && (
        <p className={`text-xs ${error ? 'text-red-500' : 'text-neutral-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
