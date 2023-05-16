import"./ContainerStyleStory.css";
import leftImg from './Sourceimg/Left.png'
import topright from './Sourceimg/Top-right.png'
import bottomLeft from './Sourceimg/Bottom-left.png'

function ContainerStory () {
  return (
    <section id="about">
      <div className="container-story">
        <div className="row">
          <div className="row-story-wrap col-md-4">
            <h1 className="story-PIT">Premium Info Tech Story</h1>
            <p className="story-content-1">Premium Info Tech Sdn Bhd (formerly know as Premium Info Tech Software Engineering)
              is a Software Development &amp; Consultancy company located in Kuala Lumpur. We help organisations</p>
            <p className="story-content-2">We have a leading team who are skilled professionals ready to deliver on customer
              satisfaction.
              We focus on creative and comprehensive mobile and web solutions to make technology a success
              factor in your business.</p>
            <p className="story-content-3">Successful and timely delivery of applications for both small and large companies
              has
              given us
              the reputation and experience to better serve all our clients better than before.</p>
          </div>
          
          <div className="col-md-4">
            <img className="image-left" src={leftImg} alt="" />
          </div>
          <div className="col-md-4">
            <img className="image-top-right" src={topright} alt="" />
            <img className="image-bottom-right" src={bottomLeft} alt="" />
          </div>
        </div>
      </div>
  </section>
);
}

export default ContainerStory;