import { Dispatch, PropsWithChildren, useReducer } from 'react';
import { colorReducer, initialState } from './color-reducer';
import { createContext } from './create-context';

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const [useColorContext, ContextProvider] = createContext<ColorContextState>();

export const useContext = useColorContext;

export const useHexColor = () => {
  const { hexColor } = useColorContext();
  return hexColor;
};

export const useDispatch = () => {
  const { dispatch } = useColorContext();
  return dispatch;
};

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ContextProvider value={{ hexColor, dispatch }}>{children}</ContextProvider>
  );
};
