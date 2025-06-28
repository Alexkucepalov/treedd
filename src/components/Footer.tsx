import React from 'react';
import { Box, Typography, Stack, Button, Container, Link } from '@mui/material';
import logoImg from '../assets/logo.png';

const Footer: React.FC = () => (
  <Box
    sx={{
      width: '100%',
      bgcolor: '#7C5CFA',
      color: '#fff',
      py: { xs: 6, md: 8 },
      px: { xs: 2, md: 6 },
      borderTopLeftRadius: { xs: 0, md: '40px' },
      borderTopRightRadius: { xs: 0, md: '40px' },
      boxShadow: '0 -4px 24px 0 rgba(124,92,250,0.10)',
      fontFamily: 'Montserrat',
    }}
  >
    <Container maxWidth="xl" sx={{ px: 0 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 4, md: 8 }}
        sx={{
          width: '100%',
          maxWidth: 1700,
          mx: 'auto',
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Логотип и описание */}
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
            <Box
              component="img"
              src={logoImg}
              alt="TreeD logo"
              sx={{ height: 48, width: 48, borderRadius: 3 }}
            />
            <Typography
              variant="h6"
              fontWeight={800}
              sx={{ fontSize: { xs: 24, md: 32 }, letterSpacing: 1 }}
            >
              TreeD
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.6,
              mb: 3,
              opacity: 0.9,
            }}
          >
            Больше, чем просто сервис 3D-печати. Мы соединяем заказчиков и исполнителей, 
            делая процесс создания уникальных объектов простым и безопасным.
          </Typography>
        </Box>

        {/* Навигация */}
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: 18, md: 20 },
              mb: 3,
            }}
          >
            Навигация
          </Typography>
          <Stack spacing={2}>
            {[
              { label: 'Расценки', href: '#pricing' },
              { label: 'Мастерская', href: '#advantages' },
              { label: 'Новости', href: '#news' },
              { label: 'О нас', href: '#about' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: { xs: 16, md: 18 },
                  opacity: 0.9,
                  transition: 'opacity 0.2s',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Контакты */}
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: 18, md: 20 },
              mb: 3,
            }}
          >
            Контакты
          </Typography>
          <Stack spacing={2}>
            <Typography sx={{ fontSize: { xs: 16, md: 18 }, opacity: 0.9 }}>
              г. Волгоград, Пражская улица, 17
            </Typography>
            <Typography sx={{ fontSize: { xs: 16, md: 18 }, opacity: 0.9 }}>
              +7 (XXX) XXX-XX-XX
            </Typography>
            <Typography sx={{ fontSize: { xs: 16, md: 18 }, opacity: 0.9 }}>
              info@treed.ru
            </Typography>
          </Stack>
        </Box>

        {/* Кнопка обратной связи */}
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: 18, md: 20 },
              mb: 3,
            }}
          >
            Обратная связь
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 32,
              border: '2.5px solid #fff',
              color: '#fff',
              fontWeight: 700,
              fontSize: { xs: 16, md: 18 },
              px: 4,
              py: 1.5,
              textTransform: 'none',
              background: 'transparent',
              boxShadow: 'none',
              transition: 'background 0.2s, color 0.2s',
              '&:hover': {
                background: '#fff',
                color: '#7C5CFA',
                borderColor: '#fff',
              },
            }}
          >
            Написать нам
          </Button>
        </Box>
      </Stack>

      {/* Нижняя часть футера */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          mt: { xs: 4, md: 6 },
          pt: { xs: 3, md: 4 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 14, md: 16 },
            opacity: 0.8,
          }}
        >
          © 2024 TreeD. Все права защищены.
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            fontSize: { xs: 14, md: 16 },
            opacity: 0.8,
          }}
        >
          <Link
            href="#privacy"
            sx={{
              color: '#fff',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            Политика конфиденциальности
          </Link>
          <Link
            href="#terms"
            sx={{
              color: '#fff',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            Условия использования
          </Link>
        </Stack>
      </Box>
    </Container>
  </Box>
);

export default Footer; 