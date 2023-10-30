import { Box, CircularProgress, Typography } from '@mui/material'

export const Loader = ({ children }) => {
  return (
    <Box>
      <CircularProgress />
      <Typography children={children} />
    </Box>
  )
}
