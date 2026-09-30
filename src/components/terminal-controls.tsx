'use client';
import { useFormStatus } from 'react-dom';
import { useState } from 'react';

export function TerminalSubmit({children,disabled,...props}:React.ComponentProps<'button'>){
 const {pending}=useFormStatus();
 return <button {...props} disabled={disabled||pending} aria-busy={pending}>{pending?<span className="terminal-progress" role="status"><span className="terminal-spinner"/> processing...</span>:children}</button>;
}

export function TerminalArtifact(){
 const [angle,setAngle]=useState(25);
 const [paused,setPaused]=useState(false);
 return <div className={`terminal-artifact ${paused?'artifact-paused':''}`}><div className="artifact-code" aria-hidden="true">OBJECT: WORKSPACE_CORE<br/>RENDER: WIREFRAME / 3D</div><button type="button" className="wire-object" aria-label="Rotate wireframe object" onClick={()=>setAngle(a=>a+60)}><span className="wire-cube" style={{transform:`rotateX(-22deg) rotateY(${angle}deg)`}}>{['front','back','left','right','top','bottom'].map((face,i)=><i className={`wire-${face}`} key={face}><span>{['[ W ]','0101','[ + ]','1010','::','::'][i]}</span></i>)}</span></button><pre className="ascii-shadow" aria-hidden="true">{'   . : . : . : .\n . : : : : : : : .\n   . : . : . : .'}</pre><div className="artifact-actions"><button type="button" onClick={()=>setAngle(a=>a-45)} aria-label="Rotate object left">[ ↶ ]</button><button type="button" onClick={()=>setPaused(p=>!p)} aria-pressed={paused}>{paused?'[ resume ]':'[ pause ]'}</button><button type="button" onClick={()=>setAngle(a=>a+45)} aria-label="Rotate object right">[ ↷ ]</button></div><p>click object to rotate</p></div>;
}

export function TerminalLoading(){return <div className="terminal-loading" role="status" aria-live="polite"><span className="terminal-spinner"/><strong>loading workspace...</strong><div className="loading-track"><span/></div><small>Fetching the next view. Please wait.</small></div>;}
