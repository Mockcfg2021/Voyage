import { useState } from "react";
import swal from "@sweetalert/with-react";

const NGOInputs = () => {
  const [inputs, setInputs] = useState([1]);

  const addField = () => {
    inputs.push(inputs.length + 1);
    setInputs([...inputs]);
  };

  const handleSubmit = () => {
    swal("", "You have successfully added the module!", "success");
    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[1].value = "";
    document.getElementsByTagName("input")[2].value = "";
    document.getElementsByTagName("textarea")[0].value = "";
    document.getElementsByTagName("textarea")[1].value = "";
  };
  return (
    <div className="container-fluid">
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col-12 col-lg-2"></div>
        <div
          className="col-12 col-lg-8"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "20px",
            marginTop: "40px",
            marginBottom: "50px",
          }}
        >
          <form>
            <h2 style={{ marginTop: "50px" }}>Enter your subject</h2>
            <input
              name="topic"
              type="text"
              placeholder="Enter your subject"
              required
              style={{
                border: "2px solid #4d6a6b",
                padding: "8px",
                marginTop: "20px",
              }}
            />
            <br></br>
            <textarea
              type="text"
              name="subj-dec"
              placeholder="Enter your description"
              required
              style={{
                border: "2px solid #4d6a6b",
                padding: "10px",
                marginTop: "20px",
                width: "23%",
              }}
            />

            <h2 style={{ marginTop: "50px" }}>
              Enter the URL links to be uploaded for training
            </h2>
            {inputs.map((ele) => (
              <div>
                <div>
                  <input
                    type="text"
                    name="ngo-title"
                    placeholder="Enter title of the video"
                    style={{
                      border: "2px solid #4d6a6b",
                      padding: "8px",
                      marginTop: "20px",
                    }}
                  />
                  <input
                    type="text"
                    name="ngo-tuts"
                    placeholder="Enter the tutorial link"
                    style={{
                      border: "2px solid #4d6a6b",
                      padding: "8px",
                      marginTop: "20px",
                    }}
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    name="ngo-tuts"
                    placeholder="Enter your description"
                    style={{
                      border: "2px solid #4d6a6b",
                      padding: "8px",
                      marginTop: "20px",
                    }}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              id="plusBtn"
              onClick={addField}
              style={{
                borderRadius: "50%",
                marginLeft: "15px",
                border: "2px solid #204872",
                backgroundColor: "rgb(196, 196, 243)",
              }}
            >
              <div className="fa fa-plus"></div>
            </button>
            <br></br>
            <button
              type="button"
              class="btn"
              style={{
                backgroundColor: "#7a9e9f",
                marginTop: "50px",
                minWidth: "45%",
                marginBottom: "100px",
              }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-12 col-lg-2"></div>
      </div>
    </div>
  );
};

export default NGOInputs;
