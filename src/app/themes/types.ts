export interface Theme {
  themeId: number;
  themeText: string;
  themeDescription: string;
}

export interface CreateThemeDto {
  themeDescription: string;
  themeText: string;
}
