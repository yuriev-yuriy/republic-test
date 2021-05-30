import Form from "../form/Form";
import s from "./RequestInfo.module.css";

const RequestInfo = () => {
  return (
    <>
      <h2 className={s.title} name="Request">
        <a name="Request" href="#">
          Request info
        </a>
      </h2>
      <p className={s.text}>
        Got a question? Need to see a demo? Want to start your free trial
        subscription? We'd love to hear from you! Contact us and we will get
        back to you shortly.
      </p>
      <Form />
    </>
  );
};

export default RequestInfo;
