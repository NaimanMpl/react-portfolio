import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

interface ButtonProps {
  label: string,
  className?: string,
  id?: string,
  onMouseEnter?: any,
  onMouseLeave?: any
}

const Button = (props: ButtonProps) => {
  const { label, className, id, onMouseEnter, onMouseLeave } = props;
  const { theme, setTheme } = useTheme();

  const bgColor = theme === 'light' ? 'var(--black)' : 'var(--white)';
  const labelColor = theme === 'light' ? 'var(--white)' : 'var(--dark)';

  return (
    <button 
      style={
        {
          color: labelColor, 
          background: bgColor, 
          padding: '1.5rem 3rem',
          fontWeight: '500',
          border: 'none',
          borderRadius: '2.5rem',
          fontSize: '1.1rem',
        }
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className} 
      id={id}
    >
      {label}
    </button>
  )
}

export default Button;