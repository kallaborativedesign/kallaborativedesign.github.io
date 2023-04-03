import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import logo from '../KAD/Logo/KA Logo.png'
import research from '../KAD/Icons/research.png'
import strategy from '../KAD/Icons/strategy.png'
import design from '../KAD/Icons/ux.png'
import interaction from '../KAD/Icons/interaction.png'
import web from '../KAD/Icons/web.png'
import { Stack } from "@mui/system";
import kaycee from '../KAD/Photos/Kaycee.jpeg'
import andrew from '../KAD/Photos/Andrew.jpg'
import { LinkedIn, Mail } from "@mui/icons-material";
import { blue, grey } from "@mui/material/colors";
import styled from "@emotion/styled";

const CardButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[100]),
    backgroundColor: 'rgba(63, 63, 63, 1)',
    color: grey[100],
    boxShadow: 'none',
    letterSpacing: .5,
    '&:hover': {
        backgroundColor: '#1478FF',
        color: grey[100],
        boxShadow: 'none',
    },
}));

const icons = [
    { title: 'UX Research', icon: research },
    { title: 'Design Strategy', icon: strategy },
    { title: 'UI/UX Design', icon: design },
    { title: 'Interaction Design', icon: interaction },
    { title: 'Web Dev', icon: web }
]

const team = [
    { name: 'Kaycee Xiao', image: kaycee, bio: 'Product designer with 6+ years of experience in UI/UX and Interactive design and a track record of creating user centered experiences that produce results.', link: 'https://www.kayceexiao.com' },
    { name: 'Andrew Gay', image: andrew, bio: 'Software Engineer with a passion for learning and building innovative solutions and 8+ years of experience in product development.', link: 'https://www.andrewmichaelgay.com' }
]

export default function Main() {
    return (
        <Grid container>
            <Grid container item justifyContent='center' rowGap={8} width='100%' alignContent='center'>
                <Grid container item direction='column' xs={12} pt='100px'>
                    <Stack spacing={3} alignItems='center'>
                        <img src={logo} width='64px' />
                        <Typography variant='h2'>KALLABORATIVE DESIGN CO</Typography>
                    </Stack>
                </Grid>
                <Grid container item direction='column' xs={11} md={8} alignItems='center' rowGap={3} position='relative'>
                    <Grid container item position='relative' width='auto'>
                        <Typography variant='h1' zIndex={1}>A digital design and development duo that brings your ideas to life.</Typography>
                        <Grid item position='absolute' bottom={-10} top={15} left='-10px' right='-10px' bgcolor='rgba(20, 120, 255, 0.1)' zIndex={0} />
                    </Grid>
                    <Typography variant='body1'>
                        We offer end-to-end product design and development services, bringing together the expertise of a seasoned product designer with that of a skilled front-end web developer.  We aim to deliver seamless user experiences and visually stunning designs that meet your goals. We create user-centered solutions that engage and delight, working closely with you to understand your specific needs and unique requirements. With our collaborative approach and proven track record, we help you bring your ideas to life, delivering high-quality experience that exceed expectations.
                    </Typography>
                </Grid>
                <Grid container item direction='column' xs={11} md={8} alignItems='center' rowGap={6} overflow='hidden'>
                    <Typography variant='h3'>Services</Typography>
                    <Grid container item direction='row' gap={4} justifyContent='center' maxWidth='1000px' flexWrap={{ xs: 'wrap', sm: 'nowrap' }}>
                        {icons.map(i => (
                            <Grid container item direction='column' xs={6} sm py={3} width='100%' borderRadius={2} border='1px solid rgba(186, 186, 186, 1)' justifyContent='center' alignItems='center' rowGap={2}>
                                <img src={i.icon} height='50px' width='50px' />
                                <Typography variant='h5' sx={{display: 'table',
    whiteSpace: 'pre-wrap', width: '5px'}}>{i.title}</Typography>
                            </Grid>
                        ))}
                    </Grid>

                </Grid>
                <Grid container item direction='column' xs={11} md={8} alignItems='center' rowGap={6}>
                    <Typography variant='h3'>The duo</Typography>
                    <Grid container item direction='row' gap={3} width='100%' justifyContent='center'>
                        {team.map(member => (
                            <Grid container item direction='column' xs={12} md borderRadius={2} border='1px solid rgba(186, 186, 186, 1)' flexWrap='nowrap' justifyContent='space-between' overflow='hidden'>
                                <Grid container item justifyContent='center' alignItems='center' width='100%' >
                                    <img src={member.image} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                                </Grid>
                                <Grid container item textAlign='start' height='100%' px={4} py={4}>
                                    <Stack spacing={2} height='100%' justifyContent='space-between'>
                                        <Stack spacing={2}>
                                            <Typography variant="cardName">{member.name}</Typography>
                                            <Typography variant='p'>{member.bio}</Typography>
                                        </Stack>
                                        <Grid container item>
                                            <CardButton href={member.link} variant='contained'>
                                                View Website
                                            </CardButton>
                                        </Grid>
                                    </Stack>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>

                </Grid>
                <Grid container item direction='column' xs={12} alignItems='center' rowGap={2}>
                    <Stack spacing={1} direction='row' justifyContent='center'>
                        <Typography variant="h3">Let's </Typography>
                        <Typography variant="h3" color='rgba(20, 120, 255, 1)'>kallaborate</Typography>
                    </Stack>
                    <Grid container item direction='row' justifyContent='center' rowGap={4}>
                        <IconButton href='mailto:kallaborativedesign@gmail.com' color="rgba(63, 63, 63, 1)" disableRipple >
                            <Mail sx={{ '&:hover': { color: '#1478FF' }, transition: '.2s ease-in-out', color: 'rgba(63, 63, 63, 1)', height: '40px', width: '40px' }} />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/company/kallaborative-design/about/" color="rgba(63, 63, 63, 1)" disableRipple>
                            <LinkedIn sx={{ '&:hover': { color: '#1478FF' }, transition: '.2s ease-in-out', color: 'rgba(63, 63, 63, 1)', height: '40px', width: '40px' }} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container item height='40px' justifyContent='center' alignItems='center' bgcolor='rgba(63, 63, 63, 1)' width='100vw'>
                    <Typography variant='body2' color='white'>Copyright © 2023 KAllaborative Design. All Rights Reserved</Typography>
                </Grid>
            </Grid>



        </Grid>
    )
}