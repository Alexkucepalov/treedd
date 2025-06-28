import React, { useState } from 'react';
import { Box, Typography, Stack, Button, useTheme } from '@mui/material';
import { layout } from '../theme';

const steps = {
  customer: [
    {
      title: 'Создание заказа',
      text: 'С использованием специализированной формы вы сможете без затруднений оформить техническое задание на изготовление объекта.',
    },
    {
      title: 'Выбор исполнителя',
      text: 'После публикации заказа к вам начнут обращаться исполнители. Вам остается только выбрать подходящий вариант по цене и срокам.',
    },
    {
      title: 'Оплата и получение',
      text: 'После подтверждения сделки обеими сторонами происходит оплата. Вы сами выбираете: забрать товар или заказать доставку.',
    },
  ],
  master: [
    {
      title: 'Выбор заказа',
      text: 'После заполнения портфолио, вы можете выбрать заказ, изготовление которого вам понравится.',
    },
    {
      title: 'Предложение цены',
      text: 'После выбранного заказа, согласуйте с заказчиком сроки и оплату, и приступайте к работе.',
    },
    {
      title: 'Передача заказа',
      text: 'После завершения сделки, происходит оплата, по согласованию с заказчиком принимается решение о доставке.',
    },
  ],
};

const HowItWorks: React.FC = () => {
  const [role, setRole] = useState<'customer' | 'master'>('customer');
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
        Как это работает
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
        Все предельно просто. В зависимости от роли в проекте алгоритм действий для достижения результата отличается.
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Button
          onClick={() => setRole('customer')}
          variant={role === 'customer' ? 'contained' : 'outlined'}
          sx={{
            borderRadius: 24,
            fontWeight: 700,
            fontSize: 16,
            px: 4,
            py: 1,
            minWidth: 160,
            boxShadow: 'none',
            textTransform: 'none',
            background: role === 'customer' ? theme.palette.primary.main : '#fff',
            color: role === 'customer' ? '#fff' : theme.palette.primary.main,
            border: role === 'customer' ? 'none' : `2px solid ${theme.palette.primary.main}`,
            transition: 'all 0.2s',
            '&:hover': {
              background: role === 'customer' ? theme.palette.primary.dark : theme.palette.secondary.main,
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
            },
          }}
        >
          Я - Заказчик
        </Button>
        <Button
          onClick={() => setRole('master')}
          variant={role === 'master' ? 'contained' : 'outlined'}
          sx={{
            borderRadius: 24,
            fontWeight: 700,
            fontSize: 16,
            px: 4,
            py: 1,
            minWidth: 160,
            boxShadow: 'none',
            textTransform: 'none',
            background: role === 'master' ? theme.palette.primary.main : '#fff',
            color: role === 'master' ? '#fff' : theme.palette.primary.main,
            border: role === 'master' ? 'none' : `2px solid ${theme.palette.primary.main}`,
            transition: 'all 0.2s',
            '&:hover': {
              background: role === 'master' ? theme.palette.primary.dark : theme.palette.secondary.main,
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
            },
          }}
        >
          Я - Мастер
        </Button>
      </Stack>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={layout.cardGap}
        sx={{ width: '100%', justifyContent: 'center', alignItems: 'stretch' }}
      >
        {steps[role].map((step, idx) => (
          <Box
            key={idx}
            sx={{
              width: 500,
              minHeight: 350,
              bgcolor: '#FFFFFFCC',
              border: '2.5px solid #EBEBED',
              borderRadius: '50px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 3,
              boxSizing: 'border-box',
              gap: 3,
              boxShadow: '0 4px 24px 0 rgba(124,92,250,0.06)',
              fontFamily: 'Montserrat',
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: '#7C5CFA',
                color: '#fff',
                fontWeight: 700,
                fontSize: 22,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 1,
                mb: 2,
              }}
            >
              {idx + 1}
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: 18,
                textAlign: 'center',
                mb: 1,
              }}
            >
              {step.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: 15,
                textAlign: 'center',
              }}
            >
              {step.text}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default HowItWorks;
