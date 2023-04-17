import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Divider,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Toolbar,
    MenuItem,
    Menu,
    Avatar,
    Tooltip,
    ListItemButton,
    Button,
    Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AccountCircle,
    AddCircle,
    AddModerator,
    ArrowDropDown,
    Description,
    Face6,
    Help,
    House,
    LockReset,
    Logout,
    Person,
    Search,
    Settings,
    Whatshot,
} from "@mui/icons-material";
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../footer/Footer';
import { BLUE_COLOUR, DARK_VIOLET_COLOUR, LIGHT_BACKGROUND_COLOUR, LIGHT_GRAY_COLOUR, LIGHT_GREY_COLOUR, LIGHT_PURPLE_COLOUR, PURPLE_COLOUR } from '../CommonStyle/Color';
import { useSelector } from 'react-redux';


const drawerWidth = 300;


function Sidebar(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [avtarMenu, setAvtarMenu] = useState(null);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const { opporPage, competePage, briefPage, savedPage, settingPage, helpPage, } = useSelector((state) => state.product);
    // console.log('first', st);



    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleOpenUserMenu = (e) => {
        setAvtarMenu(e.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAvtarMenu(null);
    };

    const handleLogout = async (e) => {
        e.preventDefault();
    };

    const handleOverview = (e) => {
        e.preventDefault();
        navigate("/");
        setMobileOpen(false);
    };

    const handleOpportunities = (e) => {
        e.preventDefault();
        navigate("/opportunities");
        setMobileOpen(false);
    };

    const handleCompetitors = (e) => {
        e.preventDefault();
        navigate("/competitors");
        setMobileOpen(false);
    };

    const handleBriefs = (e) => {
        e.preventDefault();
        navigate("/briefs");
        setMobileOpen(false);
    };

    const handleSaved = (e) => {
        e.preventDefault();
        navigate("/saved");
        setMobileOpen(false);
    };

    const handleSetting = (e) => {
        e.preventDefault();
        navigate("/settings");
        setMobileOpen(false);
    };

    const handleHelp = (e) => {
        e.preventDefault();
        navigate("/help");
        setMobileOpen(false);
    };

    let headerTitle = "";
    let PATH = location.pathname;
    if (PATH === "/") {
        headerTitle = "";
    } else if (PATH === "/opportunities") {
        headerTitle = opporPage;
    } else if (PATH === "/competitors") {
        headerTitle = competePage;
    }
    else if (PATH === "/briefs") {
        headerTitle = briefPage;
    } else if (PATH === "/saved") {
        headerTitle = savedPage;
    } else if (PATH === "/settings") {
        headerTitle = settingPage;
    } else if (PATH === "/help") {
        headerTitle = helpPage;
    } else {
        headerTitle = "";
    }



    const drawer = (
        <div style={{ backgroundColor: LIGHT_BACKGROUND_COLOUR, paddingBottom: 7 }} >
            <Box sx={{ my: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Avatar sx={{ background: 'radial-gradient(#4CD7F6 20%, #E17CFD 50% )' }}>
                    <Search sx={{ fontSize: 30 }} />
                </Avatar>
                <IconButton
                    edge="start"
                    sx={{ ml: 0.5 }}
                >
                    <Typography variant='h6' sx={{ fontWeight: "bold", color: "black" }}>Concured</Typography>
                </IconButton>
            </Box>
            <Divider />
            <List >
                <ListItem
                    style={{
                        backgroundColor: location.pathname === "/" ? LIGHT_PURPLE_COLOUR : null, marginTop: -8,
                        borderRight: location.pathname === "/" ? `3px solid ${PURPLE_COLOUR}` : null
                    }}>
                    <ListItemButton onClick={handleOverview}>
                        <ListItemIcon>
                            <House sx={{ color: location.pathname === "/" ? PURPLE_COLOUR : "black" }} />
                        </ListItemIcon>
                        <ListItemText>Overview</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem style={{
                    backgroundColor: location.pathname === "/opportunities" ? LIGHT_PURPLE_COLOUR : null,
                    borderRight: location.pathname === "/opportunities" ? `3px solid ${PURPLE_COLOUR}` : null
                }}>
                    <ListItemButton onClick={handleOpportunities}>
                        <ListItemIcon>
                            <Whatshot sx={{ color: location.pathname === "/opportunities" ? PURPLE_COLOUR : "black" }} />
                        </ListItemIcon>
                        <ListItemText>Opportunities</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem
                    style={{
                        backgroundColor: location.pathname === "/competitors" ? LIGHT_PURPLE_COLOUR : null,
                        borderRight: location.pathname === "/competitors" ? `3px solid ${PURPLE_COLOUR}` : null
                    }}>
                    <ListItemButton onClick={handleCompetitors}>
                        <ListItemIcon>
                            <Person sx={{ color: location.pathname === "/competitors" ? PURPLE_COLOUR : "black" }} />
                        </ListItemIcon>
                        <ListItemText>My Competitors</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem style={{
                    backgroundColor: location.pathname === "/briefs" ? LIGHT_PURPLE_COLOUR : null,
                    borderRight: location.pathname === "/briefs" ? `3px solid ${PURPLE_COLOUR}` : null
                }}>
                    <ListItemButton onClick={handleBriefs}>
                        <ListItemIcon>
                            <Description sx={{ color: location.pathname === "/briefs" ? PURPLE_COLOUR : "black" }} />
                        </ListItemIcon>
                        <ListItemText>Briefs</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem style={{
                    backgroundColor: location.pathname === "/saved" ? LIGHT_PURPLE_COLOUR : null,
                    borderRight: location.pathname === "/saved" ? `3px solid ${PURPLE_COLOUR}` : null
                }}>
                    <ListItemButton onClick={handleSaved}>
                        <ListItemIcon>
                            <AddModerator sx={{ color: location.pathname === "/saved" ? PURPLE_COLOUR : "black" }} />
                        </ListItemIcon>
                        <ListItemText>Saved</ListItemText>
                    </ListItemButton>
                </ListItem>
                <Box sx={{ marginTop: 8 }}>
                    <ListItem style={{
                        backgroundColor: location.pathname === "/settings" ? LIGHT_PURPLE_COLOUR : null,
                        borderRight: location.pathname === "/settings" ? `3px solid ${PURPLE_COLOUR}` : null
                    }}>
                        <ListItemButton onClick={handleSetting}>
                            <ListItemIcon>
                                <Settings sx={{ color: location.pathname === "/settings" ? PURPLE_COLOUR : "black" }} />
                            </ListItemIcon>
                            <ListItemText>Settings</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem style={{
                        backgroundColor: location.pathname === "/help" ? LIGHT_PURPLE_COLOUR : null,
                        borderRight: location.pathname === "/help" ? `3px solid ${PURPLE_COLOUR}` : null
                    }}>
                        <ListItemButton onClick={handleHelp}>
                            <ListItemIcon>
                                <Help sx={{ color: location.pathname === "/help" ? PURPLE_COLOUR : "black" }} />
                            </ListItemIcon>
                            <ListItemText>Help</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton >
                            <ListItemIcon>
                                <Logout sx={{ color: "gray" }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: "gray" }}>Log Out</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Box>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex' }}>
                <AppBar elevation={0}
                    position="fixed"
                    sx={{
                        width: { md: `calc(100% - ${drawerWidth}px)` },
                        ml: { md: `${drawerWidth}px` },
                        backgroundColor: "white",
                        borderBottom: `1px solid ${LIGHT_GRAY_COLOUR}`
                    }}
                >
                    <Toolbar >
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none', color: DARK_VIOLET_COLOUR } }}
                        >
                            <MenuIcon fontSize='large' />
                        </IconButton>
                        <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'block' } }}>
                            <Stack direction="row">
                                <IconButton sx={{ borderRadius: 2, backgroundColor: LIGHT_GREY_COLOUR }}>
                                    <Face6 sx={{ color: "violet" }} />
                                </IconButton>
                                <div >
                                    <Typography variant='subtitle1'
                                        sx={{ color: "black", textTransform: "none", mt: 1, ml: 1, fontWeight: "bold" }}>Boro team</Typography>
                                </div>
                                <IconButton>
                                    <ArrowDropDown sx={{ color: "black", borderRadius: 2, backgroundColor: LIGHT_GREY_COLOUR }} />
                                </IconButton>

                                <IconButton>
                                    <Tooltip title="View teams">
                                        <AddCircle sx={{ color: BLUE_COLOUR }} />
                                    </Tooltip>
                                </IconButton>
                            </Stack>
                        </Box>
                        <Typography variant='subtitle1' sx={{ color: "black", mx: "auto", fontWeight: "bold" }}>{headerTitle}</Typography>
                        <Box
                            sx={{
                                marginLeft: "auto",
                                display: { xs: 'block', sm: 'block', md: 'block', lg: 'block', xl: 'block' }
                            }}>
                            <Box display="flex">
                                <Tooltip title="Open settings">
                                    <Box sx={{ display: "flex" }}>
                                        <AccountCircle sx={{ color: "gray", fontSize: 45, mr: 0.5 }} />
                                        <Typography variant='body1' sx={{ color: "black", mt: 2, mr: 1, fontWeight: "bold" }}> Pradeep Kumar</Typography>
                                        <Button onClick={handleOpenUserMenu} sx={{
                                            maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px',
                                            backgroundColor: LIGHT_GREY_COLOUR, mt: 2
                                        }}>
                                            <ArrowDropDown sx={{ color: "black" }} />
                                        </Button>
                                    </Box>

                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={avtarMenu}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(avtarMenu)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem sx={{ "&:hover": { background: "none", cursor: "auto" } }} disableRipple>
                                        <ListItemIcon>
                                            <Person sx={{ color: BLUE_COLOUR }} />
                                        </ListItemIcon>
                                        <Typography variant='subtitle1' sx={{ color: "black" }} >
                                            Hello, Rooba Finance
                                        </Typography> &emsp;
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <LockReset sx={{ color: BLUE_COLOUR }} />
                                        </ListItemIcon>
                                        Change Password
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <ListItemIcon>
                                            <Logout sx={{ color: BLUE_COLOUR }} />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                >

                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'block', md: "none" },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'none', md: "block" },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        width: { sm: `calc(100% - ${drawerWidth}px)` }
                    }}
                >
                    <Toolbar />
                    {props.children}
                    <Box mt={15} ml={-3} mb={-10}>
                        <Footer />
                    </Box>
                </Box>
            </Box>

        </React.Fragment>

    );
}

export default Sidebar;
