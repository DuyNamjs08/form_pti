import { Typography } from "@mui/material";
import "./infor_call.component.css";

const InforCall = ({ infor }) => {
  return (
    // <Row  style={{height: 100, backgroundColor: "#227BC4", marginTop: 20 ,paddingLeft: 20}}>
    //   <Col sm={10}>
    //     <div>
    //       <h6 style={{ color: "#fff",  paddingTop: 16 , fontSize:14 , fontFamily:'sans-serif',}}>Giấy chứng nhận</h6>
    //         <Typography
    //           variant="h6"
    //           style={{ color: "#fff" , fontSize:24, fontFamily:'sans-serif',}}
    //         >
    //           XE CƠ GIỚI
    //         </Typography>
    //     </div>
    //   </Col>
    //   <Col sm={2}>

    //   </Col>
    // </Row>

    <div
      className="card-header-banner d-flex justify-content-between position-relative"
      style={{ marginTop: 20 }}
    >
      <div className="card-title d-flex mb-3 flex-column">
        <p className="text-white">Giấy chứng nhận</p>
        <Typography variant="span" className="text-white text-uppercase">
          {infor.ten_form}
        </Typography>
      </div>
      <div className="contact-infor d-flex py-3">
        <div className="d-flex align-items-center px-2">
          <img src="common/Vector.svg" />
        </div>
        <div className="infor d-flex flex-column justify-content-center px-2 pe-0">
          <div className="note-suport">
            <p>
              {infor.ten}
              <span>{infor.phone}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    // <Box
    //     sx={{ flexGrow: 1, m: 0 }}
    //     style={{ paddingRight: 20, paddingTop: 20 }}
    //   >
    //     <Grid
    //       container
    //       spacing={{ xs: 0, md: 0 }}
    //       columns={{ xs: 2, sm: 8, md: 12 }}
    //       style={{ paddingTop: 0 }}
    //     >
    //       <Grid item xs={2} sm={8} md={8}>
    //       <Box style={{ height: 100, backgroundColor: "#227BC4", marginTop: 20 ,paddingLeft: 20}} xs={2} sm={8} md={4}>
    //         <h6 style={{ color: "#fff",  paddingTop: 16 , fontSize:14 , fontFamily:'sans-serif',}}>Giấy chứng nhận</h6>
    //         <Typography
    //           variant="h6"
    //           style={{ color: "#fff" , fontSize:24, fontFamily:'sans-serif',}}
    //         >
    //           XE CƠ GIỚI
    //         </Typography>
    //       </Box>
    //       </Grid>
    //       <Grid item xs={2} sm={8} md={4}>
    //       <Box style={{ height: 100, backgroundColor: "#227BC4", marginTop: 20 ,paddingRight: 20 , textAlign:'right'}} xs={2} sm={8} md={4}>

    //       </Box>
    //       </Grid>
    //     </Grid>
    //   </Box>

    // <Box>
    //   <Box style={{ height: 100, backgroundColor: "#227BC4", marginTop: 20 ,paddingLeft: 20}} xs={2} sm={8} md={4}>

    //     </Box>
    // </Box>
  );
};

export default InforCall;
