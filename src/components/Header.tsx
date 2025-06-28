import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Button, Container, Stack, Box, Typography, useTheme, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

// Добавляем глобальный стиль для плавной прокрутки
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

const navLinks = [
  { label: "Расценки", href: "#pricing" },
  { label: "Мастерская", href: "#advantages" },
  { label: "Новости", href: "#news" },
];

const Header: React.FC = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        bgcolor: 'transparent',
        boxShadow: 'none',
        py: 0.5,
        fontFamily: 'Montserrat',
        transition: "box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)",
        minHeight: { xs: 56, md: 80 },
        zIndex: 1000,
      }}
    >
      <Container maxWidth="xl" disableGutters sx={{ px: { xs: 2, md: 6 } }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 80 }, px: 0, display: 'flex', gap: { xs: 2, md: 6 } }}>
          {/* Логотип */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 120, textDecoration: 'none' }}>
            <Box
              component="img"
              src={require("../assets/logo.png")}
              alt="TreeD logo"
              sx={{ height: 48, width: 48, mr: 1, borderRadius: 3, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.08)' } }}
            />
            <Typography
              variant="h6"
              fontWeight={800}
              letterSpacing={1}
              sx={{ color: "#fff", fontSize: { xs: 24, md: 32 }, fontFamily: 'Montserrat' }}
            >
              TreeD
            </Typography>
          </a>
          {/* Навигация для десктопа */}
          <Stack
            direction="row"
            spacing={{ xs: 2, md: 6 }}
            alignItems="center"
            sx={{ ml: "auto", mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {navLinks.map((link) => (
              <Typography
                key={link.label}
                component="a"
                href={link.href}
                onClick={e => {
                  e.preventDefault();
                  const el = document.querySelector(link.href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 18,
                  textDecoration: "none",
                  letterSpacing: 0.1,
                  fontFamily: 'Montserrat',
                  textTransform: 'none',
                  px: 2,
                  py: 1,
                  borderRadius: 3,
                  transition: "background 0.2s, color 0.2s",
                  '&:hover, &:focus': {
                    background: 'rgba(255,255,255,0.1)',
                    color: "#fff",
                  },
                }}
                tabIndex={0}
                aria-label={link.label}
              >
                {link.label}
              </Typography>
            ))}
          </Stack>
          {/* Кнопка Войти */}
          <Button
            variant="outlined"
            href="#login"
            startIcon={<PersonIcon />}
            sx={{
              borderRadius: 32,
              border: "2.5px solid #fff",
              color: "#fff",
              fontWeight: 700,
              fontSize: 20,
              px: 4,
              py: 1.5,
              textTransform: "none",
              background: "transparent",
              boxShadow: "none",
              fontFamily: 'Montserrat',
              transition: "background 0.2s, color 0.2s",
              ml: { xs: 1, md: 4 },
              '&:hover, &:focus': {
                background: "#fff",
                color: '#7C5CFA',
                borderColor: "#fff",
              },
            }}
            aria-label="Войти"
          >
            Войти
          </Button>
          {/* Бургер-меню для мобильных */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "flex", md: "none" }, ml: 2, color: '#fff' }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{ sx: { bgcolor: 'rgba(124,92,250,0.95)', color: '#fff', width: 260, borderTopLeftRadius: 32, borderBottomLeftRadius: 32 } }}
          >
            <List>
              {navLinks.map((link) => (
                <ListItem key={link.label} component="a" href={link.href} onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary={link.label} sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 20 }} />
                </ListItem>
              ))}
              <ListItem component="a" href="#login" onClick={() => setDrawerOpen(false)}>
                <PersonIcon sx={{ mr: 1 }} />
                <ListItemText primary="Войти" sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 20 }} />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
