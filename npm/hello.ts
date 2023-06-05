public setOption(keyOrObj: any, value?: any) { 
   if (typeof keyOrObj === 'string') { 
     // parse `a.b = val` to `a: { b: val }` 
     const keys = keyOrObj.split('.'); 
     let opt: any = this.option; 
     for (let i = 0; i < keys.length - 1; i++) { 
       if (opt[keys[i]] === undefined) { 
         opt[keys[i]] = {}; 
       } 
       opt = opt[keys[i]]; 
     } 
     opt[keys[keys.length - 1]] = value; 
     this._triggerPluginsEvent('updateOption'); 
     this._updateComponentByOptions(); 
   } else if (tool.isObject(keyOrObj)) { 
     for (let k in keyOrObj) { 
       this.option[k] = keyOrObj[k]; 
     } 
     this._triggerPluginsEvent('updateOption'); 
     this._updateComponentByOptions(); 
   } else { 
     console.debug('[vConsole] The first parameter of `vConsole.setOption()` must be a string or an object.'); 
   } 
 } 