import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UpdateContactForm = ({ contact, toogleModal, setContacts }) => {
  return (
    <Formik
      initialValues={{
        name: contact.name,
        email: contact.email,
        phoneNumber: contact.phoneNumber,
        address: contact.address,
        profilePicture: contact.profilePicture,
      }}
      // validating form values
      validationSchema={Yup.object({
        name: Yup.string()
          .min(4, "Must be 4 characters or more")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phoneNumber: Yup.string()
          .matches(
            /^(?:\+?88|0088)?01[15-9]\d{8}$/,
            "Phone number is not valid"
          )
          .required("Required"),
        address: Yup.string()
          .min(5, "Must be 5 characters or more")
          .required("Required"),
        profilePicture: Yup.string().required("Required"),
      })}
      // handling submit
      onSubmit={(values, { setSubmitting }) => {
        const updateContacts = async () => {
          const res = await axios.put(
            `https://contacts-management-neutron-server.vercel.app/api/v1/contacts/${contact._id}`,
            values
          );
          console.log(res.data);
        };

        try {
          updateContacts();
        } catch (err) {
          alert(err.message);
        }
        setTimeout(() => {
          alert("Contact Updated Successfully");
          // Updating contacts state
          setContacts((prev) =>
            prev.map((item) => (item._id === contact._id ? values : item))
          );
          toogleModal();
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="flex flex-col justify-center gap-5">
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className="input" />
          <ErrorMessage name="name" className="error" />
        </div>

        <div className="form-item">
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" className="input" />
          <ErrorMessage name="email" className="error" />
        </div>

        <div className="form-item">
          <label htmlFor="phoneNumber">Phone Number</label>
          <Field name="phoneNumber" type="text" className="input" />
          <ErrorMessage name="phoneNumber" className="error" />
        </div>

        <div className="form-item">
          <label htmlFor="address">Address</label>
          <Field name="address" type="text" className="input" />
          <ErrorMessage name="address" className="error" />
        </div>

        <div className="form-item">
          <label htmlFor="profilePicture">Porfile Picture (URL)</label>
          <Field name="profilePicture" type="text" className="input" />
          <ErrorMessage name="profilePicture" className="error" />
        </div>

        <button type="submit">Update</button>
      </Form>
    </Formik>
  );
};

export default UpdateContactForm;
