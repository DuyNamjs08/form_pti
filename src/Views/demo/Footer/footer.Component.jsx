import { Box } from '@mui/system';
import './footer.Component.css';

const FooterComponent = ()=>{
    return (
        <Box>
            <div class="layout-footer position-absolute">
            <div class="img-footer mb-0">
                <img src="/common/footer.png"/>
            </div>
            <footer>
                <div class="container-fluid">
                    <div class="d-flex flex-column align-items-center px-4 py-2">
                        <h4 class="pb-2">Tổng công ty cổ phần bảo hiểm bưu điện - PTI</h4>
                        <ul class="d-flex mb-0">
                            <li class="px-2">
                                <p>Địa chỉ: Tầng 8, số 4a, Láng Hạ, Ba Đình, Hà Nội</p>
                            </li>
                            <li class="px-2">
                                <p>Tel: 8424-37724466</p>
                            </li>
                            <li class="px-2">
                                <p>Fax: 8424-37724460/61</p>
                            </li>
                            <li class="px-2 border-0">
                                <p>Email: <a href="cntt@pti.com.vn <cntt@pti.com.vn>">cntt@pti.com.vn</a></p>
                            </li>
                        </ul>
                        <div class="footer-color">
                            Phiên bản v2022.198.8
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </Box>
    );
}

export default FooterComponent;