import React, { Component } from 'react'
import './info.css'

export default class Info extends Component {
  render() {
    return (
      <div>
        <div className='row gradient1'>
          <div className='col-12'></div>
        </div>

        <div className='row marketing p-2'>
          <div className='col-lg-4'>
            <h2>Marketing...</h2>
            <p className='font-italic font-weight-normal'>
              Digital Marketing is a term defined to achieve your business
              objectives and goals using the online channels that include but
              are not limited to search engines, social media platforms, content
              creation & advertising in order to educate, engage & market your
              product or service to potential buyers.
            </p>
          </div>
          <div className='col-lg-3 d-flex flex-lg-column justify-content-center'>
            <div className='d-flex flex-row justify-content-center'>
              <span className='fa-stack fa-3x'>
                <i className='fas fa-square fa-stack-2x'></i>
                <i className='fas fa-sign fa-stack-1x fa-inverse'></i>
              </span>
              <span className='fa-stack fa-3x'>
                <i className='fas fa-square fa-stack-2x'></i>
                <i className='fas fa-mobile-alt fa-stack-1x fa-inverse'></i>
              </span>
            </div>
            <div className='d-flex flex-row justify-content-center'>
              <span className='d-none d-sm-block fa-stack fa-3x'>
                <i className='fas fa-square fa-stack-2x'></i>
                <i className='fab fa-facebook fa-stack-1x fa-inverse'></i>
              </span>
              <span className='fa-stack fa-3x'>
                <i className='fas fa-square fa-stack-2x'></i>
                <i className='fas fa-search-dollar fa-stack-1x fa-inverse'></i>
              </span>
            </div>
          </div>
          <div className='col-lg-5'>
            <h2>A Variety of Channels...</h2>
            <p className='font-italic font-weight-normal'>
              Not all businesses are the same, which means{' '}
              <b>not all marketing strategies should be</b> the same. We work
              with you to determine your target audience, then custom fit a
              marketing strategy to optimize your return. Utilizing the best
              methods to bring customers to you - it's thinking outside the ad.
            </p>
          </div>
        </div>

        <div className='row gradient2'>
          <div className='col-12'></div>
        </div>

        <div className='row seo p-2'>
          <div className='col-lg-4'>
            <h2>Search Engine Optimization...</h2>
            <p className='font-italic font-weight-normal'>
              SEO is a methodology of strategies, techniques and tactics used to
              increase the amount of visitors to a website by obtaining a
              high-ranking placement in the search results page of a search
              engine (SERP) — including Google, Bing, Yahoo and other search
              engines.
            </p>
          </div>
          <div className='col-lg-3 d-flex flex-lg-column justify-content-center'>
            <div className='d-flex flex-row justify-content-center'>
              <span className='fa-stack fa-3x'>
                <i className='fas fa-square fa-stack-2x'></i>
                <i className='fab fa-chrome fa-stack-1x fa-inverse'></i>
              </span>
              <span className='fa-stack fa-3x'>
                <i className='fas fa-square fa-stack-2x'></i>
                <i className='fab fa-firefox fa-stack-1x fa-inverse'></i>
              </span>
            </div>
            <div className='d-flex flex-row justify-content-center'>
              <span className='d-none d-sm-block fa-stack fa-3x'>
                <i className='fas fa-square fa-stack-2x'></i>
                <i className='fab fa-internet-explorer fa-stack-1x fa-inverse'></i>
              </span>
              <span className='fa-stack fa-3x'>
                <i className='fas fa-square fa-stack-2x'></i>
                <i className='fab fa-safari fa-stack-1x fa-inverse'></i>
              </span>
            </div>
          </div>
          <div className='col-lg-5'>
            <h2>Critical Techniques...</h2>
            <p className='font-italic font-weight-normal'>
              Your Bravo Echo website design includes techniques that improve
              your search results over multiple browsers. Design elements that
              promote a modern look are important, but we also incorporate
              techniques to maximize the quality of your SEO score, like overall{' '}
              <b>loading speed</b> of your site, <b>metadata</b> inclusion, the{' '}
              <b>architecture</b> of your site and the <b>structure</b> of your
              data.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
