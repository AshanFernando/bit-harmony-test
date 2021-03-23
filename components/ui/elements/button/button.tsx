import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';
import { DotsLoader } from '@teambit/teaching.ui.elements.dots-loader';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  isLoading: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant,
  isLoading,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      data-variant={variant}
      className={styles.base}
      disabled={isLoading || disabled}
      {...rest}
    >
      isLoading ? <DotsLoader /> : children;
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  isLoading: false,
};
