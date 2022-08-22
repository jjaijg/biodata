import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Biodata from "../components/Biodata";

import BioDataForm from "../components/BioDataForm";
import BioDataList from "../components/BioDataList";
import Spinner from "../components/Spinner";
import { API_URL, formDefaultValue } from "../constants";

const BioDataPage = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [viewData, setViewData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUsers = () => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => {
        setUsers(res?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const resetSelectedUser = () => setSelectedUser(null);

  const handleCreate = (data, reset) => {
    setLoading(true);
    const { phone1, phone2, phone3, ...formData } = data;
    const phoneNumber = `${phone1}${phone2}${phone3}`;
    if (selectedUser) {
      axios
        .put(`${API_URL}/${selectedUser._id}`, {
          ...formData,
          phoneNumber,
        })
        .then((res) => {
          console.log(res);
          toast.success("Updated successfully");
          resetSelectedUser(null);
          reset(formDefaultValue);
          getUsers();
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
          setLoading(false);
        });
    } else {
      axios
        .post(API_URL, {
          ...formData,
          phoneNumber,
        })
        .then((res) => {
          console.log(res);
          toast.success("Added successfully");
          reset(formDefaultValue);
          getUsers();
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
          setLoading(false);
        });
    }
  };
  const handleShowData = (user) => {
    setViewData(user);
  };
  const handleHideData = () => setViewData(null);
  const handleEdit = (user) => setSelectedUser(user);
  const handleDelete = (id) => {
    setLoading(true);
    axios
      .delete(`${API_URL}/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Deleted successfully");
        getUsers();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Spinner isSpin={loading} />
      <main className="container">
        <div className="row">
          <section className="col-12 col-lg-6">
            <BioDataForm
              onCreate={handleCreate}
              selectedUser={selectedUser}
              resetSelectedUser={resetSelectedUser}
            />
          </section>
          <section className="col-12 col-lg-6">
            <BioDataList
              users={users}
              onView={handleShowData}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </section>
        </div>
        <Biodata show={!!viewData} data={viewData} onHide={handleHideData} />
      </main>
    </>
  );
};

export default BioDataPage;
