// import { v4 as uuidv4 } from 'uuid';
import * as React from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
  DataGrid,
  GridToolbarExport,
  GridToolbarQuickFilter,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import * as locales from "@mui/material/locale";
function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />

      <GridToolbarExport></GridToolbarExport>
    </Box>
  );
}
function QuickSearchToolbarSearch() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}

/*
checkboxSelection = true/false có sow mutil checkbox hay không 
*/

function DataGridView({
  headers = [],
  datas = [],
  isMutilSelect = true,
  selectionModel = [],
  isShowCheck = true,
  numberInitRow = 5,
  isShowExport = false,
  pageSize = 15,
  onItemClick,
  getAllItemSelect,
  onSelectionModel,
  onPageChange,
}) {
  var headersGrid = headers;
  var datasGrid = datas;
  var isSelectAll = false;
  var columns = [];
  var rows = [];

  for (let i = 0; i < datasGrid.length; i++) {
    var item = {}
    datasGrid[i].id = i;
    item = datasGrid[i];
    // Object.preventExtensions(item);

    // // Object.defineProperty(item, 'id', { value: i });
    // // console.log("datasGrid[i]", item);
    // item.id = i;
    // if (item.id === undefined) {
    //   item["id"] = i;
    // } else {

    // }

    // object.id = i + 1;
    rows.push(item);
  }
  if (rows.length === 0) {
    for (let i = 0; i < numberInitRow; i++) {
      var json = {};
      for (let i = 0; i < headersGrid.length; i++) {
        json[headersGrid[i].file] = "";
      }
      const item = json;
      item.id = i;
      // object.id = i + 1;
      rows.push(item);
    }
  }

  var object = {};
  for (let i = 0; i < headersGrid.length; i++) {
    var item = headersGrid[i];
    switch (item.loai) {
      case "date":
        object[item.filed] = new Date();
        break;
      case "number":
        object[item.filed] = 0;
        break;
      default:
        object[item.filed] = "";
        break;
    }

    if (item.loai === "actions") {
      columns.push({
        field: "actions",
        type: "actions",
        width: 100,
        getActions: () => [
          <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
          <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
        ],
      });
    } else {
      if (item.width === null || item.width === undefined) {
        columns.push({
          field: item.field,
          headerName: item.headerName,
          type: item.loai,
          sortable: item.sortable,
          disableColumnFilter: item.disableColumnFilter,
          disableColumnMenu: item.disableColumnMenu,
          disableColumnSelector: item.disableColumnSelector,
          hide: item.hide,
          description: item?.description ?? "",
          editable: item.edit === "C" ? true : false,
        });
      } else {
        columns.push({
          field: item.field,
          headerName: item.headerName,
          width: item.width,
          // editable: true,
          type: item.loai,
          sortable: item.sortable,
          disableColumnFilter: item.disableColumnFilter,
          disableColumnMenu: item.disableColumnMenu,
          disableColumnSelector: item.disableColumnSelector,
          flex: item.flex,
          hide: item.hide,
          description: item?.description ?? "",
          editable: item.edit === "C" ? true : false,
        });
      }
    }
  }

  const onRowEditCommit = (event) => {
    console.log(event);
  };
  const onCellEditCommit = (event) => {
    console.log(event);
  };

  const onEditCellPropsChange = (event) => {
    console.log(event);
  };

  const onPageSizeChange = (event) => {
    // console.log(event);
  };
  const onCellClick = (event) => {
    // check box row
    onItemClick(event.row);
  };

  const [locale] = React.useState("viVN");

  const theme = useTheme();
  const themeWithLocale = React.useMemo(
    () => createTheme(theme, locales[locale]),
    [locale, theme]
  );

  // console.log(rows);
  // console.log(columns);
  return (
    <Box sx={{ height: 400, width: 1 }}>
      <ThemeProvider theme={themeWithLocale}>
        <DataGrid
          checkboxSelection={isShowCheck}
          onCellClick={onCellClick}
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          disableColumnFilter
          hideFooterSelectedRowCount={true}
          disableMultipleSelection={true}
          autoPageSize={true}
          onRowEditCommit={onRowEditCommit}
          onCellEditCommit={onCellEditCommit}
          onEditCellPropsChange={onEditCellPropsChange}
          onPageSizeChange={onPageSizeChange}
          onPageChange={onPageChange}
          selectionModel={selectionModel}
          onCellS
          onColumnHeaderClick={(selection) => {
            if (!isMutilSelect) {
              if (selection.field === "__check__") {
                isSelectAll = true;
              }
            }
          }}
          onSelectionModelChange={(selection) => {
            if (selection.length > 1 && !isMutilSelect) {
              const selectionSet = new Set(selectionModel);
              const result = selection.filter((s) => !selectionSet.has(s));
              if (isSelectAll) {
                isSelectAll = false;
                onSelectionModel([]);
              } else {
                onSelectionModel(result);
                const selectedRowsData = result.map((id) =>
                  rows.find((row) => row.id === id)
                );
                getAllItemSelect(selectedRowsData);
              }
            } else {
              const selectedRowsData = selection.map((id) =>
                rows.find((row) => row.id === id)
              );
              getAllItemSelect(selectedRowsData);

              onSelectionModel(selection);
            }
          }}
          onSelectionChange={(newSelection) => {
            console.log(newSelection.rows);
          }}
          components={{
            Toolbar:
              isShowExport === false
                ? QuickSearchToolbarSearch
                : QuickSearchToolbar,
          }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </ThemeProvider>
    </Box>
  );
}
export default DataGridView;
