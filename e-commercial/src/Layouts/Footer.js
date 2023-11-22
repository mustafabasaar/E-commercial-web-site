import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="w-screen">
      <div className="bg-[#FAFAFA] py-[60px]">
        <div className="flex justify-between w-[80%] m-auto">
          <h3 className="font-mont-h3  ">Bandage</h3>
          <div>
            {" "}
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#77a6f8" }}
              className="text-xl"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#77a6f8" }}
              className="px-[10px] text-xl"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#77a6f8" }}
              className="text-xl"
            />
          </div>
        </div>
      </div>
      <div className="flex  pt-[5%] w-full m-auto gap-y-4 ">
        <div className=" flex justify-between m-auto w-[80%]">
          <div className="flex flex-col ">
            <h5 className="font-mont-h5">Company İnfo</h5>
            <a className="font-mont-a py-[10px]" href="#">
              About Us
            </a>
            <a className="font-mont-a py-[10px]" href="#">
              We are hiring
            </a>
            <a className="font-mont-a" href="#">
              Blog
            </a>
          </div>
          <div className="flex flex-col ">
            <h5 className="font-mont-h5">Legal</h5>
            <a className="font-mont-a py-[%2]" href="#">
              About Us
            </a>
            <a className="font-mont-a" href="#">
              We are hiring
            </a>
            <a className="font-mont-a" href="#">
              Blog
            </a>
          </div>
          <div className="flex flex-col">
            <h5 className="font-mont-h5">Features</h5>
            <a className="font-mont-a" href="#">
              Business Marketing
            </a>
            <a className="font-mont-a" href="#">
              User Analytic{" "}
            </a>
            <a className="font-mont-a" href="#">
              Live Chat
            </a>
            <a className="font-mont-a" href="#">
              Unlimited Support
            </a>
          </div>
          <div className="flex flex-col">
            <h5 className="font-mont-h5">Resources</h5>
            <a className="font-mont-a" href="#">
              IOS & Android
            </a>
            <a className="font-mont-a" href="#">
              Watch a Demo{" "}
            </a>
            <a className="font-mont-a" href="#">
              Customers
            </a>
            <a className="font-mont-a" href="#">
              API
            </a>
          </div>
          <div class=" flex flex-col">
            <div>
              <label for="email" className=" font-mont-h5 ">
                Get In Touch
              </label>
              <div class="flex">
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="bg-[#F9F9F9] border border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Your Email"
                  required
                />
                <button
                  type="submit"
                  class="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Abone Ol
                </button>
              </div>
              <p className="font-mont-p">Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
