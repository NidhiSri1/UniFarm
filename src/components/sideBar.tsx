import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import SimpleAccordion from "./accordian";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavTabs from "./navbar";
import BasicTextFields from "./search";
import BasicTable from "./list";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const items = ["Earn", "Trade", "Bridge", "Goverence", "Referal"];

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const icons = [
        <NightsStayIcon />,
        <DoubleArrowIcon />,
        <FilterNoneIcon />,
        <AllInboxIcon />,
    ];

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                open={open}
                sx={{ backgroundColor: "white" }}
            >
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div>
                        <IconButton
                            // color="#e53e3e"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: "none" }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div>
                        <Stack direction="row" spacing={2}>
                            <Button
                                sx={{ color: "black" }}
                                color="secondary"
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                            >
                                13.46222
                            </Button>
                            <Button  sx={{ color: "black" }} variant="outlined" endIcon={<SendIcon />}>
                                0xF1....sc2
                            </Button>
                            <Button  sx={{ color: "black" }} variant="outlined" endIcon={<SendIcon />}>
                                Ethereum
                            </Button>
                        </Stack>
                    </div>
                </Toolbar>
                <Divider />

                <NavTabs></NavTabs>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"} />
                        </ListItemButton>
                    </ListItem>
                    {items.map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <SimpleAccordion
                                items={text}
                                index={index}
                                icons={icons[index]}
                            />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <Main open={open}>
                <DrawerHeader />

                <BasicTextFields></BasicTextFields>
                <BasicTable></BasicTable>
            </Main>
        </Box>
    );
}
