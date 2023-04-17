import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import DataChart from '../Echarts/DataChart';
import { AnalyticsOutlined, ArrowDropDown, ArrowDropUp, CalendarMonth, Help, HourglassFull, Person } from '@mui/icons-material';
import { BLUE_COLOUR, LIGHT_GREY_COLOUR } from '../CommonStyle/Color';
import TrafficCard from './TrafficCard';

const ProjectData = () => {
    return (
        <React.Fragment>
            <Box sx={{ mt: 6, mb: 10 }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <DataChart />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Stack direction={{ xs: "column", md: "row" }} spacing={3} mb={3}>

                            {/* Inside Card 1 */}
                            <div style={{ background: 'linear-gradient(to right, #4CD7F6 , #E17CFD)', borderRadius: 20, boxShadow: " 0px 5px 7px 0px #E17CFD", }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5, pl: 5, pr: 5, width: "12vw", height: "12vh" }}>
                                    <AnalyticsOutlined sx={{ color: "white", fontSize: 35 }} />
                                    <div style={{ display: "flex" }}>
                                        <ArrowDropUp sx={{ color: "#00ff00", fontSize: 35 }} />
                                        <Typography variant='body2' sx={{ color: "white", mt: 1.2, fontWeight: "bold" }}> 12%</Typography>
                                    </div>
                                </Box>
                                <div style={{ display: "flex", marginLeft: 25, marginRight: 25, marginBottom: 35 }}>
                                    <Box>
                                        <Typography variant='h5' sx={{ fontWeight: "bold", color: "white" }}>42.36%</Typography>
                                        <Typography variant='body2' sx={{ color: "aliceblue" }}>Bounce Rate</Typography>
                                    </Box>
                                    <Help sx={{ color: "white", mt: 2.5, marginLeft: 7 }} />
                                </div>
                            </div>
                            {/* Inside Card 2 */}
                            <div style={{ backgroundColor: LIGHT_GREY_COLOUR, borderRadius: 20 }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5, pl: 5, pr: 5, width: "12vw", height: "12vh" }}>
                                    <CalendarMonth sx={{ color: BLUE_COLOUR, fontSize: 35 }} />

                                </Box>
                                <div style={{ display: "flex", marginLeft: 25, marginRight: 25, marginBottom: 35 }}>
                                    <Box>
                                        <Typography variant='h5' sx={{ fontWeight: "bold", color: "black" }}>42.36%</Typography>
                                        <Typography variant='body2' sx={{ color: "#666666" }}>Pages per visit</Typography>
                                    </Box>
                                    <Help sx={{ color: BLUE_COLOUR, mt: 2.5, marginLeft: 7 }} />
                                </div>
                            </div>
                        </Stack>

                        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>

                            {/* Inside Card 3 */}
                            <div style={{ backgroundColor: LIGHT_GREY_COLOUR, borderRadius: 20 }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5, pl: 5, pr: 5, width: "12vw", height: "12vh" }}>
                                    <Person sx={{ color: BLUE_COLOUR, fontSize: 35 }} />
                                    <div style={{ display: "flex" }}>
                                        <ArrowDropDown sx={{ color: "red", fontSize: 35 }} />
                                        <Typography variant='body2' sx={{ color: "black", mt: 1.2, fontWeight: "bold" }}> 2.1%</Typography>
                                    </div>
                                </Box>
                                <div style={{ display: "flex", marginLeft: 25, marginRight: 25, marginBottom: 35 }}>
                                    <Box>
                                        <Typography variant='h5' sx={{ fontWeight: "bold", color: "black" }}>326.60K</Typography>
                                        <Typography variant='body2' sx={{ color: "#666666" }}>Total Monthly Visit</Typography>
                                    </Box>
                                </div>
                            </div>
                            {/* Inside Card 4 */}
                            <div style={{ backgroundColor: LIGHT_GREY_COLOUR, borderRadius: 20 }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5, pl: 5, pr: 5, width: "12vw", height: "12vh" }}>
                                    <HourglassFull sx={{ color: BLUE_COLOUR, fontSize: 35 }} />
                                    <div style={{ display: "flex" }}>
                                        <ArrowDropDown sx={{ color: "red", fontSize: 35 }} />
                                        <Typography variant='body2' sx={{ color: "black", mt: 1.2, fontWeight: "bold" }}> 2.4%</Typography>
                                    </div>
                                </Box>
                                <div style={{ display: "flex", marginLeft: 25, marginRight: 25, marginBottom: 35 }}>
                                    <Box>
                                        <Typography variant='h5' sx={{ fontWeight: "bold", color: "black" }}>00:03:27</Typography>
                                        <Typography variant='body2' sx={{ color: "#666666" }}>Avg. Visit Duration</Typography>
                                    </Box>
                                </div>
                            </div>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <TrafficCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <TrafficCard />
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default ProjectData;