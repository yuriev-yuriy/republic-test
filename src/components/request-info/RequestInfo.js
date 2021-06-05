import Form from "../form/Form";
import { ReactComponent as Contact } from "../../images/icons/contact.svg";
import sv from "../contact/Contact.module.css";
import s from "./RequestInfo.module.css";

const RequestInfo = () => {
  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <Contact className={sv.vector} />
        <div className={s.innerWrap}>
          <h2>
            <a className={s.link} name="Request" href="./">
              Request info
            </a>
          </h2>
          <p className={s.text}>
            Got a question? Need to see a demo? Want to start your free trial
            subscription? We'd love to hear from you! Contact us and we will get
            back to you shortly.
          </p>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default RequestInfo;
