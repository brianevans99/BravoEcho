import React, { Fragment, Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../Components/Footer/Footer'
import coffeeShop from '../../assets/images/coffeeShop.jpg'

class Blog extends Component {
  state = {
    loading: true,
    blogItems: [],
  }

  render() {
    return (
      <Fragment>
        <div className='' id='design'></div>
        <Container>
          <Row className=' d-flex flex-row align-items-center'>
            <Col className='text-justify'>
              <h5 className='animated fadeIn'>
                We want your business to succeed. Here are some insights on how
                to handle your business and be successful. Blog posts are
                regularly updated so check back often.
              </h5>
            </Col>
          </Row>
          <Row>
            <Col className=''>
              <p>Published: October 18, 2020</p>
              <Row>
                <Col lg={6}>
                  <h2>
                    5 Ways Small Business Owners Are Surviving and Thriving in
                    2020
                  </h2>
                  <p>In this article:</p>
                  <ul>
                    <li>Making smart use of social media</li>
                    <li>Finding customers in new places</li>
                    <li>
                      Helping customers and employees feel safe and secure
                    </li>
                    <li>Shifting their small businesses to an online model</li>
                    <li>Forming relationships in the community</li>
                  </ul>
                </Col>
                <Col lg={6}>
                  <div>
                    <img className='img-fluid' src={coffeeShop} alt='' />
                  </div>
                </Col>
              </Row>
              <p>
                The coronavirus pandemic has completely upended “business as
                usual.” Many small business owners are struggling to survive as
                the economy has virtually shut down—forcing some to shut their
                doors for good.
              </p>
              <p>
                However, other small businesses are surviving and thriving,
                finding new ways to adapt in a post-pandemic world. Learn how
                small business owners are finding success in 2020 and how you
                can too by transforming your business model to meet the needs of
                today’s customers.
              </p>
              <h4>#1: Making smart use of social media</h4>
              <p>
                In 2020, social media may be more important than ever before. It
                is how loved ones stay in touch despite being miles apart, and
                how people stay connected to what’s happening in the outside
                world. Why not meet your customers where they are?
              </p>
              <p>
                Many businesses are successfully using social media in unique
                ways to promote their products and services. For example, gyms
                can use social media to livestream short classes for free and
                give potential paying customers a taste of what to expect when
                they pay for full-length virtual classes.
              </p>
              <p>
                In general, it’s important to use social media to build a brand
                that people feel they can rely on, even in these tough times.
                Adopt a voice that is welcoming to all and consider giving away
                freebies or discounts to your followers.
              </p>
              <h4>#2: Finding customers in new places</h4>
              <p>
                Adapting your business to a local audience that is wary of going
                out into the public may be difficult, but even the most unlikely
                of businesses have been able to survive in these times. In areas
                that rely heavily on tourism for new business, companies have
                found new ways to reach new customers locally.
              </p>
              <p>
                For example, in areas that allow it, bars that once attracted
                tourism are now offering cocktails to-go for locals. Small music
                venues are hosting shows online.
              </p>
              <h4>#3: Helping customers and employees feel safe and secure</h4>
              <p>
                One of the best things you can do in these times to keep
                customers coming back is making them feel safe. If you can, go
                above and beyond in practicing social distancing, such as
                placing stickers on the ground to mark a six-foot distance.
              </p>
              <p>
                Provide easy-to-find hand sanitizer or shopping basket wipes to
                customers as they walk through the door. And make sure you’re
                providing ample accommodations and sick leave whenever possible
                for your employees. Happy employees will spread the word, not
                the virus!
              </p>
              <h4>#4: Shifting their small businesses to an online model</h4>
              <p>
                Some businesses can shift their services entirely online during
                the coronavirus pandemic, and they are finding more and more
                creative ways to do so. Small gyms, karate studios, and yoga
                classes are moving online so that people can log on via video
                conferencing from home.
              </p>
              <p>
                Some businesses that typically provide services in the home are
                now able to coach clients via one-on-one video calls. For
                example, professional organizers can look at their clients’
                homes via webcam, help them choose the right organizational
                supplies, and then teach them to organize their own homes. Dog
                trainers, personal trainers, and interior designers can do the
                same. the virus!
              </p>
              <p>
                If you sell physical products, you can always shift to online
                delivery services or product shipping. In this case, the most
                successful businesses have aggressively marketed their items on
                social media, Google ads, and video ads.
              </p>
              <h4>#5: Forming relationships in the community</h4>
              <p>
                Finally, community-building is a great way to find new customers
                outside of your typical customer base. Some neighborhoods have
                created easy online shopping experiences to help locals support
                many of the businesses within the community. If something like
                this does not already exist in your area, try organizing one!
              </p>
              <p>
                Product sellers can form relationships with high-traffic brick
                and mortar stores or delivery services to help market their
                products. For example, florists can sell bouquets through
                grocery stores or use the same delivery apps that restaurants
                use.
              </p>
              <p>
                Whatever your business needs to survive and thrive throughout
                this pandemic, it is time to get started. Get involved in your
                community, get creative, and expand your customer base today.
              </p>
              <p style={{ color: '#6e7f80' }}>
                Business photo created by freepik -{' '}
                <a
                  href='https://www.freepik.com/photos/business'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  www.freepik.com
                </a>
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default Blog
