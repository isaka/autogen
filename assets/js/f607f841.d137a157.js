"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1620],{4418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(85893),r=n(11151),s=n(74866),o=n(85162);const i={},l="Getting Started",c={id:"Getting-Started",title:"Getting Started",description:"AutoGen is a framework that enables development of LLM applications using",source:"@site/docs/Getting-Started.mdx",sourceDirName:".",slug:"/Getting-Started",permalink:"/autogen/docs/Getting-Started",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Getting-Started.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",next:{title:"Installation",permalink:"/autogen/docs/installation/"}},u={},d=[{value:"Main Features",id:"main-features",level:3},{value:"Quickstart",id:"quickstart",level:3},{value:"Multi-Agent Conversation Framework",id:"multi-agent-conversation-framework",level:4},{value:"Where to Go Next?",id:"where-to-go-next",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsx)(t.p,{children:"AutoGen is a framework that enables development of LLM applications using\nmultiple agents that can converse with each other to solve tasks. AutoGen agents\nare customizable, conversable, and seamlessly allow human participation. They\ncan operate in various modes that employ combinations of LLMs, human inputs, and\ntools."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"AutoGen Overview",src:n(28302).Z+"",width:"1576",height:"756"})}),"\n",(0,a.jsx)(t.h3,{id:"main-features",children:"Main Features"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["AutoGen enables building next-gen LLM applications based on ",(0,a.jsx)(t.a,{href:"/docs/Use-Cases/agent_chat",children:"multi-agent\nconversations"})," with minimal effort. It simplifies\nthe orchestration, automation, and optimization of a complex LLM workflow. It\nmaximizes the performance of LLM models and overcomes their weaknesses."]}),"\n",(0,a.jsxs)(t.li,{children:["It supports ",(0,a.jsx)(t.a,{href:"/docs/Use-Cases/agent_chat#supporting-diverse-conversation-patterns",children:"diverse conversation\npatterns"}),"\nfor complex workflows. With customizable and conversable agents, developers can\nuse AutoGen to build a wide range of conversation patterns concerning\nconversation autonomy, the number of agents, and agent conversation topology."]}),"\n",(0,a.jsxs)(t.li,{children:["It provides a collection of working systems with different complexities. These\nsystems span a ",(0,a.jsx)(t.a,{href:"/docs/Use-Cases/agent_chat#diverse-applications-implemented-with-autogen",children:"wide range of\napplications"}),"\nfrom various domains and complexities. This demonstrates how AutoGen can\neasily support diverse conversation patterns."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["AutoGen is powered by collaborative ",(0,a.jsx)(t.a,{href:"/docs/Research",children:"research studies"})," from\nMicrosoft, Penn State University, and University of Washington."]}),"\n",(0,a.jsx)(t.h3,{id:"quickstart",children:"Quickstart"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"pip install pyautogen\n"})}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"nocode",label:"No code execution",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import os\nfrom autogen import AssistantAgent, UserProxyAgent\n\nllm_config = {"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}\nassistant = AssistantAgent("assistant", llm_config=llm_config)\nuser_proxy = UserProxyAgent("user_proxy", code_execution_config=False)\n\n# Start the chat\nuser_proxy.initiate_chat(\n    assistant,\n    message="Tell me a joke about NVDA and TESLA stock prices.",\n)\n'})})}),(0,a.jsxs)(o.Z,{value:"local",label:"Local execution",default:!0,children:[(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"When asked, be sure to check the generated code before continuing to ensure it is safe to run."})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import os\nimport autogen\nfrom autogen import AssistantAgent, UserProxyAgent\n\nllm_config = {"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}\nassistant = AssistantAgent("assistant", llm_config=llm_config)\n\nuser_proxy = UserProxyAgent(\n    "user_proxy", code_execution_config={"executor": autogen.coding.LocalCommandLineCodeExecutor(work_dir="coding")}\n)\n\n# Start the chat\nuser_proxy.initiate_chat(\n    assistant,\n    message="Plot a chart of NVDA and TESLA stock price change YTD.",\n)\n'})})]}),(0,a.jsxs)(o.Z,{value:"docker",label:"Docker execution",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import os\nimport autogen\nfrom autogen import AssistantAgent, UserProxyAgent\n\nllm_config = {"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}\n\nwith autogen.coding.DockerCommandLineCodeExecutor(work_dir="coding") as code_executor:\n    assistant = AssistantAgent("assistant", llm_config=llm_config)\n    user_proxy = UserProxyAgent(\n        "user_proxy", code_execution_config={"executor": code_executor}\n    )\n\n    # Start the chat\n    user_proxy.initiate_chat(\n        assistant,\n        message="Plot a chart of NVDA and TESLA stock price change YTD. Save the plot to a file called plot.png",\n    )\n'})}),(0,a.jsxs)(t.p,{children:["Open ",(0,a.jsx)(t.code,{children:"coding/plot.png"})," to see the generated plot."]})]})]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Learn more about configuring LLMs for agents ",(0,a.jsx)(t.a,{href:"/docs/topics/llm_configuration",children:"here"}),"."]})}),"\n",(0,a.jsx)(t.h4,{id:"multi-agent-conversation-framework",children:"Multi-Agent Conversation Framework"}),"\n",(0,a.jsxs)(t.p,{children:["Autogen enables the next-gen LLM applications with a generic multi-agent conversation framework. It offers customizable and conversable agents which integrate LLMs, tools, and humans.\nBy automating chat among multiple capable agents, one can easily make them collectively perform tasks autonomously or with human feedback, including tasks that require using tools via code. For ",(0,a.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/main/test/twoagent.py",children:"example"}),","]}),"\n",(0,a.jsx)(t.p,{children:"The figure below shows an example conversation flow with AutoGen."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Agent Chat Example",src:n(62435).Z+"",width:"2188",height:"1200"})}),"\n",(0,a.jsx)(t.h3,{id:"where-to-go-next",children:"Where to Go Next?"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Go through the ",(0,a.jsx)(t.a,{href:"/docs/tutorial/introduction",children:"tutorial"})," to learn more about the core concepts in AutoGen"]}),"\n",(0,a.jsxs)(t.li,{children:["Read the examples and guides in the ",(0,a.jsx)(t.a,{href:"/docs/notebooks",children:"notebooks section"})]}),"\n",(0,a.jsxs)(t.li,{children:["Understand the use cases for ",(0,a.jsx)(t.a,{href:"/docs/Use-Cases/agent_chat",children:"multi-agent conversation"})," and ",(0,a.jsx)(t.a,{href:"/docs/Use-Cases/enhanced_inference",children:"enhanced LLM inference"})]}),"\n",(0,a.jsxs)(t.li,{children:["Read the ",(0,a.jsx)(t.a,{href:"/docs/reference/agentchat/conversable_agent/",children:"API"})," docs"]}),"\n",(0,a.jsxs)(t.li,{children:["Learn about ",(0,a.jsx)(t.a,{href:"/docs/Research",children:"research"})," around AutoGen"]}),"\n",(0,a.jsxs)(t.li,{children:["Chat on ",(0,a.jsx)(t.a,{href:"https://aka.ms/autogen-dc",children:"Discord"})]}),"\n",(0,a.jsxs)(t.li,{children:["Follow on ",(0,a.jsx)(t.a,{href:"https://twitter.com/pyautogen",children:"Twitter"})]}),"\n",(0,a.jsxs)(t.li,{children:["See our ",(0,a.jsx)(t.a,{href:"https://aka.ms/autogen-roadmap",children:"roadmaps"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["If you like our project, please give it a ",(0,a.jsx)(t.a,{href:"https://github.com/microsoft/autogen/stargazers",children:"star"})," on GitHub. If you are interested in contributing, please read ",(0,a.jsx)(t.a,{href:"/docs/contributor-guide/contributing",children:"Contributor's Guide"}),"."]}),"\n",(0,a.jsx)("iframe",{src:"https://ghbtns.com/github-btn.html?user=microsoft&repo=autogen&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),s=n(12466),o=n(16550),i=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:r}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),x=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function v(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},28302:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/autogen_agentchat-250ca64b77b87e70d34766a080bf6ba8.png"},62435:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chat_example-da70a7420ebc817ef9826fa4b1e80951.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(67294);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);