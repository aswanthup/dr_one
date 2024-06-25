import React from "react";
import Mainadminnavbar from "../../../components/Mainadminnavbar/Mainadminnavbar";
import Mainadminsidebar from "../../../components/Mainadminsidebar/Mainadminsidebar";

export default function Mainadminlabsdetails({ labData }) {
  console.log(labData);
  return (
    <>
      <div className="mainadmindoctordatas flex">
        <div className="mainadmindoctordatas_profile flex">
          <img
            className="mainadmindoctordatas_profile_photo"
            src={labData?.photo || "/images/doc.jpg" }
            alt=""
          />

          <div className="mainadmindoctordatas_profile_data flex">
            <div className="flex">
              {" "}
              <h2>{labData?.name}</h2>{" "}
              <h4
                className="highlight_data"
                style={{
                  background: "#2A9D8F",
                  color: "white",
                  marginLeft: "10px",
                }}
              >
                {labData?.timing?.opening_time} -{" "}
                {labData?.timing?.closing_time}
              </h4>
            </div>

            <h4
              className="highlight_data"
              style={{ background: "#3A65FD", color: "white" }}
            >
              {labData?.license_no}
            </h4>

            <div className="flex">
              <div className="flex texticonset">
                <i class="fi fi-sr-call-outgoing"></i>
                <h4 style={{ marginLeft: "10px" }}> {labData?.phone_no}</h4>
              </div>
            </div>

            <div className="flex texticonset">
              <i class="fi fi-sr-envelope"></i>
              <h4 style={{ marginLeft: "10px" }}>{labData?.email}</h4>
            </div>
          </div>
        </div>

        <div className="mainadmindoctordatas_chart flex">
          <div className="mainadmindoctordatas_chart1 flex">
            <div className="mainadmindoctordatas_chart_icon flex">
              <i class="fi fi-sr-call-outgoing"></i>
            </div>

            <div style={{ marginLeft: "18px" }}>
              <h2>200</h2>
              <h4>Views</h4>
            </div>
          </div>

          <div className="mainadmindoctordatas_chart1 mainadmindoctordatas_chart2 flex">
            <div className="mainadmindoctordatas_chart_icon flex">
              <i class="fi fi-sr-call-outgoing"></i>
            </div>

            <div style={{ marginLeft: "18px" }}>
              <h2>200</h2>
              <h4>Contacts</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="photosdivadmin">
        <h3 style={{ marginBottom: "1.3vw" }}>Images</h3>
        <div className="photosdivadminsection flex">
          <img src="/images/doc.jpg" alt="" />
          <img src="/images/doc.jpg" alt="" />
          <img src="/images/doc.jpg" alt="" />
        </div>
      </div>

      <div className="mainadmindoctoraboutavail flex">
        <div className="mainadmindoctorabout ">
          <h3 style={{ marginBottom: "1.3vw" }}>About</h3>

          <h4 style={{ marginBottom: "1.3vw" }}>{labData?.about}</h4>
          <h3 style={{ marginBottom: "1.3vw" }}>Address</h3>

          <h4 style={{ marginBottom: "1vw" }}>{labData?.address}</h4>
          <div className="flex adimindoctorpin">
            <h4 style={{ background: "#3A65FD", color: "white" }}>986744</h4>
            <h4 style={{ background: "#F3F6FF", color: "#6B8CFE" }}>
              Kozhikode
            </h4>
          </div>
        </div>

        <div className="mainadmindoctoravilability mainadmindoctoravilability2">
          <div className="admin_fea_avai flex">
            <div className="admin_fea_avai_left">
              <h3 style={{ marginBottom: "1.3vw" }}>Features</h3>
              {labData?.features?.map((ele, index) => (
                <h4 key={index} style={{ marginBottom: "1.3vw" }}>
                  <i class="ri-arrow-right-circle-fill"></i>
                  {ele}
                </h4>
              ))}
            </div>

            <div className="admin_fea_avai_right">
              <h3 style={{ marginBottom: "1.3vw" }}>Services</h3>

              {labData?.services?.map((ele, index) => (
                <h4 key={index} style={{ marginBottom: "1.3vw" }}>
                  <i class="ri-arrow-right-circle-fill"></i>
                  {ele}
                </h4>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "1.3vw" }} className="flex admin_view_more">
        <h3>Latest Feedbacks</h3>
        <h4>
          View More
          <i style={{ marginLeft: "0.5vw" }} class="ri-arrow-right-up-line"></i>
        </h4>
      </div>

      <div className="feedbacksectiondoctor">
        <div className="feedbacksectiondoctorcard flex">
          <div>
            <img src="/images/man.jpg" alt="" />
          </div>
          <div className="flex feedbacksectiondoctorcarddata">
            <div className="flex feedbacksectiondoctorcardstar">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
            </div>
            <h4>
              Dr. Yadav took the time to thoroughly understand my medical
              history and current concerns. He listened attentively and asked
              insightful questions, making me feel heard and valued as a
              patient. His deep knowledge and expertise were evident, and he
              explained my diagnosis and treatment options in a clear and
              understandable manner
            </h4>
            <div className="flex feedbacksectiondoctorcardname">
              <i class="fi fi-ss-octagon-check"></i>
              <h3 style={{ marginLeft: "10px" }}>Aswanth</h3>
            </div>
          </div>
        </div>

        <div className="feedbacksectiondoctorcard flex">
          <div>
            <img src="/images/man.jpg" alt="" />
          </div>
          <div className="flex feedbacksectiondoctorcarddata">
            <div className="flex feedbacksectiondoctorcardstar">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
            </div>
            <h4>
              Dr. Yadav took the time to thoroughly understand my medical
              history and current concerns. He listened attentively and asked
              insightful questions, making me feel heard and valued as a
              patient. His deep knowledge and expertise were evident, and he
              explained my diagnosis and treatment options in a clear and
              understandable manner
            </h4>
            <div className="flex feedbacksectiondoctorcardname">
              <i class="fi fi-ss-octagon-check"></i>
              <h3 style={{ marginLeft: "10px" }}>Aswanth</h3>
            </div>
          </div>
        </div>

        <div className="feedbacksectiondoctorcard flex">
          <div>
            <img src="/images/man.jpg" alt="" />
          </div>
          <div className="flex feedbacksectiondoctorcarddata">
            <div className="flex feedbacksectiondoctorcardstar">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
            </div>
            <h4>
              Dr. Yadav took the time to thoroughly understand my medical
              history and current concerns. He listened attentively and asked
              insightful questions, making me feel heard and valued as a
              patient. His deep knowledge and expertise were evident, and he
              explained my diagnosis and treatment options in a clear and
              understandable manner
            </h4>
            <div className="flex feedbacksectiondoctorcardname">
              <i class="fi fi-ss-octagon-check"></i>
              <h3 style={{ marginLeft: "10px" }}>Aswanth</h3>
            </div>
          </div>
        </div>
      </div>

      <h3 style={{ marginBottom: "1.3vw" }}>Views</h3>

      <table className="doctortable">
        <tr>
          <th>No</th>
          <th>Customer Name</th>
          <th>Mobile Number</th>
          <th>Date & Time</th>
          <th>PIN & Location</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Maria Anders</td>
          <td>+49 30 123456</td>
          <td>Germany</td>

          <td>9/5/2024</td>
          <td>Contacted</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Francisco Chang</td>
          <td>+52 55 987654</td>
          <td>Mexico</td>

          <td>2/5/2024</td>
          <td>View</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Helen Bennett</td> <td>+44 20 7654321</td>
          <td>UK</td>
          <td>4/5/2024</td>
          <td>View</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Yoshi Tannamuri</td> <td>+1 604 1234567</td>
          <td>Canada</td>
          <td>4/5/2024</td>
          <td>Contacted</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Yoshi Tannamuri</td>
          <td>+1 604 1234567</td>
          <td>Canada</td>

          <td>4/5/2024</td>
          <td>View</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Yoshi Tannamuri</td>
          <td>+1 604 1234567</td>
          <td>Canada</td>

          <td>4/5/2024</td>
          <td>Contacted</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Yoshi Tannamuri</td>
          <td>+1 604 1234567</td>
          <td>Canada</td>

          <td>4/5/2024</td>
          <td>Contacted</td>
        </tr>
      </table>

      <div className="admin_disable_section flex">
        <div className="admin_disable_section_left flex">
          <i class="fi fi-sr-exclamation"></i>
          <div style={{ marginLeft: "1.3vw" }}>
            <h2>Date of join</h2>
            <h4>2/4/2023</h4>
          </div>

          <div style={{ marginLeft: "1.5vw" }}>
            <h2>Last Actived</h2>
            <h4>2/4/2023</h4>
          </div>
        </div>

        <div className="admin_disable_button">
          <h4>Disable</h4>
        </div>
      </div>
    </>
  );
}
