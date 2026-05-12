// shell.jsx — WeChat mini-program shell + shared atoms

const { useState, useEffect, useRef, useMemo, createContext, useContext } = React;

// ── App Context ──────────────────────────────────────────────
const AppCtx = createContext(null);
const useApp = () => useContext(AppCtx);

// ── WeChat top bar (status + capsule) ───────────────────────
function WxTop({ title, dark = false, onBack, transparent = false, theme }) {
  const fg = dark ? '#fff' : '#0F1F3A';
  const bg = transparent ? 'transparent' : (dark ? 'transparent' : '#fff');
  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, zIndex:30,
      background:bg, borderBottom: transparent || dark ? 'none' : '1px solid var(--line)',
    }}>
      {/* status bar */}
      <div style={{
        height:44, padding:'0 22px', display:'flex', alignItems:'center', justifyContent:'space-between',
        fontSize:15, fontWeight:600, color:fg, letterSpacing:.3,
      }}>
        <span>9:41</span>
        <div style={{display:'flex',gap:5,alignItems:'center'}}>
          <svg width="17" height="11" viewBox="0 0 17 11"><path d="M1 9.5h2v1.5H1zM5 7.5h2v3.5H5zM9 5h2v6H9zM13 2h2v9h-2z" fill={fg}/></svg>
          <svg width="15" height="11" viewBox="0 0 15 11"><path d="M7.5 2C9.7 2 11.6 2.8 13 4.2l1-1C12.3 1.5 10 .5 7.5.5S2.7 1.5 1 3.2l1 1C3.4 2.8 5.3 2 7.5 2zm0 3c1.4 0 2.6.5 3.5 1.4l1-1C10.7 4.2 9.2 3.5 7.5 3.5S4.3 4.2 3 5.4l1 1c.9-.9 2.1-1.4 3.5-1.4zm0 3c.6 0 1.1.2 1.5.6L7.5 11 6 8.6c.4-.4.9-.6 1.5-.6z" fill={fg}/></svg>
          <div style={{display:'flex',alignItems:'center',marginLeft:2}}>
            <div style={{width:22,height:10,borderRadius:2.5,border:`1px solid ${fg}`,opacity:.5,padding:1,marginRight:1}}>
              <div style={{width:'85%',height:'100%',background:fg,borderRadius:1}}/>
            </div>
            <div style={{width:1.5,height:4,background:fg,opacity:.5,borderRadius:1}}/>
          </div>
        </div>
      </div>
      {/* title row with capsule */}
      <div style={{
        height:44, padding:'0 7px 0 14px',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        position:'relative',
      }}>
        {onBack ? (
          <button onClick={onBack} style={{
            display:'flex',alignItems:'center',gap:2,color:fg,fontSize:14,padding:'6px 8px',marginLeft:-4,
          }}>
            <svg width="11" height="18" viewBox="0 0 11 18"><path d="M9 1L2 9l7 8" stroke={fg} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        ) : <div style={{width:24}}/>}
        <div style={{
          position:'absolute', left:'50%', transform:'translateX(-50%)',
          fontSize:16, fontWeight:600, color:fg, letterSpacing:.2,
          maxWidth:200, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
        }}>{title}</div>
        {/* WeChat capsule */}
        <div style={{
          height:32, width:87, borderRadius:99,
          background: dark ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.04)',
          border: dark ? '.5px solid rgba(255,255,255,.25)' : '.5px solid rgba(0,0,0,.08)',
          display:'flex', alignItems:'center', justifyContent:'space-around',
        }}>
          <svg width="18" height="4" viewBox="0 0 18 4"><circle cx="2" cy="2" r="1.6" fill={fg}/><circle cx="9" cy="2" r="1.6" fill={fg}/><circle cx="16" cy="2" r="1.6" fill={fg}/></svg>
          <div style={{width:.5,height:16,background:dark?'rgba(255,255,255,.3)':'rgba(0,0,0,.15)'}}/>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="7" fill="none" stroke={fg} strokeWidth="1.2"/>
            <circle cx="8" cy="8" r="2.5" fill={fg}/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ── Bottom Tab Bar (3 tabs) ─────────────────────────────────
function BottomNav({ tab, onChange }) {
  const items = [
    { id:'home',    label:'首页',    icon:(c)=>(<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 11l9-8 9 8v10a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1V11z" stroke={c} strokeWidth="1.8" fill={c==='#1E6FE0'?'rgba(30,111,224,.12)':'none'} strokeLinejoin="round"/></svg>) },
    { id:'company', label:'公司介绍', icon:(c)=>(<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="17" rx="1.5" stroke={c} strokeWidth="1.8" fill={c==='#1E6FE0'?'rgba(30,111,224,.12)':'none'}/><path d="M9 9h2M13 9h2M9 13h2M13 13h2M9 17h6" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>) },
    { id:'mine',    label:'我的',    icon:(c)=>(<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke={c} strokeWidth="1.8" fill={c==='#1E6FE0'?'rgba(30,111,224,.12)':'none'}/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke={c} strokeWidth="1.8" fill={c==='#1E6FE0'?'rgba(30,111,224,.12)':'none'} strokeLinecap="round"/></svg>) },
  ];
  return (
    <div style={{
      position:'absolute', bottom:0, left:0, right:0, zIndex:40,
      background:'#fff', borderTop:'1px solid var(--line)',
      paddingBottom:18, paddingTop:8,
      display:'flex', justifyContent:'space-around',
    }}>
      {items.map(it => {
        const on = tab === it.id;
        const color = on ? '#1E6FE0' : '#94A3B8';
        return (
          <button key={it.id} onClick={()=>onChange(it.id)} style={{
            display:'flex',flexDirection:'column',alignItems:'center',gap:2,padding:'4px 14px',
          }}>
            {it.icon(color)}
            <span style={{fontSize:10.5,color,fontWeight:on?600:400}}>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── Generic page wrapper with WeChat top ────────────────────
function Page({ title, onBack, children, dark, noTop, transparent, contentPadTop }) {
  return (
    <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',background:'var(--bg)'}}>
      {!noTop && <WxTop title={title} onBack={onBack} dark={dark} transparent={transparent}/>}
      <div className="pscroll" style={{
        flex:1, overflowY:'auto', WebkitOverflowScrolling:'touch',
        paddingTop: noTop ? 0 : (contentPadTop ?? 88),
      }}>
        {children}
        <div style={{height:24}}/>
      </div>
    </div>
  );
}

// ── Primary Button ──────────────────────────────────────────
function Btn({ children, onClick, variant='primary', size='md', style, disabled, full }) {
  const sizes = { sm:{h:32,px:14,fs:13}, md:{h:44,px:18,fs:14.5}, lg:{h:50,px:22,fs:16} };
  const s = sizes[size];
  const v = {
    primary:{bg:'linear-gradient(180deg, #3A86FF 0%, #1E6FE0 100%)',color:'#fff',shadow:'0 8px 18px -6px rgba(30,111,224,.45)',border:'none'},
    ghost:{bg:'#fff',color:'#1E6FE0',shadow:'none',border:'1px solid #BFD6F7'},
    soft:{bg:'#E8F1FE',color:'#0A4FB8',shadow:'none',border:'none'},
    dark:{bg:'#0F1F3A',color:'#fff',shadow:'none',border:'none'},
  }[variant];
  return (
    <button onClick={onClick} disabled={disabled} style={{
      height:s.h,padding:`0 ${s.px}px`,fontSize:s.fs,fontWeight:600,letterSpacing:.3,
      borderRadius:99, background:v.bg, color:v.color, boxShadow:v.shadow, border:v.border,
      display:'inline-flex',alignItems:'center',justifyContent:'center',gap:6,
      width:full?'100%':undefined, opacity:disabled?.5:1,
      transition:'transform .1s', cursor:disabled?'not-allowed':'pointer',
      ...style,
    }}>{children}</button>
  );
}

// ── Card ─────────────────────────────────────────────────────
function Card({ children, style, pad=16, onClick }) {
  return (
    <div onClick={onClick} style={{
      background:'#fff', borderRadius:14, padding:pad,
      boxShadow:'0 1px 2px rgba(15,31,58,.04), 0 4px 14px rgba(30,111,224,.05)',
      ...style,
    }}>{children}</div>
  );
}

// ── Section header ──────────────────────────────────────────
function SectionHeader({ title, action, onAction }) {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 4px 10px'}}>
      <div style={{display:'flex',alignItems:'center',gap:6}}>
        <div style={{width:3,height:14,background:'#1E6FE0',borderRadius:2}}/>
        <span style={{fontSize:15,fontWeight:700,color:'#0F1F3A',letterSpacing:.3}}>{title}</span>
      </div>
      {action && <button onClick={onAction} style={{fontSize:12,color:'#6B7C97',display:'flex',alignItems:'center',gap:2}}>
        {action}<svg width="10" height="10" viewBox="0 0 10 10"><path d="M3 1l4 4-4 4" stroke="#6B7C97" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
      </button>}
    </div>
  );
}

// ── Inputs ───────────────────────────────────────────────────
function Field({ label, required, children, hint }) {
  return (
    <div style={{padding:'14px 0',borderBottom:'1px solid var(--line)'}}>
      <div style={{fontSize:13,color:'#324563',fontWeight:500,marginBottom:8,display:'flex',gap:4,alignItems:'center'}}>
        {required && <span style={{color:'#E5484D'}}>*</span>}{label}
      </div>
      {children}
      {hint && <div style={{fontSize:11.5,color:'#94A3B8',marginTop:6}}>{hint}</div>}
    </div>
  );
}
function Input({ value, onChange, placeholder, type='text' }) {
  return (
    <input value={value||''} onChange={e=>onChange&&onChange(e.target.value)} placeholder={placeholder} type={type}
      style={{
        width:'100%',border:'none',outline:'none',background:'transparent',
        fontSize:14.5,color:'#0F1F3A',fontFamily:'inherit',padding:0,
      }}/>
  );
}

// ── Pill / Tag ──────────────────────────────────────────────
function Tag({ children, tone='brand', style }) {
  const tones = {
    brand:{bg:'#E8F1FE',fg:'#0A4FB8'},
    ok:{bg:'#DCFCE7',fg:'#047857'},
    warn:{bg:'#FEF3C7',fg:'#92400E'},
    danger:{bg:'#FEE2E2',fg:'#B91C1C'},
    muted:{bg:'#EEF2F8',fg:'#6B7C97'},
  }[tone];
  return <span style={{
    display:'inline-flex',alignItems:'center',padding:'3px 8px',
    background:tones.bg,color:tones.fg,fontSize:11,fontWeight:500,borderRadius:99,...style,
  }}>{children}</span>;
}

// Glyph helper for sprite icons (4-block grid)
function Glyph({ name, size=28, color='#1E6FE0' }) {
  const paths = {
    repair: <g><path d="M14 4l3 3-7 7-3-3 7-7zM6 14l-2 6 6-2-4-4z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><path d="M16 16l4 4" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></g>,
    track:  <g><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" fill="none"/><path d="M12 7v5l3 2" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none"/></g>,
    diag:   <g><path d="M5 4h10l4 4v12H5V4z" stroke={color} strokeWidth="1.6" fill="none"/><path d="M15 4v4h4M8 12h8M8 16h5" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none"/></g>,
    gift:   <g><rect x="3" y="9" width="18" height="12" rx="1.5" stroke={color} strokeWidth="1.6" fill="none"/><path d="M3 13h18M12 9v12M8 9c0-2 2-3 4-3s4 1 4 3" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/></g>,
    book:   <g><path d="M5 4h10a3 3 0 013 3v13H8a3 3 0 01-3-3V4z" stroke={color} strokeWidth="1.6" fill="none"/><path d="M9 9h6M9 13h4" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></g>,
    shield: <g><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></g>,
    phone:  <g><path d="M5 4h4l2 5-3 2c1 2 3 4 5 5l2-3 5 2v4c0 1-1 2-2 2C9 21 3 15 3 6c0-1 1-2 2-2z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/></g>,
    chat:   <g><path d="M4 5h16v11H10l-5 4v-4H4V5z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><circle cx="9" cy="10" r="1" fill={color}/><circle cx="13" cy="10" r="1" fill={color}/><circle cx="17" cy="10" r="1" fill={color}/></g>,
    pin:    <g><path d="M12 21s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><circle cx="12" cy="9" r="2.5" stroke={color} strokeWidth="1.6" fill="none"/></g>,
    invoice:<g><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><path d="M9 8h6M9 12h6M9 16h4" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></g>,
    box:    <g><path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><path d="M3 7l9 4 9-4M12 11v10" stroke={color} strokeWidth="1.6" fill="none"/></g>,
    tooth:  <g><path d="M8 3c2 0 2 1 4 1s2-1 4-1c3 0 4 3 4 6 0 4-1 5-2 8-1 2-1 4-2 4s-1-3-2-5-1-2-2-2-1 0-2 2-1 5-2 5-1-2-2-4c-1-3-2-4-2-8 0-3 1-6 4-6z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/></g>,
    cam:    <g><path d="M3 7h4l2-3h6l2 3h4v12H3V7z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><circle cx="12" cy="13" r="4" stroke={color} strokeWidth="1.6" fill="none"/></g>,
    plus:   <g><path d="M12 5v14M5 12h14" stroke={color} strokeWidth="2" strokeLinecap="round"/></g>,
    star:   <g><path d="M12 3l3 6 6 1-4.5 4.5L18 21l-6-3-6 3 1.5-6.5L3 10l6-1 3-6z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/></g>,
    search: <g><circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.8" fill="none"/><path d="M16 16l5 5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></g>,
    truck:  <g><path d="M2 7h11v9H2V7zM13 10h5l3 3v3h-8v-6z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><circle cx="6" cy="17" r="2" stroke={color} strokeWidth="1.6" fill="#fff"/><circle cx="17" cy="17" r="2" stroke={color} strokeWidth="1.6" fill="#fff"/></g>,
    money:  <g><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" fill="none"/><path d="M9 9h6M9 13h6M12 8v10M9 11l3 4 3-4" stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></g>,
    return: <g><path d="M9 5L3 11l6 6M3 11h14a4 4 0 014 4v3" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></g>,
    edit:   <g><path d="M4 20h4l11-11-4-4L4 16v4z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><path d="M14 6l4 4" stroke={color} strokeWidth="1.6"/></g>,
    check:  <g><path d="M4 12l5 5L20 6" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></g>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24">{paths[name]||null}</svg>;
}

// ── Floating Customer Service (sticky on every page) ────────
function CustomerServiceFAB({ bottomOffset = 80 }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(true); // collapsed = single bubble
  const [drawer, setDrawer] = useState(null); // 'chat' | 'qr' | null

  // Click-out for drawer
  useEffect(()=>{
    if (!drawer) return;
    const h = (e)=>{ if (e.target.dataset && e.target.dataset.csmask) setDrawer(null); };
    document.addEventListener('click', h);
    return ()=>document.removeEventListener('click', h);
  },[drawer]);

  return (
    <>
      {/* Floating cluster */}
      <div style={{
        position:'absolute', right:14, bottom:bottomOffset, zIndex:60,
        display:'flex', flexDirection:'column', alignItems:'flex-end', gap:10,
        pointerEvents:'none',
      }}>
        {expanded && (
          <>
            {/* Tooltip card */}
            <div style={{
              pointerEvents:'auto',
              background:'#0F2E66', color:'#fff',
              padding:'8px 12px', borderRadius:'12px 12px 4px 12px',
              fontSize:11.5, fontWeight:500, letterSpacing:.2,
              boxShadow:'0 6px 18px -4px rgba(15,46,102,.45)',
              whiteSpace:'nowrap',
              maxWidth:160,
              lineHeight:1.4,
            }}>
              您的专属服务经理
              <button onClick={()=>setExpanded(false)} style={{
                marginLeft:6, color:'rgba(255,255,255,.6)', fontSize:13, lineHeight:1,
              }}>×</button>
            </div>

            {/* Chat pill */}
            <button onClick={()=>setDrawer('chat')} style={{
              pointerEvents:'auto',
              display:'flex', alignItems:'center', gap:6,
              background:'linear-gradient(180deg,#3A86FF 0%,#1E6FE0 100%)',
              color:'#fff', borderRadius:99,
              padding:'9px 16px 9px 12px',
              boxShadow:'0 8px 22px -6px rgba(30,111,224,.55)',
              fontSize:13, fontWeight:600,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="rgba(255,255,255,.18)"/><path d="M8 10c0-2 1.5-3 4-3s4 1 4 3-1.5 3-4 3v2" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/></svg>
              我要咨询
            </button>

            {/* Phone button */}
            <button onClick={()=>setDrawer('phone')} style={{
              pointerEvents:'auto',
              width:44, height:44, borderRadius:99,
              background:'#fff', border:'1px solid #BFD6F7',
              display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 6px 16px -4px rgba(30,111,224,.3)',
            }}>
              <Glyph name="phone" size={20} color="#1E6FE0"/>
            </button>
          </>
        )}
        {!expanded && (
          <button onClick={()=>setExpanded(true)} style={{
            pointerEvents:'auto',
            width:48, height:48, borderRadius:99,
            background:'linear-gradient(180deg,#3A86FF 0%,#1E6FE0 100%)',
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 8px 22px -4px rgba(30,111,224,.5)',
            position:'relative',
          }}>
            <Glyph name="chat" size={22} color="#fff"/>
            <div style={{
              position:'absolute', top:-2, right:-2,
              width:14, height:14, borderRadius:99,
              background:'#FF3B30', border:'2px solid #fff',
            }}/>
          </button>
        )}
      </div>

      {/* Drawer overlay */}
      {drawer && (
        <div data-csmask="1" style={{
          position:'absolute', inset:0, background:'rgba(15,31,58,.45)',
          zIndex:70, display:'flex', alignItems:'flex-end',
          animation:'fadeIn .2s',
        }}>
          <div style={{
            background:'#fff', width:'100%', borderRadius:'18px 18px 0 0',
            padding:'18px 18px 28px', animation:'slideUp .25s',
          }}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
              <div style={{fontSize:16,fontWeight:700,color:'#0F1F3A'}}>
                {drawer==='chat'?'在线人工客服':'拨打服务热线'}
              </div>
              <button onClick={()=>setDrawer(null)} style={{color:'#94A3B8',fontSize:18}}>×</button>
            </div>

            {drawer==='chat' && (
              <>
                <div style={{
                  background:'linear-gradient(135deg,#EAF2FF 0%,#F5F9FF 100%)',
                  borderRadius:14, padding:'18px', textAlign:'center',
                  marginBottom:14,
                }}>
                  <img src="assets/qr-wechat.jpg" alt="微信二维码" style={{
                    width:140, height:140, borderRadius:8,
                    border:'4px solid #fff',
                    boxShadow:'0 4px 16px rgba(30,111,224,.18)',
                  }}/>
                  <div style={{fontSize:13,color:'#324563',marginTop:12,fontWeight:500}}>
                    长按识别 · 添加专属服务经理
                  </div>
                  <div style={{fontSize:11.5,color:'#94A3B8',marginTop:4}}>
                    工作时间 9:00-18:00 · 周一至周六
                  </div>
                </div>

                <div style={{display:'flex',gap:10}}>
                  <button style={{
                    flex:1, height:44, borderRadius:99,
                    border:'1px solid #BFD6F7', background:'#fff',
                    color:'#1E6FE0', fontSize:14, fontWeight:600,
                    display:'flex',alignItems:'center',justifyContent:'center',gap:6,
                  }}>
                    <Glyph name="chat" size={16} color="#1E6FE0"/>
                    在线咨询
                  </button>
                  <button style={{
                    flex:1, height:44, borderRadius:99,
                    background:'linear-gradient(180deg,#3A86FF 0%,#1E6FE0 100%)',
                    color:'#fff', fontSize:14, fontWeight:600,
                    display:'flex',alignItems:'center',justifyContent:'center',gap:6,
                  }}>
                    <Glyph name="phone" size={16} color="#fff"/>
                    电话联系
                  </button>
                </div>
              </>
            )}

            {drawer==='phone' && (
              <div>
                {[
                  {label:'售后维修', tel:'400-833-9988'},
                  {label:'销售咨询', tel:'0757-2811-6688'},
                  {label:'投诉建议', tel:'135-1234-5678'},
                ].map(p=>(
                  <button key={p.tel} style={{
                    width:'100%', display:'flex', alignItems:'center',
                    padding:'14px 14px', borderRadius:12, background:'#F5F9FF',
                    marginBottom:10,
                  }}>
                    <div style={{
                      width:38, height:38, borderRadius:99,
                      background:'#1E6FE0',
                      display:'flex',alignItems:'center',justifyContent:'center',
                      marginRight:12,
                    }}>
                      <Glyph name="phone" size={18} color="#fff"/>
                    </div>
                    <div style={{flex:1, textAlign:'left'}}>
                      <div style={{fontSize:13,color:'#6B7C97'}}>{p.label}</div>
                      <div style={{fontSize:16,fontWeight:700,color:'#0F1F3A',letterSpacing:.5}}>{p.tel}</div>
                    </div>
                    <div style={{fontSize:12,color:'#1E6FE0',fontWeight:600}}>拨打</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// ── Export to window ────────────────────────────────────────
Object.assign(window, {
  AppCtx, useApp, WxTop, BottomNav, Page, Btn, Card, SectionHeader,
  Field, Input, Tag, Glyph, CustomerServiceFAB,
});
