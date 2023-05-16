import"./ContainerStyleService.css";
import rwd from "./iconService/Responsive Web Design.png";
import mad from "./iconService/Mobile App Development.png";
import ba from "./iconService/Business Application.png";


function ContainerService () {
  return  ( 
  <section id="service">
    <div className="service-tittle-grid"> 
      <p className="service-tittle">We are at your service</p>
    </div>

    <div className="container-service">
      <div className="row service">
        <div className="a col-md-4">
          <div className="card-01">
            <img className="rwd-icon" src= { rwd } alt="" />
            <h1 className="rwd-tittle">Responsive Web<br />design</h1>
            <p className="rwd-content">Best coding practices and<br />collaboration tools to deliver<br />
              responsive and interactive design<br />to enhance work efficiency.</p>
          </div> 
        </div>
        <div className="a col-md-4">
          <div className="card-02">
            <img className="mad-icon" src= { mad } alt="" />
            <h1 className="mad-tittle">Mobile App<br />Development</h1>
            <p className="mad-content">We provide end-to-end services<br /> to develop powerful,brand<br />
              driven mobile appcation with<br /> eye cathching multi-touch interfaces</p>
          </div>
        </div>
        <div className="a col-md-4">
          <div className="card-03">
            <img className="ba-icon" src= { ba } alt="" />
            <h1 className="ba-tittle">Business<br />Solution</h1>
            <p className="ba-content">We work with you to develop<br /> powerful, one of a kind software<br />
              intended to meet you and your<br />
              customers unique demand.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

export default ContainerService;



