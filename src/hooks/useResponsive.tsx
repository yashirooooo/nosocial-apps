// @mui
import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

export default function useResponsive(query: string, start?: Breakpoint, end?: Breakpoint | number) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start as any as Breakpoint));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start as any as Breakpoint));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start as any as Breakpoint, end as any as Breakpoint));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start as any as Breakpoint));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}

// ----------------------------------------------------------------------

export function useWidth() {
  const theme = useTheme();

  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce(
      // @ts-ignore
      (output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
