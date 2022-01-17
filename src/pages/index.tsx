import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

import PageTemplate from '../components/layouts/PageTemplate';
import Introductions from '../components/top/Introductions';
import theme from '../components/utils/theme';

const useStyles = makeStyles(() => ({
    container: {
        marginTop: "3rem"
    }
}))

interface Introduction {
    title: string;
    description: string;
    action: string;
    href: string;
}

const Top: React.FC = () => {
    const classes = useStyles();

    const introductions: Introduction[] = [
        {
            title: "アカウントをお持ちでない方はこちら",
            description: "アカウントはここで作成することができます!",
            action: "アカウント作成 >",
            href: "/signup",
        },
        {
            title: "アカウントをお持ちの方はこちら",
            description: "アカウントをお持ちの方はこちらからサインインしてください!",
            action: "サインイン >",
            href: "/signin",
        }
    ]

    return (
        <>
            <ThemeProvider theme={theme}>
                <PageTemplate title="Home">
                    <>
                        <Container maxWidth="lg"className={classes.container}>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Typography variant="h1" gutterBottom>
                                        TopPage
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                        <Container maxWidth="lg" className={classes.container}>
                            { introductions.map((introduction, index) => (
                                <Container key={index} maxWidth="lg" className={classes.container}>
                                    <Grid container justifyContent={index % 2 == 0 ? "flex-start" : "flex-end"}>
                                        <Grid item lg={6} md={6}>
                                            <Introductions
                                                index={index}
                                                title={introduction.title}
                                                description={introduction.description}
                                                action={introduction.action}
                                                href={introduction.href}
                                            />
                                        </Grid>
                                    </Grid>
                                </Container>
                                ))
                            }
                        </Container>
                    </>
                </PageTemplate>
            </ThemeProvider>
        </>
    )
}

export default Top;
