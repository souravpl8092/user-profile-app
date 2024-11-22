import React, { useState } from "react";
import { Card, Typography, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { deleteUser, toggleLikeUser } from "../redux/actions";
import EditModal from "./EditModal";
import {
  HeartOutlined,
  EditOutlined,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartFilled,
  HomeOutlined,
  BankOutlined,
} from "@ant-design/icons";

import "./UserCard.css";

const { Meta } = Card;
const { Text } = Typography;

const UserCard = ({ user }) => {
  const { name, email, phone, website, username, company, address } = user;
  const dispatch = useDispatch();
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  return (
    <>
      <Card
        hoverable
        className="user-card"
        cover={
          <img
            alt={username}
            src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${username}`}
          />
        }
        actions={[
          user.liked ? (
            <Tooltip title="Like">
              <HeartFilled
                onClick={() => dispatch(toggleLikeUser(user.id))}
                style={{ color: "red" }}
              />
            </Tooltip>
          ) : (
            <Tooltip title="Like">
              <HeartOutlined
                onClick={() => dispatch(toggleLikeUser(user.id))}
                style={{ color: "red" }}
              />
            </Tooltip>
          ),

          <Tooltip title="Edit">
            <EditOutlined
              key="edit"
              onClick={() => setEditModalVisible(true)}
            />
          </Tooltip>,

          <Tooltip title="Delete">
            <DeleteFilled
              key="delete"
              onClick={() => dispatch(deleteUser(user.id))}
            />
          </Tooltip>,
        ]}
      >
        <Meta
          title={name}
          description={
            <div className="user-info">
              <Text>
                {" "}
                <MailOutlined className="icon" />{" "}
                <span className="text">{email}</span>
              </Text>
              <br />
              <Text>
                <PhoneOutlined className="icon" />{" "}
                <span className="text">{phone}</span>
              </Text>
              <br />
              <Text>
                <GlobalOutlined className="icon" />{" "}
                <span className="text">https://{website}</span>
              </Text>
              <br />
              <Text>
                <HomeOutlined className="icon" />{" "}
                <span className="text">{address.city}</span>
              </Text>{" "}
              <br />
              <Text>
                <BankOutlined className="icon" />{" "}
                <span className="text">{company.name}</span>
              </Text>
            </div>
          }
        />
      </Card>
      <EditModal
        user={user}
        isVisible={isEditModalVisible}
        onClose={() => setEditModalVisible(false)}
      />
    </>
  );
};

export default UserCard;
