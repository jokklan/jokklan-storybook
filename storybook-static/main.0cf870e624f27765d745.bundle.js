(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_text_mask__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(61),react_text_mask__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_3__),text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(344),text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4__),numeral__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(101),numeral__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_5__),_EnhancedInput__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(62),localeData=numeral__WEBPACK_IMPORTED_MODULE_5___default.a.localeData(),buildMask=function(format){var decimalLimit=2,decimalFormat=format.split(".")[1];decimalFormat&&(decimalLimit=decimalFormat.length);var includeThousandsSeparator=format.includes(",");return text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4___default()({allowDecimal:!0,prefix:"",suffix:"",includeThousandsSeparator:includeThousandsSeparator,thousandsSeparatorSymbol:localeData.delimiters.thousands,decimalSymbol:localeData.delimiters.decimal,decimalLimit:decimalLimit})},MaskedCurrencyInput=function(_ref){var format=_ref.format,props=Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref,["format"]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_text_mask__WEBPACK_IMPORTED_MODULE_3___default.a,Object.assign({mask:buildMask(format)},props))},formatValue=function(_ref2){_ref2.inputFormat;var outputFormat=_ref2.outputFormat,value=_ref2.value;return _ref2.display?numeral__WEBPACK_IMPORTED_MODULE_5___default()(parseFloat(value)).format(outputFormat):"".concat(numeral__WEBPACK_IMPORTED_MODULE_5___default()(value).value())},CurrencyInput=function(_ref3){var nativeProps=_ref3.nativeProps,min=_ref3.min,max=_ref3.max,step=_ref3.step,props=Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref3,["nativeProps","min","max","step"]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_EnhancedInput__WEBPACK_IMPORTED_MODULE_6__.a,Object.assign({formatValue:formatValue,component:MaskedCurrencyInput,type:"number",updateOnChange:!1,nativeProps:Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({min:min,max:max,step:step},nativeProps)},props))};CurrencyInput.defaultProps={displayFormat:"0,0.00",valueFormat:"0.00",min:0,step:.01},__webpack_exports__.a=CurrencyInput,CurrencyInput.__docgenInfo={description:"",methods:[],displayName:"CurrencyInput",props:{displayFormat:{defaultValue:{value:"'0,0.00'",computed:!1},required:!1},valueFormat:{defaultValue:{value:"'0.00'",computed:!1},required:!1},min:{defaultValue:{value:"0",computed:!1},required:!1},step:{defaultValue:{value:"0.01",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CurrencyInput.jsx"]={name:"CurrencyInput",docgenInfo:CurrencyInput.__docgenInfo,path:"src/components/CurrencyInput.jsx"})},102:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_text_mask__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(61),react_text_mask__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_3__),text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(99),text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_4__),moment__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),moment__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__),_EnhancedInput__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(62),buildMask=function(format){return Array.from(format.toLowerCase()).map(function(char){return["d","m","y"].includes(char)?/\d/:char})},buildPipe=function(format){return text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_4___default()(format.toLowerCase())},buildPlaceholder=function(_ref){var format=_ref.format,_ref$translations=_ref.translations,yearAbbr=_ref$translations.yearAbbr,monthAbbr=_ref$translations.monthAbbr,dateAbbr=_ref$translations.dateAbbr;return format.toLowerCase().replace(/y/g,yearAbbr).replace(/m/g,monthAbbr).replace(/d/g,dateAbbr)},MaskedDateInput=function(_ref2){var placeholder=_ref2.placeholder,translations=_ref2.translations,format=_ref2.format,props=Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref2,["placeholder","translations","format"]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_text_mask__WEBPACK_IMPORTED_MODULE_3___default.a,Object.assign({mask:buildMask(format),pipe:buildPipe(format),placeholder:placeholder||buildPlaceholder({format:format,translations:translations})},props))},formatValue=function(_ref3){var inputFormat=_ref3.inputFormat,outputFormat=_ref3.outputFormat,value=_ref3.value;if(!value||0===value.length)return"";var date=moment__WEBPACK_IMPORTED_MODULE_5___default()(value,inputFormat);return date.isValid()?date.format(outputFormat):""},DateInput=function(_ref4){var translations=_ref4.translations,enhancedProps=_ref4.enhancedProps,props=Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref4,["translations","enhancedProps"]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_EnhancedInput__WEBPACK_IMPORTED_MODULE_6__.a,Object.assign({formatValue:formatValue,component:MaskedDateInput,enhancedProps:Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({translations:translations},enhancedProps),type:"date",updateOnChange:!1},props))};DateInput.defaultProps={displayFormat:moment__WEBPACK_IMPORTED_MODULE_5___default.a.localeData().longDateFormat("L"),valueFormat:"YYYY-MM-DD",translations:{yearAbbr:"y",monthAbbr:"m",dateAbbr:"d"}},__webpack_exports__.a=DateInput,DateInput.__docgenInfo={description:"",methods:[],displayName:"DateInput",props:{displayFormat:{defaultValue:{value:"moment.localeData().longDateFormat('L')",computed:!0},required:!1},valueFormat:{defaultValue:{value:"'YYYY-MM-DD'",computed:!1},required:!1},translations:{defaultValue:{value:"{yearAbbr:'y',monthAbbr:'m',dateAbbr:'d'}",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateInput.jsx"]={name:"DateInput",docgenInfo:DateInput.__docgenInfo,path:"src/components/DateInput.jsx"})},103:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_text_mask__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(61),react_text_mask__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_3__),text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(99),text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_4__),moment__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),moment__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__),_EnhancedInput__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(62),buildMask=function(format){return Array.from(format.toLowerCase()).map(function(char){return["h","m","s"].includes(char)?/\d/:char})},buildPipe=function(format){return console.log({format:format}),text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_4___default()(format.toUpperCase())},buildPlaceholder=function(_ref){var format=_ref.format,_ref$translations=_ref.translations,hourAbbr=_ref$translations.hourAbbr,minAbbr=_ref$translations.minAbbr,secAbbr=_ref$translations.secAbbr;return format.toLowerCase().replace(/h/g,hourAbbr).replace(/m/g,minAbbr).replace(/s/g,secAbbr)},MaskedTimeInput=function(_ref2){var placeholder=_ref2.placeholder,translations=_ref2.translations,format=_ref2.format,props=Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref2,["placeholder","translations","format"]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_text_mask__WEBPACK_IMPORTED_MODULE_3___default.a,Object.assign({mask:buildMask(format),pipe:buildPipe(format),placeholder:placeholder||buildPlaceholder({format:format,translations:translations})},props))},formatValue=function(_ref3){var inputFormat=_ref3.inputFormat,outputFormat=_ref3.outputFormat,value=_ref3.value;if(!value||0===value.length)return"";var time=moment__WEBPACK_IMPORTED_MODULE_5___default()(value,inputFormat);return time.isValid()?time.format(outputFormat):""},TimeInput=function(_ref4){var translations=_ref4.translations,enhancedProps=_ref4.enhancedProps,props=Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref4,["translations","enhancedProps"]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_EnhancedInput__WEBPACK_IMPORTED_MODULE_6__.a,Object.assign({formatValue:formatValue,component:MaskedTimeInput,enhancedProps:Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({translations:translations},enhancedProps),updateOnChange:!1,type:"time"},props))};TimeInput.defaultProps={allowNative:!1,displayFormat:"HH:mm",valueFormat:"HH:mm",translations:{hourAbbr:"h",minAbbr:"m",secAbbr:"s"}},__webpack_exports__.a=TimeInput,TimeInput.__docgenInfo={description:"",methods:[],displayName:"TimeInput",props:{allowNative:{defaultValue:{value:"false",computed:!1},required:!1},displayFormat:{defaultValue:{value:"'HH:mm'",computed:!1},required:!1},valueFormat:{defaultValue:{value:"'HH:mm'",computed:!1},required:!1},translations:{defaultValue:{value:"{hourAbbr:'h',minAbbr:'m',secAbbr:'s'}",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TimeInput.jsx"]={name:"TimeInput",docgenInfo:TimeInput.__docgenInfo,path:"src/components/TimeInput.jsx"})},26:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"task",function(){return task}),__webpack_require__.d(__webpack_exports__,"actions",function(){return actions});var _Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(24),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(25),_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(139),_Task__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(63),task={id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2018,0,1,9,0)},actions={onPinTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onPinTask"),onArchiveTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onArchiveTask")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Task",module).addDecorator(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.withKnobs).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.object)("task",Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},task))},actions))}).add("pinned",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},task,{state:"TASK_PINNED"})},actions))}).add("archived",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},task,{state:"TASK_ARCHIVED"})},actions))})}.call(this,__webpack_require__(58)(module))},350:function(module,exports,__webpack_require__){__webpack_require__(351),__webpack_require__(431),module.exports=__webpack_require__(432)},432:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),req=(__webpack_require__(531),__webpack_require__(532));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(58)(module))},531:function(module,exports,__webpack_require__){},532:function(module,exports,__webpack_require__){var map={"./components/CurrencyInput.stories.js":533,"./components/DateInput.stories.js":637,"./components/Task.stories.js":26,"./components/TaskList.stories.js":647,"./components/TimeInput.stories.js":648};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=532},533:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"actions",function(){return actions});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(25),_CurrencyInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(100),actions={onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onChange"),onBlur:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onBlur")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("CurrencyInput",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyInput__WEBPACK_IMPORTED_MODULE_3__.a,actions)}).add("allow native",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyInput__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({allowNative:!0},actions))}).add("with custom format",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyInput__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({displayFormat:"0.0000"},actions))})}.call(this,__webpack_require__(58)(module))},62:function(module,__webpack_exports__,__webpack_require__){"use strict";var objectWithoutProperties=__webpack_require__(22),react=__webpack_require__(2),react_default=__webpack_require__.n(react),classCallCheck=__webpack_require__(345),createClass=__webpack_require__(346),possibleConstructorReturn=__webpack_require__(348),getPrototypeOf=__webpack_require__(347),inherits=__webpack_require__(349),extractFromEvent=function(_ref){var _ref$target=_ref.target;return{name:_ref$target.name,value:_ref$target.value}},components_withFormattedValue=function(_ref2){var formatValue=_ref2.formatValue,_ref2$updateOnChange=_ref2.updateOnChange,updateOnChange=void 0===_ref2$updateOnChange||_ref2$updateOnChange,_ref2$extractFromInpu=_ref2.extractFromInput,extractFromInput=void 0===_ref2$extractFromInpu?extractFromEvent:_ref2$extractFromInpu;return function(WrappedComponent){var WithFormattedValue=function(_Component){function WithFormattedValue(){var _getPrototypeOf2,_this;Object(classCallCheck.a)(this,WithFormattedValue);for(var _len=arguments.length,_args=new Array(_len),_key=0;_key<_len;_key++)_args[_key]=arguments[_key];return(_this=Object(possibleConstructorReturn.a)(this,(_getPrototypeOf2=Object(getPrototypeOf.a)(WithFormattedValue)).call.apply(_getPrototypeOf2,[this].concat(_args)))).handleUpdate=function(){var _this$props=_this.props,valueFormat=_this$props.valueFormat,displayFormat=_this$props.displayFormat,_extractFromInput=extractFromInput.apply(void 0,arguments),value=_extractFromInput.value;return{target:{name:_extractFromInput.name,value:formatValue({inputFormat:displayFormat,outputFormat:valueFormat,value:value,display:!1})}}},_this.handleChange=function(){var _this2,onChange=_this.props.onChange;updateOnChange&&onChange&&onChange((_this2=_this).handleUpdate.apply(_this2,arguments))},_this.handleBlur=function(){var newEvent,_this3,_this$props2=_this.props,onBlur=_this$props2.onBlur,onChange=_this$props2.onChange;(!updateOnChange&&onChange||onBlur)&&(newEvent=(_this3=_this).handleUpdate.apply(_this3,arguments)),!updateOnChange&&onChange&&onChange(newEvent),onBlur&&onBlur(newEvent)},_this}return Object(inherits.a)(WithFormattedValue,_Component),Object(createClass.a)(WithFormattedValue,[{key:"render",value:function(){var _this$props3=this.props,value=(_this$props3.onChange,_this$props3.onBlur,_this$props3.value),valueFormat=_this$props3.valueFormat,displayFormat=_this$props3.displayFormat,otherProps=Object(objectWithoutProperties.a)(_this$props3,["onChange","onBlur","value","valueFormat","displayFormat"]),formattedValue=formatValue({inputFormat:valueFormat,outputFormat:displayFormat,value:value,display:!0});return react_default.a.createElement(WrappedComponent,Object.assign({},otherProps,{onChange:this.handleChange,onBlur:this.handleBlur,value:formattedValue,format:displayFormat}))}}]),WithFormattedValue}(react.Component);return WithFormattedValue.displayName="withFormattedValue(".concat(WrappedComponent.displayName||WrappedComponent.name),WithFormattedValue}},invalidValues={date:"not-a-date",number:"not-a-number"},utilities_featureDetection={inputType:function(type,invalidValue){var input=document.createElement("input");if(input.setAttribute("type",type),input.type!==type)return!1;var finalInvalidValue=invalidValue||invalidValues[type];return!finalInvalidValue||(input.setAttribute("value",finalInvalidValue),input.value!==finalInvalidValue)}},EnhancedInput_EnhancedInput=function(_ref){var allowNative=_ref.allowNative,type=_ref.type,nativeProps=_ref.nativeProps,enhancedProps=_ref.enhancedProps,updateOnChange=_ref.updateOnChange,component=_ref.component,formatValue=_ref.formatValue,valueFormat=_ref.valueFormat,displayFormat=_ref.displayFormat,props=Object(objectWithoutProperties.a)(_ref,["allowNative","type","nativeProps","enhancedProps","updateOnChange","component","formatValue","valueFormat","displayFormat"]);if(allowNative&&utilities_featureDetection.inputType(type))return react_default.a.createElement("input",Object.assign({type:type},props,nativeProps));var FormattedInput=components_withFormattedValue({updateOnChange:updateOnChange,formatValue:formatValue})(component);return react_default.a.createElement(FormattedInput,Object.assign({},props,enhancedProps,{valueFormat:valueFormat,displayFormat:displayFormat}))};EnhancedInput_EnhancedInput.defaultProps={allowNative:!1,updateOnChange:!0,nativeProps:{},enhancedProps:{},formatValue:function(_ref2){return _ref2.value}};__webpack_exports__.a=EnhancedInput_EnhancedInput;EnhancedInput_EnhancedInput.__docgenInfo={description:"",methods:[],displayName:"EnhancedInput",props:{allowNative:{defaultValue:{value:"false",computed:!1},required:!1},updateOnChange:{defaultValue:{value:"true",computed:!1},required:!1},nativeProps:{defaultValue:{value:"{}",computed:!1},required:!1},enhancedProps:{defaultValue:{value:"{}",computed:!1},required:!1},formatValue:{defaultValue:{value:"function formatValue(_ref2){var value=_ref2.value;return value;}",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EnhancedInput.jsx"]={name:"EnhancedInput",docgenInfo:EnhancedInput_EnhancedInput.__docgenInfo,path:"src/components/EnhancedInput.jsx"})},63:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"list-item ".concat(state)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"checkbox"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"checkbox-custom",onClick:function(){return onArchiveTask(id)}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"actions",onClick:function(event){return event.stopPropagation()}},"TASK_ARCHIVED"!==state&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{onClick:function(){return onPinTask(id)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-star"}))))}__webpack_exports__.a=Task,Task.__docgenInfo={description:"",methods:[],displayName:"Task"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.jsx"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.jsx"})},637:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"actions",function(){return actions});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(25),_DateInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(102),actions={onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onChange"),onBlur:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onBlur")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("DateInput",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DateInput__WEBPACK_IMPORTED_MODULE_3__.a,actions)}).add("allow native",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DateInput__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({allowNative:!0},actions))}).add("with custom format",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DateInput__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({displayFormat:"MM/DD YYYY"},actions))})}.call(this,__webpack_require__(58)(module))},638:function(module,exports,__webpack_require__){var map={"./af":217,"./af.js":217,"./ar":218,"./ar-dz":219,"./ar-dz.js":219,"./ar-kw":220,"./ar-kw.js":220,"./ar-ly":221,"./ar-ly.js":221,"./ar-ma":222,"./ar-ma.js":222,"./ar-sa":223,"./ar-sa.js":223,"./ar-tn":224,"./ar-tn.js":224,"./ar.js":218,"./az":225,"./az.js":225,"./be":226,"./be.js":226,"./bg":227,"./bg.js":227,"./bm":228,"./bm.js":228,"./bn":229,"./bn.js":229,"./bo":230,"./bo.js":230,"./br":231,"./br.js":231,"./bs":232,"./bs.js":232,"./ca":233,"./ca.js":233,"./cs":234,"./cs.js":234,"./cv":235,"./cv.js":235,"./cy":236,"./cy.js":236,"./da":237,"./da.js":237,"./de":238,"./de-at":239,"./de-at.js":239,"./de-ch":240,"./de-ch.js":240,"./de.js":238,"./dv":241,"./dv.js":241,"./el":242,"./el.js":242,"./en-SG":243,"./en-SG.js":243,"./en-au":244,"./en-au.js":244,"./en-ca":245,"./en-ca.js":245,"./en-gb":246,"./en-gb.js":246,"./en-ie":247,"./en-ie.js":247,"./en-il":248,"./en-il.js":248,"./en-nz":249,"./en-nz.js":249,"./eo":250,"./eo.js":250,"./es":251,"./es-do":252,"./es-do.js":252,"./es-us":253,"./es-us.js":253,"./es.js":251,"./et":254,"./et.js":254,"./eu":255,"./eu.js":255,"./fa":256,"./fa.js":256,"./fi":257,"./fi.js":257,"./fo":258,"./fo.js":258,"./fr":259,"./fr-ca":260,"./fr-ca.js":260,"./fr-ch":261,"./fr-ch.js":261,"./fr.js":259,"./fy":262,"./fy.js":262,"./ga":263,"./ga.js":263,"./gd":264,"./gd.js":264,"./gl":265,"./gl.js":265,"./gom-latn":266,"./gom-latn.js":266,"./gu":267,"./gu.js":267,"./he":268,"./he.js":268,"./hi":269,"./hi.js":269,"./hr":270,"./hr.js":270,"./hu":271,"./hu.js":271,"./hy-am":272,"./hy-am.js":272,"./id":273,"./id.js":273,"./is":274,"./is.js":274,"./it":275,"./it-ch":276,"./it-ch.js":276,"./it.js":275,"./ja":277,"./ja.js":277,"./jv":278,"./jv.js":278,"./ka":279,"./ka.js":279,"./kk":280,"./kk.js":280,"./km":281,"./km.js":281,"./kn":282,"./kn.js":282,"./ko":283,"./ko.js":283,"./ku":284,"./ku.js":284,"./ky":285,"./ky.js":285,"./lb":286,"./lb.js":286,"./lo":287,"./lo.js":287,"./lt":288,"./lt.js":288,"./lv":289,"./lv.js":289,"./me":290,"./me.js":290,"./mi":291,"./mi.js":291,"./mk":292,"./mk.js":292,"./ml":293,"./ml.js":293,"./mn":294,"./mn.js":294,"./mr":295,"./mr.js":295,"./ms":296,"./ms-my":297,"./ms-my.js":297,"./ms.js":296,"./mt":298,"./mt.js":298,"./my":299,"./my.js":299,"./nb":300,"./nb.js":300,"./ne":301,"./ne.js":301,"./nl":302,"./nl-be":303,"./nl-be.js":303,"./nl.js":302,"./nn":304,"./nn.js":304,"./pa-in":305,"./pa-in.js":305,"./pl":306,"./pl.js":306,"./pt":307,"./pt-br":308,"./pt-br.js":308,"./pt.js":307,"./ro":309,"./ro.js":309,"./ru":310,"./ru.js":310,"./sd":311,"./sd.js":311,"./se":312,"./se.js":312,"./si":313,"./si.js":313,"./sk":314,"./sk.js":314,"./sl":315,"./sl.js":315,"./sq":316,"./sq.js":316,"./sr":317,"./sr-cyrl":318,"./sr-cyrl.js":318,"./sr.js":317,"./ss":319,"./ss.js":319,"./sv":320,"./sv.js":320,"./sw":321,"./sw.js":321,"./ta":322,"./ta.js":322,"./te":323,"./te.js":323,"./tet":324,"./tet.js":324,"./tg":325,"./tg.js":325,"./th":326,"./th.js":326,"./tl-ph":327,"./tl-ph.js":327,"./tlh":328,"./tlh.js":328,"./tr":329,"./tr.js":329,"./tzl":330,"./tzl.js":330,"./tzm":331,"./tzm-latn":332,"./tzm-latn.js":332,"./tzm.js":331,"./ug-cn":333,"./ug-cn.js":333,"./uk":334,"./uk.js":334,"./ur":335,"./ur.js":335,"./uz":336,"./uz-latn":337,"./uz-latn.js":337,"./uz.js":336,"./vi":338,"./vi.js":338,"./x-pseudo":339,"./x-pseudo.js":339,"./yo":340,"./yo.js":340,"./zh-cn":341,"./zh-cn.js":341,"./zh-hk":342,"./zh-hk.js":342,"./zh-tw":343,"./zh-tw.js":343};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=638},647:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"defaultTasks",function(){return defaultTasks}),__webpack_require__.d(__webpack_exports__,"withPinnedTasks",function(){return withPinnedTasks});var _Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(76),_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(24),_TaskList__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(77),_Task_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(26),defaultTasks=[Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"1",title:"Task 1"}),Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"2",title:"Task 2"}),Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"3",title:"Task 3"}),Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"4",title:"Task 4"}),Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"5",title:"Task 5"}),Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"6",title:"Task 6"})],withPinnedTasks=[].concat(Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(defaultTasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("TaskList",module).addDecorator(function(story){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{padding:"3rem"}},story())}).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:defaultTasks},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))}).add("withPinnedTasks",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:withPinnedTasks},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))}).add("loading",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({loading:!0,tasks:[]},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))}).add("empty",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:[]},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))})}.call(this,__webpack_require__(58)(module))},648:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"timeInput",function(){return timeInput}),__webpack_require__.d(__webpack_exports__,"actions",function(){return actions});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(25),_TimeInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(103),timeInput={displayFormat:"LT",valueFormat:"HH:mm"},actions={onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onChange"),onBlur:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onBlur")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TimeInput",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TimeInput__WEBPACK_IMPORTED_MODULE_3__.a,actions)}).add("allow native",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TimeInput__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({allowNative:!0},actions))}).add("with custom format",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TimeInput__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({displayFormat:"HH:mm:ss"},actions))})}.call(this,__webpack_require__(58)(module))},77:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(76),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Task__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(63);function TaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onPinTask:_ref.onPinTask,onArchiveTask:_ref.onArchiveTask},LoadingRow=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"loading-item"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"glow-checkbox"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"glow-text"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"Loading")," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"cool")," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"state")));if(loading)return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list-items"},LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow);if(0===tasks.length)return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list-items"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"wrapper-message"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"icon-check"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"title-message"},"You have no tasks"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"subtitle-message"},"Sit back and relax")));var tasksInOrder=[].concat(Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(tasks.filter(function(t){return"TASK_PINNED"===t.state})),Object(_Users_johanfrolich_Programming_Rails_jokklan_storybook_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(tasks.filter(function(t){return"TASK_PINNED"!==t.state})));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list-items"},tasksInOrder.map(function(task){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({key:task.id,task:task},events))}))}TaskList.defaultProps={loading:!1},__webpack_exports__.a=TaskList,TaskList.__docgenInfo={description:"",methods:[],displayName:"TaskList",props:{loading:{defaultValue:{value:"false",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.jsx"]={name:"TaskList",docgenInfo:TaskList.__docgenInfo,path:"src/components/TaskList.jsx"})}},[[350,1,2]]]);
//# sourceMappingURL=main.0cf870e624f27765d745.bundle.js.map