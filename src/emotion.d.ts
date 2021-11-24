import { Theme as WebTheme } from "./styles/theme"

// Enables the use of Theme in typing without import
declare module "@emotion/react" {
  export interface Theme extends WebTheme {}
}
