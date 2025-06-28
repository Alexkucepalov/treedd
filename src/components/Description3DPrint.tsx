import React from 'react';
import { Box, Typography, Stack, Link } from '@mui/material';
import gearImg from '../assets/gear-placeholder.png';

const Description3DPrint: React.FC = () => (
  <Box sx={{ width: '100%', bgcolor: '#fff', py: { xs: 6, md: 10 } }}>
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        color: '#232323',
        textAlign: 'center',
        mb: 6,
        fontSize: { xs: 28, md: 36 },
      }}
    >
      Что такое 3D-печать
    </Typography>
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={6}
      sx={{ maxWidth: 1100, mx: 'auto', px: 2 }}
    >
      <Box
        component="img"
        src={gearImg}
        alt="3D gear"
        sx={{ width: { xs: 140, md: 220 }, height: 'auto', flexShrink: 0 }}
      />
      <Typography
        variant="body1"
        sx={{
          color: '#232323',
          fontSize: { xs: 16, md: 20 },
          lineHeight: 1.6,
          maxWidth: 700,
        }}
      >
        <Link
          href="#"
          sx={{ color: '#7C5CFA', fontWeight: 500, textDecoration: 'underline', mr: 0.5 }}
        >
          3D-печать
        </Link>
        — это процесс создания физических объектов послойным нанесением материала по цифровой модели. Позволяет быстро создавать прототипы, индивидуальные имплантаты, макеты зданий, восстанавливать детали, делать уникальные предметы интерьера, игрушки, аксессуары и кастомные запчасти. Эта технология делает сложное производство доступным для всех.
      </Typography>
    </Stack>
  </Box>
);

export default Description3DPrint;
