import Modal from "../Modal/Modal";
import logo from "../../../assets/img/logo.svg";
type PreloaderProps = {
  isOpen: boolean;
};
const Preloader = ({ isOpen }: PreloaderProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={() => null} raw>
      <img
        src={logo}
        alt="logo"
        className="logoBounce h-20 w-20 mx-auto relative -mt-[7rem]"
      />
    </Modal>
  );
};
export default Preloader;
