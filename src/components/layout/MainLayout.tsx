import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import StarRateIcon from '@mui/icons-material/StarRate'
import contents from '../styles/MainLayout.module.css'


interface Layout {
    children: React.ReactNode;
    title?: string;
    video?: boolean;
}

export function MainLayout({
    children, 
    title = 'Loading...', 
    video = true
}: Layout) 
{

    useEffect(() => {
        document.title = title
    }, [])

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    }


    const pages = [
        {
            slug: 'Порсонажи',
            href: '/person'
        },
        {
            slug: 'О платформе',
            href: '/about'
        }
    ]

    return (
        <div className={contents.app}>
            <AppBar position="fixed">
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <NavLink to="/" className={contents['link-logotype']}>
                                <img 
                                    src={'/img/Star_wars_logo.svg'} 
                                    className={contents.logo} 
                                    alt="Star Wars" 
                                />
                            </NavLink>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page, i) => (
                                    <MenuItem key={i}>
                                        <NavLink to={page.href}>
                                            <Typography textAlign="center">
                                                {page.slug}
                                            </Typography>
                                        </NavLink>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            Star Wars
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, i) => (
                                <NavLink key={i} to={page.href}>
                                    <Button sx={{ my: 1, mx: 2, color: 'white', display: 'block' }}>
                                        {page.slug}
                                    </Button>                                    
                                </NavLink>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <article className={contents.header}>
                <Container maxWidth="lg">
                    <Box sx={{ pt: 15, pb: 20 }}>
                        {children}
                    </Box>
                </Container>                
            </article> 

            {video ? 
            <video 
                muted 
                autoPlay 
                loop 
                src='/video/space.mp4'
                className={contents.video}
            /> : ''} 
        </div>
    )
}