import s from "./Describe.module.css";

const Describe = () => {
  return (
    <div className={s.outerWrap}>
      <div className={s.wrap}>
        <h2 className={s.title}>Become a five-star professional!</h2>
        <p className={s.text}>
          Join the growing community of professional icarians. Use the iCaria
          professional services to launch and grow your business, manage your
          clients, organize your schedule, and simplify your payments. With
          iCaria certification, your customers will be assured safe and secure
          access to services.
        </p>
        <a className={s.btn} href="#Request">
          Request Info{" "}
        </a>
      </div>
    </div>
  );
};

export default Describe;
