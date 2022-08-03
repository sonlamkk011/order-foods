

import "./OrderDetails.scss";

const OrderDetails = () => {
  return (
    <>
      <div id="order-details">
        <div className="container">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Basic Table</h4>
                      <p className="card-description">
                        Add class <code>.table</code>
                      </p>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Tên Sản Phẩm</th>
                              <th>Giá Tiền</th>
                              <th>Ngày Đặt</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Humberger</td>
                              <td>35.000 vnd</td>
                              <td>12/08/2022</td>
                              <td>
                                <label className="badge badge-danger">
                                  Cancel
                                </label>
                              </td>
                            </tr>
                          
                          
                            
                           
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>
  );
};
export default OrderDetails;
