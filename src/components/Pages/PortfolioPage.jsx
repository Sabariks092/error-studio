import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import portfolio_hero_bg from '../../assets/images/portfolio_hero_bg.jpeg';
import portfolio_4 from '../../assets/images/portfolio_4.jpeg';
import portfolio_5 from '../../assets/images/portfolio_5.jpeg';
import portfolio_6 from '../../assets/images/portfolio_6.jpeg';
import portfolio_7 from '../../assets/images/portfolio_7.jpeg';
import portfolio_8 from '../../assets/images/portfolio_8.jpeg';
import portfolio_9 from '../../assets/images/portfolio_9.jpeg';
import portfolio_10 from '../../assets/images/portfolio_10.jpeg';
import cta_bg_2 from '../../assets/images/cta_bg_2.jpeg';
const portfolioData = [
  {
    title: 'Sunset Union',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: portfolio_4,
    category: 'wedding',
  },
  {
    title: 'Tech Launch 2025',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: portfolio_5,
    category: 'event',
  },
  {
    title: 'Urban Fashion',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: portfolio_6,
    category: 'commercial',
  },
  {
    title: 'Product Reveal',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: portfolio_7,
    category: 'commercial',
  },
  {
    title: 'Maternity Shoot',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: portfolio_8,
    category: 'wedding',
  },
  {
    title: 'Corporate Gala',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: portfolio_9,
    category: 'event',
  },
  {
    title: 'Cinematic Edit',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: portfolio_10,
    category: 'creative',
  },
];

const categoryMenu = [
  {
    title: 'Weddings',
    category: 'wedding',
  },
  {
    title: 'Events',
    category: 'event',
  },
  {
    title: 'Commercial',
    category: 'commercial',
  },
  {
    title: 'Creative Edits',
    category: 'creative',
  },
];

export default function PortfolioPage() {
  pageTitle('Portfolio');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc={portfolio_hero_bg}
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc={cta_bg_2}
        variant="rounded-0"
      />
    </>
  );
}
