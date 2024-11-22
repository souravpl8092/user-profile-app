import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { editUser } from "../redux/userSlice";

const EditModal = ({ user, isVisible, onClose }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log(user.id, values);
    dispatch(editUser({ id: user.id, updatedUser: values }));
    onClose();
  };

  return (
    <Modal
      title="Basic Modal"
      open={isVisible}
      onCancel={onClose}
      footer={null}
      className="edit-modal"
    >
      <div className="modal-header-line" />
      <Form
        form={form}
        layout="horizontal"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          name: user?.name,
          email: user?.email,
          phone: user?.phone,
          website: user?.website,
        }}
        onFinish={handleSubmit}
        style={{
          paddingTop: "30px",
          borderTop: "1px solid #e3e3e3",
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input placeholder="Enter Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Invalid email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Phone is required" }]}
        >
          <Input placeholder="Enter Phone" />
        </Form.Item>

        <Form.Item
          label="Website"
          name="website"
          rules={[{ required: true, message: "Website is required" }]}
        >
          <Input placeholder="Enter Website" />
        </Form.Item>

        <div
          style={{ borderBottom: "1px solid #e3e3e3", paddingBottom: "20px" }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            OK
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default EditModal;
