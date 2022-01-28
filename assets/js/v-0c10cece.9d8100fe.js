"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42429],{37945:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-0c10cece",path:"/devices/FC80CC.html",title:"Legrand FC80CC control via MQTT",lang:"en-US",frontmatter:{title:"Legrand FC80CC control via MQTT",description:"Integrate your Legrand FC80CC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-12-30T11:31:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Device_mode (enum)",slug:"device-mode-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/FC80CC.md",git:{updatedTime:1643385256e3}}},39134:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const d=(0,o(66252).uE)('<h1 id="legrand-fc80cc" tabindex="-1"><a class="header-anchor" href="#legrand-fc80cc" aria-hidden="true">#</a> Legrand FC80CC</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>FC80CC</td></tr><tr><td>Vendor</td><td>Legrand</td></tr><tr><td>Description</td><td>Legrand (or Bticino) DIN contactor module (note: Legrand 412171 may be similar to Bticino FC80CC)</td></tr><tr><td>Exposes</td><td>switch (state), power, device_mode, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/FC80CC.jpg" alt="Legrand FC80CC"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="device-mode-enum" tabindex="-1"><a class="header-anchor" href="#device-mode-enum" aria-hidden="true">#</a> Device_mode (enum)</h3><p>switch: allow on/off, auto will use wired action via C1/C2 on contactor for example with HC/HP. Value can be found in the published state on the <code>device_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;device_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>auto</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),i={},a=(0,o(83744).Z)(i,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);