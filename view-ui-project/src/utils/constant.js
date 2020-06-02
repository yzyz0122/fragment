// 自定义常量
const constant =   {
	MOBILEERROR: '手机号码不正确', //验证手机号码提示语
	PASSWORDERROR: '密码只能是6到12位字母、数字和下划线', //验证密码提示语
	NOEMPTY:"不能为空",//不能为空
	AGREEITEMS:"请同意APP使用协议",//APP使用协议
  /*发布任务状态阶段*/
  phaseStatus: {
    ps_1_1 : '创建（预约中）',
    ps_1_2 : '创建（暂存）',
    ps_2_1 : '构建（构建中）',
    ps_2_2 : '构建（构建成功）',
    ps_2_3 : '构建（构建失败）',
    ps_2_4 : '构建（构建终止）',
    ps_2_5 : '构建（渠道构建中）',
    ps_3_1 : '测试（待测试）',
    ps_3_2 : '测试（测试中）',
    ps_3_3 : '测试（测试完成）',
    ps_3_4 : '测试（测试不通过）',
    ps_3_5 : '测试（测试终止）',
    ps_3_6 : '测试（测试失败）',
    ps_4_1 : '部署（待部署）',
    ps_4_2 : '部署（部署中）',
    ps_4_3 : '部署（用户升级中）',
    ps_4_4 : '部署（部署失败）',
    ps_4_5 : '部署（暂停部署）',
    ps_4_6 : '部署（部署终止）',
    ps_5_1 : '灰度控制（异常下架）',
    ps_5_2 : '灰度控制（正常下架）',
    ps_6 :  '评估',
    ps_7_1 : '审核（待提交审核）',
    ps_7_2 : '审核（提交审核中）',
    ps_7_3 : '审核（提交审核成功）',
    ps_7_4 : '审核（提交审核失败）',
    ps_7_5 : '审核（审核中）',
    ps_7_6 : '审核（审核通过）',
    ps_7_7 : '审核（审核不通过）',
  },
  /*指标编码*/
  indiceCode: {
    /*效率*/
    efficiency : 'efficiency',
    /*质量*/
    quality : 'quality',
    /*资源*/
    resources : 'resources',
    /*版本概览-获取完成需求数,完成故事点数*/
    demandAndStory : "finish_demand_number,finish_story_number",
    /*工程效率,交付效率*/
    efficiencychild:"engineering_efficiency,delivery_efficiency",
    /*开始时间，结束时间*/
    deliveryTime:"delivery_start_time,delivery_end_time",
    /*工程质量,交付质量*/
    qualityChild:"engineering_quality,delivery_quality",
    /*资源负载，资源配比*/
    resourceChild:"resource_load,resource_allocation",
    /*开发人员，产品人员，测试人员*/
    personnelType:"developer,product_personnel,test_personnel,other_personnel",
    /*正编人员，外编人员*/
    personnelState:"inside_personnel,external_personnel",
    /*p1-p5职级分布*/
    personnel:"p1_personnel,p2_personnel,p3_personnel,p4_personnel,p5_personnel,unrated_personnel",
    /*开发*/
    developer:"developer",
    /*产品*/
    productPersonnel:"product_personnel",
    /*测试*/
    testPersonnel:"test_personnel",
    /*产研比*/
    productRdProportion:"product_rd_proportion",
    /*研测比*/
    rdTestProportion:"rd_test_proportion",
  },
  bgId:{
    /*消费者BG*/
    xfzbg:"1",
    /*智慧城市BG*/
    zhcsbg:"2"
  }

}



export default  constant
