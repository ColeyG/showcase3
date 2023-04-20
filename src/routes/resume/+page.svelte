<script>
  import Contact from "$lib/Contact.svelte";
  import HomeLink from "$lib/HomeLink.svelte";

  let contactOpen = false;

  let openContact = (e) => {
    e.preventDefault();
    contactOpen = true;
  };
</script>

<Contact bind:externalOpen={contactOpen} />
<HomeLink />
<div class="resume">
  <p>Web R&eacute;sum&eacute;</p>
  <p class="primary-text">
    I am a focused developer with a lot of web expertise. I've managed to build
    a large working knowledge set of languages and definitely therefore consider
    myself a polyglot when it comes to programming. Don't hesitate to <a
      href="/"
      on:click={openContact}>reach out</a
    > should there be anything that you think I can help with creating or solving.
    I can also help with any search engine optimization, software analytics, or accessibility
    reports & remediation that your application might need.
  </p>
  <div class="columns">
    <div class="left">
      <p class="title">Technical Skills</p>
      <p class="semi-title">Languages</p>
      <p class="list-text">
        JavaScript, PHP<br />
        SQL, Bash, C<br />
        Python, Rust, Java
      </p>
      <p class="semi-title">Web Development</p>
      <p class="list-text">
        React, Vue, Svelte<br />
        jQuery<br />
        HTML, CSS, Sass<br />
        SEO, AODA<br />
        Accessibility
      </p>
      <p class="semi-title">Frameworks</p>
      <p class="list-text">
        Wordpress<br />
        Drupal, Laravel<br />
        NextJS, Gatsby<br />
        Magento
      </p>
      <p class="semi-title">Technologies</p>
      <p class="list-text">
        Linux<br />
        Google Cloud Platform<br />
        Git, CI/CD<br />
        Arduino, Raspberry Pi<br />
        Adobe Creative Suite<br />
        AWS<br />
        Networking
      </p>
      <p class="title">Business Skills</p>
      <p class="list-text">
        Analytics & Business Data<br />
        Client Satisfaction<br />
        Team Collaboration<br />
        Sprint Planning Methods<br />
        Scope Setting<br />
        Responsive Design
      </p>
      <p class="title">Certificates</p>
      <p class="list-text">
        Google Analytics & Advanced Analytics Certificates
      </p>
    </div>
    <div class="right">
      <p class="title">Professional Experience</p>
      <p class="semi-title-highlight">Web Developer</p>
      <p class="semi-title-fade">Kalamuna Inc, Oakland, CA 4/2021 – 3/2023</p>
      <p class="list-text">
        Established new practices for Web Development solutions in new
        frameworks and contributed to ongoing support of existing work remotely.
        Acted as liaison between development & design team and client for
        gathering business and functional specifications and communicating
        project status reports and updates
      </p>
      <ul>
        <li>
          Led and contributed to the development of internal tools like testing
          frameworks prototype libraries
        </li>
        <li>
          Enabled and enhanced continuous improvement and continuous deployment
          of our portfolio by upgrading and creating new code pipelines
        </li>
        <li>
          Was a core member of the accessibility team, and took ownership of
          advancing access to applications developed by Kalamuna for all users
        </li>
      </ul>
      <p class="semi-title-highlight">Drupal Development Intern</p>
      <p class="semi-title-fade">Digital Echidna, London, ON 2/2020 – 3/2020</p>
      <p class="list-text">
        Applied knowledge of progressive development strategies to contribute to
        architecture of Drupal and backend code solutions.
      </p>
      <ul>
        <li>
          Quickly mastered new systems and concepts, increasing my capacity for
          additional work and thereby furthering my training on more complex
          subject matter.
        </li>
      </ul>
      <p class="semi-title-highlight">Junior Web Developer</p>
      <p class="semi-title-fade">
        Northern Commerce, London, ON 11/2018 – 8/2019
      </p>
      <p class="list-text">
        Leveraged knowledge of web software to write code in support of
        eCommerce web development projects.
      </p>
      <ul>
        <li>
          Specialized in scripting, styling, and testing high traffic consumer
          sites in rapid development environments.
        </li>
        <li>
          Championed on-the-job safety as a founding member of Joint Health &
          Safety Committee with OSHA certification.
        </li>
      </ul>
      <p class="semi-title-highlight">Crew Member</p>
      <p class="semi-title-fade">
        McDonalds Canada, Ingersoll, ON 4/2016 – 11/2018
      </p>
      <p class="list-text">
        Greeted customers and effectively ensured courteous and quick service.
        Prepared and served drinks and food in accordance with health codes and
        restaurant standards. Worked as a Junior Joint Health and Safety
        Committee member to ensure procedures were followed and improved.
      </p>
      <p class="title">Education</p>
      <p class="semi-title-highlight">
        Advanced Diploma, Interactive Media Specialist
      </p>
      <p class="semi-title-fade">Fanshawe College, London, Ontario 4/2020</p>
      <p class="semi-title-fade">Achieved Dean's List</p>
      <p class="semi-title-highlight">
        Diploma, Interactive Media Design & Development
      </p>
      <p class="semi-title-fade">Fanshawe College, London, Ontario 5/2018</p>
      <p class="semi-title-fade">
        <span>Secondary School Studies</span> completed at Ingersoll District Collegiate
        Institute
      </p>
    </div>
  </div>
</div>

<style>
  .resume {
    max-width: 800px;
    position: relative;
    z-index: 105;
    margin: 90px auto;
    padding: 8px;
    padding-bottom: 90px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .primary-text {
    width: 100%;
    border-bottom: 3px solid black;
    padding: 8px 0;
    line-height: 20px;
  }

  .primary-text a {
    color: black;
  }

  .resume .columns {
    margin-top: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
  }

  .resume .columns .left {
    margin-right: 8px;
    width: 160px;
  }

  .resume .columns .right {
    width: 632px;
  }

  .right ul {
    line-height: 20px;
    list-style-type: circle;
    margin-left: 16px;
  }

  .title {
    font-weight: bold;
    margin-bottom: 4px;
    text-decoration: underline;
  }

  .semi-title,
  .semi-title-highlight,
  .semi-title-fade {
    font-weight: bold;
    margin-bottom: 4px;
  }

  .semi-title-highlight {
    color: #8154ef;
    font-size: 1.2rem;
    margin-top: 8px;
  }

  .semi-title-fade {
    opacity: 0.7;
    font-size: 0.9rem;
  }

  .list-text {
    margin-bottom: 8px;
    line-height: 20px;
  }

  span {
    font-style: italic;
  }
</style>
