import { useCallback, useState } from 'react';
import { useElementSizeObserver } from './useElementSizeObserver';

export const TABLET_BREAKPOINT = 1124;
export const MOBILE_BREAKPOINT = 750;

export enum ScreenSize {
  Desktop = 'Desktop',
  Tablet = 'Tablet',
  Mobile = 'Mobile',
}

export const getScreenSize = (width: number): ScreenSize => {
  if (width > TABLET_BREAKPOINT) return ScreenSize.Desktop;
  if (width > MOBILE_BREAKPOINT) return ScreenSize.Tablet;
  return ScreenSize.Mobile;
};

export const useScreenSize = (): ScreenSize => {
  const [size, setSize] = useState<ScreenSize>(getScreenSize(document.body.clientWidth));

  useElementSizeObserver(
    useCallback(() => document.body, []),
    useCallback((width) => setSize(getScreenSize(width)), [])
  );

  return size;
};
