import React from "react";
import "./Page4.css";

function Page4() {
  return (
    <form>
      <div id="page-4">
        <div className="Frame1000001725">
          <div className="main-form">
            <div className="Frame1000001727">
              <div className="pasteurl-cont">
                <div className="paste-url">
                  <input
                    className="placeurl-text"
                    type="text"
                    name="paste-url"
                    placeholder="Place url here..."
                  />
                </div>
              </div>
              <div className="url-alias">
                <div className="cus-url">
                  <input
                    className="domain"
                    type="text"
                    name="choose-domain"
                    placeholder="Choose Domain"
                  />
                  <img className="vector1" src="./assets/Vector1.svg" alt="vector1" />
                </div>
                <div className="alias">
                  <input
                  className="typealias"
                    type="text"
                    name="alias"
                    placeholder="Type Alias here"
                  />
                </div>
              </div>
            </div>
            <div className="text-now">
                <div className="button">Trim URL</div>
            <div className="Frame1000001656">
          By clicking TrimURL, I agree to the Terms of Service, Privacy Policy and Use of Cookies.
          </div>
            </div>
          </div>
         
        </div>
      </div>
    </form>
  );
}

export default Page4;
