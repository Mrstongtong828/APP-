// screens-info.jsx — 保修政策 / 操作指南 / 联系我们 / 公司介绍跳转 / 订单列表 / 地址 / 登录 / 反馈

// ── Warranty Policy ────────────────────────────────────────
function WarrantyScreen(){
  const { go } = useApp();
  return (
    <Page title="保修政策" onBack={()=>go('home')}>
      <div style={{
        background:'linear-gradient(180deg,#1E6FE0,#3A86FF)',color:'#fff',
        padding:'18px 18px 26px',marginTop:0,
      }}>
        <Glyph name="shield" size={36} color="#fff"/>
        <div style={{fontSize:20,fontWeight:700,marginTop:6}}>三重保修承诺</div>
        <div style={{fontSize:12,opacity:.85,marginTop:6,lineHeight:1.6}}>原厂配件 · 工艺质保 · 终身咨询</div>
      </div>
      <div style={{padding:'14px 14px 100px'}}>
        <SectionHeader title="保修期限"/>
        <Card pad={0}>
          {[
            { t:'综合治疗椅',     d:'整机 1 年 · 主气路 3 年' },
            { t:'高速/低速手机',  d:'机芯 6 个月 · 外壳 1 年' },
            { t:'超声洁牙机',     d:'整机 1 年' },
            { t:'根管马达',       d:'整机 2 年' },
            { t:'光固化机',       d:'整机 1 年 · 灯头 6 个月' },
          ].map((r,i,arr)=>(
            <div key={i} style={{
              padding:'14px',display:'flex',justifyContent:'space-between',alignItems:'center',
              borderBottom:i<arr.length-1?'1px solid #F1F5FB':'none',
            }}>
              <div style={{fontSize:14,fontWeight:500}}>{r.t}</div>
              <div style={{fontSize:12,color:'#0A4FB8',fontWeight:500}}>{r.d}</div>
            </div>
          ))}
        </Card>

        <SectionHeader title="保修范围"/>
        <Card>
          {[
            '在保修期内，因产品自身材料、工艺或装配缺陷导致的故障，免费维修。',
            '人为损坏 (摔砸/进液/拆改) 不在保修范围。',
            '已超出保修期的，按照配件成本与工时收费，价格表事先确认。',
            '所有维修配件均为原厂部件，确保品质一致。',
          ].map((t,i)=>(
            <div key={i} style={{display:'flex',gap:10,padding:'6px 0',fontSize:13,color:'#324563',lineHeight:1.7}}>
              <div style={{width:18,height:18,borderRadius:99,background:'#E8F1FE',display:'flex',alignItems:'center',justifyContent:'center',color:'#1E6FE0',fontSize:11,fontWeight:700,flexShrink:0,marginTop:3}}>{i+1}</div>
              <div style={{flex:1}}>{t}</div>
            </div>
          ))}
        </Card>

        <SectionHeader title="增值服务"/>
        <Card style={{padding:0}}>
          {[
            { i:'truck', t:'全国寄修', d:'顺丰到付 · 全程可追踪' },
            { i:'phone', t:'1 对 1 工程师', d:'专属服务 · 售后无忧' },
            { i:'invoice', t:'发票协助',     d:'增值税普通 / 专用发票' },
          ].map((r,i,arr)=>(
            <div key={i} style={{padding:'14px',display:'flex',alignItems:'center',gap:12,borderBottom:i<arr.length-1?'1px solid #F1F5FB':'none'}}>
              <div style={{width:36,height:36,borderRadius:10,background:'#E8F1FE',display:'flex',alignItems:'center',justifyContent:'center'}}><Glyph name={r.i} size={20}/></div>
              <div style={{flex:1}}>
                <div style={{fontSize:13.5,fontWeight:500}}>{r.t}</div>
                <div style={{fontSize:11.5,color:'#6B7C97',marginTop:2}}>{r.d}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </Page>
  );
}

// ── Fees / Charging policy ─────────────────────────────────
function FeesScreen(){
  const { go } = useApp();
  return (
    <Page title="收费办法" onBack={()=>go('home')}>
      <div style={{
        background:'linear-gradient(180deg,#1E6FE0,#3A86FF)',color:'#fff',
        padding:'18px 18px 26px',
      }}>
        <Glyph name="money" size={36} color="#fff"/>
        <div style={{fontSize:20,fontWeight:700,marginTop:6}}>透明收费 · 先报价后维修</div>
        <div style={{fontSize:12,opacity:.85,marginTop:6,lineHeight:1.6}}>检测免费 · 报价透明 · 全程可追溯</div>
      </div>
      <div style={{padding:'14px 14px 100px'}}>
        <SectionHeader title="收费标准"/>
        <Card pad={0}>
          {[
            { t:'保内维修',   d:'免工时费 · 免配件费',      tone:'#047857' },
            { t:'保外检测',   d:'免费检测 · 出具书面报价',  tone:'#0A4FB8' },
            { t:'保外维修',   d:'按配件成本 + 工时费收取',  tone:'#0F1F3A' },
            { t:'物流费用',   d:'寄出顺丰到付 · 回寄包邮',  tone:'#0F1F3A' },
            { t:'加急服务',   d:'另加 200 元加急费 (可选)', tone:'#D97706' },
          ].map((r,i,arr)=>(
            <div key={i} style={{
              padding:'14px',display:'flex',justifyContent:'space-between',alignItems:'center',
              borderBottom:i<arr.length-1?'1px solid #F1F5FB':'none',
            }}>
              <div style={{fontSize:14,fontWeight:500}}>{r.t}</div>
              <div style={{fontSize:12,color:r.tone,fontWeight:500}}>{r.d}</div>
            </div>
          ))}
        </Card>

        <SectionHeader title="收费说明"/>
        <Card>
          {[
            '所有维修在确认报价后再开始, 未确认不产生任何费用。',
            '原厂配件按厂家指导价收取, 提供发票与质保。',
            '工时费按工程师等级与维修难度核算, 详见报价单。',
            '加急服务在工程师档期允许下提供, 不影响维修质量。',
          ].map((t,i)=>(
            <div key={i} style={{display:'flex',gap:10,padding:'6px 0',fontSize:13,color:'#324563',lineHeight:1.7}}>
              <div style={{width:18,height:18,borderRadius:99,background:'#E8F1FE',display:'flex',alignItems:'center',justifyContent:'center',color:'#1E6FE0',fontSize:11,fontWeight:700,flexShrink:0,marginTop:3}}>{i+1}</div>
              <div style={{flex:1}}>{t}</div>
            </div>
          ))}
        </Card>

        <SectionHeader title="支付方式"/>
        <Card style={{padding:0}}>
          {[
            { i:'money',   t:'微信 / 支付宝', d:'扫码即时支付' },
            { i:'invoice', t:'对公转账',      d:'适用诊所/医院' },
            { i:'invoice', t:'发票协助',      d:'增值税普票 / 专票均可' },
          ].map((r,i,arr)=>(
            <div key={i} style={{padding:'14px',display:'flex',alignItems:'center',gap:12,borderBottom:i<arr.length-1?'1px solid #F1F5FB':'none'}}>
              <div style={{width:36,height:36,borderRadius:10,background:'#E8F1FE',display:'flex',alignItems:'center',justifyContent:'center'}}><Glyph name={r.i} size={20}/></div>
              <div style={{flex:1}}>
                <div style={{fontSize:13.5,fontWeight:500}}>{r.t}</div>
                <div style={{fontSize:11.5,color:'#6B7C97',marginTop:2}}>{r.d}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </Page>
  );
}

// ── Guide screens (5 variants share template) ───────────────
function GuideScreen({ kind }){
  const { go } = useApp();
  const data = {
    'guide-quick': {
      title:'快速指南',
      lead:'5 分钟了解小程序核心功能, 让售后流程一目了然。',
      steps:[
        { t:'报修', d:'首页「立即报修」填写产品与故障, 上传图片或视频' },
        { t:'查询', d:'首页「维修进度」按工单号或序列号追踪状态' },
        { t:'自查', d:'「故障自查」按产品类型与故障类型获取建议' },
        { t:'联系', d:'右下角悬浮按钮一键拨打客服 / 售后热线' },
      ],
    },
    'guide-self': {
      title:'自查指南',
      lead:'按以下流程进行设备初步自检, 80% 的常见故障可在现场解决。',
      steps:[
        { t:'断电与冷却', d:'关闭电源, 待设备冷却 5 分钟后再操作' },
        { t:'外观检查',   d:'查看外壳、连接线、卡簧、密封圈有无损伤' },
        { t:'功能复测',   d:'分别对气源、水路、灯光进行单项复测' },
        { t:'记录现象',   d:'用图片或视频留存, 便于后续报修上传' },
      ],
    },
    'guide-repair': {
      title:'报修指南',
      lead:'完整的报修流程, 帮助您快速发起寄修。',
      steps:[
        { t:'提交报修',  d:'填写产品信息 + 故障描述 + 附件' },
        { t:'寄出仪器',  d:'选择顺丰到付或自寄, 上门取件可预约' },
        { t:'服务中心检测', d:'48 小时内反馈检测结果与报价' },
        { t:'维修与回寄', d:'确认报价后开始维修, 完成后顺丰回寄' },
      ],
    },
    'guide-query': {
      title:'查询指南',
      lead:'多种方式查询您的报修工单进度与发票。',
      steps:[
        { t:'工单号查询', d:'首页 / 维修进度页输入 DR 工单号' },
        { t:'序列号查询', d:'使用机身刻印 SN 进行查询' },
        { t:'我的页面',   d:'登录后在「维修订单」中查看历史' },
        { t:'客服查询',   d:'联系在线客服或 400 热线代为查询' },
      ],
    },
    'guide-invoice': {
      title:'开票指南',
      lead:'维修完成后可在线申请发票, 工作日 1–3 日开具邮寄。',
      steps:[
        { t:'确认订单',   d:'在「维修订单」中确认本次维修金额无误' },
        { t:'提交抬头',   d:'选择普票/专票, 录入单位抬头与税号' },
        { t:'确认邮箱',   d:'填写收票邮箱, 电子发票即时送达' },
        { t:'纸质发票',   d:'如需纸质发票, 联系客服登记邮寄地址' },
      ],
    },
  }[kind];
  return (
    <Page title={data.title} onBack={()=>go('home')}>
      <div style={{padding:'14px'}}>
        <Card style={{background:'#F3F8FF',border:'1px solid #DCE9FA'}}>
          <div style={{fontSize:13,color:'#324563',lineHeight:1.7}}>{data.lead}</div>
        </Card>
        <SectionHeader title="操作步骤"/>
        <Card pad={0}>
          {data.steps.map((s,i,arr)=>(
            <div key={i} style={{padding:'16px 14px',display:'flex',gap:12,borderBottom:i<arr.length-1?'1px solid #F1F5FB':'none'}}>
              <div style={{
                width:30,height:30,borderRadius:99,
                background:'linear-gradient(135deg,#3A86FF,#1E6FE0)',color:'#fff',
                display:'flex',alignItems:'center',justifyContent:'center',
                fontSize:13,fontWeight:700,flexShrink:0,
                boxShadow:'0 4px 10px -2px rgba(30,111,224,.4)',
              }}>{i+1}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:600}}>{s.t}</div>
                <div style={{fontSize:12,color:'#6B7C97',marginTop:4,lineHeight:1.6}}>{s.d}</div>
              </div>
            </div>
          ))}
        </Card>
        <div style={{padding:'18px 0 100px',display:'flex',gap:10}}>
          <Btn variant="ghost" full onClick={()=>go('contact')}>联系客服</Btn>
          <Btn full onClick={()=>go('repair')}>立即报修</Btn>
        </div>
      </div>
    </Page>
  );
}

// ── Contact ─────────────────────────────────────────────────
function ContactScreen(){
  const { go } = useApp();
  return (
    <Page title="联系我们" onBack={()=>go('home')}>
      <div style={{padding:'14px'}}>
        {/* online */}
        <Card style={{
          background:'linear-gradient(135deg,#1E6FE0,#3A86FF)',color:'#fff',padding:18,
        }}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{width:44,height:44,borderRadius:12,background:'rgba(255,255,255,.18)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Glyph name="chat" size={26} color="#fff"/>
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:15,fontWeight:700}}>在线客服</div>
              <div style={{fontSize:11.5,opacity:.85,marginTop:3}}>7×24 小时 · 即时响应</div>
            </div>
            <Btn variant="soft" size="sm" style={{background:'#fff',color:'#0A4FB8'}}>立即咨询</Btn>
          </div>
        </Card>
        {/* hotlines */}
        <SectionHeader title="服务热线"/>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          {[
            { t:'售后技术', n:'139 7738 2317', h:'工作日 08:00–21:00' },
            { t:'购买咨询', n:'139 7738 2398', h:'工作日 08:00–21:00' },
          ].map((c,i)=>(
            <Card key={i} style={{padding:14}}>
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <Glyph name="phone" size={20}/>
                <span style={{fontSize:13,fontWeight:600}}>{c.t}</span>
              </div>
              <div style={{fontSize:15,fontWeight:700,color:'#1E6FE0',marginTop:8,letterSpacing:.3}}>{c.n}</div>
              <div style={{fontSize:11,color:'#94A3B8',marginTop:3}}>{c.h}</div>
              <Btn size="sm" full style={{marginTop:10}}>一键拨号</Btn>
            </Card>
          ))}
        </div>

        {/* address */}
        <SectionHeader title="收件地址"/>
        <Card>
          <div style={{display:'flex',gap:10}}>
            <Glyph name="pin" size={22} color="#DC2626"/>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:600}}>桂林市啄木鸟医疗器械有限公司</div>
              <div style={{fontSize:12,color:'#6B7C97',marginTop:6,lineHeight:1.6}}>
                收件人 · 售后李山<br/>
                联系电话 · 139 7738 2317<br/>
                地址 · 广西桂林市象山区 中山中路 88 号
              </div>
            </div>
          </div>
          <div style={{display:'flex',gap:8,marginTop:12,paddingTop:12,borderTop:'1px solid #F1F5FB'}}>
            <Btn variant="ghost" full size="sm">复制地址</Btn>
            <Btn full size="sm">查看地图</Btn>
          </div>
        </Card>

        <SectionHeader title="工作时间"/>
        <Card style={{padding:14}}>
          {[
            { d:'周一至周五', t:'08:00 – 21:00' },
            { d:'周末',       t:'09:00 – 18:00' },
            { d:'法定节假日', t:'09:00 – 17:00' },
          ].map((r,i,arr)=>(
            <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:i<arr.length-1?'1px dashed #F1F5FB':'none',fontSize:13}}>
              <span style={{color:'#324563'}}>{r.d}</span>
              <span style={{color:'#0F1F3A',fontWeight:500}}>{r.t}</span>
            </div>
          ))}
        </Card>

        <div style={{padding:'14px 0 100px'}}/>
      </div>
    </Page>
  );
}

// ── Orders list ─────────────────────────────────────────────
function OrdersScreen(){
  const { go } = useApp();
  return (
    <Page title="维修订单" onBack={()=>go('mine')}>
      <div style={{padding:'8px 14px',display:'flex',gap:18,background:'#fff',borderBottom:'1px solid #F1F5FB'}}>
        {['全部 12','进行中 1','已完成 10','已取消 1'].map((t,i)=>(
          <button key={i} style={{
            fontSize:13,padding:'10px 0',position:'relative',
            color:i===0?'#1E6FE0':'#6B7C97',fontWeight:i===0?600:400,
          }}>
            {t}
            {i===0 && <div style={{position:'absolute',bottom:0,left:'50%',transform:'translateX(-50%)',width:18,height:2,background:'#1E6FE0',borderRadius:2}}/>}
          </button>
        ))}
      </div>
      <div style={{padding:14}}>
        {[
          { id:'DR-20260508-1147', m:'NSK Ti-Max Z95L', s:'维修中', t:'warn', price:'¥860', d:'2026-05-08' },
          { id:'DR-20260420-0883', m:'CICADA 超声洁牙机', s:'已完成', t:'ok', price:'¥320', d:'2026-04-20' },
          { id:'DR-20260315-0521', m:'根管马达 X-Smart', s:'已完成', t:'ok', price:'¥580', d:'2026-03-15' },
          { id:'DR-20260218-0212', m:'综合治疗椅 (主气路)', s:'已完成', t:'ok', price:'¥1,240', d:'2026-02-18' },
          { id:'DR-20260112-0099', m:'光固化机 LED-X', s:'已取消', t:'muted', price:'—', d:'2026-01-12' },
        ].map((o,i)=>(
          <Card key={i} style={{marginBottom:10}} onClick={()=>go('order-detail')}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div>
                <div style={{fontSize:11,color:'#94A3B8'}}>工单 {o.id}</div>
                <div style={{fontSize:14,fontWeight:600,marginTop:4}}>{o.m}</div>
                <div style={{fontSize:11.5,color:'#6B7C97',marginTop:4}}>报修日期 · {o.d}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <Tag tone={o.t}>{o.s}</Tag>
                <div style={{fontSize:15,fontWeight:700,marginTop:6,color:'#0F1F3A'}}>{o.price}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Page>
  );
}

// ── Products of mine ────────────────────────────────────────
function ProductsScreen(){
  const { go } = useApp();
  return (
    <Page title="我的产品" onBack={()=>go('mine')}>
      <div style={{padding:14}}>
        {[
          { t:'NSK Ti-Max Z95L',  s:'TZ95L-2402-0891', p:'2024-02 购入', w:'保修中 · 还剩 91 天' },
          { t:'CICADA 超声洁牙机', s:'CSC-2306-7723', p:'2023-06 购入', w:'已过保 · 可付费维修' },
          { t:'根管马达 X-Smart',  s:'XSM-2412-0103', p:'2024-12 购入', w:'保修中 · 还剩 561 天' },
        ].map((p,i)=>(
          <Card key={i} style={{marginBottom:10,display:'flex',gap:12,alignItems:'center'}}>
            <div style={{width:54,height:54,borderRadius:12,background:'#E8F1FE',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Glyph name="tooth" size={28}/>
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:14,fontWeight:600}}>{p.t}</div>
              <div style={{fontSize:11,color:'#94A3B8',marginTop:3}}>SN · {p.s}</div>
              <div style={{fontSize:11,color:'#6B7C97',marginTop:2}}>{p.p}</div>
              <Tag tone={p.w.includes('已过保')?'muted':'ok'} style={{marginTop:6}}>{p.w}</Tag>
            </div>
            <Btn size="sm" variant="ghost" onClick={(e)=>{e.stopPropagation();go('repair')}}>报修</Btn>
          </Card>
        ))}
        <button onClick={()=>{}} style={{
          width:'100%',padding:14,borderRadius:14,border:'1.5px dashed #BFD6F7',background:'#F3F8FF',
          color:'#1E6FE0',fontSize:14,fontWeight:500,display:'flex',alignItems:'center',justifyContent:'center',gap:6,
        }}>
          <Glyph name="plus" size={18}/> 添加我的产品
        </button>
      </div>
    </Page>
  );
}

// ── Address ─────────────────────────────────────────────────
function AddressScreen(){
  const { go } = useApp();
  return (
    <Page title="收件地址" onBack={()=>go('mine')}>
      <div style={{padding:14}}>
        <Card style={{borderLeft:'3px solid #1E6FE0'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Tag tone="brand">默认地址</Tag>
            <button style={{fontSize:12,color:'#1E6FE0'}}>编辑</button>
          </div>
          <div style={{fontSize:14,fontWeight:600,marginTop:8}}>李医生 · 138 0013 8000</div>
          <div style={{fontSize:12.5,color:'#6B7C97',marginTop:6,lineHeight:1.6}}>
            广西桂林市象山区 中山中路 88 号<br/>桂林口腔门诊 4 楼
          </div>
        </Card>
        <Card style={{marginTop:10}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Tag tone="muted">备用</Tag>
            <button style={{fontSize:12,color:'#1E6FE0'}}>编辑</button>
          </div>
          <div style={{fontSize:14,fontWeight:600,marginTop:8}}>张主任 · 137 1234 5678</div>
          <div style={{fontSize:12.5,color:'#6B7C97',marginTop:6,lineHeight:1.6}}>
            南宁市青秀区民族大道 35 号 第二口腔医院
          </div>
        </Card>
        <button style={{
          width:'100%',padding:14,borderRadius:14,marginTop:10,
          border:'1.5px dashed #BFD6F7',background:'#F3F8FF',
          color:'#1E6FE0',fontSize:14,fontWeight:500,display:'flex',alignItems:'center',justifyContent:'center',gap:6,
        }}>
          <Glyph name="plus" size={18}/> 新增地址
        </button>
      </div>
    </Page>
  );
}

// ── Login ───────────────────────────────────────────────────
function LoginScreen(){
  const { go, set } = useApp();
  return (
    <Page title="登录" onBack={()=>go('mine')}>
      <div style={{padding:'40px 22px',textAlign:'center'}}>
        <div style={{
          width:76,height:76,margin:'0 auto 18px',borderRadius:22,
          background:'linear-gradient(135deg,#3A86FF,#1E6FE0)',
          display:'flex',alignItems:'center',justifyContent:'center',
          boxShadow:'0 12px 28px -8px rgba(30,111,224,.45)',
        }}><Glyph name="tooth" size={42} color="#fff"/></div>
        <div style={{fontSize:22,fontWeight:700,color:'#0F1F3A'}}>欢迎使用</div>
        <div style={{fontSize:13,color:'#6B7C97',marginTop:6}}>专业牙科仪器 · 全程检修服务</div>

        <div style={{marginTop:36,display:'flex',flexDirection:'column',gap:10}}>
          <button onClick={()=>{set({logged:true});go('mine')}} style={{
            height:50,borderRadius:99,background:'#07C160',color:'#fff',
            fontSize:15,fontWeight:600,border:'none',
            display:'flex',alignItems:'center',justifyContent:'center',gap:8,
            boxShadow:'0 8px 18px -6px rgba(7,193,96,.45)',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24"><path d="M9 14l-3 3 1.5-4.5C5.5 11 4 8.5 4 6 4 3 7 1 11 1s7 2 7 5c0 .5-.1 1-.2 1.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinejoin="round"/><path d="M14 9c-3 0-5.5 2-5.5 4.5S11 18 14 18c.7 0 1.4-.1 2-.3l2.5 1.3-1-2.5c1.2-.8 2-2 2-3.5 0-2.5-2.5-4.5-5.5-4.5z" fill="#fff"/></svg>
            微信一键登录
          </button>
          <button onClick={()=>{set({logged:true});go('mine')}} style={{
            height:50,borderRadius:99,background:'#fff',color:'#0F1F3A',
            fontSize:15,fontWeight:500,border:'1px solid #E4ECF7',
          }}>手机号验证码登录</button>
        </div>

        <div style={{marginTop:24,fontSize:11.5,color:'#94A3B8',lineHeight:1.6}}>
          登录即视为您同意<br/><span style={{color:'#1E6FE0'}}>《用户服务协议》</span> 及 <span style={{color:'#1E6FE0'}}>《隐私政策》</span>
        </div>
      </div>
    </Page>
  );
}

// ── Feedback ────────────────────────────────────────────────
function FeedbackScreen(){
  const { go } = useApp();
  const [type, setType] = useState('建议');
  return (
    <Page title="意见与投诉" onBack={()=>go('mine')}>
      <div style={{padding:14}}>
        <Card>
          <Field label="反馈类型" required>
            <div style={{display:'flex',gap:8,marginTop:2}}>
              {['建议','咨询','投诉','故障'].map(t=>(
                <button key={t} onClick={()=>setType(t)} style={{
                  flex:1,padding:'8px 10px',borderRadius:10,fontSize:12.5,
                  background:t===type?'#E8F1FE':'#fff',
                  border:`1.5px solid ${t===type?'#1E6FE0':'#E4ECF7'}`,
                  color:t===type?'#0A4FB8':'#324563',fontWeight:t===type?600:400,
                }}>{t}</button>
              ))}
            </div>
          </Field>
          <Field label="工单号 (可选)"><Input value="" onChange={()=>{}} placeholder="如关联具体工单请填写"/></Field>
          <Field label="详细描述" required>
            <textarea placeholder="请详细描述您的问题或建议, 我们会尽快回复" rows={4}
              style={{width:'100%',border:'none',outline:'none',background:'transparent',fontSize:14,fontFamily:'inherit',resize:'none',color:'#0F1F3A'}}/>
          </Field>
          <Field label="联系方式" required><Input value="138 0013 8000" onChange={()=>{}}/></Field>
        </Card>
        <div style={{padding:'18px 0'}}><Btn full size="lg" onClick={()=>go('mine')}>提交反馈</Btn></div>
      </div>
    </Page>
  );
}

Object.assign(window, {
  WarrantyScreen, FeesScreen, GuideScreen, ContactScreen,
  OrdersScreen, ProductsScreen, AddressScreen,
  LoginScreen, FeedbackScreen,
});
