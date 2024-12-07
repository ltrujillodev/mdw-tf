import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Mensajes from '../../Negocios/Mensajes/Mensajes';
import MensajesRecientes from '../../Negocios/Mensajes/MensajesRecientes';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow: 'none', // Elimina cualquier sombra que pueda aparecer alrededor del Paper
    border: 'none',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '100%', border: "none" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={{ xs: 6, md: 4 }}> 
                    <MensajesRecientes />
                </Grid>
                <Grid size={{ xs: 6, md: 8 }}>
                    <Mensajes />
                </Grid>
            </Grid>
        </Box>
    );
}
