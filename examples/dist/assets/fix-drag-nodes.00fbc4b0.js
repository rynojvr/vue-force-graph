import{_ as n}from"./index.264cb862.js";import{d as s,r as t,a as p,c,o as f}from"./vendor.b8487768.js";const d=s({setup(){const e=t({nodes:[],links:[]});return fetch("/miserables.json").then(r=>r.json()).then(r=>e.value=r),{graphData:e}}});function u(e,r,l,i,h,_){const a=p("VueForceGraph3D");return f(),c(a,{graphData:e.graphData,backgroundColor:"#090723",nodeLabel:"id",nodeAutoColorBy:"group",onNodeDragEnd:o=>{o.fx=o.x,o.fy=o.y,o.fz=o.z}},null,8,["graphData","onNodeDragEnd"])}var D=n(d,[["render",u]]);export{D as default};