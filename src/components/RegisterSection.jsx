import React, { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import SpinLoading from "./SpinLoading";
import Alert from "./Alert";

const RegisterSection = () => {
  const [loading, setLoading] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [errors, setErrors] = useState({});
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState("");
  const [how, setHow] = useState("");

  const validateForm = () => {
    const errors = {};
  
    if (!myName.trim()) {
      errors.myName = 'Your name is required';
    }
  
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email address';
    }
  
    if (day === '--choose') {
      errors.day = 'Please select a day';
    }
  
    if (how === '--choose') {
      errors.how = 'Please select how you heard about us';
    }
  
    return errors;
  };
  
  const isValidEmail = (email) => {
    // Your email validation logic (if needed)
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    return;
  }

    const form = {
      myName,
      email,
      day,
      how,
    };

    // console.log(form)
    setLoading(true);
    const response = await fetch("api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();

    console.log(content);
    // alert(content.data.tableRange);
    setErrors({});
    setMyName("");
    setEmail("");
    setDay("");
    setHow("");

    if (content) {
      setLoading(false);
      setIsAlert(true);
    }
  };
  
  const closeModal = () => {
    setIsAlert(false);
  };
  return (
    <>
      {isAlert && <Alert isOpen={isAlert} onClose={closeModal} />}
      <div id="register" className="container mx-auto flex md:flex-row items-center justify-center flex-col-reverse gap-10 md:gap-40 py-28">
        <div className="px-4 md:px-0">
          <form onSubmit={handleSubmit} className="form w-full relative">
            <div className="flex flex-col gap-3 mb-3">
              <label
                htmlFor="myName"
                className="text-2xl md:text-3xl font-medium"
              >
                Wetin be your name?
              </label>
              <input
                type="text"
                name="myName"
                value={myName}
                onChange={(e) => setMyName(e.target.value)}
                placeholder="Your name"
                className="pt-8 pb-3 border-b-2 border-gray-300 outline-none"
                // required
              />
              {errors.myName && <p className="text-red-500">{errors.myName}</p>}
            </div>
            <div className="flex flex-col gap-3 mb-3">
              <label
                htmlFor="email"
                className="text-2xl md:text-3xl font-medium"
              >
                How we go fit take reach you?
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="pt-8 pb-3 border-b-2 border-gray-300 outline-none"
                // required
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-3 mb-3">
              <label
                htmlFor="select"
                className="text-2xl md:text-3xl font-medium"
              >
                Which day you wan take show?
              </label>
              <select
                name="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="pt-8 pb-3 border-b-2 border-gray-300 outline-none"
                // required
              >
                <option defaultChecked value="--choose" name="--choose">
                  --choose
                </option>
                <option value="Day One" name="Day One">
                  Day One
                </option>
                <option value="Day Two" name="Day Two">
                  Day Two
                </option>
                <option value="Both Days" name="Both Days">
                  Both Days
                </option>
              </select>
              {errors.day && <p className="text-red-500">{errors.day}</p>}
            </div>
            <div className="flex flex-col gap-3 mb-10">
              <label htmlFor="how" className="text-2xl md:text-3xl font-medium">
                How you take hear about us?
              </label>
              <select
                name="how"
                value={how}
                onChange={(e) => setHow(e.target.value)}
                className="pt-8 pb-3 border-b-2 border-gray-300 outline-none"
                // required
              >
                <option
                  defaultChecked
                  value="--choose"
                  name="--choose"
                  className="text-[#e9e9e9]"
                >
                  --choose
                </option>
                <option value="A friend" name="A friend">
                  A friend
                </option>
                <option value="WhatsApp" name="WhatsApp">
                  WhatsApp
                </option>
                <option value="Twitter" name="Twitter">
                  Twiiter
                </option>
                <option value="Instagram" name="Instagram">
                  Instagram
                </option>
                <option value="Facebook" name="Facebook">
                  Facebook
                </option>
                <option value="Banner" name="Banner">
                  Banners
                </option>
              </select>
              {errors.how && <p className="text-red-500">{errors.how}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center space-x-1 bg-primary text-black px-6 py-3 font-semibold hover:opacity-80 ease-in duration-200 absolute right-0"
              >
                {!loading ? (
                  <>
                    <span>Send am like that</span>
                    <TbArrowUpRight className="w-6 h-6" />
                  </>
                ) : (
                  <>
                    <span className="mr-1">Loading...</span>
                    <SpinLoading size={20} className="border-black border-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-start px-5 gap-4 w-full md:w-[450px] mb-5 md:mb-0">
          <p className="text-6xl md:text-[90px] md:leading-[1] leading-[1]">
            Make we keep your space abi?
          </p>
          <p>
            <span className="text-[#bbbbbb]">
              We just say make we tell you say refreshment dey o
            </span>
            , sha you nor hear anything here o. Hope say you go come?
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterSection;
