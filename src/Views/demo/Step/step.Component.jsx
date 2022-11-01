// import { ContactSupport } from "@mui/icons-material";
import { Box } from "@mui/system";
import "./step.component.css";
const StepComponent = ({ datas, stepAction, onClick }) => {
  const handleClick = (index) => {
    onClick(index);
  };
  var views = [];
  if (datas != null) {
    for (let index = 0; index < datas.length; index++) {
      if (index <= stepAction) {
        views.push(
          <li
            className={index === stepAction ? "active" : "done"}
            id={index}
            onClick={(event) => handleClick(index)}
          >
            <div className="item">
              <span>{index + 1}</span>
              <p>
                {datas[index].ten} {index === datas.length - 1 ? "" : ">"}
              </p>
            </div>
          </li>
        );
      } else {
        views.push(
          <li
            className={index}
            id={index}
            onClick={(event) => handleClick(index)}
          >
            <div className="item">
              <span>{index + 1}</span>
              <p>
                {datas[index].ten} {index === datas.length - 1 ? "" : ">"}
              </p>
            </div>
          </li>
        );
      }
    }
  }

  return (
    <Box className="py-3">
      <div>
        <ul className="list-step">
          {views}
          {/* <li class="active">
            <div class="item">
              <span>1</span>
              <p>Thông tin bên mua bảo hiểm {">"}</p>
            </div>
          </li>
          <li id="step2">
            <div class="item" onclick="bhhd_xegcn_P_sTEP(2)">
              <span>2</span>
              <p>Tính phí bảo hiểm {">"}</p>
            </div>
          </li>
          <li id="step3">
            <div class="item" onclick="bhhd_xegcn_P_sTEP(3)">
              <span>3</span>
              <p>Hoàn thành</p>
            </div>
          </li> */}
        </ul>
      </div>
    </Box>
  );
};

export default StepComponent;
