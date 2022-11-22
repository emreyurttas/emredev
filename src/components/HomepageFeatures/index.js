import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <p><a href="https://assetstore.unity.com/packages/tools/gui/loading-screen-pro-236929">Loading Screen Pro</a></p>,
    Svg: require('@site/static/img/loading_screen_pro.svg').default,
    description: (
      <>
        An easy-to-use loading screen package that can be integrated with a single line of code.
      </>
    ),
  },
  {
    title: <p><a href="https://assetstore.unity.com/packages/tools/utilities/simple-screenshot-230822">Simple Screenshot</a></p>,
    Svg: require('@site/static/img/simple_screenshot.svg').default,
    description: (
      <>
        User-friendly screenshot tool.
      </>
    ),
  },
  {
    title: <p><a href="https://assetstore.unity.com/packages/3d/props/weapons/stylized-sword-pack-3d-232740">Stylized Sword Pack 3D</a></p>,
    Svg: require('@site/static/img/stylized_sword_pack_3D.svg').default,
    description: (
      <>
        Stylized sword pack containing 36 stylized sword presets. 
        
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
