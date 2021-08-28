!function(){"use strict";var e={161:function(e,t,n){e.exports=n.p+"137b883801af56df2e0c.png"},67:function(e,t,n){e.exports=n.p+"8e386e617fd51f33f056.png"},517:function(e,t,n){e.exports=n.p+"9264a840966fdfb49b26.png"},207:function(e,t,n){e.exports=n.p+"5f8da56d37820e76a3a2.png"},784:function(e,t,n){e.exports=n.p+"93056f60204d854f7956.png"},707:function(e,t,n){e.exports=n.p+"cf94957597c99d61e057.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.p="",function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.name,i=e.link;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._text=o,this._link=i,this._selector=n,this._element=null,this._handleCardClick=r}var n,r;return n=t,(r=[{key:"_deleteCard",value:function(){this._element.remove()}},{key:"_likeCard",value:function(e){e.target.classList.toggle("cards__like-button_active")}},{key:"_enlargePhoto",value:function(e){this._handleCardClick(e)}},{key:"_setEventListeners",value:function(){var e=this,t=this._element.querySelector(".cards__photo"),n=this._element.querySelector(".cards__close-button"),r=this._element.querySelector(".cards__like-button");n.addEventListener("click",(function(){return e._deleteCard()})),r.addEventListener("click",(function(t){return e._likeCard(t)})),t.addEventListener("click",(function(t){return e._enlargePhoto(t)}))}},{key:"_getTemplate",value:function(){return document.querySelector("".concat(this._selector)).content.querySelector(".cards__item").cloneNode(!0)}},{key:"getCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".cards__photo"),t=this._element.querySelector(".cards__name");return e.src=this._link,e.alt=this._text,t.textContent=this._text,this._element}}])&&e(n.prototype,r),t}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._submit=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_disableButton",value:function(){this._submit.classList.add(this._inactiveButtonClass),this._submit.setAttribute("disabled",!0)}},{key:"_toggleButton",value:function(){this._allInputs.every((function(e){return!0===e.validity.valid}))?(this._submit.classList.remove(this._inactiveButtonClass),this._submit.removeAttribute("disabled",!1)):this._disableButton()}},{key:"_showError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error")),n=e.validationMessage;e.classList.add(this._inputErrorClass),t.textContent=n,t.classList.add(this._errorClass)}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_checkValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_setListeners",value:function(e){var t=this;e.addEventListener("input",(function(){t._checkValidity(e),t._toggleButton()}))}},{key:"resetValidation",value:function(){var e=this;this._disableButton(),this._allInputs.forEach((function(t){e._hideError(t)}))}},{key:"enableValidation",value:function(){var e=this;this._allInputs=Array.from(this._form.querySelectorAll(this._inputSelector)),this._allInputs.forEach((function(t){e._setListeners(t)}))}}])&&r(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector("".concat(n))}var t,n;return t=e,(n=[{key:"renderElements",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup__close")||t.target.classList.contains("popup_active"))&&e.close()}))}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imgElement=t._popup.querySelector(".popup__image"),t._imgCaption=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._imgElement.src=t,this._imgElement.alt=n,this._imgCaption.textContent=n,f(h(u.prototype),"open",this).call(this)}}])&&l(t.prototype,n),u}(s);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e,t){var n,r=e.formSelector,o=e.formSubmission;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(r),n._handleFormSubmission=o,n._inputList=n._form.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputs",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;this._submitFunction=function(t){t.preventDefault(),e._handleFormSubmission(e._getInputValues())},m(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitFunction)}},{key:"close",value:function(){this._form.reset(),m(k(u.prototype),"close",this).call(this)}}])&&v(t.prototype,n),u}(s);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._profile=null}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._profile={name:this._name.textContent,about:this._about.textContent},this._profile}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._name.textContent=t,this._about.textContent=n}}])&&E(t.prototype,n),e}(),C=n(707),L=n(784),O=n(207),P=n(517),j=n(67),q=n(161),x=document.querySelector("#profile-popup"),B=document.querySelector("#place-popup"),R=document.querySelector(".profile__add-button"),I=document.querySelector(".profile__edit-button"),T={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},V=function(e,n,r){return new t(e,n,r)},A=function(e){var t={name:e.target.alt,link:e.target.src};G.open(t)},D={formSelector:"#profile-popup",formSubmission:function(e){var t=e.name,n=e.about;N.setUserInfo({name:t,about:n}),z.close()}},F={formSelector:"#place-popup",formSubmission:function(e){var t=e.title,n=e.link,r=V({name:t,link:n},"#cardTemplate",A);J.addItem(r.getCard()),H.close()}},U={items:[{name:"St. Paul",link:C},{name:"Los Angeles",link:L},{name:"Kansas City",link:O},{name:"Charleston",link:P},{name:"Austin",link:j},{name:"Albuquerque",link:q}],renderer:function(e){var t=V(e,"#cardTemplate",A);J.addItem(t.getCard())}},K=new o(T,x),M=new o(T,B),N=new w({nameSelector:".profile__name",aboutSelector:".profile__about"}),z=new S(D,"#editProfile"),G=new y("#photo"),H=new S(F,"#newPlace"),J=new u(U,".cards");z.setEventListeners(),H.setEventListeners(),G.setEventListeners(),J.renderElements(),K.enableValidation(),M.enableValidation(),I.addEventListener("click",(function(){K.resetValidation(),z.setInputs(N.getUserInfo()),z.open()})),R.addEventListener("click",(function(){M.resetValidation(),H.open()}))}()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FDL0MrQixFQUFvQixJQUFJNUcsRUFBY0MsRUFBVTZFLEdBQ2hEVyxFQUFjLElBQUluQixFRE5RLENBQzlCQyxhQUFjLGlCQUNkQyxjQUFlLG9CQ0tYbUIsRUFBZSxJQUFJaEMsRUFBYzZCLEVBQWlCLGdCQUVsREYsRUFBYSxJQUFJOUIsRUFBZSxVQUNoQzBDLEVBQWEsSUFBSXZDLEVBQWNpQyxFQUFlLGFBQzlDRyxFQUFRLElBQUl4RCxFQUFRNEQsRUFBYSxVQUl2Q1IsRUFBYWtCLG9CQUNiWCxFQUFXVyxvQkFDWHZCLEVBQVd1QixvQkFFWGQsRUFBTWUsaUJBRU5ILEVBQWlCSSxtQkFDakJILEVBQWtCRyxtQkFJbEIvQixFQUFROUYsaUJBQWlCLFNBQVMsV0FDaEN5SCxFQUFpQkssa0JBQ2pCckIsRUFBYXNCLFVBQVV4QixFQUFZeUIsZUFDbkN2QixFQUFhSixVQUdmUixFQUFPN0YsaUJBQWlCLFNBQVMsV0FDL0IwSCxFQUFrQkksa0JBQ2xCZCxFQUFXWCxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoeyBuYW1lLCBsaW5rIH0sIHNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spIHtcbiAgICB0aGlzLl90ZXh0ID0gbmFtZTtcbiAgICB0aGlzLl9saW5rID0gbGluaztcbiAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcbiAgfVxuXG5cbiAgX2RlbGV0ZUNhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG5cbiAgX2xpa2VDYXJkKGUpIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkc19fbGlrZS1idXR0b25fYWN0aXZlJyk7XG4gIH1cblxuXG4gIF9lbmxhcmdlUGhvdG8oZSkge1xuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayhlKTtcbiAgfVxuXG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHBob3RvID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX3Bob3RvJyk7XG4gICAgY29uc3QgY2xvc2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fY2xvc2UtYnV0dG9uJyk7IFxuICAgIGNvbnN0IGxpa2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fbGlrZS1idXR0b24nKTtcbiAgICBcblxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fZGVsZXRlQ2FyZCgpKTtcbiAgICBsaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuX2xpa2VDYXJkKGUpKTtcbiAgICBwaG90by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLl9lbmxhcmdlUGhvdG8oZSkpO1xuICB9XG5cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt0aGlzLl9zZWxlY3Rvcn1gKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19faXRlbScpLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHJldHVybiBjYXJkVGVtcGxhdGU7XG4gIH1cblxuICBcbiAgZ2V0Q2FyZCgpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIFxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19waG90bycpO1xuICAgIGNvbnN0IGNhcmROYW1lID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX25hbWUnKTtcblxuICAgIGNhcmRJbWFnZS5zcmMgPSB0aGlzLl9saW5rO1xuICAgIGNhcmRJbWFnZS5hbHQgPSB0aGlzLl90ZXh0O1xuICAgIGNhcmROYW1lLnRleHRDb250ZW50ID0gdGhpcy5fdGV4dDtcblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtKSB7XG4gICAgdGhpcy5fZm9ybVNlbGVjdG9yID0gc2V0dGluZ3MuZm9ybVNlbGVjdG9yO1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuXG4gICAgdGhpcy5fZm9ybSA9IGZvcm07XG4gICAgdGhpcy5fc3VibWl0ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgfVxuXG4gIF9kaXNhYmxlQnV0dG9uKCkge1xuICAgIHRoaXMuX3N1Ym1pdC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIHRoaXMuX3N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gIH1cblxuICBfdG9nZ2xlQnV0dG9uKCkge1xuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5fYWxsSW5wdXRzLmV2ZXJ5KGlucHV0ID0+IGlucHV0LnZhbGlkaXR5LnZhbGlkID09PSB0cnVlKTtcblxuICAgIGlmICh2YWxpZCl7XG4gICAgICB0aGlzLl9zdWJtaXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIHRoaXMuX3N1Ym1pdC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVCdXR0b24oKTtcbiAgICB9XG4gIH1cblxuICBfc2hvd0Vycm9yKGlucHV0KSB7XG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZTtcblxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH1cblxuICBfaGlkZUVycm9yKGlucHV0KSB7XG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcblxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgfVxuXG4gIF9jaGVja1ZhbGlkaXR5KGlucHV0KSB7XG4gICAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKXtcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihpbnB1dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd0Vycm9yKGlucHV0KTtcbiAgICB9XG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKGlucHV0KSB7XG5cblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgdGhpcy5fY2hlY2tWYWxpZGl0eShpbnB1dCk7XG4gICAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9kaXNhYmxlQnV0dG9uKCk7XG4gICAgdGhpcy5fYWxsSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgdGhpcy5faGlkZUVycm9yKGlucHV0KTsgICAvLyBfaGlkRXJyb3IgdGFrZXMgaW5wdXQgJiBlcnJvciBlbGVtZW50LlxuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9hbGxJbnB1dHMgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG5cblxuICAgIHRoaXMuX2FsbElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIHRoaXMuX3NldExpc3RlbmVycyhpbnB1dCk7XG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgc2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtzZWxlY3Rvcn1gKTtcbiAgfVxuICByZW5kZXJFbGVtZW50cygpIHtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgfSk7XG4gIH1cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBfYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG4gIF9oYW5kbGVFc2NDbG9zZShlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyl7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fY2xvc2UnKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX2FjdGl2ZScpKXtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuX2ltZ0VsZW1lbnQgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltYWdlJyk7XG4gICAgICAgIHRoaXMuX2ltZ0NhcHRpb24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2NhcHRpb24nKTtcbiAgICB9XG4gICAgb3Blbih7IGxpbmssIG5hbWUgfSkge1xuICAgICAgdGhpcy5faW1nRWxlbWVudC5zcmMgPSBsaW5rO1xuICAgICAgdGhpcy5faW1nRWxlbWVudC5hbHQgPSBuYW1lO1xuICAgICAgdGhpcy5faW1nQ2FwdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICBzdXBlci5vcGVuKCk7XG4gICAgfVxufSIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZm9ybVNlbGVjdG9yLCBmb3JtU3VibWlzc2lvbiB9LCBwb3B1cFNlbGVjdG9yKSB7XG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3Rvcihmb3JtU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWlzc2lvbiA9IGZvcm1TdWJtaXNzaW9uO1xuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKTtcbiAgICB9XG5cblxuICAgIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcbiAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKGlucHV0ID0+IHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZSk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xuICAgIH1cblxuXG4gICAgc2V0SW5wdXRzKHZhbHVlc09iaikge1xuICAgICAgXG4gICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlc09ialtpdGVtLm5hbWVdO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuX3N1Ym1pdEZ1bmN0aW9uID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWlzc2lvbih0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgIH1cblxuICAgICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5fc3VibWl0RnVuY3Rpb24pO1xuICAgIH1cblxuXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XG4gICAgICBzdXBlci5jbG9zZSgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBhYm91dFNlbGVjdG9yIH0pIHtcbiAgICB0aGlzLl9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xuICAgIHRoaXMuX2Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhYm91dFNlbGVjdG9yKTtcbiAgICB0aGlzLl9wcm9maWxlID0gbnVsbDtcbiAgfVxuICBnZXRVc2VySW5mbygpIHtcbiAgICB0aGlzLl9wcm9maWxlID0geyBcbiAgICAgIG5hbWU6IHRoaXMuX25hbWUudGV4dENvbnRlbnQsXG4gICAgICBhYm91dDogdGhpcy5fYWJvdXQudGV4dENvbnRlbnRcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLl9wcm9maWxlO1xuICB9XG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgYWJvdXQgfSkge1xuICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuX2Fib3V0LnRleHRDb250ZW50ID0gYWJvdXQ7XG4gIH1cbn0iLCJpbXBvcnQgc3RQYXVsIGZyb20gJy4uL2ltYWdlcy9jaXRpZXMvc3RQYXVsLnBuZyc7XG5pbXBvcnQgbGEgZnJvbSAnLi4vaW1hZ2VzL2NpdGllcy9sb3NBbmdlbGVzLnBuZyc7XG5pbXBvcnQga2Fuc2FzIGZyb20gJy4uL2ltYWdlcy9jaXRpZXMva2Fuc2FzQ2l0eS5wbmcnO1xuaW1wb3J0IGNoYXJsZXN0b24gZnJvbSAnLi4vaW1hZ2VzL2NpdGllcy9jaGFybGVzdG9uLnBuZyc7XG5pbXBvcnQgYXVzdGluIGZyb20gJy4uL2ltYWdlcy9jaXRpZXMvYXVzdGluLnBuZyc7XG5pbXBvcnQgYWxidXF1ZXJxdWUgZnJvbSAnLi4vaW1hZ2VzL2NpdGllcy9hbGJ1cXVlcnF1ZS5wbmcnO1xuXG5leHBvcnQgY29uc3QgdXNlckluZm9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2ZpbGUtcG9wdXAnKTtcbmV4cG9ydCBjb25zdCBuZXdQbGFjZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2UtcG9wdXAnKTtcbmV4cG9ydCBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYWRkLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdC1idXR0b24nKTtcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLnBvcHVwX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX3N1Ym1pdFwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19zdWJtaXRfZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwicG9wdXBfX2Vycm9yX3Zpc2libGVcIlxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiU3QuIFBhdWxcIixcbiAgICBsaW5rOiBzdFBhdWxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTG9zIEFuZ2VsZXNcIixcbiAgICBsaW5rOiBsYVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJLYW5zYXMgQ2l0eVwiLFxuICAgIGxpbms6IGthbnNhc1xuICB9LFxuICB7XG4gICAgbmFtZTogXCJDaGFybGVzdG9uXCIsXG4gICAgbGluazogY2hhcmxlc3RvblxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBdXN0aW5cIixcbiAgICBsaW5rOiBhdXN0aW5cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWxidXF1ZXJxdWVcIixcbiAgICBsaW5rOiBhbGJ1cXVlcnF1ZVxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHByb2ZpbGVTZWxlY3RvcnMgPSB7XG4gIG5hbWVTZWxlY3RvcjogJy5wcm9maWxlX19uYW1lJyxcbiAgYWJvdXRTZWxlY3RvcjogJy5wcm9maWxlX19hYm91dCdcbn07IiwiaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24uanMnO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzJztcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgeyBlZGl0QnRuLCBhZGRCdG4sIHNldHRpbmdzLCB1c2VySW5mb0Zvcm0sIG5ld1BsYWNlRm9ybSwgcHJvZmlsZVNlbGVjdG9ycywgaW5pdGlhbENhcmRzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzLmpzJztcblxuXG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSAoY2FyZEluZm8sIGNhcmRTZWxlY3RvciwgY2FyZENsaWNrKSA9PiB7XG4gIHJldHVybiBuZXcgQ2FyZChjYXJkSW5mbywgY2FyZFNlbGVjdG9yLCBjYXJkQ2xpY2spO1xufVxuXG5jb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAoZSkgPT4ge1xuICBjb25zdCBjbGlja2VkUGhvdG8gPSB7IG5hbWU6IGUudGFyZ2V0LmFsdCwgbGluazogZS50YXJnZXQuc3JjIH1cbiAgaW1hZ2VQb3B1cC5vcGVuKGNsaWNrZWRQaG90byk7XG59XG5cblxuXG5jb25zdCBwcm9maWxlRm9ybUluZm8gPSB7XG4gIGZvcm1TZWxlY3RvcjogJyNwcm9maWxlLXBvcHVwJyxcbiAgZm9ybVN1Ym1pc3Npb246ICh7IG5hbWUsIGFib3V0IH0pID0+IHtcbiAgICB1c2VyUHJvZmlsZS5zZXRVc2VySW5mbyh7IG5hbWU6IG5hbWUsIGFib3V0OiBhYm91dCB9KTtcbiAgICBwcm9maWxlUG9wdXAuY2xvc2UoKTtcbiAgICBcbiAgfVxufTtcblxuY29uc3QgcGxhY2VGb3JtSW5mbyA9IHtcbiAgZm9ybVNlbGVjdG9yOiAnI3BsYWNlLXBvcHVwJyxcbiAgZm9ybVN1Ym1pc3Npb246ICh7IHRpdGxlOiBuYW1lLCBsaW5rOiBsaW5rIH0pID0+IHtcbiAgICBjb25zdCBhZGRDYXJkID0gY3JlYXRlQ2FyZCh7IG5hbWUsIGxpbmsgfSwgJyNjYXJkVGVtcGxhdGUnLCBoYW5kbGVDYXJkQ2xpY2spO1xuICAgIGNhcmRzLmFkZEl0ZW0oYWRkQ2FyZC5nZXRDYXJkKCkpO1xuICAgIHBsYWNlUG9wdXAuY2xvc2UoKTtcbiAgICBcbiAgfVxufTtcblxuY29uc3Qgc2VjdGlvbkluZm8gPSB7XG4gIGl0ZW1zOiBpbml0aWFsQ2FyZHMsIFxuICByZW5kZXJlcjogKGl0ZW0pID0+IHtcbiAgICBjb25zdCBuZXdDYXJkID0gY3JlYXRlQ2FyZChpdGVtLCAnI2NhcmRUZW1wbGF0ZScsIGhhbmRsZUNhcmRDbGljayk7XG4gICAgY2FyZHMuYWRkSXRlbShuZXdDYXJkLmdldENhcmQoKSk7XG4gIH1cbn07XG5cblxuXG5jb25zdCBwcm9maWxlVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3Ioc2V0dGluZ3MsIHVzZXJJbmZvRm9ybSk7XG5jb25zdCBuZXdQbGFjZVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHNldHRpbmdzLCBuZXdQbGFjZUZvcm0pO1xuY29uc3QgdXNlclByb2ZpbGUgPSBuZXcgVXNlckluZm8ocHJvZmlsZVNlbGVjdG9ycyk7XG5jb25zdCBwcm9maWxlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShwcm9maWxlRm9ybUluZm8sICcjZWRpdFByb2ZpbGUnKTtcblxuY29uc3QgaW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZSgnI3Bob3RvJyk7XG5jb25zdCBwbGFjZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0ocGxhY2VGb3JtSW5mbywgJyNuZXdQbGFjZScpO1xuY29uc3QgY2FyZHMgPSBuZXcgU2VjdGlvbihzZWN0aW9uSW5mbywgJy5jYXJkcycpO1xuXG5cblxucHJvZmlsZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wbGFjZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5pbWFnZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmNhcmRzLnJlbmRlckVsZW1lbnRzKCk7XG5cbnByb2ZpbGVWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xubmV3UGxhY2VWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5cblxuZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcHJvZmlsZVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgcHJvZmlsZVBvcHVwLnNldElucHV0cyh1c2VyUHJvZmlsZS5nZXRVc2VySW5mbygpKTtcbiAgcHJvZmlsZVBvcHVwLm9wZW4oKTtcbn0pO1xuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5ld1BsYWNlVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xuICBwbGFjZVBvcHVwLm9wZW4oKTtcbn0pOyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsInAiLCJDYXJkIiwic2VsZWN0b3IiLCJoYW5kbGVDYXJkQ2xpY2siLCJuYW1lIiwibGluayIsInRoaXMiLCJfdGV4dCIsIl9saW5rIiwiX3NlbGVjdG9yIiwiX2VsZW1lbnQiLCJfaGFuZGxlQ2FyZENsaWNrIiwicmVtb3ZlIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInBob3RvIiwicXVlcnlTZWxlY3RvciIsImNsb3NlIiwibGlrZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfZGVsZXRlQ2FyZCIsIl9saWtlQ2FyZCIsIl9lbmxhcmdlUGhvdG8iLCJkb2N1bWVudCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJjYXJkSW1hZ2UiLCJjYXJkTmFtZSIsInNyYyIsImFsdCIsInRleHRDb250ZW50IiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybSIsIl9mb3JtU2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybSIsIl9zdWJtaXQiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJfYWxsSW5wdXRzIiwiZXZlcnkiLCJpbnB1dCIsInZhbGlkaXR5IiwidmFsaWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfZGlzYWJsZUJ1dHRvbiIsImVycm9yRWxlbWVudCIsImlkIiwiZXJyb3JNZXNzYWdlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUVycm9yIiwiX3Nob3dFcnJvciIsIl9jaGVja1ZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvbiIsImZvckVhY2giLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3NldExpc3RlbmVycyIsIlNlY3Rpb24iLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsIml0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5IiwiY29udGFpbnMiLCJQb3B1cFdpdGhJbWFnZSIsIl9pbWdFbGVtZW50IiwiX2ltZ0NhcHRpb24iLCJQb3B1cFdpdGhGb3JtIiwiZm9ybVN1Ym1pc3Npb24iLCJfaGFuZGxlRm9ybVN1Ym1pc3Npb24iLCJfaW5wdXRMaXN0IiwiX2Zvcm1WYWx1ZXMiLCJ2YWx1ZSIsInZhbHVlc09iaiIsIl9zdWJtaXRGdW5jdGlvbiIsInByZXZlbnREZWZhdWx0IiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImFib3V0U2VsZWN0b3IiLCJfbmFtZSIsIl9hYm91dCIsIl9wcm9maWxlIiwiYWJvdXQiLCJ1c2VySW5mb0Zvcm0iLCJuZXdQbGFjZUZvcm0iLCJhZGRCdG4iLCJlZGl0QnRuIiwiY3JlYXRlQ2FyZCIsImNhcmRJbmZvIiwiY2FyZFNlbGVjdG9yIiwiY2FyZENsaWNrIiwiY2xpY2tlZFBob3RvIiwiaW1hZ2VQb3B1cCIsIm9wZW4iLCJwcm9maWxlRm9ybUluZm8iLCJ1c2VyUHJvZmlsZSIsInNldFVzZXJJbmZvIiwicHJvZmlsZVBvcHVwIiwicGxhY2VGb3JtSW5mbyIsInRpdGxlIiwiYWRkQ2FyZCIsImNhcmRzIiwiYWRkSXRlbSIsImdldENhcmQiLCJwbGFjZVBvcHVwIiwic2VjdGlvbkluZm8iLCJzdFBhdWwiLCJsYSIsImthbnNhcyIsImNoYXJsZXN0b24iLCJhdXN0aW4iLCJhbGJ1cXVlcnF1ZSIsIm5ld0NhcmQiLCJwcm9maWxlVmFsaWRhdG9yIiwibmV3UGxhY2VWYWxpZGF0b3IiLCJzZXRFdmVudExpc3RlbmVycyIsInJlbmRlckVsZW1lbnRzIiwiZW5hYmxlVmFsaWRhdGlvbiIsInJlc2V0VmFsaWRhdGlvbiIsInNldElucHV0cyIsImdldFVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==