import { Button, Card, CardImg, Col } from "reactstrap";
import "./FoodsDetails.scss";
import Products from "./Products";
const FoodsDetails = ({ lists, onAdd }) => {
  return (
    <>
        <main className=" col-6" style={{backgroundColor:"aliceblue", borderRadius:"20px", marginLeft:"50px"}}>
          <h1>Foods</h1>
          <div className="row">
            {lists.map((list) => (
              <Col md="4" key={list.id} onAdd={onAdd}>
                <Card className="cart" style={{ width: 300, marginTop:"30px"   }}>
                  <CardImg
                    style={{ width: 150, height: 120, margin: 20 }}
                    src={list.image}
                  />
                  <div>
                
                      <div
                        style={{
                          marginTop: -140,
                          marginLeft: 180,
                          fontSize: 20,
                        }}
                      >
                        {list.name}{" "}
                        
                       
                      
                        {" "}
                        {list.price} VND{" "}
                      
                      
                      <div
                        style={{
                          backgroundColor: "#00b14f",
                          width: 60,
                          fontSize:12,
                          marginLeft: -160,
                          float:"left",
                          marginTop: -35,
                          textAlign: "center",
                          color: "whitesmoke",
                        }}
                      >
                        {list.status}
                      </div>
                       <div>

                      <Button style={{marginTop:"15px",backgroundColor:"rgb(0, 177, 79)" }} onClick={() => onAdd(list)} >Add</Button>
                       </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </div>
        </main>
    </>
  );
};
export default FoodsDetails;
