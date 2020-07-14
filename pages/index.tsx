import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Card, CardContent } from '@material-ui/core';

const Index: NextPage = () => (
  <>
    <Head>
      <title>Mateusz Jonak</title>
    </Head>
    <Container maxWidth="lg">
      <Box my={4}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Mateusz Jonak
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  </>
);
export default Index;
