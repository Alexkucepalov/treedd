import React from 'react';
import { Box, Typography, Stack, Card, CardContent, CardMedia, useTheme } from '@mui/material';
import { layout } from '../theme';

const performers = [
  {
    type: 'Макет',
    title: 'Working Trebuchet',
    author: 'Brr Brr Patapim',
    rating: 4.9,
    image: require('../assets/executor1.png'), // trebuchet
    description: 'Рабочий макет требушета — функциональная модель для запуска небольших снарядов.',
  },
  {
    type: 'Макет',
    title: 'Mini Vader Figurine',
    author: 'Denchik Slazit',
    rating: 5.0,
    image: require('../assets/executor2.png'), // vader
    description: 'Миниатюрная фигурка Вейдера — идеальный сувенир для фанатов, выполненный с высокой детализацией.',
  },
  {
    type: 'Детали',
    title: 'Screw Claw',
    author: 'Drizlo Baam',
    rating: 4.7,
    image: require('../assets/executor3.png'), // screw claw
    description: 'Screw Claw — насадка для удобного удержания шурупов перед закручиванием. Упрощает работу одной рукой.',
  },
];

const BestPerformers: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: layout.sectionMaxWidth,
        mx: 'auto',
        my: 6,
        px: layout.sectionPaddingX,
        py: layout.sectionPaddingY,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'transparent',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: 24, md: 32 },
          textAlign: 'center',
          mb: 2,
        }}
      >
        Лучшие исполнители
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 400,
          fontSize: { xs: 16, md: 18 },
          textAlign: 'center',
          mb: 4,
          maxWidth: 700,
        }}
      >
        Изучите портфолио исполнителей, их опыт и отзывы, чтобы выбрать наиболее подходящего для вашего проекта.
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={layout.cardGap} sx={{ width: '100%', justifyContent: 'center', alignItems: 'stretch' }}>
        {performers.map((p, idx) => (
          <Card
            key={idx}
            sx={{
              width: layout.cardWidth,
              minHeight: layout.cardMinHeight,
              bgcolor: '#FFFFFFCC',
              border: '2.5px solid #EBEBED',
              borderRadius: '50px',
              boxShadow: '0 4px 24px 0 rgba(124,92,250,0.06)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 0,
              transition: 'transform 0.2s, box-shadow 0.2s',
              overflow: 'visible',
              fontFamily: 'Montserrat',
            }}
          >
            <CardMedia
              component="img"
              image={p.image}
              alt={p.title}
              sx={{
                width: '100%',
                height: 180,
                objectFit: 'cover',
                borderTopLeftRadius: '50px',
                borderTopRightRadius: '50px',
              }}
            />
            <CardContent sx={{ width: '100%', px: 3, py: 2, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <Typography sx={{ fontWeight: 600, fontSize: 15, color: '#7C5CFA', mb: 0.5 }}>{p.type}</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#232323', textAlign: 'center', mb: 0.5 }}>{p.title}</Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 15, color: '#A09CB0', textAlign: 'center', mb: 0.5 }}>{p.author}</Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 15, color: '#232323', textAlign: 'center', mb: 1 }}>{p.description}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                <Box sx={{ fontWeight: 700, fontSize: 15, color: '#7C5CFA' }}>{p.rating}</Box>
                <Box sx={{ fontSize: 16, color: '#FFD600' }}>★</Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <Typography
        component="a"
        href="#"
        sx={{
          mt: 4,
          color: '#7C5CFA',
          fontWeight: 600,
          fontSize: 18,
          textTransform: 'none',
          borderRadius: 16,
          px: 4,
          py: 1.2,
          transition: 'color 0.2s, background 0.2s',
          textDecoration: 'none',
          '&:hover': {
            background: '#F3F0FF',
            color: '#5B4C9D',
          },
        }}
      >
        Посмотреть все проекты
      </Typography>
    </Box>
  );
};

export default BestPerformers;
