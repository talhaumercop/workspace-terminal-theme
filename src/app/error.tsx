'use client';
export default function ErrorPage({reset}:{error:Error & {digest?:string};reset:()=>void}){return <section className="terminal-loading" role="alert"><strong>[error] The operation could not be completed.</strong><p>Your session or connection may need attention.</p><button className="button" onClick={reset}>[ retry ]</button><a href="/login">return to sign in →</a></section>;}
