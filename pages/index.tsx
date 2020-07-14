import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { styled, colors } from '../src/theme';

const Index: NextPage = () => (
  <>
    <Head>
      <title>Mateusz Jonak</title>
    </Head>
    <ContainerFullHeight>
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Card elevation={0}>
          <CardContentThick>
            <Box display="flex" justifyContent="center" mb={2}>
              <AvatarImage alt="Mateusz Jonak" src="/cv.jpg" />
            </Box>
            <Typography variant="h4" component="h1">
              Mateusz Jonak
            </Typography>
            <Box my={2}>
              <Divider />
            </Box>
            <Box color={colors.BLUE_GREEN} textAlign="center">
              <Typography variant="h6" component="h2">
                JavaScript Developer
              </Typography>
            </Box>
          </CardContentThick>
        </Card>
      </Box>
    </ContainerFullHeight>
  </>
);

const ContainerFullHeight = styled(Container)`
  height: 100vh;
`;

const CardContentThick = styled(CardContent)`
  padding-left: ${({ theme }) => theme.spacing(3)}px;
  padding-right: ${({ theme }) => theme.spacing(3)}px;
`;

const AvatarImage = styled(Avatar)`
  width: 112px;
  height: 112px;
`;

export default Index;
