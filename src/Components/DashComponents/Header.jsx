import React from 'react';
import { Box, Chip, Stack, Tooltip, Typography } from '@mui/material';
import { Help } from '@mui/icons-material';
import { BLUE_COLOUR, DARK_VIOLET_COLOUR } from '../CommonStyle/Color';

const Header = () => {


    const handleClick = (e) => { }


    return (
        <React.Fragment>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                <Stack direction="row" spacing={2}>
                    <Typography variant='h5' sx={{ fontWeight: "bold", color: "#595959" }}>
                        Project Statistic
                    </Typography>
                    <Tooltip title="Know more...">
                        <Help sx={{ color: BLUE_COLOUR }} />
                    </Tooltip>
                </Stack>

                <Stack direction="row" spacing={1}>

                    <Chip label="30 days"
                        sx={{ backgroundColor: BLUE_COLOUR, color: "white", "&:hover": { backgroundColor: DARK_VIOLET_COLOUR } }} onClick={handleClick} />
                    <Chip label="90 days"
                        sx={{ "&:hover": { color: "white", backgroundColor: DARK_VIOLET_COLOUR } }} onClick={handleClick} />
                    <Chip label="6 months"
                        sx={{ "&:hover": { color: "white", backgroundColor: DARK_VIOLET_COLOUR } }} onClick={handleClick} />
                    <Chip label="12 months"
                        sx={{ "&:hover": { color: "white", backgroundColor: DARK_VIOLET_COLOUR } }} onClick={handleClick} />
                </Stack>

            </Box>
        </React.Fragment>
    )
}

export default Header;