import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuItem from "@mui/material/MenuItem";
export default function BasicTextFields() {
    return (
        <Box
            sx={{
                display: "flex",
                marginTop: 8,
                justifyContent: "space-between",
            }}
        >
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "20ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="standard-basic"
                    label="Search"
                    variant="standard"
                />
                <TextField
                    id="standard-basic"
                    label="Sort By"
                    variant="standard"
                />
            </Box>
            <Box>
                <button style={{ }}>
                    <DensityMediumIcon
                        sx={{ width: 1 }}
                    ></DensityMediumIcon>
                </button>
                <button>
                    {" "}
                    <DashboardIcon></DashboardIcon>
                </button>
            </Box>
        </Box>
    );
}
