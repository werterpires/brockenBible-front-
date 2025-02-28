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
  return (value: string): String | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? null : 'O e-mail não é válido';
  };
}

// Outras validações personalizadas
export function contains(substring: string) {
  return (value: string): String | null => {
    return value.includes(substring)
      ? null
      : `O valor deve conter "${substring}"`;
  };
}

export function hasXWords(wordCount: number) {
  return (value: string): String | null => {
    const words = value.trim().split(/\s+/).length;
    return words >= wordCount
      ? null
      : `O texto deve ter pelo menos ${wordCount} palavras`;
  };
}

export function required() {
  return (value: string): string | null => {
    if (typeof value !== 'string') {
      return null;
    }
    return value.trim() !== '' ? null : 'O campo é obrigatório';
  };
}
