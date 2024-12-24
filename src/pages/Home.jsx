// src/pages/Home.js
import Banner from '../components/Banner';
import Twocolumn from '../components/TwoColFirst';
import Wedo from '../components/WeDo';
import ArtExperts from '../components/ArtExperts';
import Gallery from '../components/Gallery';

function Home() {
  return (
    <>
      <Banner />
      <Twocolumn />
      <Wedo />
      <ArtExperts />
      <Gallery />
    </>
  );
}

export default Home;
