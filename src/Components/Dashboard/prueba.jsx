import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import AcoundMenu from './AccoundMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// INICIO
import VistaGeneral from '../Inicio/VistaGeneral';

//PARA NEGOCIOS
import Negocios from '../Negocios/Negocios/Negocios';
import Reservas from '../Negocios/Reservas/Reservas'
import Facturacion from '../Negocios/Facturacion/Facturacion';
import Mensaje from '../Negocios/Mensajes/Mensaje'
import Rating from "../Negocios/Calificaciones/Rating";
import Reseña from '../Negocios/Resenas/Reseñas'


//PARA TI
import Clientes from '../ParaTi/Clientes/Clientes'
import ReservasClientes from "../ParaTi/Reservas/ReservasClientes";
import Mensaje_Cliente from '../ParaTi/Mensajes/Mensaje_Cliente'


//Iconos NEGOCIOS
import ApartmentIcon from "@mui/icons-material/Apartment";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ChatIcon from "@mui/icons-material/Chat";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ReviewsIcon from "@mui/icons-material/Reviews";

//Iconos PARA TI
import PersonIcon from "@mui/icons-material/Person";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import ForumIcon from "@mui/icons-material/Forum";
import { color } from 'chart.js/helpers';

const NAVIGATION = [
    {
        // GENERAL ----------------------------------------------------------------------
        kind: "header",
        title: "Inicio",
    },
    {
        segment: "vista-general",
        title: "Vista General",
        icon: <ApartmentIcon />,
    },
    {
        kind: "divider",
    },
    // NEGOCIOS ----------------------------------------------------------------------
    {
        kind: "header",
        title: "Negocios",
    },
    {
        segment: "negocios",
        title: "Negocios",
        icon: <StorefrontIcon />,
    },
    {
        segment: "reservas-negocios",
        title: "Reservas",
        icon: <FlagCircleIcon />,
    },
    {
        segment: "facturacion-negocios",
        title: "Facturación",
        icon: <MonetizationOnIcon />,
    },
    {
        segment: "mensajes-negocios",
        title: "Mensajes",
        icon: <ChatIcon />,
    },
    {
        segment: "calificaciones-negocios",
        title: "Calificaciones",
        icon: <StarHalfIcon />,
    },
    {
        segment: "resena-negocios",
        title: "Reseñas",
        icon: <ReviewsIcon />,
    },
    {
        kind: "divider",
    },
    // PARA TI ----------------------------------------------------------------------
    {
        kind: "header",
        title: "Para ti",
    },
    {
        segment: "clientes",
        title: "Clientes",
        icon: <PersonIcon />,
    },
    {
        segment: "reservas-clientes",
        title: "Reservas",
        icon: <EmojiFlagsIcon />,
    },
    {
        segment: "mensajes-clientes",
        title: "Mensajes",
        icon: <ForumIcon />,
    },
    {
        kind: "divider",
    },
];

const demoTheme = (mode) =>
    createTheme({
        palette: {
            mode,
        },
        cssVariables: {
            colorSchemeSelector: 'data-toolpad-color-scheme',
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 600,
                lg: 1200,
                xl: 1536,
            },
        },
    });

function DemoPageContent({ pathname }) {
    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >

            //Inicio
            {pathname === "/vista-general" && <VistaGeneral />}
            //Negocios
            {pathname === "/negocios" && <Negocios />}
            {pathname === "/reservas-negocios" && <Reservas />}
            {pathname === "/facturacion-negocios" && <Facturacion />}
            {pathname === "/mensajes-negocios" && <Mensaje />}
            {pathname === "/calificaciones-negocios" && <Rating />}
            {pathname === "/resena-negocios" && <Reseña />}
            //Para ti
            {pathname === "/clientes" && <Clientes />}
            {pathname === "/reservas-clientes" && <ReservasClientes />}
            {pathname === "/mensajes-clientes" && <Mensaje_Cliente />}
        </Box>
    );
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function ThemeToggle({ mode, toggleTheme }) {
    return (
        <IconButton onClick={toggleTheme} color="dark">
            {mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
}

function Search({ mode, toggleTheme}) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center', // Alinea verticalmente
                justifyContent: 'flex-end', // Alinea hacia la derecha
                width: '100%', // Se extiende para llenar el espacio
            }}
        >
            <Tooltip title="Search" enterDelay={1000}>
                <div>
                    <IconButton
                        type="button"
                        aria-label="search"
                        sx={{
                            display: { xs: 'inline', md: 'none' },
                        }}
                    >
                        <SearchIcon />
                    </IconButton>
                </div>
            </Tooltip>
            <TextField
                label="Buscar"
                variant="outlined"
                size="small"
                slotProps={{
                    input: {
                        endAdornment: (
                            <IconButton type="button" aria-label="search" size="small">
                                <SearchIcon />
                            </IconButton>
                        ),
                        sx: { pr: 0.5 },
                    },
                }}
                sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 2 }}
            />
            <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
            <AcoundMenu />
        </Box>
    );
}

function DashboardLayoutSlots(props) {
    const { window } = props;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const [pathname, setPathname] = React.useState('/vista-general');

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        <ThemeProvider theme={demoTheme(mode)}>
            <CssBaseline />
            <AppProvider
                navigation={NAVIGATION}
                branding={{
                    logo: <img src="./src/assets/icon-mesa-facil.png" alt="MUI logo" />,
                    title:  <p style={{ color: "#ffc107", fontSize: 20, marginLeft: 10 }}>
                    Mesa Fácil
                  </p>
                }}
                router={router}
                theme={demoTheme(mode)}
                window={demoWindow}
            >
                <DashboardLayout
                    slots={{
                        toolbarActions: () => (
                            <Search mode={mode} toggleTheme={toggleTheme} />
                        ),
                    }}
                >
                    <DemoPageContent pathname={pathname} />
                </DashboardLayout>
            </AppProvider>
        </ThemeProvider>
    );
}

DashboardLayoutSlots.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default DashboardLayoutSlots;
