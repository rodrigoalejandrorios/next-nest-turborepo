import React from 'react';
import { esES } from '@mui/material/locale';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { COLOR_PALLETE, TYPOS } from '../constants';

import { JetBrains_Mono } from "next/font/google";

export const theme = createTheme(
  {
    palette: {
      mode: 'light',
      background: {
        default: COLOR_PALLETE.BACKGROUND,
        paper: COLOR_PALLETE.MAIN,
      },
      primary: {
        main: COLOR_PALLETE.PRIMARY,
      },
      success: {
        main: COLOR_PALLETE.SUCCESS_MAIN,
      },
      secondary: {
        main: COLOR_PALLETE.MAIN_SECONDARY,
      },
    },
    typography: {
      fontFamily: TYPOS.TYPO_GLOBAL,
      h1: {
        fontSize: '80px',
        fontWeight: 'bold',
        color: COLOR_PALLETE.TYPO_COLOR,
      },
      h2: {
        fontSize: '60px',
        fontWeight: 'bold',
        color: COLOR_PALLETE.TYPO_COLOR,
      },
      h3: {
        fontSize: '40px',
        fontWeight: 'bold',
        color: COLOR_PALLETE.TYPO_COLOR,
      },
      h4: {
        fontSize: '30px',
        color: COLOR_PALLETE.TYPO_COLOR,
      },
      h6:{
        color: COLOR_PALLETE.TEXT_COLOR
      },
      body2: {
        fontSize: '18px',
      },
      subtitle2: {
        fontSize: '17px' 
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          style: {
            boxShadow: 'none',
            borderRadius: '0.3em',
            textTransform: 'none',
            fontSize: '18px',
          },
        },
      },
      MuiOutlinedInput: {
        defaultProps: {
          style: {
            borderRadius: '0.5em',
            
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          style: {
            boxShadow: 'none',
          },
        },
      },
      MuiDialogContent:{
        defaultProps:{
          style:{
            background:'#fff'
          }
        }
      },
      MuiDialogActions:{
        defaultProps:{
          style:{
            background:'#fff'
          }
        }
      },
      MuiAppBar: {
        defaultProps: {
          style: {
            background: COLOR_PALLETE.MAIN_SECONDARY,
            boxShadow: '0px 6px 20px rgba(67, 67, 67, 0.05)',
          },
        },
      },
      MuiAlert: {
        defaultProps: {
          style: {
            borderRadius: '0.8em',
            fontSize: '1em',
          },
        },
        styleOverrides: {
          standardError: {
            border: `1px solid ${COLOR_PALLETE.ERROR_MAIN}`,
            background: COLOR_PALLETE.BG_ERROR_MAIN,
          },
          standardSuccess: {
            border: `1px solid ${COLOR_PALLETE.SUCCESS_MAIN}`,
            background: COLOR_PALLETE.BG_SUCCESS_MAIN,
          },
          standardWarning: {
            border: `1px solid ${COLOR_PALLETE.WARNING_MAIN}`,
            background: COLOR_PALLETE.BG_WARNING_MAIN,
          },
          standardInfo: {
            border: `1px solid ${COLOR_PALLETE.INFO_MAIN}`,
            background: COLOR_PALLETE.BG_INFO_MAIN,
          },
        },
      },
      MuiChip: {
        
        styleOverrides:{
          colorError:{
            border: `1px solid ${COLOR_PALLETE.ERROR_MAIN}`,
            background: COLOR_PALLETE.BG_ERROR_MAIN,
            color: COLOR_PALLETE.ERROR_MAIN
          },
          colorSuccess: {
            border: `1px solid ${COLOR_PALLETE.SUCCESS_MAIN}`,
            background: COLOR_PALLETE.BG_SUCCESS_MAIN,
          },
        }
      },
      MuiTab:{
        defaultProps: {
          style: {
            textTransform: 'none',
          },
        },
      },
      MuiPopover:{
        styleOverrides:{
          paper: {
            background: "#fff"
          }
        }
      }
    },
  },
  esES,
);
