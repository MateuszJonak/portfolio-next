import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/core/Alert';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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
