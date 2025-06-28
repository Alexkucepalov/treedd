import React from 'react';
import { Box, Typography, Stack, useTheme } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PaymentIcon from '@mui/icons-material/Payment';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { layout } from '../theme';

const cards = [
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 48, color: '#7C5CFA' }} />,
    title: 'Проверенные исполнители',
    text: 'Обращайтесь к опытным подрядчикам, которые смогут выполнить ваши проекты в срок и с высоким качеством.',
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 48, color: '#7C5CFA' }} />,
    title: 'Безопасная оплата',
    text: 'Деньги хранятся на специальном счёте и передаются только после того, как клиент подтвердит выполнение работы.',
  },
  {
    icon: <ChatBubbleOutlineIcon sx={{ fontSize: 48, color: '#7C5CFA' }} />,
    title: 'Чат с исполнителем',
    text: 'Общайтесь напрямую с исполнителем, делитесь файлами и обсуждайте детали проекта.',
  },
];

const Advantages: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      id="advantages"
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
        Почему заказывать через нас безопасней
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
        Наша платформа предоставляет все необходимое для воплощения ваших проектов в жизнь с легкостью и уверенностью.
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={layout.cardGap}
        sx={{ width: '100%', justifyContent: 'center', alignItems: 'stretch' }}
      >
        {cards.map((card, idx) => (
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
              fontFamily: 'Montserrat', // Единый шрифт для карточки
            }}
          >
            <Box sx={{ mt: 1, mb: 2 }}>{card.icon}</Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: 18,
                textAlign: 'center',
                mb: 1,
              }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: 15,
                textAlign: 'center',
              }}
            >
              {card.text}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Advantages;
