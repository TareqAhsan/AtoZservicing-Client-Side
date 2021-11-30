import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const MyBookings = () => {
  const { allContext } = useAuth();
  const { user } = allContext;
  const [mybookings, setMybookings] = useState();
  useEffect(() => {
    axios(
      `https://ancient-anchorage-18628.herokuapp.com/mybookings?email=${user?.email}`
    ).then((result) => {
      setMybookings(result.data);
    });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Do u Want to cancel your Booking?");
    if (proceed) {
      axios
        .delete(
          `https://ancient-anchorage-18628.herokuapp.com/mybookings/${id}`
        )
        .then((result) => {
          if (result.data.deletedCount) {
            toast.success("Booking Successfully canceled!");
            const remain = mybookings?.filter((mybook) => mybook._id !== id);
            setMybookings(remain);
          }
        });
    }
  };
  return (
    <div>
      <Container>
        <Toaster position="top-center" reverseOrder={true} />
        {mybookings?.length > 0 ? (
          <>
            <h1 className="display-6 my-5">
              {user.displayName} You have Booked {mybookings?.length} items
            </h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ServiceName</th>
                  <th>Price</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>CancelBook</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {mybookings?.map((mybook) => (
                  <tr key={mybook._id}>
                    <td>{mybook.serviceName}</td>
                    <td>{mybook.price}</td>
                    <td>{mybook.phoneNo}</td>
                    <td>{mybook.status}</td>
                    <td>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => handleDelete(mybook._id)}
                      >
                        Cancel
                      </Button>
                    </td>
                    <td>
                      {mybook.payment ? (
                        "paid"
                      ) : (
                        <Link to={`/dashboard/payment/${mybook?._id}`}>
                          <Button size="sm" variant="warning">
                            Pay
                          </Button>
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        ) : (
          <h2 className="display-6 my-5">You have no bookings</h2>
        )}
      </Container>
    </div>
  );
};

export default MyBookings;
