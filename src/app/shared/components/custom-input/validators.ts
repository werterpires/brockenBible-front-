import { ValidationErrors } from '@angular/forms';

export function minMax(min: number, max: number) {
  return (value: string): string | null => {
    const numValue = Number(value);
    return numValue >= min && numValue <= max
      ? null
      : `O valor deve estar entre ${min} e ${max}`;
  };
}

export function minMaxLength(min: number, max: number) {
  return (value: string): string | null => {
    return value.length >= min && value.length <= max
      ? null
      : `O texto deve ter entre ${min} e ${max} caracteres`;
  };
}

export function isEmail() {
  return (value: string): ValidationErrors | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? null : { isEmail: 'O e-mail não é válido' };
  };
}

// Outras validações personalizadas
export function contains(substring: string) {
  return (value: string): ValidationErrors | null => {
    return value.includes(substring)
      ? null
      : { contains: `O valor deve conter "${substring}"` };
  };
}

export function hasXWords(wordCount: number) {
  return (value: string): ValidationErrors | null => {
    const words = value.trim().split(/\s+/).length;
    return words >= wordCount
      ? null
      : { hasXWords: `O texto deve ter pelo menos ${wordCount} palavras` };
  };
}
