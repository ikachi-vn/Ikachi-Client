export var introAppData = {
	introList: [
		{
			page: "",
			intro: {
				steps: [
					{
						intro: "ART DMS!"
					},
					{
						element: "#app-menu > ion-header > div.app-logo-wrapper > div > select",
						intro: "Chọn đơn vị để lấy dữ liệu",
						position: 'bottom'

					},
					{
						element: 'body > app-root > ion-app > div > a',
						intro: "Xem thông tin cá nhân, thoát khỏi tài khoản",
						position: 'bottom'

					},
					
					{

						intro: 'Còn nhiều chức năng hơn nữa <span style="color: red;">sẽ</span> <span style="color: green;">sớm</span> <span style="color: blue;">ra mắt	</span>.',

					}
				]
			}
		},
		{
			page: "page-member",
			intro: {
				steps: [
					{
						intro: "Hello world!"
					},
					{
						element: '#step1',
						intro: "This is a tooltip.",
						position: 'bottom'

					},
					{

						intro: 'More features, more <span style="color: red;">f</span><span style="color: green;">u</span><span style="color: blue;">n</span>.',

					}
				]
			}
		},
		{
			page: "beo-detail",
			intro: {
				steps: [
					{
						intro: "<div style='text-align: center;'><b>Hướng dẫn sử dụng Gantt</b>"+ "<br/>"+" <b>trong quản lý BEO!</b></div>"
					},
					{
						intro: "<div style='text-align: center;'><b>Đảm bảo gantt nằm trong phạm vi màn hình sử dụng trước khi xem HDSD.</b></div>",
					},
					{
						element: 'div.gantt-controls',
						intro: "<b>Đây là những chức năng của gantt.</b>",
						position: 'bottom'
					},
					{
						element: 'div.gantt-controls > .gantt-show',
						intro: "Cho phép <b>Thu gọn</b> hoặc <b>Mở rộng</b> danh sách các phòng ban, công việc cần làm.",
						position: 'bottom'
					},
					{
						element: 'div.gantt-controls > .gantt-show',
						intro: "Cho phép <b>Hoàn tác</b> hoặc <b>Làm lại</b> hành động vừa làm với bảng thông tin.",
						position: 'bottom'
					},
					{
						element: 'div.gantt-controls > .gantt-group',
						intro: "Cho phép chuyển chế độ xem của Gantt <b>Theo Tiệc</b>, <b>Theo Nhóm</b> hoặc <b>Theo Staff</b>.",
						position: 'bottom'
					},
					{
						element: 'div.gantt-controls > .gantt-movetimeline',
						intro: "Cho phép <b>Lùi lại</b>, <b>Tiến tới</b> dòng thời gian của những task được chọn hoặc <b>Xóa</b> dữ liệu.",
						position: 'bottom'
					},
					{
						element: 'div.gantt-controls > .gantt-time',
						intro: "Cho phép <b>Phóng to</b>, <b>Thu nhỏ</b> dòng thời gian để dễ dàng quan sát.",
						position: 'bottom'
					},
					{
						element: 'div.gantt_grid_data',
						intro: "<b>Hiển thị danh sách các thông tin của gantt, bao gồm:</b>" +"<br/>" + "<br/>"+
						"- Tên công việc." + "<br/>"+
						"- Phòng ban." + "<br/>"+
						"- Thời gian bắt đầu." + "<br/>"+
						"- Khoảng thời gian." + "<br/>"+
						"- Thêm mới."
						,
						position: 'bottom'
					},
					{
						element: 'div.gantt_data_area',
						intro: "Mô phỏng công việc trên dòng thời gian, dễ dàng theo dõi và quản lý, đồng thời hiển thị loại thông tin và tiến độ.",
						position: 'bottom'
					},
					{
						element: 'div.gantt_grid_scale > div.gantt_grid_head_cell.gantt_grid_head_add',
						intro: "Để thêm <b>'Phòng ban'</b> mới:" +"<br/>" + "<br/>"+
						"Bấm <b>Thêm</b>, sau đó điền thông tin vào cửa sổ được hiển thị.",
						position: 'bottom'
					},
					{
						element: 'div.gantt_grid_scale > div.gantt_grid_head_cell.gantt_grid_head_add',
						intro: "Để thêm <b>'Đầu việc'</b> mới:"+"<br/>" + "<br/>"+
						"Bấm <b>Thêm ngay dòng 'phòng ban' vừa được tạo</b>, sau đó điền thông tin.",
						position: 'bottom'
					},
					{
						element: 'div.gantt_data_area',
						intro: "Để <b>Sửa</b>, <b>Xóa</b> thông tin: "+"<br/>" + "<br/>"+
						"Nhấp đúp vào dòng tương ứng cần thao tác.",
						position: 'top'
					},
					{
						element: 'div.gantt_data_area',
						intro: "Tiến độ công việc, khoảng thời gian công việc sẽ được tự động hiển thị chính xác.",
						position: 'top'
					},
					{
						element: 'div.gantt_data_area',
						intro: "Gantt có thể kéo trực tiếp dòng thời gian để quan sát."  +"<br/>" + "<br/>"+
						"Hoặc bấm giữ nút nhất định (mặc định là Ctrl) để kéo timeline.",
						position: 'top'
					},
					{
						element: '#step1',
						intro: "Các chức năng mới sẽ được cập nhật thêm:"  +"<br/>" + "<br/>"+
						"- Fullscreen." + "<br/>" +
						"- Marker thể hiện ngày hiện tại." + "<br/>" +
						"- Và các chức năng khác."
						,
						position: 'top'
					},
				]
			}
		},

	],
	getIntroByPage: function (page) {
		// let result = introAppData.introList[0];//.find(d => d.page == page);
		let result = introAppData.introList.find(d => d.page == page);
		return result;
	}
}