import { rgba } from 'polished'

export const breakpoints = ['576px', '768px', '992px', '1290px', '1600px']

export const theme = {
  colors: {
    white: '#FFF',
    black: '#000',
    hbTextBlue: '#12284C',
    hbTextGreyLight: '#6B7280',
    hbTextGrey: '#374151',
    hbTextGreyDark: '#111827', // Don't use this
    hbPrimary: '#4F46E5',
    hbPrimaryHover: '#3730A3',
    hbBorder: '#D1D5DB',
    hbError: '#EF4444',
    hbGreyBackground: '#E0E6FF',
    hbSuccess: '#B5DC79',
    hbSuccessText: '#065F46',
    hbSuccessBg: '#E2F2C8',
    hbDisabled: '#F9FAFB',
    hbDashboardBackground: '#f3f4f6',
    hbIconGrey: '#9CA3AF',
    hbTableStriped: '#F9FAFC',
    hbFooterBorder: '#E5E7EB',

    // TODO: Remove these old var
    blackFigma: '#000016',
    royalBlue: '#0045F5',
    royalBlueLight: '#336AF7',
    blue: '#62CCF6',
    blueLight: '#6AD5FF',
    blueGreyLight: '#EFF2F7',
    blueDark: '#8CB4F4',
    blueSecondary: '#D7F2FD',
    mint: '#0FE3C7',
    mintDark: '#0BD0B6',
    orange: '#FF7A69',
    navy: '#263859',
    gray: '#5B6B88',
    grayLight: '#CFD1D8',
    grayDark: '#2D3748',
    grayDarker: '#6C6D76',
    grayBorder: rgba('#638BC8', 0.15),
    snowDark: '#E9ECF1',
    snowDarkOpacity: rgba(233, 236, 241, 0.98),
    snow: '#F4F5F7',
    alertOrange: '#FFA803',
    alertRed: '#FF5753',
    red: '#f47979',
    redDark: '#d24646',
    textDark: '#61728b',
    teal: 'teal',
  },
  fonts: {
    serif: 'Courier New',
    sans_serif: 'Roboto',
    sans_serif_heading: 'Abolition-Regular',
  },
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '14px', // 14px
    md: '1rem', // 16px
    md_2: '20px',
    lg: '28px',
    xl: '32px',
    xxl: '36px',
    xxxl: '52px',
  },

  fontWeights: {
    normal: '400',
    semiNormal: '500',
    semiBold: '600',
    bold: '700',
    heavy: '800',
  },
  space: {
    xxs2: '5px', // 8px
    xxs: '0.5rem', // 8px
    xs: '13px',
    sm: '24px',
    sm_2: '1.875rem', // 30px
    md: '2.5rem', // 40px
    lg: '3.5rem', // 56px
    xl: '4.5rem', // 72px
    xxl: '6rem', // 96px
  },
  lineHeights: {
    base: '1.5',
  },
  transitions: {
    default: 'all 0.25s ease',
  },
  radii: {
    default: '4px',
    sm: '4px',
    md: '10px',
    lg: '16px',
    xl: '30px',
  },
  mediaQueries: {
    sm: `@media screen and (min-width: ${breakpoints[0]})`,
    md: `@media screen and (min-width: ${breakpoints[1]})`,
    lg: `@media screen and (min-width: ${breakpoints[2]})`,
    xl: `@media screen and (min-width: ${breakpoints[3]})`,
    xxl: `@media screen and (min-width: ${breakpoints[4]})`,
  },
}
