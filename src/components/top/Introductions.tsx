import React from "react";
import { Typography, Box } from "@material-ui/core";
import SvgButton from "../../components/utils/SvgButton";
import Link from "next/link";

interface IntroductionsProps {
    index: number;
    title: string;
    description: string;
    action: string;
    href: string;
}

const Introductions = ({ index, title, description, action, href }: IntroductionsProps) => {
    return (
        <>
            <Typography variant="h1" gutterBottom align={index % 2 == 0 ? "left" : "right"}>
                {title}
            </Typography>
            <Typography variant="body1" align={index % 2 == 0 ? "left" : "right"} paragraph>
                {description}
            </Typography>
            <Box textAlign={index % 2 == 0 ? "left" : "right"}>
                <Link href={href}>
                    <SvgButton>
                        {action}
                    </SvgButton>
                </Link>
            </Box>
        </>
    )
}

export default Introductions;
