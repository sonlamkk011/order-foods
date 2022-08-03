import { CardImg } from "reactstrap";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="wrap-container">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="row">
                    <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                      <h3 className="font-weight-bold">Welcome Oder Foods</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{}}>
                <div className="col-lg-8 h-100">
                  <CardImg
                    width="100%"
                    className="img"
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/healthyfoodsnoteveryday-main-1508848485.jpg"
                  />
                </div>
                <div className="col-lg-4 h-100">
                  <div className="row">
                    <div className="col-6 h-50">
                      <CardImg
                        className="item-img"
                        src="https://ngonaz.com/wp-content/uploads/2021/12/cach-lam-com-rang-hai-san-1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
