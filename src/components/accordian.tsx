import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItemIcon from "@mui/material/ListItem";
interface IState {
    items: string;
    index: number;
    icons: JSX.Element;
}

export default function SimpleAccordion({ items, index, icons }: IState) {
    const details = [
        ["All farms", "MyStake"],
        ["Exchange", "Liqudity"],
    ];
    console.log(index);
    return (
        <div>
            <Accordion
                sx={{ marginBottom: 2, width: 200, borderStyle: "none" }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ListItemIcon sx={{ height: 4 }}>{icons}</ListItemIcon>
                    <Typography>{items}</Typography>
                </AccordionSummary>
                {index < 2 ? (
                    <AccordionDetails>
                        {details.map((e) => (
                            <ul>
                                <li>{e[index]}</li>
                            </ul>
                        ))}
                    </AccordionDetails>
                ) : null}
            </Accordion>
        </div>
    );
}
