import React from 'react';
import { Box, Typography, Stack, Button, Card, CardContent, useTheme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { layout } from '../theme';

const plans = [
  {
    name: 'Basic',
    subtitle: 'Подходит для выполнения нерегулярных задач',
    price: 'Бесплатно',
    period: '',
    features: [
      'До 3-х активных заказов',
      'Поддержка 24/7',
      'Скидка 5% на первый заказ',
    ],
    active: true,
    accent: false,
  },
  {
    name: 'Pro',
    subtitle: 'Для регулярных нужд 3D-печати',
    price: '290₽',
    period: 'в месяц',
    features: [
      'До 10 активных заказов',
      'Поднятие заказа в топ на 72ч',
      'Функция «Предложение заказа»',
      'Скидка 5% на обслуживание принтеров у нас',
    ],
    active: false,
    accent: true,
  },
  {
    name: 'Premium',
    subtitle: 'Для компаний и крупных заказчиков',
    price: '990₽',
    period: 'в месяц',
    features: [
      'Скидка 5% на все заказы',
      'Неограниченное кол-во заказов.',
      'Личный менеджер',
      'Шаблоны NDA',
      'Скидка 15% на обслуживание принтеров у нас',
    ],
    active: false,
    accent: false,
  },
];

const PricingPlans: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      id="pricing"
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
        Простое и прозрачное ценообразование
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
        Выберите план, который лучше всего соответствует вашим потребностям в 3D-печати
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={layout.cardGap} sx={{ width: '100%', justifyContent: 'center', alignItems: 'stretch' }}>
        {plans.map((plan, idx) => (
          <Card
            key={idx}
            sx={{
              width: layout.cardWidth,
              minHeight: layout.cardMinHeight,
              bgcolor: '#FFFFFFCC',
              border: plan.accent ? '2.5px solid #7C5CFA' : '2.5px solid #EBEBED',
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
            {plan.accent && (
              <Box
                sx={{
                  position: 'absolute',
                  top: -32,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bgcolor: '#7C5CFA',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 14,
                  borderRadius: 16,
                  px: 3,
                  py: 0.5,
                  zIndex: 2,
                  boxShadow: '0 2px 8px 0 rgba(124,92,250,0.10)',
                  border: 'none',
                  minWidth: 100,
                  textAlign: 'center',
                }}
              >
                Популярный
              </Box>
            )}
            <CardContent sx={{ width: '100%', px: 3, pt: plan.accent ? 6 : 3, pb: 3, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#232323', textAlign: 'center', mb: 0.5 }}>{plan.name}</Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 15, color: '#A09CB0', textAlign: 'center', mb: 1 }}>{plan.subtitle}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 28, color: '#232323', mr: 1 }}>{plan.price}</Typography>
                {plan.period && <Typography sx={{ fontWeight: 400, fontSize: 15, color: '#A09CB0' }}>{plan.period}</Typography>}
              </Box>
              <Stack spacing={1.2} sx={{ mb: 2, width: '100%' }}>
                {plan.features.map((f, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleOutlineIcon sx={{ color: '#7C5CFA', fontSize: 20, mr: 1 }} />
                    <Typography sx={{ fontWeight: 400, fontSize: 15, color: '#232323' }}>{f}</Typography>
                  </Box>
                ))}
              </Stack>
              <Button
                variant={plan.active ? 'outlined' : 'contained'}
                sx={{
                  borderRadius: 24,
                  border: plan.active ? '2.5px solid #A09CB0' : '2.5px solid #7C5CFA',
                  color: plan.active ? '#A09CB0' : '#fff',
                  background: plan.active ? '#F8F8FA' : '#7C5CFA',
                  fontWeight: 700,
                  fontSize: 16,
                  px: 4,
                  py: 1.2,
                  width: '100%',
                  textTransform: 'none',
                  boxShadow: 'none',
                  transition: 'background 0.2s, color 0.2s',
                  '&:hover': {
                    background: plan.active ? '#F3F0FF' : '#5B4C9D',
                    color: '#fff',
                  },
                }}
                disabled={plan.active}
              >
                {plan.active ? 'Активен' : 'Оформить'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default PricingPlans;
