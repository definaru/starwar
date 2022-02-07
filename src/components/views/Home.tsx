import { NavLink } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import Button from '@mui/material/Button'
import VisibilityIcon from '@mui/icons-material/Visibility'
import contents from '../styles/MainLayout.module.css'


export function Home()
{
    return (
        <MainLayout title='Star Wars' video={true}>
            <div className={contents.wrapper}>
                <img 
                    src={'/img/Star_wars_logo.svg'} 
                    className={contents.logo_home} 
                    alt="Star Wars" 
                />
                <p>Давным-давно, в далёкой-далёкой галактике...</p>
                <NavLink to="/person">
                    <Button 
                        variant="contained" 
                        color='primary' 
                        size="large" 
                        startIcon={<VisibilityIcon />}
                    >
                        Смотреть
                    </Button>
                </NavLink>
            </div>
        </MainLayout>
    )
}