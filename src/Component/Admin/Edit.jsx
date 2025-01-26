import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../../utils/CONSTANTS";
import { putPrivatesData } from "../../utils/Query";
import { useFormik } from "formik";

const Edit = () => {
  const mutation = useMutation({
    mutationKey: [queryKeys.EDIT],
    mutationFn: (values) => {
      putPrivatesData(queryKeys.EDIT, values);
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      isAdmin: false,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      mutation.mutate(values);
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[100%]  justify-center items-center bg-gray-500 flex flex-col gap-3 "
    >
      <label>Username</label>
      <input
        value={formik.values.username}
        name="username"
        onChange={formik.handleChange}
        type="text"
      />
      <label>Email</label>
      <input
        value={formik.values.email}
        name="email"
        onChange={formik.handleChange}
        type="text"
      />

      <label>Phone</label>
      <input
        value={formik.values.phone}
        name="phone"
        onChange={formik.handleChange}
        type="text"
      />

      <label>Is Admin</label>
      <select
        name="isAdmin"
        onChange={formik.handleChange}
        value={formik.values.isAdmin}
      >
        <option value={false}>No</option>
        <option value={true3}>Yes</option>
      </select>
      <button
        type="submit"
        className="p-5 rounded-md bg-green-500 mx-10 text-2xl font-medium "
      >
        Update
      </button>
    </form>
  );
};

export default Edit;
