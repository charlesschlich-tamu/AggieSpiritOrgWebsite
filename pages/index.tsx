import React from "react";
import { Box, Typography } from "@mui/material";

export default function Home() {
    return (
        <Box sx={{ p: 4, justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: "primary.main", width: "100vw", height: "100vh" }}>
            <Typography variant="h4" gutterBottom sx={{ color: "secondary.main" }}>
                Welcome to the Home Page
            </Typography>
            <Typography variant="body1" sx={{ color: "secondary.main" }}>
                This is a simple home page built with React and Material-UI.
            </Typography>
        </Box>
    );
}