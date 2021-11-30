import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Button, Alert } from "react-bootstrap";
const ManageOrders = () => {
  const [manageorder, setManageorder] = useState();
  const [success, setSuccess] = useState(false);
  const [cancel, setCancel] = useState(false);
  useEffect(() => {
    fetch("https://ancient-anchorage-18628.herokuapp.com/manageorders")
      .then((res) => res.json())
      .then((data) => setManageorder(data));
  }, [manageorder]);

  const handleUpdate = (id) => {
    const proceed = window.confirm("Do you want to confirm shipping?");
    if (proceed) {
      const data = { status: "shipped" };
      axios
        .put(
          `https://ancient-anchorage-18628.herokuapp.com/updatestatus/${id}`,
          data
        )
        .then((result) => {
          if (result.data.modifiedCount) {
            setSuccess(true);
          }
        });
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://ancient-anchorage-18628.herokuapp.com/deleteOrder/${id}`)
      .then((result) => {
        console.log(result.data);
        if (result.data.deletedCount) {
          setCancel(true);
          const remain = manageorder.filter((order) => order._id !== id);
          setManageorder(remain);
        }
      });
  };
  return (
    <div>
      <Container>
        <h1 className="display-5 my-4 p-2">Manage All orders</h1>
        {success && (
          <Alert variant="success my-2">Status successfully updated</Alert>
        )}
        {cancel && (
          <Alert variant="danger my-2">booking canceled successfully</Alert>
        )}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Service</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Status</th>
              <th>cancelOrder</th>
            </tr>
          </thead>
          <tbody>
            {manageorder?.map((order) => (
              <tr key={order._id}>
                <td>{order.displayName}</td>
                <td>{order.serviceName}</td>
                <td>{order.address}</td>
                <td>{order.phoneNo}</td>
                <td>
                  {order.status === "pending" ? (
                    <Button onClick={() => handleUpdate(order._id)}>
                      click for shipping
                    </Button>
                  ) : (
                    order.status
                  )}
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(order._id)}
                  >
                    Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ManageOrders;
