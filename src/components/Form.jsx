import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().min(1, { text: "Required" }),
    email: yup.string().email().required("Required"),
    number: yup.number().min(10, "Required").required(),
    message: yup.string().max(100).required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [submitAlert, setSubmitAlert] = useState("disabled");
  const onSubmit = (data) => {
    console.log(data);
    setSubmitAlert("enabled");

    setTimeout(() => {
        setSubmitAlert("disabled");
    }, 3000);

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {submitAlert === "enabled" ? (
        <div class="alert alert-success" role="alert">
          Thanks for the Response .
        </div>
      ) : (
        ""
      )}

      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className={`form-label h5 contact-info  `}
        >
          Name
          <strong className={`${errors.email?.message ? "error-text" : ""} `}>
            {` : ${
              errors.name?.message.text ? errors.name?.message.text : " "
            }`}
          </strong>
        </label>

        <input
          type="text"
          className={`form-control contact-info ${
            errors.name?.message.text ? "error-box" : ""
          }`}
          placeholder="enter your name here "
          {...register("name")}
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className={`form-label h5 contact-info `}
        >
          E-mail
          <strong className={`${errors.email?.message ? "error-text" : ""} `}>
            {` : ${errors.email?.message ? errors.email?.message : " "}`}
          </strong>
        </label>

        <input
          type="email"
          className={`form-control contact-info  ${
            errors.email?.message ? "error-box" : ""
          }`}
          placeholder="enter your name here"
          {...register("email")}
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label h5 contact-info"
        >
          Number
          <strong className={`${errors.email?.message ? "error-text" : ""} `}>
            {` : ${errors.number?.message ? "Required" : " "}`}
          </strong>
        </label>
        <input
          type="text"
          className={`form-control contact-info ${
            errors.number?.message ? "error-box" : ""
          }`}
          placeholder=" enter your Phone Number..."
          {...register("number")}
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label h5 contact-info "
        >
          Write Your Message here
          <strong className={`${errors.message?.message ? "error-text" : ""} `}>
            {` : ${errors.message?.message ? errors.message?.message : " "}`}
          </strong>
        </label>
        <textarea
          className={`form-control contact-info ${
            errors.message?.message ? "error-box" : ""
          }`}
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="enter your message here ..."
          {...register("message")}
        ></textarea>
      </div>

      <input type="submit" className="btn  h5 knowMore border  " />
    </form>
  );
};

export default Form;
