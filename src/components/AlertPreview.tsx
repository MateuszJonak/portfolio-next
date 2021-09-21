import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const AlertPreview: React.FC = () => {
  return (
    <Snackbar open>
      <Alert icon={false} color="info">
        <Box display="flex" alignItems="center">
          This is page is a preview.{' '}
          <Button color="secondary" href="/api/exit-preview">
            Click here
          </Button>
          to exit preview mode.
        </Box>
      </Alert>
    </Snackbar>
  );
};
