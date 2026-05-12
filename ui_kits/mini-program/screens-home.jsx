// screens-home.jsx — Home / Company / Mine root screens

function HomeScreen() {
  const { go } = useApp();
  const [copied, setCopied] = useState('');
  const [showQr, setShowQr] = useState(false);
  const [showOfficial, setShowOfficial] = useState(false);

  const PAGE_BG = '#E8EEFA';

  const basics = [
    { id:'repair',  title:'立即报修', icon:'repair',  color:'#1E6FE0', bg:'#DCE6FA' },
    { id:'track',   title:'维修进度', icon:'invoice', color:'#C97A6B', bg:'#F8E2DA' },
    { id:'survey',  title:'调研有礼', icon:'gift',    color:'#8E96A8', bg:'#E5E7EE' },
  ];
  const queries = [
    { id:'diag',     title:'故障自查', icon:'diag',   color:'#0A4FB8', bg:'#D7E3FA' },
    { id:'warranty', title:'保修政策', icon:'shield', color:'#1E6FE0', bg:'#E8F1FE' },
    { id:'fees',     title:'收费办法', icon:'money',  color:'#D97706', bg:'#FFF7E6' },
  ];
  const guides = [
    { id:'guide-quick',   title:'快速指南', icon:'book' },
    { id:'guide-repair',  title:'报修指南', icon:'repair' },
    { id:'guide-query',   title:'查询指南', icon:'search' },
    { id:'guide-invoice', title:'开票指南', icon:'invoice' },
  ];
  const receiver = [
    { label:'收件公司', value:'桂林市啄木鸟医疗器械有限公司' },
    { label:'收件人',   value:'售后李山' },
    { label:'收件电话', value:'13977382317' },
    { label:'收件地址', value:'广西壮族自治区桂林市七星区朝阳路国家高新区信息产业园' },
  ];

  const copyOne = (v, label) => {
    if (navigator.clipboard) navigator.clipboard.writeText(v).catch(()=>{});
    setCopied(label);
    setTimeout(()=>setCopied(''), 1400);
  };
  const copyAll = () => {
    const text = receiver.map(r=>`${r.label}: ${r.value}`).join('\n');
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(()=>{});
    setCopied('all');
    setTimeout(()=>setCopied(''), 1400);
  };

  return (
    <Page noTop>
      <div style={{background:PAGE_BG, minHeight:'100%', paddingBottom:100}}>
        <WxTop title="" transparent/>

        {/* Brand bar */}
        <div style={{
          padding:'88px 16px 14px',
          display:'flex', alignItems:'center', justifyContent:'space-between',
          background:PAGE_BG, gap:10,
        }}>
          <div style={{display:'flex',alignItems:'center',gap:8,flex:1,minWidth:0}}>
            <img src="assets/logo-cicada-mark.jpg" alt="CICADA"
              style={{height:22, objectFit:'contain', filter:'contrast(1.05)'}}/>
            <span style={{
              fontSize:15,fontWeight:700,color:'#0F1F3A',letterSpacing:.6,
              borderLeft:'1px solid #C4D1E4', paddingLeft:8,
            }}>思科达</span>
          </div>
          <button onClick={()=>setShowQr(true)} aria-label="公司官方公众号" style={{
            width:34, height:34, borderRadius:10,
            background:'#fff', border:'1px solid #BFD6F7',
            display:'flex', alignItems:'center', justifyContent:'center',
            position:'relative',
          }}>
            {/* WeChat-style icon */}
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M9 4c-3.9 0-7 2.7-7 6 0 1.9 1 3.5 2.6 4.6L4 17l3-1.5c.6.1 1.3.2 2 .2 3.9 0 7-2.7 7-6S12.9 4 9 4z" fill="#1AAD19"/>
              <circle cx="6.5" cy="9" r="1" fill="#fff"/>
              <circle cx="11.5" cy="9" r="1" fill="#fff"/>
              <path d="M16 11c-3.3 0-6 2.3-6 5 0 1.5.8 2.9 2.1 3.8L11 22l2.5-1.3c.5.1 1 .2 1.5.2 3.3 0 6-2.3 6-5s-2.7-4.9-5-4.9z" fill="#1AAD19"/>
              <circle cx="13.5" cy="15" r=".8" fill="#fff"/>
              <circle cx="17.5" cy="15" r=".8" fill="#fff"/>
            </svg>
          </button>
          <button onClick={()=>go('contact')} style={{
            display:'flex',alignItems:'center',gap:5,
            background:'#D7E3FA', color:'#1E6FE0',
            padding:'7px 11px', borderRadius:99, fontSize:12, fontWeight:600,
            whiteSpace:'nowrap',
          }}>
            <Glyph name="phone" size={13} color="#1E6FE0"/>
            热线
          </button>
        </div>

        {/* Search */}
        <div style={{padding:'0 14px'}}>
          <div style={{
            display:'flex', alignItems:'center', gap:8,
            background:'#fff', borderRadius:12, padding:'10px 14px',
          }}>
            <Glyph name="search" size={16} color="#94A3B8"/>
            <input placeholder="请输入常见问题"
              style={{flex:1,border:'none',outline:'none',fontSize:13.5,color:'#0F1F3A',background:'transparent',fontFamily:'inherit'}}/>
            <button style={{fontSize:13,color:'#1E6FE0',fontWeight:600}}>搜索</button>
          </div>
        </div>

        {/* Hero banner */}
        <div style={{padding:'14px 14px 0'}}>
          <div style={{
            position:'relative', borderRadius:14, overflow:'hidden',
            height:140,
            background:'linear-gradient(120deg, #2C5985 0%, #4A8AB8 50%, #6BB0CC 100%)',
          }}>
            <div style={{
              position:'absolute', right:0, top:0, bottom:0, width:'55%',
              backgroundImage:'url(assets/photo-factory.jpg)',
              backgroundSize:'cover', backgroundPosition:'center',
            }}>
              <div style={{
                position:'absolute',inset:0,
                background:'linear-gradient(90deg, rgba(44,89,133,.85) 0%, rgba(44,89,133,.15) 50%, rgba(0,0,0,.18) 100%)',
              }}/>
            </div>
            <div style={{
              position:'relative', padding:'24px 18px', color:'#fff',
              display:'flex', flexDirection:'column', height:'100%', justifyContent:'center',
            }}>
              <div style={{fontSize:18,fontWeight:700,letterSpacing:.5}}>专业医疗设备维保</div>
              <div style={{fontSize:12,opacity:.9,marginTop:8,letterSpacing:.5}}>高效 · 精准 · 数字化服务体系</div>
            </div>
          </div>
        </div>

        {/* 基础服务 */}
        <div style={{padding:'24px 14px 0'}}>
          <div style={{fontSize:16,fontWeight:700,color:'#0F1F3A',padding:'0 2px 12px'}}>基础服务</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
            {basics.map(b=>(
              <button key={b.id} onClick={()=>go(b.id)} style={{
                background:'#fff', borderRadius:14, padding:'18px 8px',
                display:'flex',flexDirection:'column',alignItems:'center',gap:10,
              }}>
                <div style={{
                  width:48,height:48,borderRadius:99,background:b.bg,
                  display:'flex',alignItems:'center',justifyContent:'center',
                }}>
                  <Glyph name={b.icon} size={24} color={b.color}/>
                </div>
                <div style={{fontSize:13,color:'#0F1F3A',fontWeight:500}}>{b.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 自助查询 */}
        <div style={{padding:'22px 14px 0'}}>
          <div style={{fontSize:16,fontWeight:700,color:'#0F1F3A',padding:'0 2px 12px'}}>自助查询</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
            {queries.map(q=>(
              <button key={q.id} onClick={()=>go(q.id)} style={{
                background:'#fff', borderRadius:14, padding:'18px 8px',
                display:'flex',flexDirection:'column',alignItems:'center',gap:10,
              }}>
                <div style={{
                  width:48,height:48,borderRadius:99,background:q.bg,
                  display:'flex',alignItems:'center',justifyContent:'center',
                }}>
                  <Glyph name={q.icon} size={24} color={q.color}/>
                </div>
                <div style={{fontSize:13,color:'#0F1F3A',fontWeight:500}}>{q.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 操作教程 */}
        <div style={{padding:'22px 14px 0'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 2px 12px'}}>
            <span style={{fontSize:16,fontWeight:700,color:'#0F1F3A'}}>操作教程</span>
            <span style={{fontSize:11.5,color:'#94A3B8'}}>图文文档</span>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            {guides.map(g=>(
              <button key={g.id} onClick={()=>go(g.id)} style={{
                background:'#fff', borderRadius:12, padding:'14px 14px',
                display:'flex', alignItems:'center', gap:10, textAlign:'left',
              }}>
                <div style={{
                  width:34,height:34,borderRadius:9,background:'#E8F1FE',
                  display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
                }}>
                  <Glyph name={g.icon} size={20} color="#1E6FE0"/>
                </div>
                <div style={{flex:1,fontSize:13.5,color:'#0F1F3A',fontWeight:500}}>{g.title}</div>
                <svg width="8" height="12" viewBox="0 0 8 12">
                  <path d="M1 1l5 5-5 5" stroke="#C4D1E4" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* 联系我们 */}
        <div style={{padding:'22px 14px 0'}}>
          <div style={{fontSize:16,fontWeight:700,color:'#0F1F3A',padding:'0 2px 12px'}}>联系我们</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <button onClick={()=>go('contact')} style={{
              background:'#D7E3FA', borderRadius:12, padding:'14px 14px',
              display:'flex', alignItems:'center', gap:10, textAlign:'left',
            }}>
              <div style={{
                width:38,height:38,borderRadius:99,background:'rgba(255,255,255,.6)',
                display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d="M4 13a8 8 0 0116 0v5a2 2 0 01-2 2h-2v-7h4M4 13v5a2 2 0 002 2h2v-7H4" stroke="#1E6FE0" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{fontSize:13.5,fontWeight:700,color:'#0F1F3A'}}>在线客服</div>
                <div style={{fontSize:11,color:'#1E6FE0',marginTop:3}}>8:00至21:00</div>
              </div>
            </button>
            <button onClick={()=>go('contact')} style={{
              background:'#D7E3FA', borderRadius:12, padding:'14px 14px',
              display:'flex', alignItems:'center', gap:10, textAlign:'left',
            }}>
              <div style={{
                width:38,height:38,borderRadius:99,background:'rgba(255,255,255,.6)',
                display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
              }}>
                <Glyph name="phone" size={20} color="#1E6FE0"/>
              </div>
              <div>
                <div style={{fontSize:13.5,fontWeight:700,color:'#0F1F3A'}}>服务热线</div>
                <div style={{fontSize:11,color:'#1E6FE0',marginTop:3}}>400-888-999</div>
              </div>
            </button>
          </div>
        </div>

        {/* 收件信息 */}
        <div style={{padding:'18px 14px 0'}}>
          <div style={{background:'#E2EAF8', borderRadius:14, padding:'16px 16px 6px'}}>
            <div style={{display:'flex',alignItems:'center',gap:8,paddingBottom:12,borderBottom:'1px solid rgba(30,111,224,.18)'}}>
              <Glyph name="pin" size={18} color="#1E6FE0"/>
              <span style={{fontSize:15,fontWeight:700,color:'#0F1F3A'}}>收件信息</span>
            </div>
            {receiver.map((r,i)=>(
              <div key={i} style={{padding:'12px 0 10px',borderBottom:i<receiver.length-1?'1px dashed rgba(30,111,224,.12)':'none'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:8}}>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:11.5,color:'#6B7C97'}}>{r.label}</div>
                    <div style={{fontSize:13.5,color:'#0F1F3A',fontWeight:600,marginTop:3,lineHeight:1.5}}>{r.value}</div>
                  </div>
                  <button onClick={()=>copyOne(r.value, r.label)} style={{flexShrink:0,padding:4,marginTop:2}}>
                    {copied===r.label ? (
                      <svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 12l5 5L20 6" stroke="#10B981" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <rect x="8" y="8" width="12" height="13" rx="2" stroke="#6B7C97" strokeWidth="1.6" fill="none"/>
                        <path d="M16 8V4a1 1 0 00-1-1H5a1 1 0 00-1 1v12a1 1 0 001 1h3" stroke="#6B7C97" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copy-all CTA + chat FAB */}
        <div style={{padding:'14px 14px 0',display:'flex',alignItems:'center',gap:12}}>
          <button onClick={copyAll} style={{
            flex:1,
            background:'linear-gradient(180deg, #2A6CD3 0%, #0A4FB8 100%)',
            color:'#fff', height:50, borderRadius:99,
            display:'flex',alignItems:'center',justifyContent:'center',gap:8,
            fontSize:14.5,fontWeight:600,
            boxShadow:'0 10px 24px -10px rgba(10,79,184,.55)',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M4 12l5 5L20 6" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {copied==='all' ? '已复制' : '一键复制以上收件信息'}
          </button>
          <button onClick={()=>go('contact')} style={{
            width:50,height:50,borderRadius:99,background:'#fff',
            display:'flex',alignItems:'center',justifyContent:'center',
            boxShadow:'0 6px 14px -4px rgba(15,31,58,.18)',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path d="M4 13a8 8 0 0116 0v5a2 2 0 01-2 2h-2v-7h4M4 13v5a2 2 0 002 2h2v-7H4" stroke="#1E6FE0" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Side tab → CICADA 思科达官网 (mini-program) */}
      <button onClick={()=>setShowOfficial(true)} style={{
        position:'absolute', right:0, top:'42%', zIndex:25,
        transform:'translateY(-50%)',
        padding:'10px 8px 10px 14px',
        background:'linear-gradient(135deg,#3A86FF 0%,#0A4FB8 100%)',
        color:'#fff',
        borderRadius:'14px 0 0 14px',
        boxShadow:'-4px 6px 16px -4px rgba(10,79,184,.4)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:1,
        lineHeight:1.1, letterSpacing:.6,
        border:'1px solid rgba(255,255,255,.25)',
        borderRight:'none',
      }}>
        <span style={{
          fontSize:10.5, fontWeight:800, fontFamily:'Georgia, "Times New Roman", serif',
          letterSpacing:1.2,
        }}>CICADA</span>
        <span style={{fontSize:9.5, fontWeight:600, opacity:.95}}>思科达官网</span>
      </button>

      {/* Official mini-program modal */}
      {showOfficial && (
        <div onClick={()=>setShowOfficial(false)} style={{
          position:'absolute', inset:0, background:'rgba(15,31,58,.55)',
          zIndex:75, display:'flex', alignItems:'center', justifyContent:'center',
          padding:24,
        }}>
          <div onClick={(e)=>e.stopPropagation()} style={{
            background:'#fff', borderRadius:18, padding:'22px 22px 18px',
            width:'100%', maxWidth:300, position:'relative',
          }}>
            <button onClick={()=>setShowOfficial(false)} style={{
              position:'absolute', top:10, right:14, color:'#94A3B8', fontSize:22,
            }}>×</button>
            <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
              <div style={{
                width:42, height:42, borderRadius:10,
                background:'linear-gradient(135deg,#3A86FF 0%,#0A4FB8 100%)',
                display:'flex',alignItems:'center',justifyContent:'center',
                color:'#fff', fontFamily:'Georgia, serif', fontSize:18, fontWeight:800,
                letterSpacing:.5,
              }}>C</div>
              <div>
                <div style={{fontSize:14,fontWeight:700,color:'#0F1F3A'}}>CICADA 思科达官网</div>
                <div style={{fontSize:11,color:'#94A3B8',marginTop:2}}>佛山市思科达医疗器械</div>
              </div>
            </div>
            <div style={{
              background:'#F3F8FF', borderRadius:12, padding:'14px 14px',
              fontSize:12, color:'#324563', lineHeight:1.7,
            }}>
              即将跳转至「<b style={{color:'#1E6FE0'}}>CICADA 思科达官网</b>」小程序，浏览全品类产品、查看资质证书与最新动态。
            </div>
            <div style={{display:'flex',gap:10,marginTop:14}}>
              <button onClick={()=>setShowOfficial(false)} style={{
                flex:1, height:42, borderRadius:99,
                background:'#fff', border:'1px solid #BFD6F7',
                color:'#324563', fontSize:13, fontWeight:600,
              }}>取消</button>
              <button onClick={()=>setShowOfficial(false)} style={{
                flex:1.5, height:42, borderRadius:99,
                background:'linear-gradient(180deg,#3A86FF 0%,#1E6FE0 100%)',
                color:'#fff', fontSize:13, fontWeight:700,
                display:'flex',alignItems:'center',justifyContent:'center',gap:5,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H9M19 5v10" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                立即前往
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Official 公众号 QR modal */}
      {showQr && (
        <div onClick={()=>setShowQr(false)} style={{
          position:'absolute', inset:0, background:'rgba(15,31,58,.55)',
          zIndex:70, display:'flex', alignItems:'center', justifyContent:'center',
          padding:24,
        }}>
          <div onClick={(e)=>e.stopPropagation()} style={{
            background:'#fff', borderRadius:18, padding:24,
            width:'100%', maxWidth:300, textAlign:'center',
            position:'relative',
          }}>
            <button onClick={()=>setShowQr(false)} style={{
              position:'absolute', top:10, right:14, color:'#94A3B8', fontSize:22,
            }}>×</button>
            <img src="assets/logo-cicada-full.jpg" alt="CICADA 思科达"
              style={{height:30, marginBottom:14, objectFit:'contain'}}/>
            <div style={{fontSize:14,fontWeight:700,color:'#0F1F3A'}}>关注官方公众号</div>
            <div style={{fontSize:11.5,color:'#94A3B8',marginTop:4}}>获取最新维修指南 / 售后政策</div>
            <div style={{
              margin:'16px auto', padding:10,
              background:'#F3F8FF', borderRadius:12,
              display:'inline-block',
            }}>
              <img src="assets/qr-wechat.jpg" alt="公众号二维码"
                style={{width:180,height:180,display:'block',borderRadius:6}}/>
            </div>
            <button onClick={()=>setShowQr(false)} style={{
              width:'100%', height:42, borderRadius:99,
              background:'linear-gradient(180deg,#3A86FF 0%,#1E6FE0 100%)',
              color:'#fff', fontSize:14, fontWeight:600,
            }}>长按识别 / 保存图片</button>
          </div>
        </div>
      )}
    </Page>
  );
}

// ── Company intro screen ────────────────────────────────────
function CompanyScreen() {
  const { go } = useApp();
  const PAGE_BG = '#E8EEFA';

  const advantages = [
    {
      icon:'lightning', title:'极速响应',
      desc:'2小时内接单回复、24小时内到场检修，将诊所停工损失降至最低。',
    },
    {
      icon:'microscope', title:'精密检测',
      desc:'引进国际领先的工业级内窥镜与频率分析仪，精准识别隐匿故障。',
    },
  ];

  const business = [
    {
      title:'高低速手机维修',
      desc:'包含深度清理、动平衡校正、陶瓷轴承更换。',
      tone:'#2C5985',
      glyph:(
        <g>
          <rect x="6" y="18" width="36" height="6" rx="2" fill="#4A8AB8"/>
          <rect x="34" y="20" width="14" height="2" fill="#1E6FE0"/>
          <circle cx="10" cy="21" r="2" fill="#0F1F3A"/>
          <rect x="4" y="28" width="24" height="2" fill="#6BB0CC" opacity=".7"/>
        </g>
      ),
    },
    {
      title:'综合治疗台保养',
      desc:'气路水路系统消毒、控制电路检修与压力调校。',
      tone:'#3D6F9E',
      glyph:(
        <g>
          <path d="M8 36c4-12 14-16 22-16 6 0 10 4 12 10" stroke="#4A8AB8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <circle cx="32" cy="18" r="4" fill="#1E6FE0"/>
          <rect x="6" y="34" width="20" height="4" rx="1" fill="#6BB0CC"/>
        </g>
      ),
    },
    {
      title:'影像系统调试',
      desc:'CBCT、全景机辐射校验、感光板传感器优化。',
      tone:'#0A4FB8',
      glyph:(
        <g>
          <rect x="6" y="8" width="36" height="28" rx="3" stroke="#4A8AB8" strokeWidth="2" fill="#1E4FA8" opacity=".15"/>
          <circle cx="24" cy="22" r="6" stroke="#1E6FE0" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="22" r="2" fill="#1E6FE0"/>
        </g>
      ),
    },
  ];

  return (
    <Page noTop>
      <div style={{background:PAGE_BG, minHeight:'100%', paddingBottom:100}}>
        <WxTop title="" transparent/>

        {/* Brand bar */}
        <div style={{
          padding:'88px 16px 14px',
          display:'flex', alignItems:'center', justifyContent:'space-between',
        }}>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <img src="assets/logo-cicada-mark.jpg" alt="CICADA"
              style={{height:22, objectFit:'contain'}}/>
            <span style={{
              fontSize:15,fontWeight:700,color:'#0F1F3A',letterSpacing:.6,
              borderLeft:'1px solid #C4D1E4', paddingLeft:8,
            }}>思科达</span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:14}}>
            <Glyph name="search" size={20} color="#324563"/>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M6 8a6 6 0 1112 0v5l2 3H4l2-3V8z" stroke="#324563" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
              <path d="M10 19a2 2 0 004 0" stroke="#324563" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Hero image + overlay title */}
        <div style={{padding:'0 14px'}}>
          <div style={{
            position:'relative', borderRadius:14, overflow:'hidden',
            height:240,
            background:'linear-gradient(135deg, #1A3C5C 0%, #2C5985 50%, #4A7BA6 100%)',
          }}>
            <img src="assets/photo-building.jpg" alt="CICADA 思科达总部" style={{
              position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover',
            }}/>
            <div style={{
              position:'absolute', inset:0,
              background:'linear-gradient(180deg, rgba(15,46,102,.35) 0%, rgba(15,31,58,.65) 100%)',
            }}/>
            <img src="assets/logo-cicada-full.jpg" alt="CICADA" style={{
              position:'absolute', right:14, top:14, height:22,
              background:'rgba(255,255,255,.92)', padding:'4px 8px', borderRadius:4,
            }}/>
            <div style={{position:'absolute', left:0,right:0,bottom:0, padding:'18px 18px 18px',
              background:'linear-gradient(180deg, transparent 0%, rgba(15,31,58,.55) 100%)',
            }}>
              <div style={{fontSize:18,fontWeight:700,color:'#fff',letterSpacing:.6}}>十年匠心，守护诊疗安全</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div style={{padding:'14px 18px 0'}}>
          <div style={{fontSize:13.5,color:'#324563',lineHeight:1.7,letterSpacing:.2}}>
            我们致力于为齿科机构提供全方位的精密仪器维保服务，成为中国口腔医疗领域最值得信赖的设备管家。
          </div>
        </div>

        {/* 核心优势 */}
        <div style={{padding:'22px 14px 0'}}>
          <div style={{display:'flex',alignItems:'center',gap:6,padding:'0 2px 12px'}}>
            <div style={{width:3,height:14,background:'#1E6FE0',borderRadius:2}}/>
            <span style={{fontSize:15,fontWeight:700,color:'#0F1F3A',letterSpacing:.3}}>核心优势</span>
          </div>

          {/* Authorization card */}
          <div style={{
            background:'#fff', borderRadius:12, padding:'16px 16px',
            borderLeft:'3px solid #1E6FE0', marginBottom:10,
          }}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
              {/* badge/cert icon */}
              <svg width="22" height="22" viewBox="0 0 24 24">
                <circle cx="12" cy="10" r="6" stroke="#1E6FE0" strokeWidth="1.8" fill="none"/>
                <path d="M9 10l2 2 4-4" stroke="#1E6FE0" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14l-2 7 4-2 2 2 2-2 4 2-2-7" stroke="#1E6FE0" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
              </svg>
              <span style={{fontSize:15,fontWeight:700,color:'#0F1F3A'}}>官方授权认证</span>
            </div>
            <div style={{fontSize:13,color:'#324563',lineHeight:1.7}}>
              全品类齿科大品牌原厂技术授权，使用原厂正品零部件，确保修复精度与耐用性。
            </div>
          </div>

          {/* Two-up advantages */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            {advantages.map((a,i)=>(
              <div key={i} style={{
                background:'#fff', borderRadius:12, padding:'16px 14px',
              }}>
                <div style={{
                  width:32,height:32,borderRadius:8,background:'#1E6FE0',
                  display:'flex',alignItems:'center',justifyContent:'center',marginBottom:10,
                }}>
                  {a.icon==='lightning' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="#fff"/></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path d="M9 3h6v4l-2 2v4l3 4H8l3-4V9L9 7V3z" fill="#fff"/>
                      <rect x="6" y="19" width="12" height="2.5" rx="1" fill="#fff"/>
                    </svg>
                  )}
                </div>
                <div style={{fontSize:14,fontWeight:700,color:'#0F1F3A',borderBottom:'2px solid #1E6FE0',paddingBottom:8,display:'inline-block'}}>{a.title}</div>
                <div style={{fontSize:11.5,color:'#6B7C97',lineHeight:1.7,marginTop:10}}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 业务范围 */}
        <div style={{padding:'22px 14px 0'}}>
          <div style={{display:'flex',alignItems:'center',gap:6,padding:'0 2px 12px'}}>
            <div style={{width:3,height:14,background:'#1E6FE0',borderRadius:2}}/>
            <span style={{fontSize:15,fontWeight:700,color:'#0F1F3A',letterSpacing:.3}}>业务范围</span>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {business.map((b,i)=>(
              <button key={i} onClick={()=>go('repair')} style={{
                background:'#fff', borderRadius:12, padding:'14px',
                display:'flex', alignItems:'center', gap:14, textAlign:'left',
              }}>
                <div style={{
                  width:64, height:60, borderRadius:8, flexShrink:0,
                  background:`linear-gradient(135deg, ${b.tone} 0%, #6BB0CC 100%)`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  position:'relative', overflow:'hidden',
                }}>
                  <svg width="48" height="48" viewBox="0 0 48 48">{b.glyph}</svg>
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:14.5,fontWeight:700,color:'#0F1F3A'}}>{b.title}</div>
                  <div style={{fontSize:12,color:'#6B7C97',lineHeight:1.6,marginTop:4}}>{b.desc}</div>
                </div>
                <svg width="8" height="12" viewBox="0 0 8 12">
                  <path d="M1 1l5 5-5 5" stroke="#C4D1E4" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* 关注公众号 */}
        <div style={{padding:'22px 14px 0'}}>
          <div style={{
            background:'#D7E3FA', borderRadius:14, padding:'22px 18px',
            textAlign:'center',
          }}>
            <div style={{
              width:104, height:104, borderRadius:12, background:'#fff',
              margin:'0 auto', padding:6,
              boxShadow:'0 4px 14px rgba(30,111,224,.18)',
            }}>
              <img src="assets/qr-wechat.jpg" alt="公众号二维码"
                style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:6}}/>
            </div>
            <div style={{display:'none'}}>
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
              </svg>
            </div>
            <div style={{fontSize:14,color:'#1E6FE0',fontWeight:600,marginTop:14}}>关注官方公众号</div>
            <div style={{fontSize:12,color:'#324563',marginTop:8,lineHeight:1.7,padding:'0 12px'}}>
              获取最新的维保优惠政策、设备保养秘籍以及一键预约上门服务。
            </div>
            <button onClick={()=>go('contact')} style={{
              marginTop:16, width:'100%', height:46, borderRadius:99,
              background:'linear-gradient(180deg, #2A6CD3 0%, #0A4FB8 100%)',
              color:'#fff', fontSize:14.5, fontWeight:600,
              display:'flex',alignItems:'center',justifyContent:'center',gap:8,
              boxShadow:'0 10px 24px -10px rgba(10,79,184,.55)',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.8" fill="none"/>
                <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              立即关注
            </button>
          </div>
        </div>
      </div>

      {/* Floating FABs */}
      <button onClick={()=>go('contact')} style={{
        position:'absolute', right:18, bottom:148, zIndex:20,
        width:48, height:48, borderRadius:99,
        background:'linear-gradient(180deg, #3A86FF 0%, #1E6FE0 100%)',
        display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 10px 24px -6px rgba(30,111,224,.55)',
        border:'2px solid #fff',
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path d="M4 13a8 8 0 0116 0v5a2 2 0 01-2 2h-2v-7h4M4 13v5a2 2 0 002 2h2v-7H4" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
        </svg>
      </button>
      <button onClick={()=>go('contact')} style={{
        position:'absolute', right:18, bottom:90, zIndex:20,
        width:48, height:48, borderRadius:99,
        background:'linear-gradient(180deg, #3A86FF 0%, #1E6FE0 100%)',
        display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 10px 24px -6px rgba(30,111,224,.55)',
        border:'2px solid #fff',
      }}>
        <Glyph name="phone" size={22} color="#fff"/>
      </button>
    </Page>
  );
}

// ── My / Mine screen ────────────────────────────────────────
function MineScreen() {
  const { go, state, set } = useApp();
  const logged = state.logged;
  // Repair order status quick filters (per spec)
  const statusItems = [
    { id:'all',     t:'全部',   c:3, color:'#1E6FE0' },
    { id:'pending', t:'待处理', c:1, color:'#F59E0B' },
    { id:'fixing',  t:'维修中', c:1, color:'#0EA5E9' },
    { id:'shipped', t:'已发货', c:1, color:'#10B981' },
  ];
  return (
    <Page noTop>
      {/* hero */}
      <div style={{
        background:'linear-gradient(180deg, #1E6FE0 0%, #3A86FF 100%)',
        paddingBottom:80,color:'#fff',position:'relative',
      }}>
        <WxTop title="我的" dark transparent/>
        <div style={{padding:'94px 18px 0',display:'flex',alignItems:'center',gap:14}}>
          <div style={{
            width:60,height:60,borderRadius:99,background:'#fff',
            display:'flex',alignItems:'center',justifyContent:'center',
            overflow:'hidden',
            boxShadow:'0 4px 16px rgba(0,0,0,.15)',
          }}>
            {logged ? (
              <span style={{color:'#1E6FE0',fontSize:24,fontWeight:700}}>李</span>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24"><circle cx="12" cy="9" r="4" fill="#C4D1E4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="#C4D1E4"/></svg>
            )}
          </div>
          <div style={{flex:1}}>
            {logged ? (
              <>
                <div style={{fontSize:17,fontWeight:700}}>李医生</div>
                <div style={{fontSize:11.5,opacity:.85,marginTop:3,display:'flex',alignItems:'center',gap:6}}>
                  桂林口腔门诊
                  <span style={{
                    background:'rgba(255,255,255,.18)',padding:'1px 7px',
                    borderRadius:99,fontSize:10,fontWeight:600,letterSpacing:.2,
                  }}>高级会员</span>
                </div>
              </>
            ) : (
              <>
                <div style={{fontSize:17,fontWeight:700}}>未登录</div>
                <div style={{fontSize:11.5,opacity:.85,marginTop:3}}>登录后查看您的维修订单</div>
              </>
            )}
          </div>
          {logged ? (
            <button onClick={()=>set({logged:false})} style={{
              padding:'7px 14px',borderRadius:99,
              background:'rgba(255,255,255,.18)',color:'#fff',fontSize:12,fontWeight:500,
              border:'1px solid rgba(255,255,255,.3)',
            }}>退出</button>
          ) : (
            <button onClick={()=>go('login')} style={{
              padding:'8px 18px',borderRadius:99,
              background:'#fff',color:'#1E6FE0',fontSize:13,fontWeight:700,
            }}>注册/登录</button>
          )}
        </div>
      </div>

      {/* 我的维修单 card with status tabs (matches spec exactly) */}
      <div style={{padding:'0 14px',marginTop:-58,position:'relative',zIndex:2}}>
        <Card pad={0} style={{overflow:'hidden'}}>
          <button onClick={()=>go('orders')} style={{
            width:'100%',padding:'14px 16px',
            display:'flex',alignItems:'center',justifyContent:'space-between',
            borderBottom:'1px solid #F1F5FB',
          }}>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <div style={{width:3,height:14,background:'#1E6FE0',borderRadius:2}}/>
              <span style={{fontSize:15,fontWeight:700,color:'#0F1F3A'}}>我的维修单</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:4,fontSize:12,color:'#6B7C97'}}>
              查看全部
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M3 1l4 4-4 4" stroke="#6B7C97" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </div>
          </button>
          <div style={{padding:'18px 6px 16px',display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
            {statusItems.map(s => (
              <button key={s.id} onClick={()=>go('orders')} style={{
                display:'flex',flexDirection:'column',alignItems:'center',gap:6,position:'relative',
              }}>
                <div style={{
                  width:42,height:42,borderRadius:12,
                  background:s.color+'15',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  position:'relative',
                }}>
                  {s.id==='all'      && <Glyph name="invoice" size={22} color={s.color}/>}
                  {s.id==='pending'  && <Glyph name="track"   size={22} color={s.color}/>}
                  {s.id==='fixing'   && <Glyph name="repair"  size={22} color={s.color}/>}
                  {s.id==='shipped'  && <Glyph name="truck"   size={22} color={s.color}/>}
                  {s.c>0 && (
                    <span style={{
                      position:'absolute', top:-4, right:-4,
                      minWidth:16, height:16, padding:'0 5px',
                      background:'#E5484D', color:'#fff', fontSize:10, fontWeight:700,
                      borderRadius:99, border:'2px solid #fff',
                      display:'flex',alignItems:'center',justifyContent:'center',
                    }}>{s.c}</span>
                  )}
                </div>
                <div style={{fontSize:12,color:'#324563',fontWeight:500}}>{s.t}</div>
              </button>
            ))}
          </div>
        </Card>
      </div>

      {/* Service menu — extras */}
      <div style={{padding:'14px 14px 0'}}>
        <SectionHeader title="服务与设置"/>
        <Card pad={0}>
          {[
            { i:'pin',     t:'收货地址管理', d:'表单形式 · 1 个默认地址', go:'address' },
            { i:'edit',    t:'投诉和建议',   d:'问题反馈 / 改进建议',       go:'feedback' },
            { i:'box',     t:'我的产品',     d:'已登记 3 件设备',           go:'products' },
            { i:'invoice', t:'我的发票',     d:'电子发票/纸质发票',         go:'guide-invoice' },
            { i:'shield',  t:'保修政策',     d:'三重保修条款',              go:'warranty' },
            { i:'phone',   t:'联系我们',     d:'在线客服 / 服务热线 / 地址', go:'contact' },
          ].map((r,i,arr)=>(
            <button key={i} onClick={()=>go(r.go)} style={{
              width:'100%',padding:'14px 14px',display:'flex',alignItems:'center',gap:12,
              borderBottom:i<arr.length-1?'1px solid #F1F5FB':'none',background:'transparent',
            }}>
              <div style={{width:32,height:32,borderRadius:10,background:'#F3F8FF',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Glyph name={r.i} size={18}/>
              </div>
              <div style={{flex:1,textAlign:'left'}}>
                <div style={{fontSize:14,color:'#0F1F3A',fontWeight:500}}>{r.t}</div>
                <div style={{fontSize:11,color:'#94A3B8',marginTop:2}}>{r.d}</div>
              </div>
              <svg width="10" height="14" viewBox="0 0 10 14"><path d="M2 1l6 6-6 6" stroke="#C4D1E4" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
            </button>
          ))}
        </Card>
      </div>

      <div style={{padding:'24px 14px 100px',textAlign:'center'}}>
        <img src="assets/logo-cicada-full.jpg" alt="CICADA 思科达" style={{
          height:24, opacity:.55, marginBottom:6,
        }}/>
        <div style={{fontSize:11,color:'#94A3B8'}}>佛山思科达 · 牙医仪器检修 v1.2.0</div>
      </div>
    </Page>
  );
}

Object.assign(window, { HomeScreen, CompanyScreen, MineScreen });
