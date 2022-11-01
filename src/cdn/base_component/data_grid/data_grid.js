import * as React from "react";
import Box from "@mui/material/Box";
import DataGridView from "./data_grid_view";
const { forwardRef, useImperativeHandle } = React;
// import BasicOverlayPopup from './over_popup';

/*
checkboxSelection = true/false có sow mutil checkbox hay không 
*/

const BaseDataGrid = forwardRef((props, ref) => {
  const {
    headers = [],
    datas = [],
    isMutilSelect = false,
    isShowCheck = true,
    numberInitRow = 5,
    rowsSelect = [],
    pageSize = 15,
    onItemClick,
  } = props;

  const [resultSelects, setSelectionAllModel] = React.useState([]);
  const [rows, setRows] = React.useState(datas);
  const [indexsSelect, setIndexsSelect] = React.useState(rowsSelect);

  useImperativeHandle(ref, () => ({
    // load lai grid view
    loadGridView(datas) {
      setIndexsSelect([]);
      setRows(datas);
    },
    // lấy tất cả index, và content row select
    getAllItemSelect() {
      return resultSelects;
    },
    // insert thêm row vào vị trí ở dưới  hoặc trên, nếu isAfter = true thì ở dưới ngược lại ở trên
    insertDataIndexRow(index, isAfter = true, row) {
      var rDatas = [];
      var rowItem = row;
      if (rows.length <= index) {
        for (let i = 0; i < rows.length; i++) {
          rDatas.push(rows[i]);
        }
        rDatas.push(rowItem);
        setRows(rDatas);
      } else {
        for (let i = 0; i < rows.length; i++) {
          var ind = i;
          if (index < ind) {
            var rowInsert = rows[i];
            rDatas.push(rowInsert);
          } else {
            if (index === ind) {
              if (isAfter) {
                rDatas.push(rows[i]);
                rDatas.push(rowItem);
              } else {
                rDatas.push(rowItem);
                rDatas.push(rows[i]);
              }
            } else {
              rDatas.push(rows[i]);
            }
          }
        }

        setRows(rDatas);
      }
    },
    // update data tại 1 vị trí
    updateDataRow(index, row) {
      var rDatas = [];
      for (let i = 0; i < rows.length; i++) {
        if (index === i) {
          rDatas.push(row);
        } else {
          rDatas.push(rows[i]);
        }
      }
      setRows(rDatas);
    },
    // update data tại 1 vị trí theo cột
    updateDataColumn(index, key, content) {
      var rDatas = [];
      for (let i = 0; i < rows.length; i++) {
        var rowInsert = rows[i];
        if (index === i) {
          rowInsert[key] = content;
          rDatas.push(rowInsert);
        } else {
          rDatas.push(rowInsert);
        }
      }
      setRows(rDatas);
    },
    // xoá 1 row ở vị trí thứ index
    deleteDataIndexRow(index) {
      var rDatas = [];
      if (rows.length > index) {
        for (let i = 0; i < rows.length; i++) {
          rDatas.push(rows[i]);
        }
        rDatas.splice(index, 1);
        setRows(rDatas);
      }
    },
    // tự động check row theo index
    selectRows(selects) {
      var indexs = [];

      for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < selects.length; j++) {
          if (i === selects[j]) {
            indexs.push(i);
          }
        }
      }
      setIndexsSelect(indexs);
    },
    // lấy danh sách cột thành tên theo string
    getNameStringHeader() {
      var name = "";
      for (let i = 0; i < headers.length; i++) {
        if (i === headers.length - 1) {
          name = name + headers[i].file;
        } else {
          name = name + headers[i].file + ",";
        }
      }
      return name;
    },
    // lấy danh sách cột thành tên theo array
    getNameArrayHeader() {
      var name = [];
      for (let i = 0; i < headers.length; i++) {
        name.push(headers[i].file);
      }
      return name;
    },
  }));

  
  const onCellClick = (event) => {
    // check box row
    onItemClick(event);
  };
  const getAllItemSelect = (rows) => {
    setSelectionAllModel(rows);
  };
  const onSelectionModel = (values) => {
    setIndexsSelect(values);
  };
  const onPageChange = (values) => {};


  return (
    <Box sx={{ height: 400, width: 1 }}>
      <DataGridView
        headers={headers}
        datas={rows}
        pageSize={pageSize}
        onItemClick={onCellClick}
        getAllItemSelect={getAllItemSelect}
        isMutilSelect={isMutilSelect}
        isShowCheck={isShowCheck}
        numberInitRow={numberInitRow}
        selectionModel={indexsSelect}
        onPageChange={onPageChange}
        onSelectionModel={onSelectionModel}
      />
    </Box>
  );
});

export default BaseDataGrid;
