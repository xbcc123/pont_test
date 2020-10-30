import http from './http';

// 接口方法封装
class Api {
	constructor() {
		this.http = http;
	}

	//上传图片
	uploadImg(params) {
		return this.http.upload("/m/pub/uploadImg", params);
	}

	// 查询钻石数据
	diamondList(params) {
		return this.http.get("/m/diamond/list", params);
	}

	// 单颗上传钻石数据
	diamondUpDiamond(params) {
		return this.http.post("/m/diamond/upDiamond", params);
	}

	// 批量上传钻石数据
	diamondUpDiamondExcel(params) {
		return this.http.upload("/m/diamond/upDiamondExcel", params);
	}

	// 删除钻石
	diamondDel(params) {
		return this.http.post("/m/diamond/del", params);
	}

	// 钻石上下架
	diamondUpOrdown(params) {
		return this.http.post("/m/diamond/upOrdown", params);
	}

	// 资产管理
	//资产管理列表
	assetList(params) {
		return this.http.get("/m/asset/list", params);
	}

	//资产管理详情
	assetDetail(params) {
		return this.http.get("/m/asset/get", params);
	}

	//平台维护
	//查询价格配置(1.下单费用设置，2.寄售费用设置，3.回收费用设置，4.今日汇率)
	getpricebytype(params) {
		return this.http.get("/m/price/getPriceByType", params);
	}

	//添加费用接口
	addPrice(params) {
		return this.http.post("/m/price/addPrice", params);
	}

	//保存费用计算率接口
	saveprice(params) {
		return this.http.post("/m/price/savePrice", params);
	}

	//寄售钻石、钻石参数查询接口（1.钻石行情、2.单颗钻石上传、3.寄售钻石、4.查询激活码推送）
	getDiamondseParam(params) {
		return this.http.get("/m/param/plist", params);
	}

	//寄售钻石、钻石参数保存接口
	saveDiamondseParam(params) {
		return this.http.post("/m/param/saveParam", params);
	}

	//供应商管理
	//供应商管理列表
	getSupplierList(params) {
		return this.http.get("/m/user/list", params);
	}

	//供应商详情
	getSupplierDetail(params) {
		return this.http.get("/m/user/get", params);
	}

	//新增供应商信息
	addSupplierInfor(params) {
		return this.http.post("/m/user/saveSupplier", params);
	}

	// 创建供应商
	createAccount(params) {
		return this.http.post("/m/user/createAccount", params);
	}

	//编辑供应商信息
	editSupplierInfor(params) {
		return this.http.post("/m/user/editSupplier", params);
	}

	// 供应商下拉列表
	userSelect(params) {
		return this.http.get("/m/user/select", params);
	}

	//登录
	notuserForgetPwd(params) {
		return this.http.post("/m/notUser/forgetPwd", params);
	}

	//找回密码
	notuserLogin(params) {
		return this.http.post("/m/notUser/login", params);
	}
 
	// 根据手机号获取短信
	sendCode(params) {
		return this.http.post("/m/pub/sendCode", params);
	}

	// 校验验证码
	validateCode(params) {
		return this.http.post("/m/pub/validateCode", params);
	}

	// 订单列表
	orderList(params) {
		return this.http.get("/m/order/list", params);
	}

	// 订单详情
	orderGet(params) {
		return this.http.get("/m/order/get", params);
	}

	// 订单详情
	orderGetOrder(params) {
		return this.http.get("/m/order/getOrder", params);
	}

	// 确认发货
	orderConfirm(params) {
		return this.http.post("/m/order/confirm", params);
	}

	// 供应商订单列表
	orderSlist(params) {
		return this.http.get("/m/order/slist", params);
	}

	// 寄售列列表
	consignList(params) {
		return this.http.get("/m/consign/list", params);
	}

	// 寄售详情
	consignGet(params) {
		return this.http.get("/m/consign/get", params);
	}

	// 寄售修改状态
	consignConfirm(params) {
		return this.http.post("/m/consign/confirm", params);
	}

	// 微信用户列表
	wxuserList(params) {
		return this.http.get("/m/wxuser/list", params);
	}

	// 日志列表
	wxuserLogList(params) {
		return this.http.get("/m/wxuser/logList", params);
	}

	// 银行卡列表信息 
	bankGetBank(params) {
		return this.http.get("/m/bank/getBank", params);
	}

	//  收货地址信息
	deliveryList(params) {
		return this.http.get("/m/delivery/list", params);
    }
    
    // 行情图
    pubGetPrice(params) {
		return this.http.get("/m/pub/getPriceInfo", params);
    }

    // 行情价格
    getPricePub(params) {
		return this.http.get("/m/pub/getPrice", params);
    }
	// 日志信息
	// deliveryList(params) {
	// 	return this.http.get('/m/delivery/list', params);
	// }

	//获取个人信息
	getinfo(params){
		return this.http.get("/m/user/getInfo", params);
	}

	//登出
	logout(params) {
		return this.http.post("/m/user/logout", params);
	}
	//修改密码
	changePwd(params) {
		return this.http.post("/m/user/changePwd", params);
	}
	//保存激活码
	saveCdkey(params){
		return this.http.post("/m/param/saveCdkey", params);
	}
	//发送激活码
	sendCdkey(params){
		return this.http.post("/m/order/sendCdkey", params);
	}

	//查询钻石状态
	getDiamondsStatus(params){
		return this.http.get("/m/diamond/getStatus", params);
	}
}

export default new Api();
