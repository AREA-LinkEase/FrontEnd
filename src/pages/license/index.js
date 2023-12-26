import { Box, Typography } from '@mui/material';

const LicensePage = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" mb={10}>
        MIT License
      </Typography>
      <Typography variant="body1" mb={2} sx={{ fontSize: '1.1rem' }}>
        The MIT License (MIT)
      </Typography>
      <Typography variant="body2" mb={2} sx={{ fontSize: '1.1rem' }}>
        Copyright (c) 2023 AREA-LinkEase
      </Typography>
      <Typography variant="body2" mb={2} sx={{ fontSize: '1.1rem' }}>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </Typography>
      <Typography variant="body2" mb={2} sx={{ fontSize: '1.1rem' }}>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      </Typography>
      <Typography variant="body2" mb={2} sx={{ fontSize: '1.1rem' }}>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </Typography>
    </Box>
  );
};

export default LicensePage;
