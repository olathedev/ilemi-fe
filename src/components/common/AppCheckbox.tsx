import React from 'react'

type Props = {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    className?: string;
}

const AppCheckbox = ({ checked, onChange, label, size = 'md' }: Props) => {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    };
  
    return (
      <label className="flex items-center cursor-pointer text-sm gap-2">
        <div className="relative">
          <input
            type="checkbox"
            className={`sr-only `}
            checked={checked}
            onChange={onChange}
          />
          <div
            className={`${sizeClasses[size]} ${checked && 'bg-primary'} border-2 rounded-sm border-gray-400 flex items-center justify-center p-1`}
          >
            {checked && (
              <svg
                className="fill-current text-white"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            )}
          </div>
        </div>
        <span className="ml-2">{label}</span>
      </label>
    );
}

export default AppCheckbox
