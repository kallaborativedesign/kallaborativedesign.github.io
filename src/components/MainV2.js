import styled from "@emotion/styled";
import { AppBar, Button, Card, Grid, IconButton, Input, Menu, MenuList, SvgIcon, TextField, Toolbar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";
import logo from '../KAD/Logo/logo.svg'
import combo from '../KAD/misc/combo.png'
import research from '../KAD/Icons/research.png'
import strategy from '../KAD/Icons/strategy.png'
import design from '../KAD/Icons/ux.png'
import interaction from '../KAD/Icons/interaction.png'
import development from '../KAD/Icons/development.png'
import kaycee from '../KAD/Photos/Kaycee.jpeg'
import andrew from '../KAD/Photos/Andrew.jpg'
import { ArrowForward, ArrowRight, GitHub, LinkedIn, Mail, MenuOpen, MenuOutlined } from "@mui/icons-material";
import fidelity from '../KAD/Companies/Fidelity.png'
import hlab from '../KAD/Companies/Hlab.png'
import hme from '../KAD/Companies/HME.png'
import inseego from '../KAD/Companies/inseego.png'
import methodist from '../KAD/Companies/Methodist.png'
import neu from '../KAD/Companies/NEU.png'
import uhg from '../KAD/Companies/UHG.png'
import umass from '../KAD/Companies/UMass.png'
import LogoIcon from "./LogoIcon";


const companies = [
    uhg, fidelity, methodist, neu, hlab, umass, hme, inseego
]



const NavButton = styled(Button)(({ theme }) => ({
    backgroundColor: grey[50],
    color: '#1478FF',
    boxShadow: 'none',
    letterSpacing: .5,
    '&:hover': {
        backgroundColor: grey[300],
        color: '#1478FF',
        boxShadow: 'none',
    },
}));

const CardButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#1478FF'),
    backgroundColor: '#1478FF',
    // color: grey[100],
    boxShadow: 'none',
    fontFamily: ['Montserrat', '!important'],
    fontWeight: 600,
    fontSize: 18,
    '&:hover': {
        backgroundColor: '#1478FF',
        color: grey[300],
        boxShadow: 'none',
    },
}));

const icons = [
    { title: 'Research', icon: research },
    { title: 'Strategy', icon: strategy },
    { title: 'UI/UX', icon: design },
    { title: 'Interaction', icon: interaction },
    { title: 'Development', icon: development }
]

const team = [
    { name: 'Kaycee Xiao', image: kaycee, bio: 'Product designer with 6+ years of experience in UI/UX and Interactive design and a track record of creating user centered experiences that produce results.', link: 'https://www.kayceexiao.com' },
    { name: 'Andrew Gay', image: andrew, bio: 'Software Engineer with a passion for learning and building innovative solutions and 8+ years of experience in product development.', link: 'https://www.andrewmichaelgay.com' }
]

export default function MainV2() {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [message, setMessage] = useState(null)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    return (
        <>
            <AppBar position='absolute' sx={{ backgroundColor: 'transparent', boxShadow: 'none', pt: '24px', px: 'calc(8vw - 24px)' }}>
                <Toolbar sx={{ height: '47px' }}>
                    <Box>
                        <Grid container item gap={2} alignItems='center'>
                            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                                <LogoIcon fill='white' style={{ fontSize: '2.5rem' }} />
                            </Box>
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <LogoIcon fill='#1478FF' style={{ fontSize: '2.5rem', display: { xs: 'none', md: 'block' } }} />
                            </Box>
                            <Typography variant='p' fontWeight={500} letterSpacing='.1em' color={{ xs: 'white', md: 'text.primary' }}>KALLABORATIVE DESIGN</Typography>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />

                    <Box>
                        <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}>
                            <MenuOutlined />
                        </IconButton>

                        <Grid container item gap={2} sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
                            {/* <Button sx={{ color: 'white' }}>About</Button> */}
                            <Button sx={{ color: 'white' }}>Services</Button>
                            <Button sx={{ color: 'white' }}>Work</Button>
                            <NavButton variant='contained' height='100%'>Let's kallaborate</NavButton>
                        </Grid>
                    </Box>
                </Toolbar>
            </AppBar>
            <Grid container item maxWidth='100vw' overflow='hidden' >
                <Grid container item wrap='wrap-reverse'>
                    <Grid container item direction='column' xs={12} md={6} pt={{ xs: 0, md: '155px' }} px={{ xs: 4, sm: '8vw' }} pr={{ sm: 0 }}>
                        <Grid container item width='auto' rowGap={3} pb='10vw'>
                            <Typography variant='h4' lineHeight='37px' zIndex={1} textAlign='start' sx={{
                            }}><span>A digital design and development duo that brings your ideas to life.</span></Typography>
                            {/* <Grid item position='absolute' height='16px' top={24} left='-10px' right='-10px' bgcolor='rgba(20, 120, 255, 0.1)' zIndex={0} /> */}
                            <Typography variant='body1'>
                                We offer end-to-end product design and development services, bringing together the expertise of a seasoned product designer with that of a skilled front-end web developer.
                            </Typography>
                            <Typography variant='body1'>
                                We kallaborate closely with you to understand your specific needs and unique requirements, delivering engaging and high quality user-centered experiences and visually stunning designs that meet your goals and exceed expectations.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item direction='column' xs={12} md={6} position='relative' justifyContent='start' minHeight={{ xs: '80vw', sm: '70vw', md: '285px' }}>
                        <Grid container item position='absolute' top={{ xs: 0, sm: -75, md: 0 }} right={0}>
                            <img src={combo} width='100%' height='auto' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item rowGap={{ xs: 8, md: 20 }} px={{ xs: 4, sm: '8vw' }} pb={{ xs: 8 }}>

                    <Grid container item rowGap={4}>
                        <Grid container item direction='column' xs={12}>
                            <Typography variant='h4'>Services</Typography>
                        </Grid>
                        <Grid container item direction='column' alignItems='start' xs={12}>
                            <Grid container item rowGap={3} columnGap={2} justifyContent={{ xs: 'start', md: 'space-around' }}>
                                {icons.map((icon, index) => (
                                    <Grid container item direction='column' rowGap={1} xs={6} sm='auto' alignContent='start' sx={{ maxWidth: '150px' }}>
                                        <img src={icon.icon} height='120px' />
                                        <Typography variant='h5' textAlign='center'>{icon.title}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item rowGap={{ xs: 8, md: 14 }}>
                        <Grid container item rowGap={4} columnGap={6} justifyContent='space-around'>
                            <Grid container item>
                                <Grid container item direction='column' justifyContent='end' mr='auto' height={{ xs: '60px', md: '90px' }} maxWidth='94px' overflow='visible' sx={{ borderTop: '7px #1478FF solid ' }}>
                                    <Typography variant='h4' noWrap>Meet the duo</Typography>
                                </Grid>
                            </Grid>
                            {team.map(member => (
                                <Grid item container position='relative' direction='column' md height='495px' alignItems='center' borderRadius='5px'>
                                    <Grid container item position='absolute' top={0} left={0} right={0} height='67%' overflow='hidden' borderRadius='5px'>
                                        <img src={member.image} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                                    </Grid>
                                    <Grid container item position='absolute' bottom={0} left={0} minHeight={{ md: '305px', lg: '256px' }}>
                                        <Grid container item p={4} direction='column' xs={10} bgcolor='background.default' rowGap={2} justifyContent='space-between' borderRadius='5px' sx={{ boxShadow: '20px 18.6px 120px rgba(0, 0, 0, 0.05)' }} >
                                            <Typography variant="h5">{member.name}</Typography>
                                            <Typography variant='p'>{member.bio}</Typography>
                                            <Grid container item>
                                                <Button href={member.link} variant='text' sx={{ borderBottom: '#1478FF 1px solid', borderRadius: 0 }} endIcon={<ArrowForward />}>View Website</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container item rowGap={4}>
                            <Grid container item direction='column' xs={12}>
                                <Grid container item rowGap={4}>
                                    <Grid container item direction='column' xs={12} lg rowGap={4} justifyContent='center'>

                                        <Grid container item alignItems='center' justifyContent='space-between' rowGap={4}>
                                            {companies.map((company, index) => {
                                                if (index < 2) {
                                                    return (<Grid container item direction='column' xs={12} sm>
                                                        <img src={company} style={{ objectFit: 'scale-down' }} />
                                                    </Grid>
                                                    )
                                                }
                                            }

                                            )}
                                        </Grid>
                                    </Grid>
                                    <Grid container item direction='column' xs={12} lg rowGap={4} justifyContent='center'>
                                        <Grid container item alignItems='center' justifyContent='space-between' rowGap={4}>
                                            {companies.map((company, index) => {
                                                if (index > 1 && index < 4) {
                                                    return (<Grid container item direction='column' xs={12} sm>
                                                        <img src={company} style={{ objectFit: 'scale-down' }} />
                                                    </Grid>
                                                    )
                                                }
                                            }

                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container item direction='column' xs={12}>
                                <Grid container item rowGap={4}>
                                    <Grid container item direction='column' xs={12} lg rowGap={4} alignItems='space-between' justifyContent='center'>

                                        <Grid container item alignItems='center' justifyContent='space-between' rowGap={4}>
                                            {companies.map((company, index) => {
                                                if (index > 3 && index < 6) {
                                                    return (<Grid container item direction='column' xs={12} sm>
                                                        <img src={company} style={{ objectFit: 'scale-down', maxWidth: '100%' }} />
                                                    </Grid>
                                                    )
                                                }
                                            }

                                            )}
                                        </Grid>
                                    </Grid>
                                    <Grid container item direction='column' xs={12} lg rowGap={4} justifyContent='center'>

                                        <Grid container item alignItems='center' justifyContent='space-between' rowGap={4}>
                                            {companies.map((company, index) => {
                                                if (index > 5) {
                                                    return (<Grid container item direction='column' xs={12} sm>
                                                        <img src={company} style={{ objectFit: 'scale-down' }} />
                                                    </Grid>
                                                    )
                                                }
                                            }

                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <form style={{ width: '100%' }}>

                    <Grid container item mt={{ xs: 0, md: 8 }} py={{ xs: 8, md: 10 }} bgcolor='#E7F1FF' rowGap={4} columnGap={12} px={{ xs: 4, sm: '8vw' }}>
                        <Grid container item direction='column' xs={12} sm rowGap={2} width='100%'>
                            <Typography variant='h4'>Let's kallaborate</Typography>
                            <Typography variant='body1'>Whether you have a big or small project or idea in mind, drop us a message to let us know how we can help!</Typography>
                            <Grid container item direction='row' justifyContent='start'>
                                <IconButton href='mailto:kallaborativedesign@gmail.com' color="rgba(63, 63, 63, 1)" disableRipple >
                                    <Mail sx={{ '&:hover': { color: '#1478FF' }, transition: '.2s ease-in-out', color: 'rgba(63, 63, 63, 1)', height: '40px', width: '40px' }} />
                                </IconButton>
                                <IconButton href="https://www.linkedin.com/company/kallaborative-design/about/" color="rgba(63, 63, 63, 1)" disableRipple>
                                    <LinkedIn sx={{ '&:hover': { color: '#1478FF' }, transition: '.2s ease-in-out', color: 'rgba(63, 63, 63, 1)', height: '40px', width: '40px' }} />
                                </IconButton>
                            </Grid>

                        </Grid>

                        <Grid container item direction='column' xs={12} sm rowGap={5}>
                            <Stack gap={2}>
                                <TextField
                                    id="outlined-name-input"
                                    label="Name"
                                    type="text"
                                    value={name}
                                    onChange={handleNameChange}
                                    autoComplete="new-name"
                                    fullWidth
                                    required
                                    sx={{ bgcolor: 'white' }}
                                />
                                <TextField
                                    label="Email"
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    autoComplete="new-email"
                                    fullWidth
                                    required
                                    sx={{ bgcolor: 'white' }}
                                />
                                <TextField
                                    label="Message"
                                    type="text"
                                    value={message}
                                    onChange={handleMessageChange}
                                    autoComplete="new-message"
                                    rows={5}
                                    maxRows={15}
                                    multiline
                                    fullWidth
                                    required
                                    sx={{ bgcolor: 'white' }}
                                />
                            </Stack>
                            <Box>
                                <CardButton type='submit' variant='contained' sx={{ height: '56px', width: '232px', backgroundColor: "" }}>Submit</CardButton>
                            </Box>
                        </Grid>

                    </Grid>
                </form>

                <Grid container item height='80px' justifyContent='center' alignItems='center' bgcolor='rgba(63, 63, 63, 1)' width='100vw'>
                    <Typography variant='body2' color='white'>Copyright &copy; 2023 Kallaborative Design. All Rights Reserved.</Typography>
                </Grid>
            </Grid>
        </>
    )
}