import { KeyboardArrowUp } from '@mui/icons-material'
import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material'
import React, { useCallback } from 'react'

function ScrollToTop() {
    const trigger = useScrollTrigger({
        // Number of pixels needed to scroll to toggle `trigger` to `true`.
        threshold: 100,
      })
    
      const ScrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, [])
  return (
    <div>
    
      <Zoom in={trigger}>
      <Box
        role="presentation"
        // Place the button in the bottom right corner.
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
        variant='extended'
          onClick={ScrollToTop}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>
    </div>
  )
}

export default ScrollToTop
