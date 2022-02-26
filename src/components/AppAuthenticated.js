import { useState } from 'react';
import ERC20App from './ERC20/ERC20App';
import { CssBaseline, Divider, List, ListItemButton,
    ListItemText, Typography, AppBar, Toolbar, Box } from '@mui/material';

const AppAuthenticated = () => {
    const [ERCIndex, setERCIndex] = useState(0);
    const ERC = {
        ERC20: "ERC-20",

        //ERCs below are not yet implemented
        //ERC721: "ERC-721",
        //ERC777: "ERC-777",
        //ERC1155: "ERC-1155"
    }
    const allERCs = Object.values(ERC);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `100%`}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        SUbsidy Distribution Management
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p:3 }}>
                    <Toolbar />
                {ERCIndex === allERCs.findIndex((x) => x === ERC.ERC20) && <ERC20App />}
            </Box>
        </Box>
    )
}

export default AppAuthenticated
