import React from 'react';
import { Col, Layout } from 'antd';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { ArtistCard } from '../../components/ArtistCard';
import { useMeta } from '../../contexts';

export const EcuadorView = () => (
    <>
    <div className="mission">
      <br></br>
      <h1>
      InvestConservation’s first tokens focus on the conservation of Threatened Ecuador.
      </h1>

      <h3>
      Ecuador has one of the highest levels of biodiversity on earth. As an example, Fundación Jocotoco protects 10% of all bird species in the world on less than 0.00016% of the earth’s surface.<br></br>
      <br></br>Ecuador also faces significant ongoing deforestation pressures. Particular focus is on halting deforestation of the: humid Chocó in the north-west, dry Tumbesian in the south-west, Andean cloud forests, and Amazonian foothill forests.
      </h3>
      <br></br>
      <h1>
      Token Project 1: Buenaventura Reserve
      </h1>
      <h3>
      The 3,500ha Buenaventura reserve in south-west Ecuador protects one of the most extensive patches of piedmont cloud forest in the western foothills of the Andes. In this area, elements of dry Tumbesian forests from southern Ecuador and northwestern Peru are combined with species from the humid forests of the Chocó in northwestern Ecuador.  This is one of the most devastated regions worldwide, since it is estimated that only 5-10% of the original forest cover remains standing. <br></br><br></br>
The reserve has a register of more than 330 species of birds, out of which 15 are globally endangered and 34 are local endemics. The global distribution of both the El Oro Parakeet Pyrrhura orcesi (EN) and the Ecuadorian Tapaculo Cytalopus robbins (EN) are restricted to this reserve. Other threatened bird species include Gray-Backed Hawk Pseudastur occidentalis (EN), Long-wattled Umbrellabird Cephalopterus penduliger (VU), Gray-cheeked Parakeet Brotogeris pyrrhoptera (VU). <br></br><br></br>
The reserve also protects a re-introduced population of the critically endangered Ecuadorian Capuchin Cebus aequatorialis (CR). <br></br><br></br>
Funds are used to manage the reserve, to reforest cleared (non-tokenized) areas within the reserve, and to expand the reserve through acquisition of neighboring properties.

      </h3>
    </div>
    
    <div className="rules">
    </div>

    <div className="FAQ">
    </div>

    </>
)


;



const { Content } = Layout;


/*
import { Col, Layout } from 'antd';
import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { ArtistCard } from '../../components/ArtistCard';
import { useMeta } from '../../contexts';

const { Content } = Layout;

export const AboutUsView = () => {
  <>
  <div className="mission">
  <h2>Trying to get a better idea of what you’ve stumbled upon, you work up the courage to say in hushed tones to a merchant, <span className='purple'>“Why does this Magic Items Marketplace exist?”</span></h2>
  <h3>"Because digital artists should be compensated for making digital art," barks the merchant with a scowl.</h3>
  <h3>A bearded fellow with deep, ancient creases in his skin looks up from his browsing with a far-off gaze. He pontificates softly, "Because D&D is built to collectively imagine new worlds, making it an excellent space to explore what it means to 'own' imaginary objects."</h3>
  <h3>A tiny goblin hops onto a counter and hisses in your general direction, shrieking, "Because there are so many cash-grab NFT projects out there! We need more projects that put this technology in the hands of creative creatures..."</h3>
  <br></br>
  <hr></hr>
  <br></br>
</div>

<div className="rules">
  <h2>R</h2>
  <br></br>
  <br></br>
  <h2>ules by which the Magic Items Marketplace is run:</h2>
  <h3>Rule 1: All artwork must be original, created by the named artist.</h3>
  <h3>Rule 2: Each individual artwork must only be minted and published once. While multiple copies of the item may be printed, each artwork must only have one "master edition."</h3>
  <h3>Rule 3: The DM always decides what items are playable in a specific game or campaign... Owning a digital Magic Item doesn't flat out entitle you to use it in a game, so tread lightly, be nice, and most importantly have fun.</h3>
  <br></br>
  <hr></hr>
  <br></br>
</div>

<div className="FAQ">
  <h4>FAQ:</h4>
  <h3>What is a Magic Item NFT, and what does it do?</h3>
  <h2>Think of these Magical Items like digital trading cards signed by the artist - limited edition copies of a 2D or 3D rendition of an object in an rpg universe.</h2>
  <h2>Truth is, we are at the frontier of integrating digital objects into our games and into our lives, so we don't exactly know what makes certain digital objects special. You may want to simply collect and trade Magic Items because you think they're beautiful or interesting. You might want to gift a Magic Item to your DM as a token of your appreciation for their creative work. Down the road, you might find a way to integrate these 2D or 3D items into virtual gaming environments. How you think about these items is entirely up to you.</h2>
  <h2>One thing is certain - you don't need a special internet object to use a magic item in your tabletop rpg. It can be cool to own an artistic rendition of a thing, but you definitely don't need an NFT to play DnD! When in doubt, remember Rule 3 above.</h2>
  <br></br>
  <h3>Someone wants to give me a Magic Item - what should I do next?</h3>
  <h2>Step 1) Download the “Phantom Wallet” Chrome Extension</h2>
  <h2>Step 2) Create a new wallet. Write the Secret Recovery Phrase on paper and keep it secret, keep it safe. Choose a good password that’s hard to guess.</h2>
  <h2>Step 3) The default name of your wallet is your “Public Key” - your identity on the Solana blockchain - you can give it out safely, to use for transactions.</h2>
  <h2>If someone has offered to give you a Magic Item, give them your Public Key and they’ll send you the item. When you receive the item, it will show up in your Phantom Wallet.</h2>
  <br></br>
  <h3>How do I buy magic items? How do I sell items I have created myself?</h3>
  <h2>If you want to buy or sell a Magic Item, click “Connect” on the Magic Items page.</h2>
  <h2>To buy something, choose an auction or single sale. Make the purchase by using a credit card to buy SOL, or paying with SOL from your wallet directly.</h2>
  <h2>To sell something, you need to be whitelisted as an artist on the site. Contact u/ghostoutfits on Reddit by private message, and the site mods will give you further instructions.</h2>
  <br></br>
  <h3>Aren't NFTs just a scam? Aren't people paying millions of dollars for a single jpeg?</h3>
  <h2>Plenty of NFTs are scams or at least just kind of dumb, and we have no advice for you on whether NFTs are a wise investment.</h2>         
  <h2>NFTs are special because they've allowed digital objects to have real scarcity - that is, the NFT itself cannot be copied. Investment aside, our vision for this site is like "Magic Item Etsy" - a marketplace where digital artists engage with rpg enthusiasts to enhance each other’s activities.</h2>
  <br></br>
  <h3>No, but seriously - Why would I pay money for a digital imaginary thing? How is it any different from a copy or a screenshot?</h3>
  <h2>Umm... Yah it's hard to say. If it doesn't seem special to you to own a "signed" card, that's a-ok. It's early days for digital objects, but we think the best way to learn more about how digital scarcity operates in our weird "Ready Player One" future is to try this shit out and see how it works. </h2>
  <br></br>
</div>
  </>


  const { whitelistedCreatorsByCreator } = useMeta();

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  
  const items = Object.values(whitelistedCreatorsByCreator);
  const artistGrid = (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid artists-masonry"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((m, idx) => {
        const id = m.info.address;
        return (
          <Link to={`/aboutus/${id}`} key={idx}>
            <ArtistCard
              key={id}
              artist={{
                address: m.info.address,
                name: m.info.name || '',
                image: m.info.image || '',
                link: m.info.twitter || '',
                background: m.info.background || '',
              }}
            />
          </Link>
        );
      })}
    </Masonry>
  );

  return (
    <Layout style={{ margin: 0, marginTop: 30 }}>
      <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Col style={{ width: '100%', marginTop: 10 }}>{artistGrid}</Col>
      </Content>
    </Layout>
  );
};
*/


