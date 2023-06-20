import { AppRouter } from "./routes"
import { GlobalStyles } from './styles/global'

export const App = () => {
  return (
    <>
      <AppRouter />
      <GlobalStyles />
    </>
  );
}
