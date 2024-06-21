(()=>{"use strict";function e(e){const t=document.createElement("div");t.classList.add("list__item"),t.draggable=!0;const n=document.createElement("span");n.textContent=e,t.appendChild(n);const c=document.createElement("img");return c.classList.add("delete__item-btn"),c.src="./svg/X.svg",c.alt="Delete",t.appendChild(c),t}function t(){const e=document.querySelectorAll(".column__item"),t=[];e.forEach((e=>{const n=[];e.querySelector(".list").querySelectorAll(".list__item").forEach((e=>{n.push(e.querySelector("span").textContent)})),t.push(n)})),localStorage.setItem("taskState",JSON.stringify(t))}function n(){const e=document.querySelectorAll(".list");document.querySelectorAll(".list__item").forEach((e=>{e.addEventListener("dragstart",(()=>{e.classList.add("dragging")})),e.addEventListener("dragend",(()=>{e.classList.remove("dragging")})),e.addEventListener("click",(e=>{e.target.classList.contains("delete__item-btn")&&(e.target.parentNode.remove(),t())}))})),e.forEach((e=>{e.addEventListener("dragover",(n=>{n.preventDefault();const c=document.querySelector(".dragging"),r=function(e,t){return[...e.querySelectorAll(".list__item:not(.dragging)")].reduce(((e,n)=>{const c=n.getBoundingClientRect(),r=t-c.top-c.height/2;return r<0&&r>e.offset?{offset:r,element:n}:e}),{offset:Number.NEGATIVE_INFINITY}).element}(e,n.clientY);null===r?e.appendChild(c):e.insertBefore(c,r),t()}))}))}document.addEventListener("DOMContentLoaded",(()=>{!function(){const t=JSON.parse(localStorage.getItem("taskState"));t&&(document.querySelectorAll(".column__item").forEach(((n,c)=>{const r=n.querySelector(".list");r.innerHTML="",t[c].forEach((t=>{const n=e(t);r.appendChild(n)}))})),n())}()})),document.querySelectorAll(".column__item").forEach((function(c){const r=c.querySelectorAll(".list"),l=c.querySelector(".add__btn"),o=c.querySelector(".add__item-btn"),a=c.querySelector(".cancel__item-btn"),s=c.querySelector(".form"),i=c.querySelector(".textarea");let d="";function u(){i.value="",d="",s.style.display="none",l.style.display="block"}l.addEventListener("click",(()=>{s.style.display="block",l.style.display="none",i.focus()})),a.addEventListener("click",(()=>{u()})),o.addEventListener("click",(()=>{const c=e(d);r[0].appendChild(c),t(),u(),n()})),i.addEventListener("input",(e=>{d=e.target.value})),document.addEventListener("click",(e=>{const t=s.contains(e.target),n=l.contains(e.target),c=i.contains(e.target),r=o.contains(e.target),d=a.contains(e.target);t||n||c||r||d||u()})),n()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBYyxhQUV0QyxJQUFJcEIsRUFBUSxHQW9CWixTQUFTa0UsSUFDUEQsRUFBU2pFLE1BQVEsR0FDakJBLEVBQVEsR0FDUmdFLEVBQUtHLE1BQU1DLFFBQVUsT0FDckJQLEVBQUlNLE1BQU1DLFFBQVUsT0FDdEIsQ0F2QkFQLEVBQUloQyxpQkFBaUIsU0FBUyxLQUM1Qm1DLEVBQUtHLE1BQU1DLFFBQVUsUUFDckJQLEVBQUlNLE1BQU1DLFFBQVUsT0FDcEJILEVBQVNJLE9BQU8sSUFHbEJOLEVBQVVsQyxpQkFBaUIsU0FBUyxLQUNsQ3FDLEdBQVcsSUFHYkosRUFBT2pDLGlCQUFpQixTQUFTLEtBQy9CLE1BQU01QixFQUFVRixFQUFjQyxHQUM5QjRCLEVBQU0sR0FBR25CLFlBQVlSLEdBQ3JCWSxJQUNBcUQsSUFDQXZDLEdBQVcsSUFVYnNDLEVBQVNwQyxpQkFBaUIsU0FBVUUsSUFDbEMvQixFQUFRK0IsRUFBRUMsT0FBT2hDLEtBQUssSUFHeEJFLFNBQVMyQixpQkFBaUIsU0FBVXlDLElBQ2xDLE1BQU1DLEVBQW9CUCxFQUFLL0IsU0FBU3FDLEVBQU10QyxRQUN4Q3dDLEVBQW1CWCxFQUFJNUIsU0FBU3FDLEVBQU10QyxRQUN0Q3lDLEVBQXdCUixFQUFTaEMsU0FBU3FDLEVBQU10QyxRQUNoRDBDLEVBQXNCWixFQUFPN0IsU0FBU3FDLEVBQU10QyxRQUM1QzJDLEVBQXlCWixFQUFVOUIsU0FBU3FDLEVBQU10QyxRQUVuRHVDLEdBQ0dDLEdBQ0FDLEdBQ0FDLEdBQ0FDLEdBQ05ULEdBQ0YsSUFHRnZDLEdBQ0YsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2Foai1ob21ld29ya3MtZG5kLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovL2Foai1ob21ld29ya3MtZG5kLy4vc3JjL2pzL3N0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9haGotaG9tZXdvcmtzLWRuZC8uL3NyYy9qcy90YXNrTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9haGotaG9tZXdvcmtzLWRuZC8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdJdGVtKHZhbHVlKSB7XG4gIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKCdsaXN0X19pdGVtJyk7XG4gIG5ld0l0ZW0uZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICBjb25zdCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgbmV3SXRlbS5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XG5cbiAgY29uc3QgZGVsZXRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRlbGV0ZUltZy5jbGFzc0xpc3QuYWRkKCdkZWxldGVfX2l0ZW0tYnRuJyk7XG4gIGRlbGV0ZUltZy5zcmMgPSAnLi9zdmcvWC5zdmcnO1xuICBkZWxldGVJbWcuYWx0ID0gJ0RlbGV0ZSc7XG4gIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlSW1nKTtcblxuICByZXR1cm4gbmV3SXRlbTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgY3JlYXRlTmV3SXRlbSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZHJhZ05Ecm9wIH0gZnJvbSAnLi90YXNrTWFuYWdlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUoKSB7XG4gIGNvbnN0IGNvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sdW1uX19pdGVtJyk7XG4gIGNvbnN0IHN0YXRlID0gW107XG5cbiAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgIGNvbnN0IGxpc3QgPSBjb2x1bW4ucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0X19pdGVtJyk7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW1zLnB1c2goaXRlbS5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQpO1xuICAgIH0pO1xuICAgIHN0YXRlLnB1c2goaXRlbXMpO1xuICB9KTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza1N0YXRlJywgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVTdGF0ZSgpIHtcbiAgY29uc3Qgc2F2ZWRTdGF0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tTdGF0ZScpKTtcbiAgaWYgKHNhdmVkU3RhdGUpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbHVtbl9faXRlbScpO1xuICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IGNvbHVtbi5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuICAgICAgbGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHNhdmVkU3RhdGVbY29sdW1uSW5kZXhdLmZvckVhY2goKHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGNyZWF0ZU5ld0l0ZW0odGV4dCk7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkcmFnTkRyb3AoKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgY3JlYXRlTmV3SXRlbSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgc2F2ZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZU1hbmFnZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFzayhjb2x1bW4pIHtcbiAgY29uc3QgbGlzdHMgPSBjb2x1bW4ucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QnKTtcbiAgY29uc3QgYnRuID0gY29sdW1uLnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX2J0bicpO1xuICBjb25zdCBhZGRCdG4gPSBjb2x1bW4ucXVlcnlTZWxlY3RvcignLmFkZF9faXRlbS1idG4nKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gY29sdW1uLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxfX2l0ZW0tYnRuJyk7XG4gIGNvbnN0IGZvcm0gPSBjb2x1bW4ucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgY29uc3QgdGV4dEFyZWEgPSBjb2x1bW4ucXVlcnlTZWxlY3RvcignLnRleHRhcmVhJyk7XG5cbiAgbGV0IHZhbHVlID0gJyc7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGV4dEFyZWEuZm9jdXMoKTtcbiAgfSk7XG5cbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlc2V0Rm9ybSgpO1xuICB9KTtcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbmV3SXRlbSA9IGNyZWF0ZU5ld0l0ZW0odmFsdWUpO1xuICAgIGxpc3RzWzBdLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xuICAgIHNhdmVTdGF0ZSgpO1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIGRyYWdORHJvcCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgdGV4dEFyZWEudmFsdWUgPSAnJztcbiAgICB2YWx1ZSA9ICcnO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBidG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cblxuICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBpc0NsaWNrSW5zaWRlRm9ybSA9IGZvcm0uY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBpc0NsaWNrSW5zaWRlQnRuID0gYnRuLmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgaXNDbGlja0luc2lkZVRleHRBcmVhID0gdGV4dEFyZWEuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBpc0NsaWNrSW5zaWRlQWRkQnRuID0gYWRkQnRuLmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgaXNDbGlja0luc2lkZUNhbmNlbEJ0biA9IGNhbmNlbEJ0bi5jb250YWlucyhldmVudC50YXJnZXQpO1xuXG4gICAgaWYgKCFpc0NsaWNrSW5zaWRlRm9ybVxuICAgICAgICAmJiAhaXNDbGlja0luc2lkZUJ0blxuICAgICAgICAmJiAhaXNDbGlja0luc2lkZVRleHRBcmVhXG4gICAgICAgICYmICFpc0NsaWNrSW5zaWRlQWRkQnRuXG4gICAgICAgICYmICFpc0NsaWNrSW5zaWRlQ2FuY2VsQnRuKSB7XG4gICAgICByZXNldEZvcm0oKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRyYWdORHJvcCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhZ05Ecm9wKCkge1xuICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0Jyk7XG4gIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0X19pdGVtJyk7XG5cbiAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbiAgICB9KTtcblxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICB9KTtcblxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlX19pdGVtLWJ0bicpKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIHNhdmVTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkcmFnZ2luZ0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcbiAgICAgIGNvbnN0IGFmdGVyRWxlbWVudCA9IGdldERyYWdBZnRlckVsZW1lbnQobGlzdCwgZS5jbGllbnRZKTtcbiAgICAgIGlmIChhZnRlckVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChkcmFnZ2luZ0l0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdC5pbnNlcnRCZWZvcmUoZHJhZ2dpbmdJdGVtLCBhZnRlckVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgc2F2ZVN0YXRlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RHJhZ0FmdGVyRWxlbWVudChsaXN0LCB5KSB7XG4gIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gWy4uLmxpc3QucXVlcnlTZWxlY3RvckFsbCgnLmxpc3RfX2l0ZW06bm90KC5kcmFnZ2luZyknKV07XG4gIHJldHVybiBkcmFnZ2FibGVFbGVtZW50cy5yZWR1Y2UoKGNsb3Nlc3QsIGNoaWxkKSA9PiB7XG4gICAgY29uc3QgYm94ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgb2Zmc2V0ID0geSAtIGJveC50b3AgLSBib3guaGVpZ2h0IC8gMjtcbiAgICBpZiAob2Zmc2V0IDwgMCAmJiBvZmZzZXQgPiBjbG9zZXN0Lm9mZnNldCkge1xuICAgICAgcmV0dXJuIHsgb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgIH1cbiAgICByZXR1cm4gY2xvc2VzdDtcbiAgfSwgeyBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSB9KS5lbGVtZW50O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGFkZFRhc2ssIGRyYWdORHJvcCwgZ2V0RHJhZ0FmdGVyRWxlbWVudCB9IGZyb20gJy4vdGFza01hbmFnZXInO1xuaW1wb3J0IHsgc2F2ZVN0YXRlLCByZXN0b3JlU3RhdGUgfSBmcm9tICcuL3N0YXRlTWFuYWdlcic7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHJlc3RvcmVTdGF0ZSgpO1xufSk7XG5cbmNvbnN0IGNvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sdW1uX19pdGVtJyk7XG5jb2x1bW5zLmZvckVhY2goYWRkVGFzayk7XG4iXSwibmFtZXMiOlsiY3JlYXRlTmV3SXRlbSIsInZhbHVlIiwibmV3SXRlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRyYWdnYWJsZSIsInRleHRTcGFuIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImRlbGV0ZUltZyIsInNyYyIsImFsdCIsInNhdmVTdGF0ZSIsImNvbHVtbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RhdGUiLCJmb3JFYWNoIiwiY29sdW1uIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yIiwiaXRlbSIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRyYWdORHJvcCIsImxpc3RzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJsaXN0IiwicHJldmVudERlZmF1bHQiLCJkcmFnZ2luZ0l0ZW0iLCJhZnRlckVsZW1lbnQiLCJ5IiwicmVkdWNlIiwiY2xvc2VzdCIsImNoaWxkIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib2Zmc2V0IiwidG9wIiwiaGVpZ2h0IiwiZWxlbWVudCIsIk51bWJlciIsIk5FR0FUSVZFX0lORklOSVRZIiwiZ2V0RHJhZ0FmdGVyRWxlbWVudCIsImNsaWVudFkiLCJpbnNlcnRCZWZvcmUiLCJzYXZlZFN0YXRlIiwicGFyc2UiLCJnZXRJdGVtIiwiY29sdW1uSW5kZXgiLCJpbm5lckhUTUwiLCJ0ZXh0IiwicmVzdG9yZVN0YXRlIiwiYnRuIiwiYWRkQnRuIiwiY2FuY2VsQnRuIiwiZm9ybSIsInRleHRBcmVhIiwicmVzZXRGb3JtIiwic3R5bGUiLCJkaXNwbGF5IiwiZm9jdXMiLCJldmVudCIsImlzQ2xpY2tJbnNpZGVGb3JtIiwiaXNDbGlja0luc2lkZUJ0biIsImlzQ2xpY2tJbnNpZGVUZXh0QXJlYSIsImlzQ2xpY2tJbnNpZGVBZGRCdG4iLCJpc0NsaWNrSW5zaWRlQ2FuY2VsQnRuIl0sInNvdXJjZVJvb3QiOiIifQ==