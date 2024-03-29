import React from "react"
import { CircularProgress } from "@mui/material"
import { Box } from "@mui/system"

const LoadingAnimation = () => {
  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default LoadingAnimation
