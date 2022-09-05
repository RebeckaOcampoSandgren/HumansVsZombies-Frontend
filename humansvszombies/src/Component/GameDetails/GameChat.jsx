import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardFooter,
    MDBBtn
  } from "mdb-react-ui-kit";

const GameChat = () => {
    return(
        <MDBContainer fluid className="py-5" >
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" lg="8" xl="6">
            <MDBCard id="chat2" style={{ borderRadius: "15px" }}>
              <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">Chat</h5>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <MDBBtn color='link'>Squad</MDBBtn>
                <MDBBtn color='link'>Global</MDBBtn>
                  <MDBBtn color='link'>Faction</MDBBtn>
              </div>
              </MDBCardHeader>
                <MDBCardBody>
                  <div className="d-flex flex-row justify-content-start">
                    <img
                      src="/403022_business man_male_user_avatar_profile_icon.png"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                    <div>
                      <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        Hello!
                      </p>
                      <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        Are you ready to win the game??
                      </p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted">
                        23:58
                      </p>
                    </div>
                  </div>
  
                  <div className="divider d-flex align-items-center mb-4">
                    <p
                      className="text-center mx-3 mb-0"
                      style={{ color: "#a2aab7" }}
                    >
                      Today
                    </p>
                  </div>
  
                  <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                    <div>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        Hii, yes I'm so ready!
                      </p>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        Let's kill some zombies
                      </p>
                      <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                        00:06
                      </p>
                    </div>
                    <img
                      src="/628290_avatar_male_man_mature_old_icon.png"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                  </div>
  
                  <div className="d-flex flex-row justify-content-start mb-4">
                    <img
                      src="/403022_business man_male_user_avatar_profile_icon.png"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                    <div>
                      <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        Okay
                      </p>
                      <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        GLHF
                      </p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted">
                        00:07
                      </p>
                    </div>
                  </div>
                </MDBCardBody>
              <MDBCardFooter className="text-muted gap-2 d-flex justify-content-start align-items-center p-3">
                <img
                  src="/403022_business man_male_user_avatar_profile_icon.png"
                  alt="avatar 3"
                  style={{ width: "45px", height: "100%" }}
                />
                <input
                  type="text"
                  class="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="Type message"
                ></input>
                <MDBBtn>Send</MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
}

export default GameChat