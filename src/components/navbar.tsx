import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Typography from "@mui/material/Typography";
import { height } from "@mui/system";
interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            onClick={(
                event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
            ) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default function NavTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ color: "black", display: "flex" }}>
                <Box>
                    <Typography
                        variant="h5"
                        sx={{ color: "#6338BC", marginLeft: 3 }}
                    >
                        Farms
                    </Typography>
                </Box>
                <div
                    style={{
                        borderWidth: 3,
                        backgroundColor: "grey",
                        height: 2,
                    }}
                ></div>
                <Box>
                    <div
                        style={{
                            width: 300,
                            marginLeft: 5,
                            fontSize: 12,
                            fontWeight: "normal",
                            color: "grey",
                        }}
                    >
                        Stake one token and earn multiple token as reward with
                        high APY and low risk
                    </div>
                </Box>
            </Box>
            <Box sx={{ width: "100%" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="All farms" href="/drafts" />
                    <LinkTab label="Hot Farms" href="/trash" />
                </Tabs>
            </Box>
        </>
    );
}
