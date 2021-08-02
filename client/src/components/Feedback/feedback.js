import { useEffect } from "react";
import "./feedback.css";
import axios from "axios";

const Feedback = () => {
  var teacherarr = [];

  // useEffect(() => {
  //     var user = window.localStorage.getItem("userId");
  //     var role = window.localStorage.getItem("role");
  //     if(user)
  //     user = user.slice(1,-1)
  //     if(role)
  //     role = role.slice(1,-1)
  //     if(role=='ngo')
  //     {
  //         axios.get(`http://localhost:5000/teachersforngo`).then((res)=>{
  //         teacherarr = res.data.teachers;
  //         })
  //     }
  //     console.log(teacherarr);
  //   }, []);

  return (
    <div>
      <div
        className="modal fade"
        id="addfeedback"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Write Feedback</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <textarea
                id="postQuest"
                style={{
                  width: "100%",
                  minHeight: "80px",
                  border: "2px solid #7a9e9f",
                }}
                placeholder="Feedback"
                title="Add Feedback"
                required
              ></textarea>
              <p>Show feedback to the teacher?</p>
              <label className="container">
                Yes
                <input type="checkbox" required />
                <span class="checkmark"></span>
              </label>
              <button
                type="button"
                class="btn"
                style={{
                  backgroundColor: "#7a9e9f",
                  marginTop: "30px",
                  minWidth: "45%",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}

      <div
        className="modal fade"
        id="viewfeedback"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">View Feedback</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* dummy cards for 3 reviews */}
              <div class="card" style={{ width: "18rem;" }}>
                <div class="card-body">
                  <h5 class="card-title">
                    An engaging session on project management
                  </h5>
                  <p class="card-text">
                    A wonderful webinar was given, provided all the necessary
                    details and gave an in-depth explanation on the best
                    practices to be used.
                  </p>
                </div>
              </div>

              <div class="card" style={{ width: "18rem;" }}>
                <div class="card-body">
                  <h5 class="card-title">Great webinar!</h5>
                  <p class="card-text">
                    Spoke about how spoken english can be improved. Very
                    insightful.
                  </p>
                </div>
              </div>

              <div class="card" style={{ width: "18rem;" }}>
                <div class="card-body">
                  <h5 class="card-title">Fun session for kids</h5>
                  <p class="card-text">
                    A fun and engaging session was delivered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {
            console.log(teacherarr)
        }

        {
            teacherarr.map((teacher, index)=>
                <div className="container-fluid">
                    <div className="row text-center">
                        <h2 style={{marginTop: "20px", marginBottom: "20px"}}>Feedback</h2>
                    </div>
                <div className="row" style={{marginTop: "30px", marginBottom: "30px"}}>
                    <div className="col-3"></div>
                <div className="col-6" style={{padding: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px"}}>
                    <div className="name"><b>Name</b>: {teacher.userName}</div>
                    <div className="school-name"><b>School name</b>: {teacher.school}</div>
                    <div className="credit-score"><b>Credit score</b>: {teacher.points}</div>
                    <div className="row">
                    <div className="col-6"></div>
                    <div className="col-3">
                        <button class="btn btn-success" data-toggle="modal" data-target="#viewfeedback">View feedback</button>
                    </div>
                    <div className="col-3">
                        <button class="btn btn-primary" data-toggle="modal" data-target="#addfeedback">Add feedback</button>
                    </div>
                </div>
                </div>
                <div className="col-3"></div>
                </div>
                </div>
        )
        } */}
      <div className="container-fluid">
        <div className="row text-center">
          <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>Feedback</h2>
        </div>
        <div
          className="row"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <div className="col-3"></div>
          <div
            className="col-6"
            style={{
              padding: "10px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              borderRadius: "10px",
            }}
          >
            <div className="name">
              <b>Name</b>: Teacher1
            </div>
            <div className="school-name">
              <b>School name</b>: ABC School
            </div>
            <div className="credit-score">
              <b>Credit score</b>: 20
            </div>
            <div className="credit-score">
              <b>Badge</b>: 1
            </div>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-3">
                <button
                  class="btn btn-success"
                  style={{ minWidth: "80%" }}
                  data-toggle="modal"
                  data-target="#viewfeedback"
                >
                  View feedback
                </button>
              </div>
              <div className="col-3">
                <button
                  class="btn btn-primary"
                  style={{ minWidth: "80%" }}
                  data-toggle="modal"
                  data-target="#addfeedback"
                >
                  Add feedback
                </button>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>

        <div
          className="row"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <div className="col-3"></div>
          <div
            className="col-6"
            style={{
              padding: "10px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              borderRadius: "10px",
            }}
          >
            <div className="name">
              <b>Name</b>: Teacher2
            </div>
            <div className="school-name">
              <b>School name</b>: ABC School
            </div>
            <div className="credit-score">
              <b>Credit score</b>: 40
            </div>
            <div className="credit-score">
              <b>Badge</b>: 2
            </div>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-3">
                <button class="btn btn-success" style={{ minWidth: "80%" }}>
                  View feedback
                </button>
              </div>
              <div className="col-3">
                <button
                  class="btn btn-primary"
                  style={{ minWidth: "80%" }}
                  data-toggle="modal"
                  data-target="#addfeedback"
                >
                  Add feedback
                </button>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
