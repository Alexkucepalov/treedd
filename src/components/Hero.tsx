import React from "react";
import { Box, Typography, Stack, Button, Container, useTheme } from "@mui/material";
import logoImg from "../assets/logo.png";
import hero from "../assets/hero.png";

const navLinks = [
  { label: "Расценки", href: "#pricing" },
  { label: "Мастерская", href: "#workshop" },
  { label: "Новости", href: "#news" },
];

const Hero: React.FC = () => {
  const theme = useTheme();
  const [role, setRole] = React.useState<"customer" | "master">("customer");
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: { xs: 480, md: 680 },
        background: `linear-gradient(180deg, rgba(124, 92, 250, 0.55) 60%, rgba(243, 240, 255, 0.3) 100%), url(${hero}) center/cover no-repeat`,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
        p: 0,
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ pt: { xs: 4, md: 8 }, pb: 0 }}>
        {/* Логотип и навигация (дублируется для мобильной версии) */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: { xs: 6, md: 12 }, display: { xs: "flex", sm: "none" } }}
        >
          <Stack direction="row" alignItems="center" spacing={2} sx={{ minWidth: 120 }}>
            <Box
              component="img"
              src={logoImg}
              alt="TreeD logo"
              sx={{ height: 40, width: 40, mr: 1, borderRadius: 2 }}
            />
            <Typography
              variant="h6"
              fontWeight={800}
              color="#fff"
              sx={{ fontSize: 22, letterSpacing: 1 }}
            >
              TreeD
            </Typography>
          </Stack>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 24,
              border: "2px solid #fff",
              color: "#fff",
              fontWeight: 700,
              fontSize: 18,
              px: 3,
              py: 1.2,
              textTransform: "none",
              background: "transparent",
              boxShadow: "none",
              ml: 2,
              transition: "background 0.2s, color 0.2s",
              '&:hover, &:focus': {
                background: "#fff",
                color: theme.palette.primary.main,
                borderColor: "#fff",
              },
            }}
            aria-label="Войти"
          >
            Войти
          </Button>
        </Stack>
        {/* Контент hero */}
        <Box sx={{ mt: { xs: 6, md: 12 }, mb: { xs: 2, md: 0 }, maxWidth: 900 }}>
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: 36, md: 64 },
              lineHeight: 1.1,
              mb: 3,
              textAlign: "left",
              letterSpacing: 0,
              textShadow: "0 2px 16px rgba(124,92,250,0.18)",
              transition: "color 0.2s",
            }}
          >
            Больше, чем просто
            <br />
            сервис 3D-печати
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: 20, md: 32 },
              mb: 5,
              textAlign: "left",
              textShadow: "0 2px 16px rgba(124,92,250,0.10)",
            }}
          >
            Без лишних слов и трудностей
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
            <Button
              onClick={() => setRole("customer")}
              sx={{
                minWidth: 200,
                height: 56,
                borderRadius: 32,
                border: "2.5px solid #fff",
                background: role === "customer" ? theme.palette.primary.main : "#fff",
                color: role === "customer" ? "#fff" : theme.palette.primary.main,
                fontWeight: 700,
                fontSize: 22,
                px: 4,
                boxShadow: "none",
                textTransform: "none",
                transition: "all 0.2s",
                '&:hover, &:focus': {
                  background: role === "customer" ? theme.palette.primary.dark : theme.palette.secondary.main,
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                },
              }}
              aria-pressed={role === "customer"}
            >
              Я — Заказчик
            </Button>
            <Button
              onClick={() => setRole("master")}
              sx={{
                minWidth: 200,
                height: 56,
                borderRadius: 32,
                border: "2.5px solid #fff",
                background: role === "master" ? theme.palette.primary.main : "#fff",
                color: role === "master" ? "#fff" : theme.palette.primary.main,
                fontWeight: 700,
                fontSize: 22,
                px: 4,
                boxShadow: "none",
                textTransform: "none",
                transition: "all 0.2s",
                '&:hover, &:focus': {
                  background: role === "master" ? theme.palette.primary.dark : theme.palette.secondary.main,
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                },
              }}
              aria-pressed={role === "master"}
            >
              Я — Мастер
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
