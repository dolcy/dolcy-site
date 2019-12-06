<template>
  <div id="app">
    <div class="container grid-xl">
      <div class="container">
        <div class="columns col-gapless">
          <div class="column col-md-12 col-xs-12">
            <div id="start" class="media-header-left">
              <div class="hero hero-lg bg-gray px-10 px-10">
                <div class="hero-body">
                  <h1>Where apps meet propulsion.</h1>
                  <p class="hide-sm">
                    Dolcy Interactive builds and launches Laravel/Vue applications into the stratosphere. Fuel included.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column col-md-12 col-xs-12">
            <div class="media-header-right">
              <div class="bg-primary">
                <div class="media-header-right bg-gray">
                  <div class="hero hero-lg media-box">
                    <video autoplay loop muted width="629" height="600">
                      <source src="~assets/img/rocket_launch_fin.mp4" type="video/mp4" codecs=" H.264/MPEG-4">
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="media-overlay hide-md">
          <dolcy-intro/>
        </div>
      </div>
      <client-only>
        <main>
          <div class="container">
            <div class="columns">
              <!-- left sidebar -->
              <aside class="sidebar column col-3 col-md-3 col-lg-3 hide-sm">
                <a-anchor :affix="true">
                  <a-anchor-link href="#start" title="Start"/>
                  <a-anchor-link href="#synopsis" title="Synopsis"/>
                  <a-anchor-link href="#services" title="Services"/>
                  <a-anchor-link href="#work" title="Work"/>
                  <a-anchor-link href="#contact" title="Contact"/>
                </a-anchor>
                </affix>
              </aside>
              <!-- right main container -->
              <div class="column col-9 col-sm-12 col-md-9 col-lg-9">
                <div id="main-container" class="main-container">
                  <section id="synopsis">
                    <div class="hero-body">
                      <div class="hero-body-title">
                        <h1>Synopsis</h1>
                      </div>
                      <a-card>
                        <Synopsis/>
                        <div class="bio-container">
                          <a-collapse accordion>
                            <a-collapse-panel key="0" header="Who is Shaughn Dolcy?">
                              <div class="container">
                                <div class="columns">
                                  <div class="column col-8 col-lg-8 col-md-12">
                                    <h4 class="pt-2">
                                      The dude with a cool spelling name (so they say)...
                                    </h4>
                                    <p>
                                      Shaughn, born in Endicott, NY, brings over 20 years of experience in delivering a rare mix of visual communications, brand management, business development and technical efficiency. In 1998, Shaughn launched his
                                      first
                                      digital marketing agency, Reaction Interactive, located just a few blocks from The Empire State Building. Shaughn has advised more than 72 Fortune 1000 companies on maximizing ROI in digital media.
                                    </p>
                                    <p>
                                      Prior to launching Dolcy Interactive, Shaughn was an Assistant Producer and Senior Account Executive at Ember Media, an award-winning digital media powerhouse, where he spearheaded the sales strategy and project
                                      management for key accounts including Krug Champagne, Pepsi, New York Institute of Technology, NAMIC, 360 Hip Hop, Hyundai, Immersion Graphics, Viacom and Prudential. Moreover, he was instrumental in developing
                                      the NYC
                                      Fire Department Museum Interactive Kiosks located at Rockefeller Center, which won the prestigious I.D. Magazine Excellence Award. By using a proven sales model, Shaughn helped generate over $1.2 million in Ember
                                      Media’s
                                      first year of operations.
                                    </p>
                                    <p>
                                      As Director of Sales at Oddcast Media Technologies, Shaughn consulted companies including Heineken, McDonald's, MTV and other major brands. Shaughn later joined Workforce1, a job training initiative launched by
                                      Mayor
                                      Michael Bloomberg, at its inception where he pioneered an interactive software training curriculum, which was integrated into other training hubs.
                                    </p>
                                    <p>
                                      Shaughn's unique ability to create sharp, original visual communications and a commanding grasp of PHP/Node software development frameworks accredit Shaughn as a master craftsman. And his mastery in producing
                                      exceptional
                                      work is second to none.
                                    </p>
                                    <p>Shaughn digs trip-hop (gotta love the Brits), PC gaming (Half Life 2- best game of all time) and all things D! Shaughn currently resides with his wife Tamara and son Rhys in Brooklyn, NY.</p>
                                  </div>
                                  <div class="column col-4 col-lg-4 col-md-12">
                                    <img src="~assets/img/dolcy_profile.jpg" class="img-responsive p-centered pt-2" alt="">
                                  </div>
                                </div>
                              </div>
                            </a-collapse-panel>
                          </a-collapse>
                        </div>
                      </a-card>
                    </div>
                  </section>

                  <section id="services">
                    <div class="hero-body">
                      <div class="hero-body-title">
                        <h1>Services</h1>
                      </div>
                      <a-card>
                        <div class="container">
                          <div class="columns">
                            <div class="column col-8 col-md-12">
                              <Services/>
                            </div>
                            <div class="column col-gapless col-4 col-md-12 service-tools">
                              <h5>Tech stack we use everyday:</h5>
                              <a-collapse accordion>
                                <a-collapse-panel key="1" header="Laravel">
                                  <p>Laravel, our primary app development tool, is a well-established full-stack PHP framework. We are absolutely ecstatic to work with Laravel and its brilliant architecture.</p>
                                </a-collapse-panel>
                                <a-collapse-panel key="2" header="Vue.js" :disabled="false">
                                  <p>Our front-end framework of choice is Vue.js, which functions as our multi-tool for all things dynamic. Vue.js works hand in glove with Laravel; a match made in heaven.</p>
                                </a-collapse-panel>
                                <a-collapse-panel key="3" header="Nuxt.js" :disabled="false">
                                  <p>We use Nuxt.js to build nimble, modular apps. Nuxt.js is built on Vue.js and is a solid foundation for developing 'static', single page applications.</p>
                                </a-collapse-panel>
                                <a-collapse-panel key="4" header="Postgres" :disabled="false">
                                  <p>Postgres is a stable, industry-leading database focused on providing reliable persistence of your application's data. Postgres is open source and is used by enterprises big and small.</p>
                                </a-collapse-panel>
                                <a-collapse-panel key="5" header="Docker" :disabled="false">
                                  <p>
                                    Application deployments can be complex and costly. Docker solves this problem by offering a robust portability service engine that keeps your application running smooth and continuously optimized. We also use Docker
                                    with local development.
                                  </p>
                                </a-collapse-panel>
                                <a-collapse-panel key="6" header="GraphQL" :disabled="false">
                                  <p>A maintainable, performant API keeps your application relevant and universally accessible. As an alternative to REST, our team reckons that GraphQL is far more flexible in the long run.</p>
                                </a-collapse-panel>
                              </a-collapse>
                            </div>
                          </div>
                        </div>
                      </a-card>
                    </div>
                  </section>

                  <section id="work">
                    <div class="hero-body">
                      <div class="hero-body-title">
                        <h1>Work</h1>
                      </div>
                      <a-card>
                        <Work/>
                        <hooper style="height: 400px" :wheel-control="false" :items-to-show="1.00" :center-mode="true">
                          <!-- H-CAP slide 1 -->
                          <slide>
                            <div class="container">
                              <div class="columns">
                                <div class="column col-5 col-md-12">
                                  <p>
                                    Dolcy Interactive developed the <a href="https://hcapinc.org">
                                      <a-icon type="link"/>H-CAP</a> website on a custom Laravel backend and with a Vue.js front-end. We also crafted a well-sorted Material Design inspired theme.
                                  </p>
                                  <p class="hide-lg">
                                    Moreover, a custom Laravel-based administration
                                    system was also developed and integrated.
                                  </p>
                                </div>
                                <div class="column col-7 col-md-12">
                                  <img src="~assets/img/work/hcap_work.png" class="img-responsive p-centered pt-1" alt="">
                                </div>
                              </div>
                            </div>
                          </slide>
                          <!-- National Library slide 2 -->
                          <slide>
                            <div class="container">
                              <div class="columns">
                                <div class="column col-5 col-md-12">
                                  <p>
                                    The <a href="https://hcapinc.org/about-the-national-library">
                                      <a-icon type="link"/>National Library</a> was built exclusively with Vue.js and the Algolia API. A custom field management back-end was developed with Laravel.
                                  </p>
                                  <p class="hide-lg">
                                    The library is accessed by thousands of users across the country and is managed on a custom Docker-driven server instance.
                                  </p>
                                </div>
                                <div class="column col-7 col-md-12">
                                  <img src="~assets/img/work/library_work.png" class="img-responsive p-centered pt-1" alt="">
                                </div>
                              </div>
                            </div>
                          </slide>
                          <!-- TotPilot slide 3 -->
                          <slide>
                            <div class="container">
                              <div class="columns">
                                <div class="column col-5 col-md-12">
                                  <p>
                                    <a href="https://totpilot.com/">
                                      <a-icon type="link"/>TotPilot</a>, a hosted platform for daycare providers and preschools, is a modern application for managing intakes, assessments, activity logs and reminders.
                                  </p>
                                  <p class="hide-lg">
                                    The back-end was developed in Laravel; the front-end was entirely implemented in Angular. Postmark was used for transactional emails.
                                  </p>
                                </div>
                                <div class="column col-7 col-md-12">
                                  <img src="~assets/img/work/totpilot_work.png" class="img-responsive p-centered pt-1" alt="">
                                </div>
                              </div>
                            </div>
                          </slide>
                          <!-- Apprentice Monitor slide 4 -->
                          <slide>
                            <div class="container">
                              <div class="columns">
                                <div class="column col-5 col-md-12">
                                  <p>
                                    <a href="https://apprenticemonitor.com/">
                                      <a-icon type="link"/>Apprentice Monitor</a> is a hosted platform for managing apprenticeship registrations. Features include apprentice administration, analytics and data conversion support.
                                  </p>

                                  <p class="hide-lg">
                                    The app is being developed on a Laravel/Vue base along with a custom Nuxt.js layer for static sections; the API is powered by GraphQL.
                                  </p>
                                </div>
                                <div class="column col-7 col-md-12">
                                  <img src="~assets/img/work/apprentice_work.png" class="img-responsive p-centered pt-1" alt="">
                                </div>
                              </div>
                            </div>
                          </slide>
                          <hooper-pagination slot="hooper-addons" class="hide-sm"/>
                          <hooper-progress slot="hooper-addons"/>
                        </hooper>
                      </a-card>
                    </div>
                  </section>

                  <section id="contact">
                    <div class="hero-body">
                      <div class="hero-body-title">
                        <h1>Contact</h1>
                      </div>
                      <a-card>
                        <Contact/>
                        <contact-form/>
                      </a-card>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <!-- Footer -->
            <section>
              <div class="container">
                <div class="columns col-gapless">
                  <div class="column col-12">
                    <div class="footer">
                      <div class="footer-logo">
                        <img class="p-centered" src="~/assets/img/dolcy_small_logomark.svg" alt="Dolcy Interactive">
                        <div class="text-center">
                          <br>
                          <!-- <h6 style="color: #ff6347">
                            CAUTION: This site is in BETA; there be dragons!
                          </h6> -->
                          <p class="py-2">
                            Copyright &copy; 2019 Dolcy Interactive, LLC -- All rights reserved. -- v6.3 -- Handcrafted in <a href="https://nuxtjs.org/">Nuxt.js</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </client-only>
    </div>
    </main>
    </client-only>
  </div>
  </div>
</template>
<script>
// import hooper slider
import {
  Hooper,
  Pagination as HooperPagination,
  Progress as HooperProgress,
  Slide
} from 'hooper'

// import markdown files
import Contact from '@/static/md/Contact'
import Services from '@/static/md/Services'
import Synopsis from '@/static/md/Synopsis'
import Work from '@/static/md/Work'

// import components
import ContactForm from '@/components/ContactForm'
import DolcyIntro from '@/components/DolcyIntro'

export default {
  components: {
    Hooper,
    HooperPagination,
    HooperProgress,
    Slide,
    Contact,
    Services,
    Synopsis,
    Work,
    DolcyIntro,
    ContactForm
  },
  data: () => ({
    active: false,
    hovered: false
  }),
  mounted() {
    const render = this.$anime.timeline({
      duration: 300,
      loop: true,
      opacity: 0
    })
    render.add({
      targets: '#nav-icon',
      translateX: ['67%', '57%'],
      translateY: 0,
      rotateZ: '1turn',
      opacity: [0, 1],
      offset: 0,
      scale: [0, 1],
      easing: 'linear'
    },
    '-=1900'
    )
  },
  methods: {
    //
  }
}
</script>

<style>
.media-header-left {
  position: relative;
  height: 566px;
}

.media-header-left .hero {
  position: relative;
  height: 566px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.media-header-left p {
  line-height: 2rem;
}

.media-header-left h1 {
  font-size: 1.6rem;
}

.media-header-right {
  position: relative;
  height: 566px;
}

.media-box {
  position: relative;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 566px;
  overflow: hidden;
}

.media-box video {
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;
  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;
  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.media-overlay {
  background: transparent;
  position: absolute;
  height: 566px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.service-tools {
  background: #FFF;
}

.service-tools p,
.ant-collapse p {
  margin: 0;
  font-size: .8rem;
  font-weight: 300;
}
</style>
