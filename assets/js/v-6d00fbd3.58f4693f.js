"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[32731],{2368:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-6d00fbd3",path:"/guide/configuration/adapter-settings.html",title:"Adapter settings",lang:"en-US",frontmatter:{sidebarDepth:1},excerpt:"",headers:[{level:2,title:"Transmitter power",slug:"transmitter-power",children:[]}],filePathRelative:"guide/configuration/adapter-settings.md",git:{updatedTime:1643385256e3}}},29750:(n,e,a)=>{a.r(e),a.d(e,{default:()=>d});var s=a(66252);const t=(0,s.uE)('<h1 id="adapter-settings" tabindex="-1"><a class="header-anchor" href="#adapter-settings" aria-hidden="true">#</a> Adapter settings</h1><p>Configuration of the Zigbee USB-Adapter.<br> You can use <code>dmesg</code> command on Linux hosts to find the mounted device. Where possible you should use the <code>/dev/serial/by-id/</code> path of the stick, instead of <code>/dev/tty*</code>. This is because the <code>/dev/tty*</code> path can change - for example <code>/dev/ttyACM0</code> may become <code>/dev/ttyACM1</code> and then later back to <code>/dev/ttyACM0</code>. The <code>/dev/serial/by-id/</code> path won&#39;t change.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Required: serial settings</span>\n<span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token comment"># Required: location of the adapter (e.g. CC2531).</span>\n  <span class="token comment"># To autodetect the port, set &#39;port: null&#39;.</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> /dev/ttyACM0\n  <span class="token comment"># Optional: disable LED of the adapter if supported (default: false)</span>\n  <span class="token key atrule">disable_led</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n  <span class="token comment"># Optional: adapter type, not needed unless you are experiencing problems (default: shown below, options: zstack, deconz, ezsp)</span>\n  <span class="token key atrule">adapter</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token comment"># Optional: Baud rate speed for serial port, this can be anything firmware support but default is 115200 for Z-Stack and EZSP, 38400 for Deconz, however note that some EZSP firmware need 57600.</span>\n  <span class="token key atrule">baudrate</span><span class="token punctuation">:</span> <span class="token number">115200</span>\n  <span class="token comment"># Optional: RTS / CTS Hardware Flow Control for serial port (default: false)</span>\n  <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n  <span class="token comment"># Optional: soft reset ZNP after timeout (in seconds); 0 is disabled (default: 0)</span>\n  <span class="token key atrule">soft_reset_timeout</span><span class="token punctuation">:</span> <span class="token number">0</span>\n  <span class="token comment"># Optional: configure adapter concurrency (e.g. 2 for CC2531 or 16 for CC26X2R1) (default: null, uses recommended value)</span>\n  <span class="token key atrule">adapter_concurrent</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',4),p={class:"custom-container tip"},r=(0,s._)("p",{class:"custom-container-title"},"TIP",-1),l=(0,s.Uk)("It's also possible to connect Adapters over TCP. See how to connect a "),o=(0,s.Uk)("remote adapter"),c=(0,s.Uk)("."),i=(0,s.uE)('<h2 id="transmitter-power" tabindex="-1"><a class="header-anchor" href="#transmitter-power" aria-hidden="true">#</a> Transmitter power</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">experimental</span><span class="token punctuation">:</span>\n  <span class="token comment"># Optional: Transmit power setting in dBm (default: 5).</span>\n  <span class="token comment"># This will set the transmit power for devices that bring an inbuilt amplifier.</span>\n  <span class="token comment"># It can&#39;t go over the maximum of the respective hardware and might be limited</span>\n  <span class="token comment"># by firmware (for example to migrate heat, or by using an unsupported firmware).</span>\n  <span class="token comment"># For the CC2652R(B) this is 5 dBm, CC2652P/CC1352P-2 20 dBm.</span>\n  <span class="token key atrule">transmit_power</span><span class="token punctuation">:</span> <span class="token number">5</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',2),u={},d=(0,a(83744).Z)(u,[["render",function(n,e){const a=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("div",p,[r,(0,s._)("p",null,[l,(0,s.Wm)(a,{to:"/advanced/remote-adapter/connect_to_a_remote_adapter.html"},{default:(0,s.w5)((()=>[o])),_:1}),c])]),i],64)}]])},83744:(n,e)=>{e.Z=(n,e)=>{for(const[a,s]of e)n[a]=s;return n}}}]);