// src/pages/Home.js
import Banner from '../components/Banner';
import Twocolumn from '../components/TwoColFirst';
import Wedo from '../components/WeDo';
import ArtExperts from '../components/ArtExperts';
import Gallery from '../components/Gallery';
import Projects from '../components/Projects';

function Home() {
  return (
    <>
      <Banner />
      <Twocolumn />
      <Wedo />
      <ArtExperts />
<Projects/>
      <Gallery />
    </>
  );
}

export default Home;
