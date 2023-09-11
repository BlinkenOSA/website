'use client'

import { useMediaQuery } from '@mantine/hooks'

export const useIsMobile = (userDevice) => {
  const isMobile = useMediaQuery('(max-width: 768px)', userDevice)

  return {
    isMobile,
  }
}