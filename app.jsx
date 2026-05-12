// app.jsx — root App with router state + phone frame + Tweaks

function PhoneStage() {
  const [route, setRoute] = useState(['home']);
  const [state, setState] = useState({ logged: true });
  const [tab, setTab] = useState('home');

  // tweaks
  const [tw, setTw] = useTweaks(/*EDITMODE-BEGIN*/{
    "primary": "#1E6FE0",
    "density": "comfortable",
    "fontSize": 14,
    "roundness": "soft"
  }/*EDITMODE-END*/);

  // Apply tweaks via CSS vars
  useEffect(()=>{
    const root = document.documentElement;
    const hex = tw.primary;
    root.style.setProperty('--brand', hex);
    root.style.setProperty('--brand-2', hex);
    root.style.setProperty('--brand-deep', shadeHex(hex,-25));
    root.style.setProperty('--brand-soft', mix(hex,'#ffffff',.88));
    root.style.setProperty('--brand-mist', mix(hex,'#ffffff',.95));
  },[tw.primary]);

  const go = (next) => {
    if (['home','company','mine'].includes(next)) {
      setTab(next);
      setRoute([next]);
    } else {
      setRoute(r=>[...r, next]);
    }
  };
  const back = () => setRoute(r => r.length>1 ? r.slice(0,-1) : r);
  const set = (patch) => setState(s=>({...s,...patch}));

  const ctx = { state, set, go, back, route };
  const cur = route[route.length-1];

  // Map route → component
  const screenMap = {
    home:    <HomeScreen/>,
    company: <CompanyScreen/>,
    mine:    <MineScreen/>,
    repair:  <RepairScreen/>,
    'repair-success': <RepairSuccessScreen/>,
    track:   <TrackScreen/>,
    'order-detail': <OrderDetailScreen/>,
    diag:    <DiagnoseScreen/>,
    'diag-detail': <DiagDetailScreen/>,
    survey:  <SurveyScreen/>,
    warranty:<WarrantyScreen/>,
    fees:    <FeesScreen/>,
    'guide-quick':  <GuideScreen kind="guide-quick"/>,
    'guide-self':   <GuideScreen kind="guide-self"/>,
    'guide-repair': <GuideScreen kind="guide-repair"/>,
    'guide-query':  <GuideScreen kind="guide-query"/>,
    'guide-invoice':<GuideScreen kind="guide-invoice"/>,
    contact: <ContactScreen/>,
    orders:  <OrdersScreen/>,
    products:<ProductsScreen/>,
    address: <AddressScreen/>,
    login:   <LoginScreen/>,
    feedback:<FeedbackScreen/>,
    profile: <MineScreen/>,
  };

  // bottom nav visible only on root screens
  const isRoot = ['home','company','mine'].includes(cur);

  return (
    <AppCtx.Provider value={ctx}>
      <div className="stage">
        <div className="stage-head"><span className="dot"/><b>牙医仪器检修</b> · 小程序原型 v1.0</div>

        <div className="side">
          <h1>牙医仪器检修</h1>
          <div className="sub">高保真可交互原型 · 微信小程序 · 蓝白医疗风</div>
          <div className="legend"><span>9 大模块</span><span>16 屏</span></div>
          <div style={{fontSize:13,fontWeight:600,color:'#324563',marginTop:14}}>快速导航</div>
          <div className="grid">
            {[
              { id:'home',     t:'首页',     l:'四大板块' },
              { id:'repair',   t:'立即报修', l:'4 步表单' },
              { id:'track',    t:'维修进度', l:'物流时间线' },
              { id:'diag',     t:'故障自查', l:'分类向导' },
              { id:'survey',   t:'调研有礼', l:'弹窗调研' },
              { id:'warranty', t:'保修政策', l:'三重保修' },
              { id:'fees',     t:'收费办法', l:'透明报价' },
              { id:'guide-quick',  t:'快速指南', l:'5 分钟上手' },
              { id:'guide-invoice',t:'开票指南', l:'电子/纸质' },
              { id:'contact',  t:'联系我们', l:'客服/热线/地址' },
              { id:'company',  t:'公司介绍', l:'里程碑' },
              { id:'mine',     t:'我的',     l:'订单/地址/投诉' },
            ].map(b=>(
              <button key={b.id} className={cur===b.id?'on':''} onClick={()=>go(b.id)}>
                <span>{b.t}</span><span className="label">{b.l}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="phone">
          <div className="screen">
            <div className="island"/>
            <div style={{position:'absolute',inset:0,paddingBottom:isRoot?64:0}}>
              {screenMap[cur] || <div style={{padding:40}}>未找到页面 {cur}</div>}
            </div>
            {/* Floating customer service on every page */}
            <CustomerServiceFAB bottomOffset={isRoot ? 84 : 28}/>
            {isRoot && <BottomNav tab={tab} onChange={go}/>}
            <div className="home-indicator"/>
          </div>
        </div>

        <div className="side" style={{alignItems:'flex-start'}}>
          <h1>关于此原型</h1>
          <div className="sub">基于您提供的小程序定位表与界面要求, 完整覆盖 9 大模块、16 个屏幕, 包含上传图片/视频、寄修流程、物流时间线、故障自查向导等核心交互。</div>
          <div style={{fontSize:13,fontWeight:600,color:'#324563',marginTop:8}}>核心流程</div>
          <div style={{fontSize:12,color:'#6B7C97',lineHeight:1.8}}>
            · 立即报修 4 步表单(可加产品、上传附件、生成工单)<br/>
            · 维修进度查询 · 时间线追踪<br/>
            · 故障自查 · 分类排查 · 升级到报修<br/>
            · 调研有礼 · 评分 · 多标签 · 礼品<br/>
            · 微信原生顶栏 · 三 tab 底部导航
          </div>
          <div style={{fontSize:13,fontWeight:600,color:'#324563',marginTop:14}}>下一步建议</div>
          <div style={{fontSize:12,color:'#6B7C97',lineHeight:1.8}}>
            · 替换占位图为真实产品<br/>
            · 接入后台工单 API<br/>
            · 微信小程序原生组件化迁移
          </div>
        </div>
      </div>

      <TweaksPanel>
        <TweakSection label="主题">
          <TweakColor label="主题色" value={tw.primary} onChange={v=>setTw('primary',v)}
            options={['#1E6FE0','#0EA5E9','#0F766E','#2563EB','#1E40AF']}/>
        </TweakSection>
        <TweakSection label="布局">
          <TweakRadio label="密度" value={tw.density} onChange={v=>setTw('density',v)}
            options={[{value:'compact',label:'紧凑'},{value:'comfortable',label:'舒适'}]}/>
          <TweakRadio label="圆角" value={tw.roundness} onChange={v=>setTw('roundness',v)}
            options={[{value:'sharp',label:'方正'},{value:'soft',label:'柔和'},{value:'round',label:'圆润'}]}/>
        </TweakSection>
        <TweakSection label="字号">
          <TweakSlider label="基础字号" value={tw.fontSize} onChange={v=>setTw('fontSize',v)} min={12} max={17} step={1} unit="px"/>
        </TweakSection>
      </TweaksPanel>
    </AppCtx.Provider>
  );
}

// hex helpers
function shadeHex(hex, percent){
  const num = parseInt(hex.replace('#',''),16);
  const r = Math.max(0,Math.min(255,(num>>16) + Math.round(255*percent/100)));
  const g = Math.max(0,Math.min(255,((num>>8)&0xff) + Math.round(255*percent/100)));
  const b = Math.max(0,Math.min(255,(num&0xff) + Math.round(255*percent/100)));
  return '#'+((r<<16)|(g<<8)|b).toString(16).padStart(6,'0');
}
function mix(a,b,t){
  const pa=parseInt(a.replace('#',''),16), pb=parseInt(b.replace('#',''),16);
  const ar=(pa>>16)&255, ag=(pa>>8)&255, ab=pa&255;
  const br=(pb>>16)&255, bg=(pb>>8)&255, bb=pb&255;
  const r=Math.round(ar*(1-t)+br*t);
  const g=Math.round(ag*(1-t)+bg*t);
  const bl=Math.round(ab*(1-t)+bb*t);
  return '#'+((r<<16)|(g<<8)|bl).toString(16).padStart(6,'0');
}

ReactDOM.createRoot(document.getElementById('root')).render(<PhoneStage/>);
