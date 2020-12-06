import React from 'react';
import Layout from '../index';
import Hero from '../../authentication/hero/Hero';
import HeroIllustration from '../../authentication/hero/HeroIllustration';

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title="Greenbook"
        content="Take daily environmental actions by challenging yourself and friends"
      />
    </Layout>
  )
}

export default IndexPage;
