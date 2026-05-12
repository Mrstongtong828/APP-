// screens-repair.jsx — 立即报修, 维修进度, 故障自查, 调研有礼

// ── Repair Submit Flow ──────────────────────────────────────
function RepairScreen() {
  const { go } = useApp();
  const PAGE_BG = '#E8EEFA';
  const [products, setProducts] = useState([
    { name:'', model:'', sn:'', buyDate:'', voucher:'', fault:'', media:[] },
  ]);
  const [form, setForm] = useState({
    company:'', tracking:'', shipMethod:'sf',
    receiver:'', phone:'', address:'', unit:'',
  });
  const set = (k,v) => setForm(f=>({...f,[k]:v}));
  const setProd = (idx, k, v) => setProducts(ps => ps.map((p,i)=>i===idx?{...p,[k]:v}:p));
  const addProd = () => setProducts(ps => [...ps, { name:'', model:'', sn:'', buyDate:'', voucher:'', fault:'', media:[] }]);
  const removeProd = (idx) => setProducts(ps => ps.length>1 ? ps.filter((_,i)=>i!==idx) : ps);
  const addMedia = (idx) => setProd(idx, 'media', [...products[idx].media, products[idx].media.length]);

  const FieldRow = ({required, label, children, last}) => (
    <div style={{
      display:'flex', alignItems:'flex-start', gap:10,
      padding:'14px 14px', borderBottom:last?'none':'1px solid #F1F5FB',
      minHeight:48,
    }}>
      <div style={{width:80, fontSize:13.5, color:'#324563', flexShrink:0, paddingTop:1, display:'flex', alignItems:'flex-start'}}>
        {required && <span style={{color:'#E5484D', marginRight:2}}>*</span>}
        <span>{label}</span>
      </div>
      <div style={{flex:1, minWidth:0, display:'flex', alignItems:'center', gap:6}}>{children}</div>
    </div>
  );

  const ph = (v, placeholder) => (
    <input value={v} readOnly placeholder={placeholder}
      style={{flex:1,minWidth:0,border:'none',outline:'none',background:'transparent',fontSize:13.5,color:'#0F1F3A',fontFamily:'inherit',padding:0}}/>
  );

  return (
    <Page noTop>
      <div style={{background:PAGE_BG, minHeight:'100%', paddingBottom:140}}>
        <WxTop title="" transparent/>

        {/* Brand bar with close */}
        <div style={{
          padding:'88px 16px 14px',
          display:'flex', alignItems:'center', justifyContent:'space-between',
        }}>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <svg width="22" height="22" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="3.5" stroke="#1E6FE0" strokeWidth="1.8" fill="#fff"/>
              <text x="12" y="15" fontSize="9" fontWeight="800" fill="#1E6FE0" textAnchor="middle" fontFamily="serif">C</text>
            </svg>
            <span style={{fontSize:15,fontWeight:700,color:'#0F1F3A',letterSpacing:.6,
              borderLeft:'1px solid #C4D1E4', paddingLeft:8,
            }}>思科达</span>
          </div>
          <button onClick={()=>go('home')} style={{padding:4}}>
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" stroke="#324563" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* 温馨提示 */}
        <div style={{padding:'0 14px'}}>
          <div style={{
            background:'#FDE9D9', borderRadius:8, padding:'12px 14px',
            fontSize:12.5, lineHeight:1.7, color:'#6B4226',
          }}>
            <span style={{color:'#E5484D', fontWeight:600}}>温馨提示：</span>
            为了给您提供更快更好的服务，请务必在快递里面留纸条写明：寄回原因或故障描述，联系方式和收件地址。
          </div>
        </div>

        {/* 产品信息 (可增加) */}
        <div style={{padding:'18px 14px 0'}}>
          <div style={{
            display:'flex', alignItems:'center', justifyContent:'space-between',
            padding:'0 2px 10px',
          }}>
            <div style={{fontSize:15,fontWeight:700,color:'#1E6FE0'}}>产品信息</div>
            <div style={{fontSize:11.5,color:'#94A3B8'}}>共 {products.length} 件 · 可增加</div>
          </div>

          {products.map((p, idx) => (
            <div key={idx} style={{marginBottom:10}}>
              {/* Header strip with product index + remove */}
              <div style={{
                display:'flex', alignItems:'center', justifyContent:'space-between',
                background:'#D7E3FA', borderRadius:'10px 10px 0 0',
                padding:'8px 14px',
              }}>
                <div style={{display:'flex',alignItems:'center',gap:6}}>
                  <div style={{
                    width:20,height:20,borderRadius:99,background:'#1E6FE0',color:'#fff',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    fontSize:11.5,fontWeight:700,
                  }}>{idx+1}</div>
                  <span style={{fontSize:13,fontWeight:600,color:'#0A4FB8'}}>报修产品 #{idx+1}</span>
                </div>
                {products.length > 1 && (
                  <button onClick={()=>removeProd(idx)} style={{
                    fontSize:12, color:'#E5484D',
                    display:'flex',alignItems:'center',gap:3,
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24">
                      <path d="M6 6l12 12M18 6L6 18" stroke="#E5484D" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                    移除
                  </button>
                )}
              </div>
              <div style={{background:'#fff', borderRadius:'0 0 12px 12px'}}>
                <FieldRow label="产品名称">{ph(p.name,'请输入')}</FieldRow>
                <FieldRow required label="产品型号">{ph(p.model,'请输入')}</FieldRow>
                <FieldRow required label="产品序列号">{ph(p.sn,'请输入')}</FieldRow>
                <FieldRow label="购买日期">
                  {ph(p.buyDate,'请选择')}
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="16" rx="2" stroke="#94A3B8" strokeWidth="1.6" fill="none"/>
                    <path d="M3 9h18M8 3v4M16 3v4" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </FieldRow>
                <FieldRow label="购买凭证">
                  {ph(p.voucher,'')}
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path d="M21 10l-9 9a5 5 0 01-7-7l9-9a3.5 3.5 0 015 5l-9 9a2 2 0 01-3-3l8-8" stroke="#94A3B8" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </FieldRow>
                <FieldRow required label="故障描述">{ph(p.fault,'最多2000字')}</FieldRow>

                {/* Media inside product card */}
                <div style={{padding:'14px 14px 16px'}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                    <div style={{fontSize:13,color:'#324563',display:'flex',alignItems:'center'}}>
                      <span style={{color:'#E5484D',marginRight:2}}>*</span>
                      <span style={{fontWeight:500}}>产品清单 / 故障图片或视频</span>
                    </div>
                    <div style={{fontSize:11.5,color:'#94A3B8'}}>{p.media.length}/3</div>
                  </div>
                  <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
                    {p.media.map((_,mi)=>(
                      <div key={mi} style={{
                        width:74,height:74,borderRadius:8,
                        background:'linear-gradient(135deg,#BFD6F7,#1E6FE0)',
                        position:'relative',
                        display:'flex',alignItems:'center',justifyContent:'center',
                      }}>
                        <Glyph name="cam" size={26} color="#fff"/>
                        <button onClick={()=>setProd(idx,'media',p.media.filter((_,k)=>k!==mi))} style={{
                          position:'absolute', top:-6, right:-6,
                          width:20, height:20, borderRadius:99, background:'#0F1F3A',
                          display:'flex',alignItems:'center',justifyContent:'center',
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24">
                            <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"/>
                          </svg>
                        </button>
                      </div>
                    ))}
                    {p.media.length < 3 && (
                      <button onClick={()=>addMedia(idx)} style={{
                        width:74,height:74,borderRadius:8,
                        border:'1.5px dashed #BFD6F7', background:'#F3F8FF',
                        display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:4,
                      }}>
                        <svg width="22" height="22" viewBox="0 0 24 24">
                          <path d="M12 5v14M5 12h14" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                        <span style={{fontSize:10,color:'#94A3B8'}}>添加</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Add product button */}
          <button onClick={addProd} style={{
            width:'100%',padding:14,borderRadius:12,
            border:'1.5px dashed #BFD6F7',background:'#F3F8FF',
            color:'#1E6FE0',fontSize:14,fontWeight:600,
            display:'flex',alignItems:'center',justifyContent:'center',gap:6,
          }}>
            <Glyph name="plus" size={18} color="#1E6FE0"/> 增加报修产品
          </button>
        </div>

        {/* 寄出信息 */}
        <div style={{padding:'18px 14px 0'}}>
          <div style={{fontSize:15,fontWeight:700,color:'#1E6FE0',padding:'0 2px 10px'}}>寄出信息</div>
          <div style={{
            background:'#D7E3FA', borderRadius:8, padding:'12px 14px',
            fontSize:12.5, lineHeight:1.7, color:'#0A4FB8', marginBottom:10,
          }}>
            请妥善包装好设备，顺丰取件请在快递员到达后提供运单号。
          </div>
          <div style={{background:'#fff', borderRadius:12}}>
            <FieldRow required label="物流公司">
              {ph(form.company,'请选择物流公司')}
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path d="M3 5l4 4 4-4" stroke="#94A3B8" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              </svg>
            </FieldRow>
            <FieldRow required label="运单号">
              {ph(form.tracking,'请输入运单号')}
              {/* scan icon */}
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M4 4h4M4 4v4M20 4h-4M20 4v4M4 20h4M4 20v-4M20 20h-4M20 20v-4" stroke="#1E6FE0" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M7 12h10M9 9v6M13 9v6" stroke="#1E6FE0" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </FieldRow>
            <FieldRow label="寄送方式" last>
              <div style={{display:'flex', alignItems:'center', gap:18}}>
                <button onClick={()=>set('shipMethod','sf')} style={{display:'flex',alignItems:'center',gap:6}}>
                  <div style={{
                    width:14,height:14,borderRadius:99,
                    border:form.shipMethod==='sf'?'4px solid #1E6FE0':'1.5px solid #C4D1E4',
                    background:'#fff',
                  }}/>
                  <span style={{fontSize:13,color:'#0F1F3A'}}>顺丰取件</span>
                </button>
                <button onClick={()=>set('shipMethod','self')} style={{display:'flex',alignItems:'center',gap:6}}>
                  <div style={{
                    width:14,height:14,borderRadius:99,
                    border:form.shipMethod==='self'?'4px solid #1E6FE0':'1.5px solid #C4D1E4',
                    background:'#fff',
                  }}/>
                  <span style={{fontSize:13,color:'#0F1F3A'}}>自行寄送</span>
                </button>
              </div>
            </FieldRow>
          </div>
        </div>

        {/* 回寄信息 */}
        <div style={{padding:'18px 14px 0'}}>
          <div style={{fontSize:15,fontWeight:700,color:'#1E6FE0',padding:'0 2px 10px'}}>回寄信息</div>
          <div style={{background:'#fff', borderRadius:12}}>
            <FieldRow required label="收货人">{ph(form.receiver,'请输入用户姓名')}</FieldRow>
            <FieldRow required label="手机号码">
              {ph(form.phone,'请输入用户手机')}
              <svg width="8" height="12" viewBox="0 0 8 12">
                <path d="M1 1l5 5-5 5" stroke="#C4D1E4" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
              </svg>
            </FieldRow>
            <FieldRow required label="详细地址">
              {ph(form.address,'请输入用户地址')}
              <Glyph name="pin" size={18} color="#1E6FE0"/>
            </FieldRow>
            <FieldRow required label="单位名称" last>{ph(form.unit,'请输入单位名称')}</FieldRow>
          </div>
        </div>

        {/* 联系我们 */}
        <div style={{padding:'18px 14px 0'}}>
          <div style={{fontSize:15,fontWeight:700,color:'#1E6FE0',padding:'0 2px 10px'}}>联系我们</div>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            <button onClick={()=>go('contact')} style={{
              background:'#fff', borderRadius:12, padding:'14px 14px',
              display:'flex', alignItems:'center', gap:12, textAlign:'left',
            }}>
              <div style={{
                width:38,height:38,borderRadius:10,background:'#D7E3FA',
                display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
              }}>
                <Glyph name="chat" size={20} color="#1E6FE0"/>
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:700,color:'#0F1F3A'}}>在线客服</div>
                <div style={{fontSize:11.5,color:'#6B7C97',marginTop:3}}>8:00 to 21:00（节假日除外）</div>
              </div>
              <svg width="8" height="12" viewBox="0 0 8 12">
                <path d="M1 1l5 5-5 5" stroke="#C4D1E4" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
            <div style={{
              background:'#fff', borderRadius:12, padding:'14px 14px',
              display:'flex', alignItems:'center', gap:12,
            }}>
              <div style={{
                width:38,height:38,borderRadius:10,background:'#D7E3FA',
                display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
              }}>
                <Glyph name="phone" size={20} color="#1E6FE0"/>
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:700,color:'#0F1F3A'}}>服务热线</div>
                <div style={{fontSize:12.5,color:'#1E6FE0',fontWeight:600,marginTop:3}}>400-888-999</div>
              </div>
            </div>

            {/* 收件信息 — 文字形式展示，支持复制 */}
            <div style={{background:'#fff', borderRadius:12, padding:'14px 14px 6px'}}>
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}>
                <Glyph name="pin" size={18} color="#1E6FE0"/>
                <span style={{fontSize:14,fontWeight:700,color:'#0F1F3A'}}>收件信息</span>
              </div>
              <div style={{height:1,background:'#F1F5FB',margin:'4px -2px 4px'}}/>
              {[
                {k:'收件公司', v:'桂林市啄木鸟医疗器械有限公司'},
                {k:'收 件 人', v:'售后 李山'},
                {k:'收件电话', v:'13977382317'},
                {k:'收件地址', v:'广西壮族自治区桂林市七星区朝阳路国家高新区信息产业园'},
              ].map((it,i,arr)=>(
                <div key={it.k} style={{
                  padding:'10px 0', borderBottom:i===arr.length-1?'none':'1px dashed #E4ECF7',
                  display:'flex', alignItems:'flex-start', gap:10,
                }}>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{fontSize:11.5,color:'#94A3B8',marginBottom:3}}>{it.k}</div>
                    <div style={{fontSize:13.5,color:'#0F1F3A',fontWeight:600,lineHeight:1.5,wordBreak:'break-all'}}>{it.v}</div>
                  </div>
                  <button onClick={()=>{
                    try{ navigator.clipboard && navigator.clipboard.writeText(it.v); }catch(e){}
                  }} style={{padding:4, flexShrink:0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <rect x="8" y="3" width="13" height="16" rx="2" stroke="#94A3B8" strokeWidth="1.6" fill="none"/>
                      <path d="M16 3v2a2 2 0 002 2h2M3 8v11a2 2 0 002 2h11" stroke="#94A3B8" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              ))}
              <button onClick={()=>{
                const all = '收件公司：桂林市啄木鸟医疗器械有限公司\n收件人：售后 李山\n收件电话：13977382317\n收件地址：广西壮族自治区桂林市七星区朝阳路国家高新区信息产业园';
                try{ navigator.clipboard && navigator.clipboard.writeText(all); }catch(e){}
              }} style={{
                width:'100%', height:42, marginTop:10, marginBottom:6,
                borderRadius:8, color:'#fff', fontSize:13.5, fontWeight:600,
                background:'linear-gradient(180deg,#2A6CD3 0%,#0A4FB8 100%)',
                display:'flex',alignItems:'center',justifyContent:'center',gap:6,
                boxShadow:'0 6px 14px -6px rgba(10,79,184,.45)',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24"><path d="M5 12l4 4L19 6" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                一键复制以上收件信息
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating FABs */}
      <button onClick={()=>go('contact')} style={{
        position:'absolute', right:18, bottom:150, zIndex:20,
        width:46, height:46, borderRadius:99,
        background:'linear-gradient(180deg, #3A86FF 0%, #1E6FE0 100%)',
        display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 8px 20px -4px rgba(30,111,224,.5)',
        border:'2px solid #fff',
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path d="M4 13a8 8 0 0116 0v5a2 2 0 01-2 2h-2v-7h4M4 13v5a2 2 0 002 2h2v-7H4" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
        </svg>
      </button>
      <button onClick={()=>go('contact')} style={{
        position:'absolute', right:18, bottom:96, zIndex:20,
        width:46, height:46, borderRadius:99, background:'#fff',
        display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 6px 14px -4px rgba(15,31,58,.2)',
      }}>
        <Glyph name="phone" size={22} color="#1E6FE0"/>
      </button>

      {/* Bottom bar: 更多 + 提交 */}
      <div style={{
        position:'absolute', bottom:0, left:0, right:0, zIndex:10,
        background:'#fff', padding:'10px 14px 28px',
        borderTop:'1px solid #E4ECF7',
        display:'flex', alignItems:'center', gap:12,
      }}>
        <button onClick={()=>go('home')} style={{
          display:'flex',flexDirection:'column',alignItems:'center',gap:2,padding:'4px 8px',
        }}>
          <svg width="22" height="6" viewBox="0 0 22 6">
            <circle cx="3" cy="3" r="2" fill="#324563"/>
            <circle cx="11" cy="3" r="2" fill="#324563"/>
            <circle cx="19" cy="3" r="2" fill="#324563"/>
          </svg>
          <span style={{fontSize:10.5,color:'#324563'}}>更多</span>
        </button>
        <button onClick={()=>go('repair-success')} style={{
          flex:1, height:48, borderRadius:8,
          background:'linear-gradient(180deg, #2A6CD3 0%, #0A4FB8 100%)',
          color:'#fff', fontSize:15, fontWeight:600,
          boxShadow:'0 10px 24px -10px rgba(10,79,184,.55)',
        }}>
          立即提交报修
        </button>
      </div>
    </Page>
  );
}

// ── Repair Success ───────────────────────────────────────────
function RepairSuccessScreen(){
  const { go } = useApp();
  return (
    <Page title="提交成功" onBack={()=>go('home')}>
      <div style={{padding:'30px 22px',textAlign:'center'}}>
        <div style={{
          width:80,height:80,margin:'10px auto 18px',borderRadius:99,
          background:'linear-gradient(135deg,#3A86FF,#1E6FE0)',
          display:'flex',alignItems:'center',justifyContent:'center',
          boxShadow:'0 12px 28px -8px rgba(30,111,224,.5)',
        }}><Glyph name="check" size={42} color="#fff"/></div>
        <div style={{fontSize:20,fontWeight:700,color:'#0F1F3A'}}>报修已提交</div>
        <div style={{fontSize:13,color:'#6B7C97',marginTop:8,lineHeight:1.6}}>工程师将于 30 分钟内联系您<br/>请保持手机畅通</div>
        <Card style={{marginTop:24,textAlign:'left'}}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{fontSize:11,color:'#94A3B8'}}>工单号</div>
            <button style={{fontSize:11,color:'#1E6FE0'}}>复制</button>
          </div>
          <div style={{fontSize:16,fontWeight:700,color:'#0F1F3A',letterSpacing:.5,marginTop:4}}>DR-20260511-0042</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:14,paddingTop:14,borderTop:'1px solid #F1F5FB'}}>
            <div><div style={{fontSize:11,color:'#94A3B8'}}>预计响应</div><div style={{fontSize:13,fontWeight:600,marginTop:2}}>30 分钟内</div></div>
            <div><div style={{fontSize:11,color:'#94A3B8'}}>物流方式</div><div style={{fontSize:13,fontWeight:600,marginTop:2}}>顺丰到付</div></div>
          </div>
        </Card>
        <div style={{display:'flex',gap:10,marginTop:24}}>
          <Btn variant="ghost" full onClick={()=>go('home')}>返回首页</Btn>
          <Btn full onClick={()=>go('track')}>查看进度</Btn>
        </div>
      </div>
    </Page>
  );
}

// ── Track / Progress ────────────────────────────────────────
function TrackScreen(){
  const { go } = useApp();
  const orders = [
    { id:'DR-20260508-1147', model:'NSK Ti-Max Z95L', status:'维修中', tone:'warn', step:2, time:'05-09 14:23' },
    { id:'DR-20260420-0883', model:'CICADA 超声洁牙机', status:'已完成', tone:'ok', step:3, time:'04-25 09:11' },
    { id:'DR-20260315-0521', model:'根管马达 X-Smart', status:'已完成', tone:'ok', step:3, time:'03-20 16:48' },
  ];
  return (
    <Page title="维修进度" onBack={()=>go('home')}>
      {/* search bar */}
      <div style={{padding:'14px',background:'#fff'}}>
        <div style={{
          display:'flex',alignItems:'center',gap:8,
          background:'#F3F8FF',borderRadius:99,padding:'10px 14px',
        }}>
          <Glyph name="search" size={16}/>
          <input placeholder="输入工单号 / 产品序列号查询"
            style={{flex:1,border:'none',outline:'none',background:'transparent',fontSize:13,fontFamily:'inherit'}}/>
        </div>
      </div>
      {/* Filter tabs */}
      <div style={{padding:'8px 14px',display:'flex',gap:18,background:'#fff',borderBottom:'1px solid #F1F5FB'}}>
        {['全部','待处理','维修中','已发货'].map((t,i)=>(
          <button key={t} style={{
            fontSize:13,padding:'8px 0',position:'relative',
            color:i===0?'#1E6FE0':'#6B7C97',fontWeight:i===0?600:400,
          }}>
            {t}
            {i===0 && <div style={{position:'absolute',bottom:0,left:'50%',transform:'translateX(-50%)',width:18,height:2,background:'#1E6FE0',borderRadius:2}}/>}
          </button>
        ))}
      </div>
      <div style={{padding:'14px'}}>
        {orders.map(o=>(
          <Card key={o.id} style={{marginBottom:10,padding:0}} onClick={()=>go('order-detail')}>
            <div style={{padding:'14px 14px 0',display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div>
                <div style={{fontSize:11,color:'#94A3B8'}}>工单 {o.id}</div>
                <div style={{fontSize:14,fontWeight:600,marginTop:3}}>{o.model}</div>
              </div>
              <Tag tone={o.tone}>{o.status}</Tag>
            </div>
            <div style={{padding:'14px',display:'flex',alignItems:'center',gap:0}}>
              {['寄出','签收','检测','维修','回寄','完成'].map((s,i)=>{
                const active = i <= [0,1,3,5][o.step] || (o.step===3 && i===5);
                const reached = i <= ({0:1,1:3,2:4,3:5}[o.step] || 0);
                return (
                  <React.Fragment key={i}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:4,flexShrink:0}}>
                      <div style={{
                        width:14,height:14,borderRadius:99,
                        background:reached?'#1E6FE0':'#E4ECF7',
                        boxShadow:reached?'0 0 0 4px rgba(30,111,224,.12)':'none',
                      }}/>
                      <div style={{fontSize:10,color:reached?'#1E6FE0':'#94A3B8'}}>{s}</div>
                    </div>
                    {i<5 && <div style={{flex:1,height:1.5,background:reached?'#1E6FE0':'#E4ECF7',marginBottom:14}}/>}
                  </React.Fragment>
                );
              })}
            </div>
            <div style={{padding:'10px 14px',borderTop:'1px solid #F1F5FB',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{fontSize:11.5,color:'#6B7C97'}}>最后更新 · {o.time}</span>
              <span style={{fontSize:12,color:'#1E6FE0',fontWeight:500}}>查看详情 →</span>
            </div>
          </Card>
        ))}
      </div>
    </Page>
  );
}

// ── Order Detail with timeline ──────────────────────────────
function OrderDetailScreen(){
  const { go } = useApp();
  const timeline = [
    { t:'物流回寄', d:'顺丰 SF1234567890 已签收',          time:'2026-05-11 09:32', done:false, status:'pending' },
    { t:'维修完成', d:'已更换轴承组件，含密封圈与卡簧',   time:'2026-05-10 16:48', done:true, },
    { t:'维修中',   d:'工程师:王师傅 · 故障定位完成',     time:'2026-05-09 14:23', done:true, },
    { t:'检测完成', d:'确认转动卡顿、轴承磨损',           time:'2026-05-09 11:05', done:true, },
    { t:'已签收',   d:'桂林服务中心 收',                  time:'2026-05-08 16:20', done:true, },
    { t:'已寄出',   d:'顺丰快递 SF0987654321',             time:'2026-05-08 10:14', done:true, },
  ];
  return (
    <Page title="工单详情" onBack={()=>go('track')}>
      {/* hero card */}
      <div style={{padding:'14px'}}>
        <Card style={{background:'linear-gradient(135deg,#1E6FE0,#3A86FF)',color:'#fff',padding:18}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{fontSize:11,opacity:.85}}>工单号</div>
            <Tag tone="muted" style={{background:'rgba(255,255,255,.2)',color:'#fff'}}>维修中</Tag>
          </div>
          <div style={{fontSize:16,fontWeight:700,letterSpacing:.5,marginTop:4}}>DR-20260508-1147</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginTop:14,paddingTop:14,borderTop:'1px solid rgba(255,255,255,.2)'}}>
            <div><div style={{fontSize:11,opacity:.75}}>产品</div><div style={{fontSize:13,fontWeight:600,marginTop:2}}>NSK Ti-Max Z95L</div></div>
            <div><div style={{fontSize:11,opacity:.75}}>预计完成</div><div style={{fontSize:13,fontWeight:600,marginTop:2}}>05-11 18:00</div></div>
          </div>
        </Card>
      </div>

      {/* Timeline */}
      <div style={{padding:'0 14px'}}>
        <SectionHeader title="进度时间线"/>
        <Card>
          {timeline.map((n,i)=>(
            <div key={i} style={{display:'flex',gap:12,paddingBottom:i<timeline.length-1?16:0}}>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{
                  width:10,height:10,borderRadius:99,marginTop:6,
                  background:n.status==='pending'?'#fff':(n.done?'#1E6FE0':'#E4ECF7'),
                  border:n.status==='pending'?'2px solid #1E6FE0':'none',
                  boxShadow:n.done&&!n.status?'0 0 0 4px #E8F1FE':'none',
                }}/>
                {i<timeline.length-1 && <div style={{flex:1,width:1.5,background:'#E4ECF7',marginTop:4}}/>}
              </div>
              <div style={{flex:1}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{fontSize:14,fontWeight:600,color:n.status==='pending'?'#94A3B8':'#0F1F3A'}}>{n.t}</span>
                  <span style={{fontSize:11,color:'#94A3B8'}}>{n.time}</span>
                </div>
                <div style={{fontSize:12,color:'#6B7C97',marginTop:3,lineHeight:1.55}}>{n.d}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Invoice card */}
      <div style={{padding:'18px 14px 0'}}>
        <SectionHeader title="发票进度"/>
        <Card style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:42,height:42,borderRadius:12,background:'#FFF7E6',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Glyph name="invoice" size={24} color="#D97706"/>
          </div>
          <div style={{flex:1}}>
            <div style={{fontSize:14,fontWeight:600}}>增值税普通发票</div>
            <div style={{fontSize:11.5,color:'#6B7C97',marginTop:2}}>桂林口腔门诊有限公司 · ￥860.00</div>
          </div>
          <Tag tone="warn">待开具</Tag>
        </Card>
      </div>

      {/* Engineer */}
      <div style={{padding:'18px 14px 100px'}}>
        <SectionHeader title="负责工程师"/>
        <Card style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:44,height:44,borderRadius:99,background:'linear-gradient(135deg,#BFD6F7,#1E6FE0)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700,fontSize:16}}>王</div>
          <div style={{flex:1}}>
            <div style={{fontSize:14,fontWeight:600}}>王师傅</div>
            <div style={{fontSize:11.5,color:'#6B7C97',marginTop:2}}>10 年高速手机维修经验</div>
          </div>
          <Btn size="sm" variant="ghost"><Glyph name="chat" size={14} color="#1E6FE0"/></Btn>
          <Btn size="sm" style={{marginLeft:6}}><Glyph name="phone" size={14} color="#fff"/></Btn>
        </Card>
      </div>
    </Page>
  );
}

// ── Diagnose Wizard (form-style dropdown selection) ─────────
function DiagnoseScreen(){
  const { go } = useApp();
  const PAGE_BG = '#E8EEFA';

  const products = [
    { id:'hp', t:'高速手机/低速手机' },
    { id:'sc', t:'超声洁牙机' },
    { id:'rm', t:'根管马达' },
    { id:'cu', t:'光固化机/扫描仪' },
    { id:'ch', t:'综合治疗椅' },
  ];
  const faultMap = {
    hp:['转动卡顿/异响','喷雾不正常 / 无水','夹钳松弛、卡针脱落','气压不足、动力弱','灯光不亮 (光纤型)'],
    sc:['不出水/水量小','工作头无振动','电源指示灯不亮','发热严重'],
    rm:['转速异常','显示屏黑屏','按键无反应','扭力不稳'],
    cu:['不出光/光弱','电池续航差','光斑不均匀','机身过热'],
    ch:['椅背升降卡顿','水气泄漏','灯光无法点亮','无菌水路报警'],
  };

  const [product, setProduct] = useState('');
  const [fault, setFault] = useState('');
  const [openSheet, setOpenSheet] = useState(null);  // 'product' | 'fault' | null

  const productLabel = products.find(p=>p.id===product)?.t || '';
  const faultOptions = product ? faultMap[product] : [];

  const onSelectProduct = (id) => {
    setProduct(id);
    setFault('');
    setOpenSheet(null);
  };
  const onSelectFault = (t) => {
    setFault(t);
    setOpenSheet(null);
  };

  const SelectRow = ({label, required, value, placeholder, onClick, disabled}) => (
    <div onClick={disabled?undefined:onClick} style={{
      display:'flex', alignItems:'center', padding:'14px 14px',
      borderBottom:'1px solid #F1F5FB',
      cursor:disabled?'not-allowed':'pointer', opacity:disabled?.5:1,
    }}>
      <div style={{width:90,fontSize:13.5,color:'#324563',flexShrink:0,display:'flex',alignItems:'center'}}>
        {required && <span style={{color:'#E5484D',marginRight:2}}>*</span>}
        <span>{label}</span>
      </div>
      <div style={{flex:1,fontSize:13.5,color:value?'#0F1F3A':'#94A3B8'}}>
        {value || placeholder}
      </div>
      <svg width="14" height="14" viewBox="0 0 14 14">
        <path d="M3 5l4 4 4-4" stroke="#94A3B8" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      </svg>
    </div>
  );

  // Confirmation info (pre-loaded in DB, per spec)
  const confirmInfo = (product && fault) ? {
    related:[
      '该症状是否在最近一次保养之后出现?',
      '故障是否伴随明显异响、气味或发热?',
      '断电重启后症状是否消失?',
    ],
    check:[
      '断电冷却 5 分钟后再观察',
      '更换同型号备机做对照测试',
      '查看进气压力是否在 0.25–0.30 MPa',
    ],
    fix:[
      '可自行清洁卡簧并喷涂专用润滑油',
      '若 24 小时内复现, 建议寄修更换轴承组件',
      '若伴随漏气或漏水, 请立刻停用并联系工程师',
    ],
  } : null;

  return (
    <Page noTop>
      <div style={{background:PAGE_BG, minHeight:'100%', paddingBottom:120}}>
        <WxTop title="故障自查" onBack={()=>go('home')}/>

        {/* Hero hint */}
        <div style={{padding:'88px 14px 0'}}>
          <div style={{
            background:'linear-gradient(135deg,#F3F8FF,#E8F1FE)',
            border:'1px solid #BFD6F7',
            borderRadius:14, padding:'14px',
            display:'flex',gap:12,alignItems:'center',
          }}>
            <div style={{width:42,height:42,borderRadius:12,background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              <Glyph name="diag" size={24}/>
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:14,fontWeight:700,color:'#0F1F3A'}}>2 步快速定位故障</div>
              <div style={{fontSize:11.5,color:'#6B7C97',marginTop:3,lineHeight:1.6}}>选择产品类型与故障类型, 即查看排查建议</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div style={{padding:'18px 14px 0'}}>
          <div style={{fontSize:15,fontWeight:700,color:'#1E6FE0',padding:'0 2px 10px'}}>请选择</div>
          <div style={{background:'#fff', borderRadius:12, overflow:'hidden'}}>
            <SelectRow
              required label="产品类型"
              value={productLabel}
              placeholder="请选择产品类型"
              onClick={()=>setOpenSheet('product')}
            />
            <SelectRow
              required label="故障类型"
              value={fault}
              placeholder={product?'请选择故障类型':'请先选择产品类型'}
              onClick={()=>setOpenSheet('fault')}
              disabled={!product}
            />
          </div>
        </div>

        {/* Confirmation info */}
        {confirmInfo && (
          <>
            <div style={{padding:'22px 14px 0'}}>
              <div style={{fontSize:15,fontWeight:700,color:'#1E6FE0',padding:'0 2px 10px'}}>排查确认信息</div>

              <div style={{
                background:'#fff', borderRadius:12, padding:'14px 16px', marginBottom:10,
              }}>
                <div style={{display:'flex',alignItems:'center',gap:8,paddingBottom:10,borderBottom:'1px solid #F1F5FB'}}>
                  <div style={{width:6,height:6,borderRadius:99,background:'#1E6FE0'}}/>
                  <span style={{fontSize:13.5,fontWeight:700,color:'#0F1F3A'}}>相关问题</span>
                </div>
                {confirmInfo.related.map((t,i)=>(
                  <div key={i} style={{display:'flex',gap:10,padding:'10px 0 0',fontSize:13,color:'#324563',lineHeight:1.6}}>
                    <div style={{color:'#94A3B8',flexShrink:0}}>·</div>
                    <div style={{flex:1}}>{t}</div>
                  </div>
                ))}
              </div>

              <div style={{
                background:'#fff', borderRadius:12, padding:'14px 16px', marginBottom:10,
              }}>
                <div style={{display:'flex',alignItems:'center',gap:8,paddingBottom:10,borderBottom:'1px solid #F1F5FB'}}>
                  <div style={{width:6,height:6,borderRadius:99,background:'#0EA5E9'}}/>
                  <span style={{fontSize:13.5,fontWeight:700,color:'#0F1F3A'}}>确认方式</span>
                </div>
                {confirmInfo.check.map((t,i)=>(
                  <div key={i} style={{display:'flex',gap:10,padding:'10px 0 0',fontSize:13,color:'#324563',lineHeight:1.6}}>
                    <div style={{
                      width:18,height:18,borderRadius:99,background:'#E0F2FE',
                      display:'flex',alignItems:'center',justifyContent:'center',
                      color:'#0369A1',fontSize:11,fontWeight:700,flexShrink:0,marginTop:1,
                    }}>{i+1}</div>
                    <div style={{flex:1}}>{t}</div>
                  </div>
                ))}
              </div>

              <div style={{
                background:'#fff', borderRadius:12, padding:'14px 16px',
              }}>
                <div style={{display:'flex',alignItems:'center',gap:8,paddingBottom:10,borderBottom:'1px solid #F1F5FB'}}>
                  <div style={{width:6,height:6,borderRadius:99,background:'#10B981'}}/>
                  <span style={{fontSize:13.5,fontWeight:700,color:'#0F1F3A'}}>处理方式</span>
                </div>
                {confirmInfo.fix.map((t,i)=>(
                  <div key={i} style={{display:'flex',gap:10,padding:'10px 0 0',fontSize:13,color:'#324563',lineHeight:1.6}}>
                    <div style={{
                      width:18,height:18,borderRadius:99,background:'#DCFCE7',
                      display:'flex',alignItems:'center',justifyContent:'center',
                      color:'#047857',fontSize:11,fontWeight:700,flexShrink:0,marginTop:1,
                    }}>{i+1}</div>
                    <div style={{flex:1}}>{t}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{padding:'22px 14px 0', display:'flex', gap:10}}>
              <Btn variant="ghost" full onClick={()=>{setProduct('');setFault('');}}>重新选择</Btn>
              <Btn full onClick={()=>go('repair')}>仍未解决 · 立即报修</Btn>
            </div>
          </>
        )}

        {!confirmInfo && (
          <div style={{padding:'40px 30px',textAlign:'center'}}>
            <div style={{fontSize:13,color:'#94A3B8',lineHeight:1.7}}>
              选择产品类型与故障类型, 系统将自动展示排查建议。
            </div>
          </div>
        )}
      </div>

      {/* Bottom sheet for product or fault selection */}
      {openSheet && (
        <>
          <div onClick={()=>setOpenSheet(null)} style={{
            position:'absolute', inset:0, background:'rgba(15,31,58,.45)', zIndex:50,
          }}/>
          <div style={{
            position:'absolute', left:0, right:0, bottom:0, zIndex:60,
            background:'#fff', borderTopLeftRadius:16, borderTopRightRadius:16,
            paddingBottom:24, maxHeight:'70%', overflowY:'auto',
          }} className="pscroll">
            <div style={{
              padding:'14px 16px', borderBottom:'1px solid #F1F5FB',
              display:'flex', alignItems:'center', justifyContent:'space-between',
            }}>
              <button onClick={()=>setOpenSheet(null)} style={{fontSize:14,color:'#94A3B8'}}>取消</button>
              <div style={{fontSize:15,fontWeight:600,color:'#0F1F3A'}}>
                {openSheet==='product'?'选择产品类型':'选择故障类型'}
              </div>
              <div style={{width:36}}/>
            </div>
            {(openSheet==='product'?products:faultOptions.map(t=>({id:t,t}))).map(opt=>{
              const active = openSheet==='product'?opt.id===product:opt.t===fault;
              return (
                <button key={opt.id} onClick={()=>openSheet==='product'?onSelectProduct(opt.id):onSelectFault(opt.t)} style={{
                  width:'100%', padding:'15px 16px',
                  textAlign:'left', fontSize:14,
                  color:active?'#1E6FE0':'#0F1F3A',
                  fontWeight:active?600:400,
                  background:'transparent',
                  borderBottom:'1px solid #F1F5FB',
                  display:'flex', alignItems:'center', justifyContent:'space-between',
                }}>
                  <span>{opt.t}</span>
                  {active && (
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path d="M4 12l5 5L20 6" stroke="#1E6FE0" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </Page>
  );
}

// ── Diagnose Detail (recommendations) ───────────────────────
function DiagDetailScreen(){
  const { go } = useApp();
  return (
    <Page title="故障建议" onBack={()=>go('diag')}>
      <div style={{padding:'14px'}}>
        <Card style={{background:'linear-gradient(135deg,#FEF3C7,#FDE68A)',border:'1px solid #FCD34D'}}>
          <div style={{display:'flex',gap:10}}>
            <Glyph name="diag" size={22} color="#92400E"/>
            <div style={{flex:1}}>
              <div style={{fontSize:14,fontWeight:700,color:'#92400E'}}>转动卡顿 / 异响</div>
              <div style={{fontSize:12,color:'#A16207',marginTop:4,lineHeight:1.6}}>该症状多由轴承磨损、卡簧失效或润滑不足引起，建议进行下方自检后再决定是否报修。</div>
            </div>
          </div>
        </Card>
        <SectionHeader title="自检步骤" />
        <Card pad={0}>
          {[
            { t:'检查润滑', d:'拆下机头喷涂专用润滑油，运转 30 秒观察异响是否减弱。' },
            { t:'查看卡簧', d:'手动旋转卡簧，确认是否能完全锁紧针柄。' },
            { t:'测试气压', d:'调整气压至 0.25–0.30 MPa，避免气压过低引起动力不足。' },
          ].map((s,i,arr)=>(
            <div key={i} style={{padding:'14px',display:'flex',gap:12,borderBottom:i<arr.length-1?'1px solid #F1F5FB':'none'}}>
              <div style={{width:24,height:24,borderRadius:99,background:'#1E6FE0',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:600,flexShrink:0}}>{i+1}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:600}}>{s.t}</div>
                <div style={{fontSize:12,color:'#6B7C97',marginTop:3,lineHeight:1.6}}>{s.d}</div>
              </div>
            </div>
          ))}
        </Card>
        <div style={{padding:'18px 0'}}>
          <SectionHeader title="仍未解决?"/>
          <Card style={{background:'#FEE2E2',border:'1px solid #FECACA'}}>
            <div style={{fontSize:13,fontWeight:600,color:'#B91C1C'}}>建议尽快寄修</div>
            <div style={{fontSize:12,color:'#7F1D1D',marginTop:4,lineHeight:1.6}}>持续使用可能导致轴承组件二次损伤、维修成本上升。</div>
            <Btn style={{marginTop:12}} onClick={()=>go('repair')}>立即报修</Btn>
          </Card>
        </div>
      </div>
    </Page>
  );
}

// ── Survey ─ popup form: 客服二维码 + 文字说明 ────────────────
function SurveyScreen(){
  const { go } = useApp();
  const [copied, setCopied] = useState(false);
  const copyWx = () => {
    if (navigator.clipboard) navigator.clipboard.writeText('CSD-Service-001').catch(()=>{});
    setCopied(true);
    setTimeout(()=>setCopied(false), 1400);
  };
  // Dimmed background = previous screen behind the modal
  return (
    <Page noTop>
      {/* Backdrop showing dimmed home behind */}
      <div style={{
        position:'absolute', inset:0,
        background:'#E8EEFA',
        opacity:.6,
      }}/>
      <div style={{position:'absolute',inset:0,background:'rgba(15,31,58,.45)',backdropFilter:'blur(2px)'}}/>

      {/* Modal */}
      <div style={{
        position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)',
        width:'82%', maxWidth:320,
        background:'#fff', borderRadius:18, padding:'22px 22px 18px',
        boxShadow:'0 24px 60px -12px rgba(15,31,58,.4)',
        textAlign:'center',
      }}>
        {/* close */}
        <button onClick={()=>go('home')} style={{
          position:'absolute', right:12, top:12, padding:6,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6L6 18" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* ribbon */}
        <div style={{
          display:'inline-flex', alignItems:'center', gap:6,
          background:'#FFF7E6', color:'#A16207',
          padding:'4px 12px', borderRadius:99, fontSize:11, fontWeight:600,
          letterSpacing:.5,
        }}>
          <Glyph name="gift" size={14} color="#A16207"/>
          调研有礼
        </div>

        <div style={{fontSize:18,fontWeight:800,color:'#0F1F3A',marginTop:12,letterSpacing:.3}}>
          扫码参与售后调研
        </div>
        <div style={{fontSize:12.5,color:'#6B7C97',marginTop:6,lineHeight:1.7}}>
          长按识别下方二维码<br/>添加客服 1 对 1 协助参与, 完成调研可领取专属礼品。
        </div>

        {/* QR */}
        <div style={{
          width:160, height:160, margin:'18px auto 6px', padding:10,
          background:'#fff', borderRadius:14,
          border:'1px solid #E4ECF7',
          boxShadow:'0 8px 22px -10px rgba(15,31,58,.18)',
        }}>
          <svg viewBox="0 0 64 64" width="100%" height="100%">
            <rect x="2" y="2" width="20" height="20" stroke="#0F1F3A" strokeWidth="3" fill="none"/>
            <rect x="42" y="2" width="20" height="20" stroke="#0F1F3A" strokeWidth="3" fill="none"/>
            <rect x="2" y="42" width="20" height="20" stroke="#0F1F3A" strokeWidth="3" fill="none"/>
            <rect x="8" y="8" width="8" height="8" fill="#0F1F3A"/>
            <rect x="48" y="8" width="8" height="8" fill="#0F1F3A"/>
            <rect x="8" y="48" width="8" height="8" fill="#0F1F3A"/>
            {[
              [26,4],[30,4],[26,8],[34,8],[26,12],[30,12],[34,12],
              [4,26],[8,26],[12,26],[20,26],[26,26],[30,26],[36,26],[40,26],[46,26],[54,26],[58,26],
              [4,30],[12,30],[16,30],[24,30],[30,30],[36,30],[42,30],[50,30],[58,30],
              [4,34],[10,34],[18,34],[26,34],[34,34],[40,34],[48,34],[54,34],[58,34],
              [26,42],[34,42],[42,42],[50,42],[58,42],
              [30,46],[38,46],[46,46],[54,46],
              [26,50],[34,50],[42,50],[50,50],[58,50],
              [30,54],[38,54],[46,54],[54,54],
              [26,58],[34,58],[42,58],[50,58],[58,58],
            ].map(([x,y],i)=>(<rect key={i} x={x} y={y} width="3" height="3" fill="#0F1F3A"/>))}
            {/* centered avatar bubble */}
            <rect x="26" y="26" width="12" height="12" rx="2" fill="#fff"/>
            <circle cx="32" cy="32" r="4.5" fill="#1E6FE0"/>
          </svg>
        </div>
        <div style={{fontSize:11.5,color:'#94A3B8'}}>客服微信 · CSD-Service-001</div>

        {/* actions */}
        <div style={{display:'flex',gap:10,marginTop:18}}>
          <button onClick={copyWx} style={{
            flex:1, height:44, borderRadius:99,
            background:'#F3F8FF', color:'#1E6FE0',
            fontSize:13.5, fontWeight:600,
            border:'1px solid #BFD6F7',
          }}>{copied?'已复制':'复制微信号'}</button>
          <button onClick={()=>go('contact')} style={{
            flex:1, height:44, borderRadius:99,
            background:'linear-gradient(180deg, #2A6CD3 0%, #0A4FB8 100%)',
            color:'#fff', fontSize:13.5, fontWeight:600,
            boxShadow:'0 10px 22px -10px rgba(10,79,184,.55)',
          }}>联系客服</button>
        </div>
      </div>
    </Page>
  );
}

Object.assign(window, {
  RepairScreen, RepairSuccessScreen, TrackScreen, OrderDetailScreen,
  DiagnoseScreen, DiagDetailScreen, SurveyScreen,
});
