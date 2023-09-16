'use client';

import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }: { children: PropsWithChildren }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
