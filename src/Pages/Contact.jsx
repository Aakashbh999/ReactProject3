import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../utils/CONSTANTS";
import { postPublicData } from "../utils/Query";
import { useFormik } from "formik";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  const mutation = useMutation({
    mutationFn: (values) => {
      postPublicData(queryKeys.CONTACT, values);
    },
  });
  console.log(mutation);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting }) => {
      mutation.mutate(values);
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
      console.log(values);
    },
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="p-10 w-[25%] flex flex-col gap-5"
      >
        <div className="m-5 grid grid-cols-3 sm:w=[40%]  ">
          <label htmlFor="">Name</label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="border-2 border-black col-span-2 "
            type="text"
          />
        </div>
        <div className="m-5 grid grid-cols-3 sm:w=[40%] ">
          <label htmlFor="">Email</label>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="border-2 border-black col-span-2 "
            type="text"
          />
        </div>
        <div className="m-5 grid grid-cols-3 sm:w=[40%] ">
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            className="border-2 border-black col-span-2  "
          />
        </div>
        <button
          type="submit"
          className="p-5 rounded-md bg-green-500 mx-10 text-2xl font-medium "
          disabled={formik.isSubmitting}
        >
          Submit
        </button>
      </form>
      <button className="p-5 rounded-md bg-green-500 mx-10 text-2xl font-medium ">
        <Link to={"edit"}> Edit User</Link>
      </button>
      <Outlet />
    </>
  );
};

export default Contact;
