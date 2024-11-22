import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../components/UserCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchUsers } from "../redux/userSlice";

const UserProfiles = () => {
  const { users, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div style={{ minHeight: "100vh" }}>
          <Row gutter={[22, 22]} justify="left">
            {users.map((user) => (
              <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
                <UserCard user={user} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default UserProfiles;
