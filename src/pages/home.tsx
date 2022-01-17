import React from 'react';
import Button from '@material-ui/core/Button';
import PageTemplate from '../components/layouts/PageTemplate';

const Home: React.FC = () => {
  return (
    <>
      <PageTemplate title="Home">
        <>
          <h1>Hello World!!</h1>
          <Button variant="contained" color="primary" href="/">
            To Top
          </Button>
        </>
      </PageTemplate>
    </>
  )
}

export default Home
