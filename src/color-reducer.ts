import { rgb } from 'color-convert';

// type HexColor = `#${string}`;
// const isHexColor = (s: string): s is HexColor => {
//   return s.startsWith('#');
// };

// type RGBString = `rgb(${number}, ${number}, ${number})`;

// type ColorFormats = `rgb` | `hex` | `hsl` | `hsv`;
// type ActionTypes = `update-${ColorFormats}-color`;

type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }
  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb);
    return { ...state, hexColor };
  }
  return state;
};
