import * as React from 'react';
import BackgroundContent from '../../Plugin/images/login/bg-done.png'
import Box from "@mui/material/Box";
import ComboBox from "../../cdn/base_component/combobox/combo_box";
import BasicTextFields from "../../cdn/base_component/textfiled/text_field";
import Grid from "@mui/material/Grid";
export default function HeaderInfor({ data, datas }) {
    var views = [];
    for (let index = 0; index < datas.length; index++) {
        if (datas[index].loai === "rows") {
            for (let i = 0; i < datas[index].content.length; i++) {
                var item = datas[index].content[i];
                if (item.loai === "select") {
                    views.push(<Grid item xs={item.xs} sm={item.sm} md={item.md}>
                        <ComboBox id={item.ma} data={item.list} initValue={item.list[0]} isSearch={item.tim === "C" ? true : false} label={item.tieude} onChange={(value) => {

                        }}></ComboBox>
                    </Grid>);
                }
                if (item.loai === "text") {
                    views.push(<Grid item xs={item.xs} sm={item.sm} md={item.md}>
                        <BasicTextFields
                            label={item.tieude}
                            // textAlign={"left"}
                            isUppercase={false}
                            disabled={item.edit === "C" ? false : true}
                            isNonAccentVietnamese={false}
                            // keyboard={"text"}
                            isAction={false}
                        />
                    </Grid>);
                }
                if (item.loai === "label") {
                    views.push(<Grid item xs={item.xs} sm={item.sm} md={item.md}>
                        <div style={{ display: 'flex', marginLeft: 8, marginTop: 10, }}>
                            <p style={{ fontSize: 20 }}>{item.tieude + ":"}</p>
                            <span style={{ fontSize: 20, marginLeft: 30, marginTop: 2 }}><b>{item.content}</b></span>
                        </div>
                    </Grid>);
                }
            }
        }
    };

    return (
        <Box
            sx={{ flexGrow: 1, m: 0 }}
            style={{
                paddingRight: 20, paddingTop: 20, marginLeft: 20, marginTop: 10, marginRight: 20,
                backgroundImage: `url(${BackgroundContent})`, borderRadius: 15, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
            }}>
            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 2, sm: 4, md: 12 }}>
                {views}
            </Grid>
        </Box>
    );
}