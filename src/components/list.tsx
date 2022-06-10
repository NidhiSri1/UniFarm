import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AvatarGroup from "@mui/material/AvatarGroup";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CalculateIcon from "@mui/icons-material/Calculate";
function createData(
    name: string,
    pool: number,
    rewards: number,
    apy: number,
    protein: number
) {
    return { name, pool, rewards, apy, protein };
}

const rows = [
    createData("USDT", 93.86, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 78.65, 9.0, 37, 4.3),
    createData("Eclair", 23, 16.0, 24, 6.0),
    createData("Cupcake", 50, 12.34, 67, 4.3),
    createData("Gingerbread", 13, 10.0, 49, 3.9),
];

const images = [
    "https://oropocket.com/unifarm/assets/icons/uno.png",
    "https://oropocket.com/unifarm/assets/icons/pinknode.png",
    "https://oropocket.com/unifarm/assets/icons/haka.png",
    "https://oropocket.com/unifarm/assets/icons/ctr.png",
    "https://oropocket.com/unifarm/assets/icons/raze-network.png",
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row.name}>
                            <TableCell>
                                <Stack direction="row" spacing={1}>
                                    <Avatar
                                        alt="Cindy Baker"
                                        src={images[index]}
                                    />
                                    <p>Cohert 26</p>
                                    {row.name}
                                </Stack>
                            </TableCell>

                            <TableCell>
                                <Box
                                    sx={{
                                        display: "flex",
                                    }}
                                >
                                    <CircularProgress
                                        sx={{ marginTop: 3, marginRight: 4 }}
                                        variant="determinate"
                                        value={row.pool}
                                        size={30}
                                    />
                                    <Box>
                                        <p>PoolField</p>
                                        {row.pool}
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box>
                                    <p>Rewards</p>
                                    <Box sx={{ display: "flex" }}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="/static/images/avatar/1.jpg"
                                        />
                                        <Avatar
                                            alt="Travis Howard"
                                            src="/static/images/avatar/2.jpg"
                                        />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box>
                                    <p>APY</p>
                                    {row.apy}
                                </Box>
                            </TableCell>
                            <TableCell>
                                {index % 2 !== 0 ? (
                                    <Button variant="outlined">
                                        <RocketLaunchIcon></RocketLaunchIcon>{" "}
                                        Boosted
                                    </Button>
                                ) : (
                                    <Button variant="outlined">
                                        <CalculateIcon></CalculateIcon> Get 20%
                                    </Button>
                                )}
                            </TableCell>

                            <KeyboardArrowRightIcon
                                sx={{ marginTop: 4 }}
                            ></KeyboardArrowRightIcon>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
