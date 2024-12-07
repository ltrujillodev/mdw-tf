import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Cards from './Cards'
import CabezeraReseña from './CabezeraReseña'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '100%', ml: 10,mr: 8 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={12}>
                <CabezeraReseña />
                </Grid>
                <Grid size={12} >
                    <Cards />
                </Grid>
            </Grid>
        </Box>
    );
}
