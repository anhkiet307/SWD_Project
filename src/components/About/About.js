
import './about.css'

export default function About() {
    return (
        <section className="text-center about" style={{ marginTop: 'auto ', marginBottom: 'auto' }}>
            <h1>About US</h1>
            <div className="container" >
                <div className="row">

                    <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
                        <span className="fa fa-file" />
                        <h2>Booking</h2>
                        <p className="lead">Khách hàng chọn đặt dịch vụ với iVIVU.com có thể đặt qua rất nhiều kênh: 
                        đặt trực tiếp tại website, gọi điện thoại Hotline, đặt qua chat bot, app, đặt qua Facebook và 
                        ác mạng xã hội khác. Với mỗi kỳ nghỉ là một trải nghiệm tuyệt vời!</p>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
                        <span className="fa fa-info" />
                        <h2>Voucher</h2>
                        <p className="lead">Dòng sản phẩm chính của chúng tôi là Combo du lịch - sản phẩm cung cấp đầy đủ
                        cho một kỳ nghỉ bao gồm phòng khách sạn, vé máy bay, đưa đón, ăn uống, khám phá,… chỉ trong
                        1 lần đặt. Lại còn hưởng được mức giá vô cùng tốt với những dòng combo 
                        mang lại: combo tiết kiệm, voucher độc quyền, ưu đãi đặt sớm và flash sales.</p>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
                        <span className="fa fa-file" />
                        <h2>Services</h2>
                        <p className="lead">Để đảm bảo cho khách hàng một “Trải nghiệm kỳ nghỉ tuyệt vời”, chúng tôi 
                        áp dụng công nghệ vào việc đọc hiểu nhu cầu của thị trường, nghiên cứu phát triển sản phẩm và 
                        gợi ý những sản phẩm và dịch vụ tốt nhất, phù hợp với từng khách hàng.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}