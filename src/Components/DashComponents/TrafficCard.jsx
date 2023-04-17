import React from 'react';
import { Box, Divider, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { LIGHT_GREY_COLOUR, LIGHT_PURPLE_COLOUR } from '../CommonStyle/Color';



function TrafficCard() {


    return (
        <React.Fragment>
            <Box sx={{ borderRadius: 5, backgroundColor: LIGHT_GREY_COLOUR, pb: 5 }}>
                <Typography variant='subtitle1' sx={{ mb: 3, textAlign: "start", ml: 5, pt: 3 }}>Traffic Sources</Typography>
                <Divider />
                <div style={{ marginTop: 30 }}>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginLeft: 40,
                            }}>
                            <TableContainer>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <Box sx={{ borderRadius: 50, backgroundColor: LIGHT_PURPLE_COLOUR }} >
                                                <TableCell align="center" sx={{ border: 0, padding: 0, px: 2, py: 1, color: "#666666" }}>Source</TableCell>
                                                <TableCell align="center" sx={{ border: 0, padding: 0, px: 2, py: 1, color: "#666666", pl: 5 }}>Traffic source(%)</TableCell>
                                            </Box>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        <TableRow>
                                            <Box >
                                                <TableCell align="center" sx={{ border: 0, padding: 0, px: 2, py: 1, pt: 2 }}>
                                                    <div style={{ display: "flex" }}>
                                                        <Box sx={{ width: 20, height: 15, backgroundColor: "#4CD7F6", borderRadius: 1 }}></Box>
                                                        <Typography variant='body2' sx={{ ml: 2 }}>Direct</Typography>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="center" sx={{ border: 0, padding: 0, px: 2, py: 1, pt: 2 }}>
                                                    <Typography variant='body2'>50</Typography>
                                                </TableCell>
                                            </Box>
                                        </TableRow>

                                        <TableRow>
                                            <Box >
                                                <TableCell align="center" sx={{ border: 0, padding: 0, px: 2, py: 1 }}>
                                                    <div style={{ display: "flex" }}>
                                                        <Box sx={{ width: 20, height: 15, backgroundColor: "#E17CFD", borderRadius: 1 }}></Box>
                                                        <Typography variant='body2' sx={{ ml: 2 }}>Search</Typography>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="center" sx={{ border: 0, padding: 0, px: 1, py: 1 }}>
                                                    <Typography variant='body2'>50</Typography>
                                                </TableCell>
                                            </Box>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <div style={{ textAlign: "center", marginLeft: "70px" }}>
                            <Box
                                sx={{
                                    width: 130,
                                    height: 130,
                                    borderRadius: 100,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    background: 'linear-gradient(90deg, rgba(237,39,240,1) 50%, rgba(0,212,255,1) 50%)'
                                }}>
                                <Box
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 100,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        background: 'white',
                                    }}>
                                    <div>
                                        <Typography variant='h4' sx={{ fontWeight: "bold" }}>50%</Typography>
                                        <Typography variant='body2' sx={{ color: "#666666" }}>Direct</Typography>
                                    </div>
                                </Box>

                            </Box>
                        </div>

                    </Stack>

                </div>

            </Box >
        </React.Fragment >
    )
}

export default TrafficCard;