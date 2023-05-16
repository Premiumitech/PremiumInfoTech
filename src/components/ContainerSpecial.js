import'./ContainerStyleSpecial.css'
import otd from './iconSpecial/On-time delivery.png'
import sss from './iconSpecial/Secure & Scalable solution.png'
import cdf from './iconSpecial/Customize design & functionality.png'
import pc from './iconSpecial/Professional consultation.png'
import ca from './iconSpecial/Cost advantages.png'
import lt from './iconSpecial/Latest Technology.png'

function ContainerSpecial () {
  return (
    <section className="container-special">
    <div>
      <div className="special-tittle">
        <p className="special">We are special
        </p>
        <p className="special-content">We believe that every details down to the pixel in our products matters</p>
      </div>
    </div>
    <div className="row special">
      <div className="col-md-4">
        <div className="otd-icon-content-grid">
          <div className="otd-icon-content">
            <img className="otd-icon" src={otd} alt="" />
          </div>
          <div className="otd-info">
            <p className="otd-tittle">
              On-time delivery</p>
            <p className="otd-content">
              We deliver services to our customer
              ontime.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="otd-icon-content-grid">
          <div className="otd-icon-content">
            <img className="otd-icon" src={sss} alt="" />
          </div>
          <div className="otd-info">
            <p className="otd-tittle">
              Secure &amp; Scalable solution</p>
            <p className="otd-content">
              We ensure that you have performance
              monitoring to understand and guide the
              growth of your application.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="otd-icon-content-grid">
          <div className="otd-icon-content">
            <img className="otd-icon" src={cdf} alt="" />
          </div>
          <div className="otd-info">
            <p className="otd-tittle">
              Customize design &amp; functionality</p>
            <p className="otd-content">
              Create your own unique product and set
              yourself apart from the competition.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="otd-icon-content-grid">
          <div className="otd-icon-content">
            <img className="otd-icon" src={pc} alt="" />
          </div>
          <div className="otd-info">
            <p className="otd-tittle">
              Professional consultation</p>
            <p className="otd-content">
              We work closely with you to understand
              your requirement and translate them into
              functional specification.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="otd-icon-content-grid">
          <div className="otd-icon-content">
            <img className="otd-icon" src={ca} alt="" />
          </div>
          <div className="otd-info">
            <p className="otd-tittle">
              Cost advantages</p>
            <p className="otd-content">
              Dealing with an end to end solution
              delivery, we can help you with your
              budget.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="otd-icon-content-grid">
          <div className="otd-icon-content">
            <img className="otd-icon" src={lt} alt="" />
          </div>
          <div className="otd-info">
            <p className="otd-tittle">
              Latest Technology</p>
            <p className="otd-content">
              We design to use leading platforms that
              have access to high-end features and
              functionalities to ensure user experience is
              always the best.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

export default ContainerSpecial