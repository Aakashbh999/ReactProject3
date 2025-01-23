import { useQuery } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../utils/CONSTANTS";
import { postPublicData } from "../utils/Query";
import { useFormik } from "formik";

const Contact = () => {
  const { data } = useQuery({
    queryKey: [queryKeys.CONTACT],
    queryFn: () => postPublicData(queryKeys.CONTACT),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="p-10">
      <div className="m-5 ">
        <label htmlFor="">Name</label>
        <input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="border-2 border-black"
          type="text"
        />
      </div>
      <div className="m-5 ">
        <label htmlFor="">Email</label>
        <input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="border-2 border-black"
          type="text"
        />
      </div>
      <div className="m-5 ">
        <label htmlFor="">Message</label>
        <input
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          className="border-2 border-black"
          type="text-area"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
