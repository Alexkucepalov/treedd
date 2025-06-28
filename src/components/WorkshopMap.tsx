import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import { layout } from '../theme';

const WorkshopMap: React.FC = () => (
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
      Мастерская 3D-печати
    </Typography>
    <Box
      sx={{
        width: '100%',
        maxWidth: layout.sectionMaxWidth,
        minHeight: 260,
        bgcolor: '#FFFFFFCC',
        border: '2.5px solid #EBEBED',
        borderRadius: '50px',
        boxShadow: '0 4px 24px 0 rgba(124,92,250,0.06)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
        p: 4,
      }}
    >
      <Box sx={{ flex: 1, minWidth: 220 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 18, color: '#7C5CFA', mb: 2 }}>
          г. Волгоград, Пражская улица, 17
        </Typography>
        <Typography sx={{ fontWeight: 400, fontSize: 15, color: '#232323', mb: 3 }}>
          Место ремонта и обслуживания 3D-принтеров для новичков и мастеров. Здесь можно получить помощь, советы и обменяться опытом. Обучение, консультации и качественный сервис — всё в одном месте.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 24,
              background: '#7C5CFA',
              color: '#fff',
              fontWeight: 700,
              fontSize: 16,
              px: 4,
              py: 1.2,
              textTransform: 'none',
              boxShadow: 'none',
              transition: 'background 0.2s',
              '&:hover': {
                background: '#5B4C9D',
              },
            }}
          >
            Оставить заявку
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 24,
              border: '2px solid #7C5CFA',
              color: '#7C5CFA',
              fontWeight: 700,
              fontSize: 16,
              px: 4,
              py: 1.2,
              textTransform: 'none',
              boxShadow: 'none',
              transition: 'background 0.2s, color 0.2s',
              '&:hover': {
                background: '#F3F0FF',
                color: '#5B4C9D',
                borderColor: '#7C5CFA',
              },
            }}
          >
            Построить маршрут
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          flex: 1,
          minWidth: 220,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: 320,
            height: 180,
            bgcolor: '#F3F0FF',
            borderRadius: '32px',
            boxShadow: '0 2px 8px 0 rgba(124,92,250,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#7C5CFA',
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          Карта/Изображение
        </Box>
      </Box>
    </Box>
  </Box>
);

export default WorkshopMap;
