import { css } from 'styled-components'

export const mixins = {
  titleL: css`
    font-size: 1.5rem;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    line-height: 160%;
  `,
  titleM: css`
    font-size: 1.25rem;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    line-height: 160%;
  `,
  titleS: css`
    font-size: 1.125rem;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    line-height: 160%;
  `,
  textM: css`
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    line-height: 160%;
  `,
  textS: css`
    font-size: 0.875rem;
    font-family: 'Nunito', sans-serif;
    line-height: 160%;
  `,
  componentsLink: css`
    font-size: 0.75rem;
    font-weight: bold;
    font-family: 'Nunito', sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 160%;
  `,
  textCode: css`
    font-size: 1rem;
    line-height: 160%;
    font-family: 'Fira Code', sans-serif;
  `,
} as const
