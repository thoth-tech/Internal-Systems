import React, { useCallback } from "react"
import { Box, Zoom, Fab } from "@mui/material"
import { KeyboardArrowUp } from "@mui/icons-material"
import useScrollTrigger from "@mui/material/useScrollTrigger"

const ScrollTop = () => {
  const trigger = useScrollTrigger()

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 40,
          right: 40,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          size="medium"
          aria-label="scroll back to top"
          sx={{ backgroundColor: "#00ADB5" }}
        >
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  )
}

export default ScrollTop
